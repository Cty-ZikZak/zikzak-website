import React, { useEffect, useRef } from 'react';
import '../styles/animated-logo.css';

/*
  Logo ZikZak chuyển động — mô phỏng lò xo (có quán tính, nảy nhẹ).
  Cấu trúc lớp (từ dưới lên):
    1. 3 hình tròn (vector) — chỉ phóng to / thu nhỏ có nảy.
    2. Nền xanh tím cố định của toàn khối chữ.
    3. Viền xanh tím của từng chữ, mắt, miệng  (…-o.webp)
    4. Phần màu của từng chữ, mắt, miệng       (…-f.webp)
  Viền luôn nằm dưới mọi phần màu, nên khi chuyển động không bao giờ bị "xé mảng".
  Ảnh lớp: public/brand/logo-anim (tạo bằng tools/logo-anim/build.py từ logo gốc 2000 × 1523).
*/

const W = 2000;
const H = 1523;
const BASE = `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/brand/logo-anim`;

// Vị trí từng lớp trên logo gốc (px) — lấy từ public/brand/logo-anim/meta.json
const P = {
	backdrop: { x: 388, y: 329, w: 1286, h: 563 },
	z1: { x: 388, y: 329, w: 382, h: 563 },
	i: { x: 620, y: 495, w: 147, h: 267 },
	k1: { x: 740, y: 381, w: 292, h: 498 },
	z2: { x: 1004, y: 376, w: 344, h: 506 },
	a: { x: 1192, y: 498, w: 220, h: 304 },
	k2: { x: 1388, y: 375, w: 286, h: 478 },
	eye1: { x: 695, y: 338, w: 150, h: 189 },
	eye2: { x: 1296, y: 335, w: 154, h: 183 },
	mouth: { x: 906, y: 490, w: 224, h: 231 },
	tagline: { x: 525, y: 899, w: 1010, h: 97 },
};

const CIRCLES = [
	{ id: 'yellow', cx: 472.6, cy: 603.3, r: 340.4, fill: '#FEF100' },
	{ id: 'cyan', cx: 1386.7, cy: 1005.1, r: 432.9, fill: '#53E2FF' },
	{ id: 'blue', cx: 1646.4, cy: 282.8, r: 173.3, fill: '#0067FF' },
];

const LETTERS = ['z1', 'i', 'k1', 'z2', 'a', 'k2'];
const EYE_OF = { i: 'eye1', a: 'eye2' };
const PARTS = [...LETTERS, 'eye1', 'eye2', 'mouth'];
// Màu: miệng dưới cùng (khi cười to, mép miệng nằm khuất sau chữ), rồi chữ, rồi mắt
const FILL_ORDER = ['mouth', ...LETTERS, 'eye1', 'eye2'];



const box = (r) => ({
	left: `${(r.x / W) * 100}%`,
	top: `${(r.y / H) * 100}%`,
	width: `${(r.w / W) * 100}%`,
	height: `${(r.h / H) * 100}%`,
});

// Gốc biến đổi tính theo khung của từng lớp (để mắt xoay/nhún quanh chân chữ chứa nó)
const originIn = (name, px, py) => `${((px - P[name].x) / P[name].w) * 100}% ${((py - P[name].y) / P[name].h) * 100}%`;
const footOf = (letter) => [P[letter].x + P[letter].w / 2, P[letter].y + P[letter].h * 0.92];

/* ---------- Lò xo ---------- */

const spring = (value, k, c) => ({ x: value, v: 0, t: value, k, c });
const step = (s, dt) => {
	s.v += (s.k * (s.t - s.x) - s.c * s.v) * dt;
	s.x += s.v * dt;
};
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Biểu cảm của miệng. Mắt luôn mở hẳn, chỉ chớp / nháy dứt khoát (không lim dim).
// Phần màu của miệng nằm dưới phần màu các chữ, nên miệng cười to cũng không đè lên chữ.
const FACES = {
	neutral: { sx: 1, sy: 1, r: 0 },
	smile: { sx: 1.04, sy: 1.22, r: 0 },
	grin: { sx: 1.06, sy: 1.38, r: 0 },
	smirkR: { sx: 1.04, sy: 1.16, r: -7 },
	smirkL: { sx: 1.04, sy: 1.16, r: 7 },
	oh: { sx: 0.8, sy: 0.84, r: 0 },
};

