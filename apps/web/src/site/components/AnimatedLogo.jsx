import React, { useEffect, useRef } from 'react';
import '../styles/animated-logo.css';

/*
  Logo ZikZak chuyển động — mô phỏng lò xo vật lý (có quán tính, nảy, co giãn).
  - 2 dấu sắc trên chữ i và a là đôi mắt: liếc, chớp, nháy mắt, cười híp, ngạc nhiên.
  - Nét nối giữa "Zik" và "Zak" là khuôn miệng: cười, cười nắc nẻ, nhếch mép, chữ "o".
  - Mỗi chữ cái mang theo đường viền xanh tím của chính nó, nhún nảy theo làn sóng.
  - 3 hình tròn chạy theo quỹ đạo, bị kéo dãn theo hướng chạy và phồng xẹp có nảy.
  Rê chuột / chạm vào logo: cả logo cười vang.
  Ảnh từng lớp: public/brand/logo-anim (tạo bằng tools/logo-anim/build.py từ logo gốc 2000 × 1523).
*/

const W = 2000;
const H = 1523;
const BASE = `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/brand/logo-anim`;

// Vị trí từng lớp trên logo gốc (px) — lấy từ public/brand/logo-anim/meta.json
const P = {
	z1: { x: 388, y: 329, w: 411, h: 563 },
	i: { x: 620, y: 457, w: 177, h: 335 },
	k1: { x: 716, y: 381, w: 350, h: 498 },
	z2: { x: 980, y: 376, w: 393, h: 506 },
	a: { x: 1173, y: 477, w: 269, h: 332 },
	k2: { x: 1366, y: 375, w: 308, h: 478 },
	eye1: { x: 695, y: 338, w: 150, h: 189 },
	eye2: { x: 1296, y: 335, w: 154, h: 183 },
	mouth: { x: 883, y: 463, w: 274, h: 277 },
	tagline: { x: 525, y: 899, w: 1010, h: 97 },
	filler: { x: 415, y: 444, w: 1231, h: 430 },
};

const CIRCLES = [
	{ id: 'yellow', cx: 472.6, cy: 603.3, r: 340.4, fill: '#FEF100' },
	{ id: 'cyan', cx: 1386.7, cy: 1005.1, r: 432.9, fill: '#53E2FF' },
	{ id: 'blue', cx: 1646.4, cy: 282.8, r: 173.3, fill: '#0067FF' },
];

const union = (a, b) => {
	const x = Math.min(a.x, b.x);
	const y = Math.min(a.y, b.y);

	return { x, y, w: Math.max(a.x + a.w, b.x + b.w) - x, h: Math.max(a.y + a.h, b.y + b.h) - y };
};

const G_I = union(P.i, P.eye1);
const G_A = union(P.a, P.eye2);

const box = (r, parent = { x: 0, y: 0, w: W, h: H }) => ({
	left: `${((r.x - parent.x) / parent.w) * 100}%`,
	top: `${((r.y - parent.y) / parent.h) * 100}%`,
	width: `${(r.w / parent.w) * 100}%`,
	height: `${(r.h / parent.h) * 100}%`,
});

// Điểm tựa khi nhún: đáy giữa của chữ (tính theo khung chứa)
const footOrigin = (letter, g = letter) => (
	`${((letter.x + letter.w / 2 - g.x) / g.w) * 100}% ${((letter.y + letter.h * 0.9 - g.y) / g.h) * 100}%`
);

/* ---------- Vật lý lò xo ---------- */

const spring = (value, k, c) => ({ x: value, v: 0, t: value, k, c });

const stepSpring = (s, dt) => {
	const a = s.k * (s.t - s.x) - s.c * s.v;
	s.v += a * dt;
	s.x += s.v * dt;
};

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const LETTERS = ['z1', 'gi', 'k1', 'z2', 'ga', 'k2'];
const LETTER_BOX = { z1: P.z1, gi: P.i, k1: P.k1, z2: P.z2, ga: P.a, k2: P.k2 };

