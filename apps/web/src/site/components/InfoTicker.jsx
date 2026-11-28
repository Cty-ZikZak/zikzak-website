import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { announcements } from '../data/site.js';

/*
  Dải thông tin dạng "bản tin phóng lớn":
  - các ô thông tin là hình tròn kính, chạy lần lượt sang trái;
  - ô ở giữa phóng lớn thành một bản tin hình chữ nhật rộng gần hết chiều ngang (ảnh + đoạn tóm tắt),
    giữ vài giây, rồi chạy sang trái và thu lại thành hình tròn; ô kế bên lại phóng lớn… tuần tự hết các bản tin rồi quay vòng.
  - bấm vào hình tròn: ô đó chạy ra giữa và phóng lớn; bấm vào bản tin đang mở: chuyển đến trang chi tiết.
  Chuyển động chạy bằng đồng hồ riêng (requestAnimationFrame), không phụ thuộc CSS animation.
*/

const COPIES = 3;
const HOLD = 3.8; // giây giữ bản tin đang mở
const MOVE = 1.15; // giây chạy sang ô kế tiếp

// f: hệ số trôi theo vị trí (hiệu ứng chiều sâu); l: vị trí ngang ban đầu (0–1)
const BACKDROP = [
	{ c: '#FEF100', s: 'clamp(90px, 9vw, 130px)', t: '-2%', l: 0.1, f: 1.5 },
	{ c: '#53E2FF', s: 'clamp(120px, 12vw, 170px)', t: '22%', l: 0.5, f: 0.8 },
	{ c: '#0067FF', s: 'clamp(90px, 9vw, 135px)', t: '28%', l: 0.86, f: 1.1 },
];

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, k) => a + (b - a) * k;
const smooth = (x) => {
	const v = clamp(x, 0, 1);
	return v * v * (3 - 2 * v);
};
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - ((-2 * x + 2) ** 3) / 2);

function Slide({ item, gi, hidden }) {
	const images = item.images?.length === 3 ? item.images : [item.image, item.image, item.image];
	const link = item.href?.startsWith('/') ? { as: Link, props: { to: item.href } } : { as: 'a', props: { href: item.href } };
	const Shell = item.href ? link.as : 'div';
	const shellProps = item.href ? link.props : {};

	return (
		<li className="zz-slide" data-gi={gi} aria-hidden={hidden ? 'true' : undefined}>
			<Shell {...shellProps} className="zz-slide__shell zz-lg" tabIndex={hidden ? -1 : undefined} draggable={false}>
				<span className="zz-tile zz-disc" style={{ '--c': item.color }}>
					<span className="zz-tile__stack" aria-hidden="true">
						{images.map((src, n) => (
							<span key={n} className={`zz-card zz-card--${['l', 'm', 'r'][n]}`}>
								<img src={src} alt="" loading="lazy" decoding="async" draggable={false} />
							</span>
						))}
					</span>
					<span className="zz-tile__body">
						<span className="zz-tile__tag">{item.tag}</span>
						<strong className="zz-tile__title">{item.title}</strong>
					</span>
					{item.href ? <span className="zz-tile__go" aria-hidden="true"><ArrowRight /></span> : null}
				</span>

				<span className="zz-news">
					<span className="zz-news__img">
						<img src={item.image} alt="" loading="lazy" decoding="async" draggable={false} />
					</span>
					<span className="zz-news__body">
						<span className="zz-news__tag">{item.tag}</span>
						<strong className="zz-news__title">{item.title}</strong>
						<span className="zz-news__text">{item.summary || item.text}</span>
						{item.href ? <span className="zz-news__cta">Xem chi tiết <ArrowRight /></span> : null}
					</span>
				</span>
			</Shell>
		</li>
	);
}

