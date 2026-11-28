import { VI_COMPOUNDS } from '../data/viCompounds.js';

/*
  Chống ngắt dòng giữa các âm tiết của cùng một từ tiếng Việt ("khai / phá", "giáo / viên").
  Tiếng Việt viết từng âm tiết cách nhau bằng dấu cách nên trình duyệt coi chúng là các từ riêng.
  Giải pháp: với mỗi từ ghép trong từ điển (data/viCompounds.js, tạo bằng tools/build-vi-compounds.py),
  đổi dấu cách giữa các âm tiết thành khoảng trắng không ngắt dòng (U+00A0).
*/

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const LETTER = '[\\p{L}\\p{M}\\p{N}]';

const pattern = [...VI_COMPOUNDS]
	.sort((a, b) => b.length - a.length)
	.map(escape)
	.join('|');

const RE = new RegExp(`(?<!${LETTER})(?:${pattern})(?!${LETTER})`, 'giu');

export const bindVi = (text) => (typeof text === 'string' && text.includes(' ') ? text.replace(RE, (m) => m.replace(/ /g, ' ')) : text);

const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CODE', 'PRE', 'NOSCRIPT']);

// Quét mọi nút chữ trong `root` và theo dõi nội dung thêm vào / thay đổi sau đó (đổi trang, tải dữ liệu…)
export function watchVietnamese(root) {
	const fix = (node) => {
		const before = node.nodeValue;

		if (!before || !before.includes(' ')) {
			return;
		}

		const after = bindVi(before);

		if (after !== before) {
			node.nodeValue = after;
		}
	};

	const walk = (el) => {
		const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
			acceptNode: (n) => (SKIP.has(n.parentElement?.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
		});

		for (let n = walker.nextNode(); n; n = walker.nextNode()) {
			fix(n);
		}
	};

	const queue = new Set();
	let frame = 0;
	const options = { childList: true, subtree: true, characterData: true };

	const flush = () => {
		frame = 0;
		observer.disconnect(); // tránh tự kích hoạt lại vì chính thay đổi của mình
		queue.forEach((n) => {
			if (!n.isConnected) return;
			if (n.nodeType === Node.TEXT_NODE) fix(n);
			else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
		});
		queue.clear();
		observer.observe(root, options);
	};

	const observer = new MutationObserver((records) => {
		records.forEach((r) => {
			if (r.type === 'characterData') queue.add(r.target);
			else r.addedNodes.forEach((n) => queue.add(n));
		});

		if (!frame) {
			frame = requestAnimationFrame(flush);
		}
	});

	walk(root);
	observer.observe(root, options);

	return () => {
		cancelAnimationFrame(frame);
		observer.disconnect();
	};
}