const LOOP = 13;
const TIMELINE = [
	[0.5, 'blink'],
	[1.2, 'face', 'smile'],
	[2.0, 'blink2'],
	[2.9, 'face', 'grin'],
	[2.95, 'giggle'],
	[4.3, 'face', 'smile'],
	[4.9, 'squeeze'],
	[4.9, 'face', 'smirkR'],
	[5.9, 'face', 'smile'],
	[6.6, 'blink'],
	[7.4, 'face', 'oh'],
	[7.45, 'flutter'],
	[8.5, 'face', 'grin'],
	[8.55, 'giggle'],
	[9.8, 'squeeze'],
	[9.8, 'face', 'smirkL'],
	[10.8, 'face', 'smile'],
	[11.4, 'blink2'],
	[12.3, 'face', 'neutral'],
	[12.6, 'blink'],
];

// Nhịp nhún: sóng trái → phải rồi phải → trái (lặp 5,2 giây)
const HOP_LOOP = 5.2;
const HOPS = [
	...LETTERS.map((id, j) => [0.3 + j * 0.11, id, 1, 1]),
	...LETTERS.map((id, j) => [2.9 + (LETTERS.length - 1 - j) * 0.09, id, 0.6, -1]),
];

// Hình tròn: lần lượt phóng to rồi thu nhỏ (lặp 4,8 giây)
const PULSE_LOOP = 4.8;
const PULSES = [
	[0.2, 0, 1.07], [1.2, 0, 0.95],
	[1.0, 1, 1.05], [2.4, 1, 0.96],
	[1.8, 2, 1.12], [2.7, 2, 0.92],
	[3.6, 0, 1], [3.9, 1, 1], [4.2, 2, 1],
];

