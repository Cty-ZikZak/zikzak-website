import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Orb from './Orb.jsx';
import { announcements } from '../data/site.js';

/*
  Dải thông tin: mỗi thông tin là một ô kính có bong bóng tròn chứa ảnh.
  Chuyển động mô phỏng vật lý (không dùng CSS animation):
  - tự chạy sang trái; kéo / lướt / lăn chuột ngang để chạy theo tay, thả ra thì còn đà rồi chậm dần về nhịp tự chạy;
  - luôn chạy nhẹ nhàng, không có nút dừng; rê chuột thì chậm dần (có đà) để dễ bấm, không khựng đột ngột;
  - các quả cầu màu phía sau trôi theo hướng lướt với độ trễ riêng, bị kéo dãn và nhoè nhẹ theo tốc độ;
  - bong bóng ảnh "dẻo": hơi trễ lại và co giãn theo gia tốc.
*/

const BASE_SPEED = 46; // px/giây, tốc độ tự chạy (sang trái)
const COPIES = 3;

// f: hệ số theo tốc độ lướt (xa/gần), k: độ nhạy của lò xo (nhỏ = trễ nhiều hơn), l: vị trí ngang ban đầu (0–1)
const BACKDROP = [
	{ c: 'var(--zz-yellow)', s: 'clamp(90px, 9vw, 130px)', t: '-2%', l: 0.1, f: 1.5, k: 3.2 },
	{ c: 'var(--zz-cyan)', s: 'clamp(120px, 12vw, 170px)', t: '22%', l: 0.5, f: 0.8, k: 2.2 },
	{ c: 'var(--zz-blue)', s: 'clamp(90px, 9vw, 135px)', t: '28%', l: 0.86, f: 1.1, k: 2.8 },
];

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function Tile({ item, hidden }) {
	// bấm vào bong bóng ảnh: nảy lên và phóng to một lúc rồi thu lại (không chuyển trang; bấm phần còn lại của ô để mở)
	const [pop, setPop] = useState(0);
	const timer = useRef(0);

	useEffect(() => () => clearTimeout(timer.current), []);

	const onBubble = (e) => {
		e.preventDefault();
		e.stopPropagation();
		clearTimeout(timer.current);
		setPop((n) => n + 1);
		timer.current = setTimeout(() => setPop(0), 2600);
	};

	const content = (
		<>
			<Orb
				className={`zz-tile__bubble${pop ? ' is-pop' : ''}`}
				data-pop={pop % 2}
				onClick={onBubble}
				color={item.color}
				image={item.image}
				alt=""
			/>
			<span className="zz-tile__body">
				<span className="zz-tile__tag">{item.tag}</span>
				<strong className="zz-tile__title">{item.title}</strong>
				{item.text ? <span className="zz-tile__text">{item.text}</span> : null}
			</span>
			{item.href ? <span className="zz-tile__go" aria-hidden="true"><ArrowRight /></span> : null}
		</>
	);
	const props = { className: 'zz-tile zz-lg', tabIndex: hidden ? -1 : undefined, draggable: false };

	if (!item.href) {
		return <div {...props}>{content}</div>;
	}

	if (item.href.startsWith('/')) {
		return <Link to={item.href} {...props}>{content}</Link>;
	}

	return <a href={item.href} {...props}>{content}</a>;
}