// Biểu cảm của mắt và miệng
const FACES = {
	neutral: { eye: { sx: 1, sy: 1, x: 0, y: 0, r: 0 }, mouth: { sx: 1, sy: 1, x: 0, y: 0, r: 0 } },
	lookRight: { eye: { sx: 1, sy: 1, x: 7, y: -2, r: 4 }, mouth: { sx: 1.03, sy: 1.04, x: 4, y: 0, r: -3 } },
	lookLeft: { eye: { sx: 1, sy: 1, x: -7, y: -1, r: -4 }, mouth: { sx: 1.03, sy: 1.04, x: -4, y: 0, r: 3 } },
	happy: { eye: { sx: 1.1, sy: 0.42, x: 0, y: 2, r: 0 }, mouth: { sx: 1.14, sy: 1.3, x: 0, y: 4, r: 0 } },
	wink: { eye: { sx: 1, sy: 0.9, x: 4, y: 0, r: 0 }, mouth: { sx: 0.94, sy: 1.08, x: 10, y: 0, r: -9 } },
	surprised: { eye: { sx: 1.14, sy: 1.24, x: 0, y: 0, r: 0 }, mouth: { sx: 0.66, sy: 0.8, x: 0, y: 6, r: 0 } },
};

// Kịch bản biểu cảm lặp lại mỗi 13 giây
const LOOP = 13;
const TIMELINE = [
	[0.2, 'face', 'neutral'],
	[1.1, 'face', 'lookRight'],
	[2.2, 'blink'],
	[2.7, 'face', 'neutral'],
	[3.4, 'face', 'happy'],
	[3.45, 'giggle'],
	[5.0, 'face', 'neutral'],
	[6.0, 'face', 'wink'],
	[6.05, 'wink'],
	[7.0, 'face', 'neutral'],
	[8.0, 'face', 'surprised'],
	[8.0, 'pop'],
	[9.1, 'face', 'neutral'],
	[9.5, 'blink'],
	[9.8, 'blink'],
	[10.6, 'face', 'lookLeft'],
	[12.0, 'face', 'neutral'],
	[12.3, 'blink'],
];

// Nhịp nhún của các chữ (lặp mỗi 5,2 giây, sóng trái → phải rồi phải → trái)
const HOP_LOOP = 5.2;
const HOPS = [
	...LETTERS.map((id, j) => [0.3 + j * 0.11, id, 1, 1]),
	...LETTERS.map((id, j) => [2.9 + (LETTERS.length - 1 - j) * 0.09, id, 0.55, -1]),
];

function createState() {
	const letters = Object.fromEntries(LETTERS.map((id) => [id, {
		y: spring(0, 150, 9.5),
		r: spring(0, 130, 8),
		sq: spring(0, 320, 13),
		wasUp: false,
	}]));
	const eye = () => ({
		sx: spring(1, 750, 30), sy: spring(1, 750, 30),
		x: spring(0, 220, 16), y: spring(0, 220, 16), r: spring(0, 200, 16),
		blinkUntil: 0,
	});
	const mouth = {
		sx: spring(1, 300, 13), sy: spring(1, 300, 12),
		x: spring(0, 200, 15), y: spring(0, 200, 15), r: spring(0, 220, 14),
	};
	const circles = CIRCLES.map((c, i) => ({
		x: spring(0, 26 + i * 6, 3.6 + i * 0.4),
		y: spring(0, 26 + i * 6, 3.6 + i * 0.4),
		s: spring(1, 80 + i * 20, 5 + i),
		phase: i * 2.1,
	}));

	return { letters, eyes: [eye(), eye()], mouth, circles, face: 'neutral' };
}