export default function AnimatedLogo({ className = '', label = 'ZikZak — Shine Your Way, Slay Your Mind', interactive = true }) {
	const rootRef = useRef(null);
	const els = useRef({});
	const pokeRef = useRef(null);

	// Mỗi phần có 2 lớp (-o, -f) dùng chung một biến đổi
	const reg = (key) => (el) => {
		if (!els.current[key]) els.current[key] = new Set();
		if (el) els.current[key].add(el);
	};

	useEffect(() => {
		const root = rootRef.current;

		if (!root || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}

		const letters = Object.fromEntries(LETTERS.map((id) => [id, {
			y: spring(0, 170, 13), r: spring(0, 170, 12), sq: spring(0, 360, 18), wasUp: false,
		}]));
		// Mí mắt: 0 = mở, 1 = nhắm. Tiến dần về đích theo hàm mũ → chớp nhanh, gọn, không nảy
		const eyes = [0, 1].map(() => ({ lid: { x: 0, t: 0 }, blinkUntil: 0 }));
		const mouth = { sx: spring(1, 300, 16), sy: spring(1, 300, 15), r: spring(0, 220, 16) };
		const circles = CIRCLES.map(() => spring(1, 70, 5.5));
		let clock = 0;
		let last = 0;
		let raf = 0;

		const setFace = (name) => {
			const f = FACES[name];
			mouth.sx.t = f.sx;
			mouth.sy.t = f.sy;
			mouth.r.t = f.r;
		};

		const close = (e, duration) => {
			e.blinkUntil = clock + duration;
			e.lid.t = 1;
		};

		const hop = (id, power = 1, dir = 1) => {
			letters[id].y.v -= 120 * power;
			letters[id].r.v += 16 * power * dir;
		};

		const timers = new Set();
		const later = (fn, ms) => {
			const t = setTimeout(() => { timers.delete(t); fn(); }, ms);
			timers.add(t);
		};

		const giggle = () => {
			[0, 220, 440].forEach((ms, n) => later(() => {
				mouth.sy.v += 2.2 - n * 0.4;
				LETTERS.forEach((id) => { letters[id].y.v -= 40; });
			}, ms));
		};

		const run = ([, type, arg]) => {
			if (type === 'face') setFace(arg);
			const blinkAll = (ms) => later(() => eyes.forEach((e) => close(e, 0.06)), ms);
			if (type === 'blink') blinkAll(0);
			if (type === 'blink2') { blinkAll(0); blinkAll(190); }
			if (type === 'flutter') { blinkAll(0); blinkAll(150); blinkAll(300); }
			// nhắm cả 2 mắt cùng lúc lâu hơn một chút (cười híp mắt) — 2 mắt luôn đồng bộ
			if (type === 'squeeze') eyes.forEach((e) => close(e, 0.34));
			if (type === 'giggle') giggle();
		};

		let lastPoke = -10;
		pokeRef.current = () => {
			if (clock - lastPoke < 1.4) return;
			lastPoke = clock;
			setFace('grin');
			giggle();
			later(() => eyes.forEach((e) => close(e, 0.06)), 120);
			circles.forEach((c, i) => later(() => { c.v += 0.9; }, i * 110));
			LETTERS.forEach((id, j) => later(() => hop(id, 0.8, 1), j * 70));
			later(() => setFace('neutral'), 1500);
		};

		const fire = (list, period, from, to, handler) => {
			const a = from % period;
			const b = to % period;
			list.forEach((ev) => {
				const t = ev[0];
				if (a <= b ? t > a && t <= b : t > a || t <= b) handler(ev);
			});
		};

		const setT = (key, value) => {
			els.current[key]?.forEach((el) => { el.style.transform = value; });
		};

		const apply = () => {
			LETTERS.forEach((id) => {
				const L = letters[id];
				const stretch = clamp(-L.y.v * 0.0002, -0.025, 0.035);
				const sy = 1 + stretch - L.sq.x;
				const sx = 1 - stretch * 0.5 + L.sq.x * 0.6;
				const t = `translateY(${(L.y.x / P[id].h) * 100}%) rotate(${L.r.x}deg) scale(${sx}, ${sy})`;
				setT(id, t);

				const eyeName = EYE_OF[id];
				if (eyeName) {
					const e = eyes[eyeName === 'eye1' ? 0 : 1];
					const dy = (L.y.x / P[eyeName].h) * 100;
					// mắt đi liền khối với chữ; chớp mắt bằng mí trượt xuống, không bóp méo con mắt
					setT(eyeName, `translateY(${dy}%) rotate(${L.r.x}deg) scale(${sx}, ${sy})`);
					const lidEl = els.current[`${eyeName}-lid`];
					const lid = clamp(e.lid.x, 0, 1);
					lidEl?.forEach((el) => { el.style.height = `${lid * 88}%`; el.style.opacity = lid > 0.02 ? 1 : 0; });
				}
			});

			const follow = (letters.k1.y.x + letters.z2.y.x) / 2;
			setT('mouth', `translateY(${(follow / P.mouth.h) * 100}%) rotate(${mouth.r.x}deg) scale(${mouth.sx.x}, ${mouth.sy.x})`);

			circles.forEach((c, i) => setT(`c${i}`, `scale(${c.x})`));

			setT('tagline', `translateY(${Math.sin(clock * 2.2) * 3}%)`);
		};

		const simulate = (dt) => {
			LETTERS.forEach((id) => {
				const L = letters[id];
				step(L.y, dt);
				step(L.r, dt);
				step(L.sq, dt);
				const isUp = L.y.x < -1;
				if (L.wasUp && !isUp && L.y.v > 0) L.sq.v += L.y.v * 0.003;
				L.wasUp = isUp;
			});
			eyes.forEach((e) => {
				if (e.blinkUntil && clock >= e.blinkUntil) {
					e.blinkUntil = 0;
					e.lid.t = 0;
				}
				// nhắm cực nhanh, mở nhanh: chớp dứt khoát
				e.lid.x += (e.lid.t - e.lid.x) * (1 - Math.exp(-dt * (e.lid.t > e.lid.x ? 110 : 55)));
			});
			step(mouth.sx, dt);
			step(mouth.sy, dt);
			step(mouth.r, dt);
			circles.forEach((c) => step(c, dt));
		};

		const frame = (now) => {
			if (!last) last = now;
			const dt = Math.min(0.05, (now - last) / 1000);
			last = now;
			const prev = clock;
			clock += dt;

			fire(TIMELINE, LOOP, prev, clock, run);
			fire(HOPS, HOP_LOOP, prev, clock, ([, id, power, dir]) => hop(id, power, dir));
			fire(PULSES, PULSE_LOOP, prev, clock, ([, i, scale]) => { circles[i].t = scale; });

			for (let n = 0; n < 3; n += 1) simulate(dt / 3);
			apply();
			raf = requestAnimationFrame(frame);
		};

		const start = () => {
			if (!raf) {
				last = 0;
				raf = requestAnimationFrame(frame);
			}
		};
		const stop = () => {
			cancelAnimationFrame(raf);
			raf = 0;
		};

		// Chỉ chạy khi logo đang hiện trên màn hình
		let onScreen = true;
		const sync = () => (onScreen && !document.hidden ? start() : stop());
		const io = typeof IntersectionObserver !== 'undefined'
			? new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); })
			: null;
		io?.observe(root);
		document.addEventListener('visibilitychange', sync);
		start();

		return () => {
			stop();
			io?.disconnect();
			document.removeEventListener('visibilitychange', sync);
			timers.forEach(clearTimeout);
			pokeRef.current = null;
		};
	}, []);

	const poke = () => pokeRef.current?.();

	const layer = (name, suffix, origin) => (
		<span key={`${name}${suffix}`} className="zzl-layer" ref={reg(name)} style={{ ...box(P[name]), transformOrigin: origin }}>
			<img src={`${BASE}/${name}${suffix}.webp`} alt="" draggable="false" />
		</span>
	);

	const originOf = (name) => {
		if (LETTERS.includes(name)) return originIn(name, ...footOf(name));
		if (name === 'eye1') return originIn('eye1', ...footOf('i'));
		if (name === 'eye2') return originIn('eye2', ...footOf('a'));
		return '50% 22%'; // miệng: neo ở hai khoé phía trên
	};

	return (
		<span
			ref={rootRef}
			className={`zzl ${className}`}
			role="img"
			aria-label={label}
			onPointerEnter={interactive ? poke : undefined}
			onPointerDown={interactive ? poke : undefined}
		>
			<svg className="zzl-circles" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
				{CIRCLES.map((c, i) => (
					<circle key={c.id} ref={reg(`c${i}`)} className="zzl-c" cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} />
				))}
			</svg>

			<span className="zzl-layer" style={box(P.backdrop)}>
				<img src={`${BASE}/backdrop.webp`} alt="" draggable="false" />
			</span>
			{PARTS.map((name) => layer(name, '-o', originOf(name)))}
			{FILL_ORDER.map((name) => layer(name, '-f', originOf(name)))}
			{['eye1', 'eye2'].map((name) => (
				// Mí mắt: khối xanh tím cắt đúng theo hình phần trắng của mắt, trượt từ trên xuống
				<span
					key={`${name}-lid`}
					className="zzl-layer zzl-lidbox"
					ref={reg(name)}
					style={{
						...box(P[name]),
						transformOrigin: originOf(name),
						WebkitMaskImage: `url(${BASE}/${name}-f.webp)`,
						maskImage: `url(${BASE}/${name}-f.webp)`,
					}}
				>
					<span className="zzl-lid" ref={reg(`${name}-lid`)} />
				</span>
			))}
			<span className="zzl-layer" ref={reg('tagline')} style={box(P.tagline)}>
				<img src={`${BASE}/tagline.webp`} alt="" draggable="false" />
			</span>
		</span>
	);
}