export default function InfoTicker({ items = announcements }) {
	const rootRef = useRef(null);
	const viewRef = useRef(null);
	const trackRef = useRef(null);
	const bgRef = useRef(null);
	const goRef = useRef(null);
	const [current, setCurrent] = useState(0);
	const [still] = useState(() => Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches));

	useEffect(() => {
		const root = rootRef.current;
		const view = viewRef.current;
		const track = trackRef.current;
		const bg = bgRef.current;
		const n = items.length;

		if (still || !root || !view || !track || !bg || n < 2) {
			return undefined;
		}

		const total = n * COPIES;
		const parts = [...track.children].map((li) => ({
			li,
			shell: li.firstElementChild,
			disc: li.querySelector('.zz-disc'),
			news: li.querySelector('.zz-news'),
			sig: '',
		}));
		const orbs = [...bg.children].map((el, i) => ({ el, ...BACKDROP[i], size: 0 }));
		const e = new Array(n).fill(0); // mức phóng lớn của từng ô (0 = tròn, 1 = bản tin)

		let W = 0;
		let Wc = 240;
		let Hc = 240;
		let Wx = 1000;
		let Hx = 310;
		let G = 30;
		let t = n; // vị trí (số thực) của ô đang ở giữa, tính trên toàn bộ các bản sao
		let active = 0;
		let holdT = 0;
		let mv = null;
		let pending = null;
		let paused = false;
		let onScreen = true;
		let last = 0;
		let raf = 0;
		let started = false;

		const measure = () => {
			W = view.clientWidth;
			const disc = parts[0].disc;
			Wc = disc.offsetWidth || 240;
			Hc = disc.offsetHeight || Wc;
			const narrow = W <= 700;
			Wx = Math.min(1120, W - (narrow ? 32 : 56));
			Hx = narrow ? 470 : 310;
			G = W > 640 ? 30 : 22;
			track.style.height = `${Hx}px`;
			orbs.forEach((o) => { o.size = o.el.offsetWidth; });
			started = false; // buộc vẽ lại
		};

		const startMove = (g) => {
			const toKey = ((g % n) + n) % n;
			const fromKey = ((Math.round(t) % n) + n) % n;

			if (toKey === fromKey && Math.round(g) === Math.round(t)) return;

			mv = {
				t0: t,
				g,
				fromKey: active,
				toKey,
				ef0: e[active],
				et0: e[toKey],
				p: 0,
				dur: MOVE + Math.min(1.2, Math.max(0, Math.abs(g - t) - 1) * 0.22),
			};
		};

		const goTo = (g) => {
			if (mv) {
				pending = g;
				return;
			}

			holdT = 0;
			startMove(g);
		};

		goRef.current = (key) => {
			const cur = Math.round(t);
			let d = (((key - cur) % n) + n) % n;
			if (d > n / 2) d -= n;
			goTo(cur + d);
		};

		const render = () => {
			const lefts = new Array(total);
			const ws = new Array(total);
			const hs = new Array(total);
			let x = 0;

			for (let i = 0; i < total; i += 1) {
				const ek = e[i % n];
				ws[i] = lerp(Wc, Wx, ek);
				hs[i] = lerp(Hc, Hx, ek);
				lefts[i] = x;
				x += ws[i] + G;
			}

			const i0 = clamp(Math.floor(t), 0, total - 2);
			const fr = t - i0;
			const cx = lerp(lefts[i0] + ws[i0] / 2, lefts[i0 + 1] + ws[i0 + 1] / 2, fr);
			const X = W / 2 - cx;

			for (let i = 0; i < total; i += 1) {
				const p = parts[i];
				const ek = e[i % n];
				const r = Math.min(lerp(Hc / 2, 34, smooth(ek)), hs[i] / 2);
				const sig = `${(X + lefts[i]).toFixed(1)}|${ws[i].toFixed(1)}|${hs[i].toFixed(1)}|${r.toFixed(1)}`;

				if (sig !== p.sig || !started) {
					p.sig = sig;
					p.li.style.width = `${ws[i].toFixed(1)}px`;
					p.li.style.height = `${hs[i].toFixed(1)}px`;
					p.li.style.transform = `translate3d(${(X + lefts[i]).toFixed(1)}px,${((Hx - hs[i]) / 2).toFixed(1)}px,0)`;
					p.shell.style.setProperty('--r', `${r.toFixed(1)}px`);
					p.shell.style.setProperty('--e', ek.toFixed(3));
					p.disc.style.opacity = (1 - smooth(ek / 0.16)).toFixed(3);
					p.news.style.opacity = smooth((ek - 0.8) / 0.2).toFixed(3);
					p.news.style.visibility = ek > 0.78 ? 'visible' : 'hidden';
				}
			}

			started = true;

			orbs.forEach((o) => {
				const span = W + o.size * 2;
				const px = ((((o.l * W - t * 260 * o.f) % span) + span) % span) - o.size;
				o.el.style.transform = `translate3d(${px.toFixed(1)}px,0,0)`;
			});
		};

		const frame = (now) => {
			if (!last) last = now;
			const dt = Math.min(0.1, (now - last) / 1000);
			last = now;

			if (mv) {
				mv.p = Math.min(1, mv.p + dt / mv.dur);
				const p = mv.p;
				t = lerp(mv.t0, mv.g, ease(p));
				e[mv.fromKey] = mv.ef0 * (1 - smooth(p / 0.55));
				e[mv.toKey] = lerp(mv.et0, 1, smooth((p - 0.45) / 0.55));

				if (p >= 1) {
					t = mv.g;

					while (t >= 2 * n) t -= n;
					while (t < n) t += n;

					active = mv.toKey;
					mv = null;
					holdT = 0;
					setCurrent(active);

					if (pending !== null) {
						const g = pending;
						pending = null;
						startMove(Math.round(t) + (g - Math.round(t)));
					}
				}
			} else {
				e[active] += (1 - e[active]) * (1 - Math.exp(-dt * 5));

				if (!paused) holdT += dt;

				if (holdT >= HOLD && e[active] > 0.96) {
					startMove(Math.round(t) + 1);
				}
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

		/* ----- tương tác ----- */
		let downX = 0;
		let downY = 0;
		let swiped = false;

		const onDown = (e2) => {
			downX = e2.clientX;
			downY = e2.clientY;
			swiped = false;
		};

		const onUp = (e2) => {
			const dx = e2.clientX - downX;
			const dy = e2.clientY - downY;

			if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
				swiped = true;
				goTo(Math.round(t) + (dx < 0 ? 1 : -1));
			}
		};

		const onClick = (e2) => {
			if (swiped) {
				e2.preventDefault();
				e2.stopPropagation();
				swiped = false;
				return;
			}

			const li = e2.target.closest?.('li[data-gi]');
			if (!li) return;

			const gi = Number(li.dataset.gi);
			const key = gi % n;
			const target = mv ? mv.toKey : active;

			// bản tin đang mở: bấm để vào trang chi tiết; hình tròn: chạy ra giữa và phóng lớn
			if (key === target && e[key] > 0.6) return;

			e2.preventDefault();
			goTo(gi);
		};

		const onEnter = (e2) => { if (e2.pointerType === 'mouse') paused = true; };
		const onLeave = () => { paused = false; };
		const onFocusIn = (e2) => {
			paused = true;
			const li = e2.target.closest?.('li[data-gi]');

			if (li) {
				const gi = Number(li.dataset.gi);
				if (gi % n !== (mv ? mv.toKey : active)) goTo(gi);
			}
		};
		const onFocusOut = () => { paused = false; };
		const noDrag = (e2) => e2.preventDefault();

		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(view);
		const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); });
		io.observe(root);

		view.addEventListener('pointerdown', onDown);
		view.addEventListener('pointerup', onUp);
		view.addEventListener('click', onClick, true);
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
			view.removeEventListener('pointerup', onUp);
			view.removeEventListener('click', onClick, true);
			view.removeEventListener('pointerenter', onEnter);
			view.removeEventListener('pointerleave', onLeave);
			view.removeEventListener('focusin', onFocusIn);
			view.removeEventListener('focusout', onFocusOut);
			view.removeEventListener('dragstart', noDrag);
			document.removeEventListener('visibilitychange', sync);
			goRef.current = null;
		};
	}, [items, still]);

	if (!items.length) {
		return null;
	}

	const sets = Array.from({ length: still ? 1 : COPIES }, (_, c) => items.map((item, k) => ({ item, hidden: c > 0, gi: c * items.length + k, key: `${item.id}-${c}` }))).flat();

	return (
		<section ref={rootRef} className={`zz-ticker${still ? ' zz-ticker--still' : ''}`} aria-label="Thông tin nổi bật">
			<div className="zz-ticker__bg" ref={bgRef} aria-hidden="true">
				{BACKDROP.map((b) => (
					<i key={b.c} style={{ '--c': b.c, '--s': b.s, '--t': b.t }} />
				))}
			</div>

			<div className="zz-ticker__viewport" ref={viewRef}>
				<ul className="zz-ticker__track" ref={trackRef}>
					{sets.map(({ item, hidden, gi, key }) => (
						<Slide key={key} item={item} gi={gi} hidden={hidden} />
					))}
				</ul>
			</div>

			{still ? null : (
				<div className="zz-ticker__dots" role="tablist" aria-label="Chọn bản tin">
					{items.map((item, k) => (
						<button
							key={item.id}
							type="button"
							role="tab"
							aria-selected={k === current}
							aria-label={item.title}
							className={k === current ? 'is-on' : ''}
							onClick={() => goRef.current?.(k)}
						/>
					))}
				</div>
			)}
		</section>
	);
}