export default function AnimatedLogo({ className = '', label = 'ZikZak — Shine Your Way, Slay Your Mind', interactive = true }) {
	const rootRef = useRef(null);
	const refs = useRef({});
	const kickRef = useRef(null);

	const setRef = (key) => (el) => { refs.current[key] = el; };

	useEffect(() => {
		const root = rootRef.current;

		if (!root || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}

		const st = createState();
		let raf = 0;
		let last = 0;
		let clock = 0;
		let isVisible = true;

		const setFace = (name) => {
			st.face = name;
			const f = FACES[name];
			st.eyes.forEach((e) => {
				Object.entries(f.eye).forEach(([k, v]) => {
					if (!(k === 'sy' && clock < e.blinkUntil)) e[k].t = v;
				});
			});
			Object.entries(f.mouth).forEach(([k, v]) => { st.mouth[k].t = v; });
		};

		const closeEye = (e, duration) => {
			e.blinkUntil = clock + duration;
			e.sy.t = 0.16;
		};

		// Các chữ lắc cùng chiều theo làn sóng để chữ cạnh nhau không tách khe
		const hop = (id, power = 1, dir = 1) => {
			const L = st.letters[id];
			L.y.v -= 230 * power;
			L.r.v += 34 * power * dir;
		};

		const giggle = () => {
			[0, 0.22, 0.44, 0.66].forEach((d, n) => {
				setTimeout(() => {
					st.mouth.sy.v += 4.5 - n * 0.6;
					st.mouth.sx.v -= 1.2;
					st.eyes.forEach((e) => { e.sy.v -= 2.5; });
					LETTERS.forEach((id) => { st.letters[id].y.v -= 70; });
				}, d * 1000);
			});
		};

		const pop = () => {
			st.circles.forEach((c, i) => {
				setTimeout(() => { c.s.v += 1.6; }, i * 120);
			});
			st.eyes.forEach((e) => { e.sx.v += 3; e.sy.v += 3; });
		};

		const run = (event) => {
			const [, type, arg] = event;
			if (type === 'face') setFace(arg);
			if (type === 'blink') st.eyes.forEach((e) => closeEye(e, 0.11));
			if (type === 'wink') closeEye(st.eyes[1], 0.42);
			if (type === 'giggle') giggle();
			if (type === 'pop') pop();
		};

		// Rê chuột / chạm: cả logo cười vang
		let lastKick = -10;
		kickRef.current = () => {
			if (clock - lastKick < 1.2) return;
			lastKick = clock;
			setFace('happy');
			giggle();
			pop();
			LETTERS.forEach((id, j) => setTimeout(() => hop(id, 0.9), j * 70));
			setTimeout(() => setFace('neutral'), 1500);
		};

		const fire = (list, period, from, to, handler) => {
			const a = from % period;
			const b = to % period;
			list.forEach((ev) => {
				const t = ev[0];
				const hit = a <= b ? t > a && t <= b : t > a || t <= b;
				if (hit) handler(ev);
			});
		};

		const apply = () => {
			const r = refs.current;

			LETTERS.forEach((id) => {
				const L = st.letters[id];
				const el = r[id];
				if (!el) return;
				const h = LETTER_BOX[id].h;
				const stretch = clamp(-L.y.v * 0.00035, -0.06, 0.09);
				const sy = 1 + stretch - L.sq.x;
				const sx = 1 - stretch * 0.55 + L.sq.x * 0.75;
				el.style.transform = `translateY(${(L.y.x / (id === 'gi' ? G_I.h : id === 'ga' ? G_A.h : h)) * 100}%) rotate(${L.r.x}deg) scale(${sx}, ${sy})`;
			});

			st.eyes.forEach((e, i) => {
				const el = r[`eye${i + 1}`];
				const p = P[`eye${i + 1}`];
				if (!el) return;
				el.style.transform = `translate(${(e.x.x / p.w) * 100}%, ${(e.y.x / p.h) * 100}%) rotate(${e.r.x}deg) scale(${e.sx.x}, ${Math.max(0.12, e.sy.x)})`;
			});

			const m = st.mouth;
			const follow = (st.letters.k1.y.x + st.letters.z2.y.x) / 2;
			if (r.mouth) {
				r.mouth.style.transform = `translate(${(m.x.x / P.mouth.w) * 100}%, ${((m.y.x + follow) / P.mouth.h) * 100}%) rotate(${m.r.x}deg) scale(${m.sx.x}, ${m.sy.x})`;
			}

			st.circles.forEach((c, i) => {
				const el = r[`c${i}`];
				if (!el) return;
				const speed = Math.hypot(c.x.v, c.y.v);
				const s = clamp(speed * 0.0011, 0, 0.16);
				const ang = (Math.atan2(c.y.v, c.x.v) * 180) / Math.PI;
				el.style.transform = `translate(${c.x.x}px, ${c.y.x}px) rotate(${ang}deg) scale(${1 + s}, ${1 - s * 0.8}) rotate(${-ang}deg) scale(${c.s.x})`;
			});

			if (r.tagline) {
				const wave = Math.sin(clock * 2.4) * 0.6;
				r.tagline.style.transform = `translateY(${wave * 6}%) rotate(${wave * 0.6}deg)`;
			}
		};

		const simulate = (dt) => {
			LETTERS.forEach((id) => {
				const L = st.letters[id];
				stepSpring(L.y, dt);
				stepSpring(L.r, dt);
				stepSpring(L.sq, dt);
				// chạm đất: bẹp xuống theo vận tốc rơi
				const isUp = L.y.x < -1;
				if (L.wasUp && !isUp && L.y.v > 0) L.sq.v += L.y.v * 0.006;
				L.wasUp = isUp;
			});

			st.eyes.forEach((e) => {
				if (e.blinkUntil && clock >= e.blinkUntil) {
					e.blinkUntil = 0;
					e.sy.t = FACES[st.face].eye.sy;
				}
				['sx', 'sy', 'x', 'y', 'r'].forEach((k) => stepSpring(e[k], dt));
			});

			['sx', 'sy', 'x', 'y', 'r'].forEach((k) => stepSpring(st.mouth[k], dt));

			st.circles.forEach((c, i) => {
				const t = clock * (0.9 + i * 0.25) + c.phase;
				c.x.t = Math.sin(t * 1.3) * 34 + Math.sin(t * 2.9) * 12;
				c.y.t = Math.cos(t * 1.1) * 28 + Math.sin(t * 2.3) * 14;
				c.s.t = 1 + Math.sin(t * 1.7) * 0.045;
				stepSpring(c.x, dt);
				stepSpring(c.y, dt);
				stepSpring(c.s, dt);
			});
		};

		const frame = (now) => {
			if (!last) last = now;
			const dt = Math.min(0.05, (now - last) / 1000);
			last = now;
			const prev = clock;
			clock += dt;

			fire(TIMELINE, LOOP, prev, clock, run);
			fire(HOPS, HOP_LOOP, prev, clock, ([, id, power, dir]) => hop(id, power, dir));

			const steps = 3;
			for (let n = 0; n < steps; n += 1) simulate(dt / steps);
			apply();

			raf = isVisible ? requestAnimationFrame(frame) : 0;
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
		const io = typeof IntersectionObserver !== 'undefined'
			? new IntersectionObserver(([entry]) => {
				isVisible = entry.isIntersecting && !document.hidden;
				if (isVisible) start(); else stop();
			})
			: null;
		io?.observe(root);

		const onVisibility = () => {
			isVisible = !document.hidden;
			if (isVisible) start(); else stop();
		};
		document.addEventListener('visibilitychange', onVisibility);

		start();

		return () => {
			stop();
			io?.disconnect();
			document.removeEventListener('visibilitychange', onVisibility);
			kickRef.current = null;
		};
	}, []);

	const onPoke = () => kickRef.current?.();

	return (
		<span
			ref={rootRef}
			className={`zzl ${className}`}
			role="img"
			aria-label={label}
			onPointerEnter={interactive ? onPoke : undefined}
			onPointerDown={interactive ? onPoke : undefined}
		>
			<svg className="zzl-circles" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
				{CIRCLES.map((c, i) => (
					<circle key={c.id} ref={setRef(`c${i}`)} className="zzl-c" cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} />
				))}
			</svg>

			<Piece name="filler" />
			<Piece name="mouth" setRef={setRef} origin="50% 28%" />
			<Piece name="z1" setRef={setRef} origin={footOrigin(P.z1)} />
			<Piece name="k1" setRef={setRef} origin={footOrigin(P.k1)} />
			<Piece name="z2" setRef={setRef} origin={footOrigin(P.z2)} />
			<Piece name="k2" setRef={setRef} origin={footOrigin(P.k2)} />

			<span className="zzl-layer" ref={setRef('gi')} style={{ ...box(G_I), transformOrigin: footOrigin(P.i, G_I) }}>
				<Piece name="i" parent={G_I} />
				<Piece name="eye1" parent={G_I} setRef={setRef} origin="50% 86%" />
			</span>
			<span className="zzl-layer" ref={setRef('ga')} style={{ ...box(G_A), transformOrigin: footOrigin(P.a, G_A) }}>
				<Piece name="a" parent={G_A} />
				<Piece name="eye2" parent={G_A} setRef={setRef} origin="50% 86%" />
			</span>

			<Piece name="tagline" setRef={setRef} origin="50% 50%" />
		</span>
	);
}

function Piece({ name, parent, setRef, origin }) {
	return (
		<span
			className="zzl-layer"
			ref={setRef ? setRef(name) : undefined}
			style={{ ...box(P[name], parent), transformOrigin: origin }}
		>
			<img src={`${BASE}/${name}.webp`} alt="" draggable="false" />
		</span>
	);
}