export default function InfoTicker({ items = announcements }) {
	const rootRef = useRef(null);
	const viewRef = useRef(null);
	const trackRef = useRef(null);
	const bgRef = useRef(null);

	useEffect(() => {
		const root = rootRef.current;
		const view = viewRef.current;
		const track = trackRef.current;
		const bg = bgRef.current;

		if (!root || !view || !track || !bg || !items.length || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}

		const st = { x: 0, v: -BASE_SPEED, drag: false, hover: false, focus: false, moved: 0, setW: 0, vw: 0 };
		const jelly = { x: 0, v: 0 };
		const orbs = [...bg.children].map((el, i) => ({ el, ...BACKDROP[i], x: 0, vo: 0, q: 0, size: 0 }));
		let raf = 0;
		let last = 0;
		let onScreen = true;

		const measure = () => {
			const lis = track.children;
			st.setW = lis.length > items.length ? lis[items.length].offsetLeft - lis[0].offsetLeft : 0;
			st.vw = view.clientWidth;
			orbs.forEach((o) => {
				o.size = o.el.offsetWidth;
				if (!o.placed) {
					o.x = o.l * st.vw;
					o.placed = true;
				}
			});
		};

		const wrap = () => {
			if (st.setW > 0) {
				st.x %= st.setW;
				if (st.x > 0) st.x -= st.setW;
			}
		};

		/* ----- Kéo bằng chuột / ngón tay (có đà khi thả) ----- */
		let pid = null;
		let startX = 0;
		let startY = 0;
		let lastX = 0;
		let lastT = 0;
		let moved = false;

		const onDown = (e) => {
			if (e.pointerType === 'mouse' && e.button !== 0) return;
			pid = e.pointerId;
			startX = e.clientX;
			startY = e.clientY;
			lastX = e.clientX;
			lastT = performance.now();
			moved = false;
			st.moved = 0;
		};

		const onMove = (e) => {
			if (e.pointerId !== pid) return;
			const dx = e.clientX - lastX;
			const now = performance.now();

			if (!moved) {
				const adx = Math.abs(e.clientX - startX);
				const ady = Math.abs(e.clientY - startY);
				if (adx < 6 || ady > adx) return; // chưa đủ coi là kéo ngang (cuộn dọc để trình duyệt xử lý)
				moved = true;
				st.drag = true;
				root.classList.add('is-dragging');
			}

			const dt = Math.max(1, now - lastT) / 1000;
			st.x += dx;
			// vận tốc làm mượt (EMA) để thả tay có đà tự nhiên
			st.v = st.v * 0.6 + (dx / dt) * 0.4;
			st.moved += Math.abs(dx);
			lastX = e.clientX;
			lastT = now;
		};

		const onUp = (e) => {
			if (e.pointerId !== pid) return;
			pid = null;

			if (moved) {
				// ngón tay dừng trước khi nhả → không có đà
				if (performance.now() - lastT > 90) st.v *= 0.2;
				st.v = clamp(st.v, -4200, 4200);
				st.drag = false;
				root.classList.remove('is-dragging');
			}
		};

		// Chặn bấm nhầm vào liên kết sau khi vừa kéo
		const onClickCapture = (e) => {
			if (st.moved > 6) {
				e.preventDefault();
				e.stopPropagation();
				st.moved = 0;
			}
		};

		const onWheel = (e) => {
			if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
			e.preventDefault();
			st.x -= e.deltaX;
			st.v = clamp(st.v - e.deltaX * 4, -4200, 4200);
		};

		const onEnter = (e) => { if (e.pointerType === 'mouse') st.hover = true; };
		const onLeave = () => { st.hover = false; };
		const onFocusIn = (e) => {
			st.focus = true;
			view.scrollLeft = 0;
			const li = e.target.closest?.('li');
			if (li && st.setW) {
				st.v = 0;
				st.x = -(li.offsetLeft - 48);
				wrap();
			}
		};
		const onFocusOut = () => { st.focus = false; };
		const noDrag = (e) => e.preventDefault();

		/* ----- Vòng lặp vật lý ----- */
		// Bước tính cố định nhỏ: máy chậm (khung hình trễ) vẫn chạy đúng thời gian thật, không bị "quay chậm"
		const simulate = (dt) => {
			// luôn chạy; rê chuột → chậm còn 1/4 (dễ bấm); đang focus bằng bàn phím → đứng yên để đọc
			let target = -BASE_SPEED;
			if (st.focus) target = 0;
			else if (st.hover) target = -BASE_SPEED * 0.25;

			if (!st.drag) {
				// về nhịp tự chạy theo hàm mũ → còn đà, chậm dần mượt, không giật
				const rate = st.hover || st.focus ? 2.4 : 1.35;
				st.v += (target - st.v) * (1 - Math.exp(-dt * rate));
				st.x += st.v * dt;
			}

			wrap();

			// Bong bóng ảnh "dẻo": trễ lại và co giãn theo vận tốc vượt nhịp tự chạy
			const extra = st.v - target;
			const lagT = clamp(-extra * 0.006, -11, 11); // nhỏ hơn khoảng hở giữa bong bóng và chữ → không đè lên chữ
			jelly.v += (140 * (lagT - jelly.x) - 15 * jelly.v) * dt;
			jelly.x += jelly.v * dt;
			jelly.extra = extra;

			// Quả cầu phía sau: trôi theo hướng lướt, mỗi quả một độ trễ riêng
			orbs.forEach((o) => {
				o.vo += (st.v * o.f - o.vo) * (1 - Math.exp(-dt * o.k));
				o.x += o.vo * dt;
			});
		};

		const render = () => {
			track.style.transform = `translate3d(${st.x.toFixed(2)}px,0,0)`;
			const stretch = clamp(Math.abs(jelly.extra || 0) / 9000, 0, 0.1);
			track.style.setProperty('--lag', `${jelly.x.toFixed(2)}px`);
			track.style.setProperty('--jx', (1 + stretch).toFixed(3));
			track.style.setProperty('--jy', (1 - stretch * 0.7).toFixed(3));

			// nhoè + kéo dãn theo tốc độ: nhanh thì nhoè một chút cho dễ nhìn chữ, đứng yên / chạy chậm thì nét
			orbs.forEach((o) => {
				const span = st.vw + o.size * 2;
				const px = (((o.x % span) + span) % span) - o.size;
				const sp = Math.abs(o.vo);
				const stretch2 = clamp(sp / 3400, 0, 0.2);
				const blur = Math.round(clamp((sp - 70) / 90, 0, 8) * 4) / 4;
				o.el.style.transform = `translate3d(${px.toFixed(1)}px,0,0) scale(${(1 + stretch2).toFixed(3)},${(1 - stretch2 * 0.6).toFixed(3)})`;
				if (blur !== o.q) {
					o.el.style.filter = blur ? `blur(${blur}px)` : 'none';
					o.q = blur;
				}
			});
		};

		const frame = (now) => {
			if (!last) last = now;
			let remaining = Math.min(0.3, (now - last) / 1000);
			last = now;

			while (remaining > 0.0001) {
				const h = Math.min(remaining, 1 / 60);
				simulate(h);
				remaining -= h;
			}

			render();
			raf = onScreen && !document.hidden ? requestAnimationFrame(frame) : 0;
		};

		const start = () => {
			if (!raf) {
				last = 0;
				raf = requestAnimationFrame(frame);
			}
		};

		const sync = () => {
			if (onScreen && !document.hidden) start();
			else {
				cancelAnimationFrame(raf);
				raf = 0;
			}
		};

		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(view);
		ro.observe(track);
		const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); });
		io.observe(root);

		view.addEventListener('pointerdown', onDown);
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);
		window.addEventListener('pointercancel', onUp);
		view.addEventListener('click', onClickCapture, true);
		view.addEventListener('wheel', onWheel, { passive: false });
		view.addEventListener('pointerenter', onEnter);
		view.addEventListener('pointerleave', onLeave);
		view.addEventListener('focusin', onFocusIn);
		view.addEventListener('focusout', onFocusOut);
		view.addEventListener('dragstart', noDrag);
		document.addEventListener('visibilitychange', sync);
		start();

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
			view.removeEventListener('pointerdown', onDown);
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
			window.removeEventListener('pointercancel', onUp);
			view.removeEventListener('click', onClickCapture, true);
			view.removeEventListener('wheel', onWheel);
			view.removeEventListener('pointerenter', onEnter);
			view.removeEventListener('pointerleave', onLeave);
			view.removeEventListener('focusin', onFocusIn);
			view.removeEventListener('focusout', onFocusOut);
			view.removeEventListener('dragstart', noDrag);
			document.removeEventListener('visibilitychange', sync);
		};
	}, [items]);

	if (!items.length) {
		return null;
	}

	const sets = Array.from({ length: COPIES }, (_, c) => items.map((item) => ({ item, hidden: c > 0, key: `${item.id}-${c}` }))).flat();

	return (
		<section ref={rootRef} className="zz-ticker" aria-label="Thông tin nổi bật">
			<div className="zz-ticker__bg" ref={bgRef} aria-hidden="true">
				{BACKDROP.map((b) => (
					<i key={b.c} style={{ '--c': b.c, '--s': b.s, '--t': b.t }} />
				))}
			</div>

			<div className="zz-ticker__viewport" ref={viewRef}>
				<ul className="zz-ticker__track" ref={trackRef}>
					{sets.map(({ item, hidden, key }) => (
						<li key={key} aria-hidden={hidden ? 'true' : undefined}>
							<Tile item={item} hidden={hidden} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
