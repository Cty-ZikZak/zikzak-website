import React, { useEffect, useId, useRef } from 'react';
import { LOGO } from './zikzakLogoPaths.js';
import '../styles/animated-logo.css';

/*
  Logo ZikZak chuyển động — SVG vector dựng từ file Illustrator (ZikZak_Logo.eps).
  Chuyển động bằng mô phỏng lò xo (có quán tính, nảy, co giãn).

  Thứ tự vẽ (dưới → trên) để các mảng không bao giờ "xé" khi chuyển động:
    1. 3 hình tròn — chỉ phóng to / thu nhỏ có nảy.
    2. Nền xanh tím nguyên khối của cả logo (đứng yên theo khối chữ).
    3. Viền xanh tím của TỪNG chữ / mắt / miệng (đi theo từng phần).
    4. Phần màu (viền xanh dương + ruột) của từng phần: miệng → các chữ → mắt.
    5. Khẩu hiệu.

  Tương tác:
    - Rê chuột / lướt ngón tay lên logo: mắt nhìn theo con trỏ, các chữ nghiêng về phía con trỏ, miệng hơi hé cười.
      (Mắt vẫn liếc nhẹ theo con trỏ khi con trỏ ở gần logo.)
    - Bấm chuột / chạm vào logo: cả logo nảy lên, chớp mắt và cười tươi.
  Người dùng bật "giảm chuyển động": logo đứng yên.
  Dữ liệu nét vẽ: zikzakLogoPaths.js (tạo bằng tools/logo-anim/extract-eps.py).
*/

const C = {
	indigo: '#1900C8',
	rim: '#0067FF',
	green: '#00FF6D',
	cyan: '#00FFFF',
	yellow: '#FEF100',
	white: '#FFFFFF',
	bigCircle: '#53E2FF',
};

const FILL = { z1: C.green, i: C.yellow, k1: C.cyan, z2: C.green, a: C.yellow, k2: C.cyan, mouth: C.white, eye1: C.white, eye2: C.white };
const LETTERS = ['z1', 'i', 'k1', 'z2', 'a', 'k2'];
const EYE_OF = { i: 'eye1', a: 'eye2' };
const EYES = ['eye1', 'eye2'];
const PARTS = [...LETTERS, 'eye1', 'eye2', 'mouth'];
// Màu: miệng dưới cùng (khi cười to, mép miệng khuất sau K và Z), rồi chữ, rồi mắt
const COLOR_ORDER = ['mouth', ...LETTERS, 'eye1', 'eye2'];
const OUTLINE_W = 3.4;

const [VX, VY, VW, VH] = LOGO.viewBox;
const PIECE = LOGO.pieces;
const box = (id) => PIECE[id].bbox; // [x0, y0, x1, y1]
const cx = (id) => (box(id)[0] + box(id)[2]) / 2;
const cy = (id) => (box(id)[1] + box(id)[3]) / 2;
const w = (id) => box(id)[2] - box(id)[0];
const h = (id) => box(id)[3] - box(id)[1];

// Điểm tựa: chân chữ, chân mắt, hai khoé miệng
const PIVOT = {};
LETTERS.forEach((id) => { PIVOT[id] = [cx(id), box(id)[1] + h(id) * 0.92]; });
EYES.forEach((id) => { PIVOT[id] = [cx(id), box(id)[3] - h(id) * 0.1]; });
PIVOT.mouth = [cx('mouth'), box('mouth')[1] + h('mouth') * 0.22];
const WORD = LOGO.wordmarkBox;
PIVOT.word = [(WORD[0] + WORD[2]) / 2, LOGO.taglineBox[3]];
const WORD_CX = (WORD[0] + WORD[2]) / 2;
const WORD_CY = (WORD[1] + WORD[3]) / 2;

const f = (n) => Math.round(n * 1000) / 1000;
// translate(t) · pivot · rotate · scale · pivot⁻¹  (đọc từ phải sang trái khi áp dụng)
const tf = (pivot, tx, ty, rot, sx, sy) => `translate(${f(tx + pivot[0])} ${f(ty + pivot[1])}) rotate(${f(rot)}) scale(${f(sx)} ${f(sy)}) translate(${f(-pivot[0])} ${f(-pivot[1])})`;

/* ---------- Lò xo ---------- */
const spring = (value, k, c) => ({ x: value, v: 0, t: value, k, c });
const step = (s, dt) => {
	s.v += (s.k * (s.t - s.x) - s.c * s.v) * dt;
	s.x += s.v * dt;
};
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Biểu cảm của miệng (mắt luôn mở hẳn, chỉ chớp dứt khoát)
const FACES = {
	neutral: { sx: 1, sy: 1, r: 0 },
	smile: { sx: 1.04, sy: 1.22, r: 0 },
	grin: { sx: 1.06, sy: 1.38, r: 0 },
	smirkR: { sx: 1.04, sy: 1.16, r: -7 },
	smirkL: { sx: 1.04, sy: 1.16, r: 7 },
	oh: { sx: 0.8, sy: 0.84, r: 0 },
};

// Mọi chu kỳ là ước số của 13 giây → logo lặp lại liền mạch mỗi 13 giây
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

const HOP_LOOP = 6.5;
const HOPS = [
	...LETTERS.map((id, j) => [0.3 + j * 0.11, id, 1, 1]),
	...LETTERS.map((id, j) => [2.9 + (LETTERS.length - 1 - j) * 0.09, id, 0.6, -1]),
];

const PULSE_LOOP = 6.5;
const PULSES = [
	[0.2, 0, 1.07], [1.2, 0, 0.95],
	[1.0, 1, 1.05], [2.4, 1, 0.96],
	[1.8, 2, 1.12], [2.7, 2, 0.92],
	[3.6, 0, 1], [3.9, 1, 1], [4.2, 2, 1],
];
const CIRCLES = [
	{ id: 'yellow', d: LOGO.circles.yellow, fill: C.yellow, box: LOGO.circleBox.yellow },
	{ id: 'cyan', d: LOGO.circles.cyan, fill: C.bigCircle, box: LOGO.circleBox.cyan },
	{ id: 'blue', d: LOGO.circles.blue, fill: C.rim, box: LOGO.circleBox.blue },
];

export default function AnimatedLogo({ className = '', label = 'ZikZak — Shine Your Way, Slay Your Mind', interactive = true }) {
	const svgRef = useRef(null);
	const els = useRef({});
	const pokeRef = useRef(null);
	const uid = useId().replace(/:/g, '');

	const reg = (key) => (el) => {
		if (!els.current[key]) els.current[key] = new Set();
		if (el) els.current[key].add(el);
	};

	useEffect(() => {
		const svg = svgRef.current;

		if (!svg || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}

		const letters = Object.fromEntries(LETTERS.map((id) => [id, {
			y: spring(0, 170, 13), r: spring(0, 170, 12), sq: spring(0, 360, 18), wasUp: false,
			lean: spring(0, 90, 11), sh: spring(0, 90, 11), gr: spring(0, 90, 11),
		}]));
		const eyes = EYES.map(() => ({
			lid: { x: 0, t: 0 }, blinkUntil: 0,
			ex: spring(0, 160, 16), ey: spring(0, 160, 16), er: spring(0, 130, 13),
		}));
		const mouth = {
			sx: spring(1, 300, 16), sy: spring(1, 300, 15), r: spring(0, 220, 16),
			mx: spring(0, 120, 14), my: spring(0, 120, 14),
		};
		const circles = CIRCLES.map(() => spring(1, 70, 5.5));
		const bounce = { y: spring(0, 120, 8.5), sq: spring(0, 260, 13), wasUp: false };
		// con trỏ (toạ độ SVG), làm mượt bằng lò xo để mắt không "giật" theo từng sự kiện chuột
		const ptr = { x: spring(WORD_CX, 70, 14), y: spring(WORD_CY, 70, 14), inside: false, valid: false, hov: spring(0, 40, 9), near: spring(0, 24, 8) };
		let face = 'neutral';
		let clock = 0;
		let last = 0;
		let raf = 0;

		const timers = new Set();
		const later = (fn, ms) => {
			const t = setTimeout(() => { timers.delete(t); fn(); }, ms);
			timers.add(t);
		};

		const setFace = (name) => {
			face = name;
			const fc = FACES[name];
			mouth.sx.t = fc.sx;
			mouth.sy.t = fc.sy;
			mouth.r.t = fc.r;
		};
		const close = (e, duration) => {
			e.blinkUntil = clock + duration;
			e.lid.t = 1;
		};
		const blinkAll = (ms = 0) => later(() => eyes.forEach((e) => close(e, 0.06)), ms);
		const hop = (id, power = 1, dir = 1) => {
			letters[id].y.v -= 13 * power;
			letters[id].r.v += 16 * power * dir;
		};
		const giggle = () => {
			[0, 220, 440].forEach((ms, n) => later(() => {
				mouth.sy.v += 2.2 - n * 0.4;
				LETTERS.forEach((id) => { letters[id].y.v -= 4.4; });
			}, ms));
		};

		const run = ([, type, arg]) => {
			if (type === 'face') setFace(arg);
			if (type === 'blink') blinkAll(0);
			if (type === 'blink2') { blinkAll(0); blinkAll(190); }
			if (type === 'flutter') { blinkAll(0); blinkAll(150); blinkAll(300); }
			if (type === 'squeeze') eyes.forEach((e) => close(e, 0.34)); // cả 2 mắt luôn nhắm cùng lúc
			if (type === 'giggle') giggle();
		};

		// Bấm / chạm: nảy lên, chớp mắt, cười tươi
		let lastPoke = -10;
		pokeRef.current = () => {
			if (clock - lastPoke < 0.7) return;
			lastPoke = clock;
			bounce.y.v = -52;
			bounce.sq.x = 0.05; // bẹp xuống trước khi bật lên, rồi dãn ra khi bay
			setFace('grin');
			blinkAll(60);
			giggle();
			circles.forEach((c, i) => later(() => { c.v += 0.9; }, i * 110));
			LETTERS.forEach((id, j) => later(() => hop(id, 1.3, j % 2 ? -1 : 1), 40 + j * 55));
			later(() => setFace('neutral'), 1700);
		};

		/* ----- Con trỏ ----- */
		const pt = svg.createSVGPoint();
		const track = (e) => {
			const ctm = svg.getScreenCTM();

			if (!ctm) {
				return;
			}

			pt.x = e.clientX;
			pt.y = e.clientY;
			const p = pt.matrixTransform(ctm.inverse());
			const r = svg.getBoundingClientRect();
			const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
			ptr.valid = true;
			ptr.inside = inside;
			ptr.x.t = p.x;
			ptr.y.t = p.y;
			// khoảng cách tới logo (theo bề ngang logo): càng xa, mắt càng bớt nhìn theo
			const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
			const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
			const d = Math.hypot(dx, dy) / Math.max(r.width, 1);
			ptr.near.t = inside ? 1 : clamp(1 - d / 0.9, 0, 1) ** 2;
			ptr.hov.t = inside ? 1 : 0;
		};
		const release = () => {
			ptr.inside = false;
			ptr.hov.t = 0;
			ptr.near.t = 0;
			ptr.x.t = WORD_CX;
			ptr.y.t = WORD_CY;
		};
		const onUp = (e) => { if (e.pointerType === 'touch') later(release, 500); };

		const fire = (list, period, from, to, handler) => {
			const a = from % period;
			const b = to % period;
			list.forEach((ev) => {
				if (a <= b ? ev[0] > a && ev[0] <= b : ev[0] > a || ev[0] <= b) handler(ev);
			});
		};

		const setT = (key, value) => {
			els.current[key]?.forEach((el) => el.setAttribute('transform', value));
		};

		/* ----- Mô phỏng ----- */
		const simulate = (dt) => {
			step(ptr.x, dt);
			step(ptr.y, dt);
			step(ptr.hov, dt);
			step(ptr.near, dt);
			const hov = clamp(ptr.hov.x, 0, 1);
			const near = clamp(ptr.near.x, 0, 1);
			const px = ptr.x.x;
			const py = ptr.y.x;
			const nx = clamp((px - WORD_CX) / (VW * 0.5), -1.2, 1.2);
			const ny = clamp((py - WORD_CY) / (VH * 0.5), -1.2, 1.2);

			// các chữ nghiêng về phía con trỏ (mỗi chữ theo vị trí riêng), hơi dịch và dãn theo hướng nhìn
			LETTERS.forEach((id) => {
				const L = letters[id];
				L.lean.t = clamp(((px - cx(id)) / (VW * 0.34)) * 2.6, -3.2, 3.2) * hov;
				L.sh.t = nx * 0.55 * hov;
				L.gr.t = clamp(-ny * 0.03, -0.03, 0.03) * hov;
				['y', 'r', 'sq', 'lean', 'sh', 'gr'].forEach((k) => step(L[k], dt));
				const isUp = L.y.x < -0.1;
				if (L.wasUp && !isUp && L.y.v > 0) L.sq.v += L.y.v * 0.027;
				L.wasUp = isUp;
			});

			// mắt nhìn theo con trỏ (vẫn liếc nhẹ khi con trỏ ở gần), chớp dứt khoát
			const look = clamp(0.38 * near + 0.62 * hov, 0, 1);
			eyes.forEach((e, i) => {
				const id = EYES[i];
				e.ex.t = clamp(((px - cx(id)) / (VW * 0.22)) * 1.0, -1.2, 1.2) * look;
				e.ey.t = clamp(((py - cy(id)) / (VH * 0.3)) * 0.8, -0.9, 0.9) * look;
				e.er.t = clamp(((px - cx(id)) / (VW * 0.4)) * 7, -8, 8) * look;

				if (e.blinkUntil && clock >= e.blinkUntil) {
					e.blinkUntil = 0;
					e.lid.t = 0;
				}

				e.lid.x += (e.lid.t - e.lid.x) * (1 - Math.exp(-dt * (e.lid.t > e.lid.x ? 110 : 55)));
				['ex', 'ey', 'er'].forEach((k) => step(e[k], dt));
			});

			// miệng: dịch theo con trỏ, hé cười khi con trỏ ở trên logo
			mouth.mx.t = clamp(((px - cx('mouth')) / (VW * 0.4)) * 1.0, -1.1, 1.1) * hov;
			mouth.my.t = clamp(((py - cy('mouth')) / (VH * 0.4)) * 0.6, -0.5, 0.7) * hov;
			['sx', 'sy', 'r', 'mx', 'my'].forEach((k) => step(mouth[k], dt));

			circles.forEach((c) => step(c, dt));

			step(bounce.y, dt);
			step(bounce.sq, dt);
			const up = bounce.y.x < -0.1;
			if (bounce.wasUp && !up && bounce.y.v > 0) bounce.sq.v += bounce.y.v * 0.02;
			bounce.wasUp = up;
		};

		const render = () => {
			const hov = clamp(ptr.hov.x, 0, 1);

			// cả khối chữ: nảy lên khi bấm / chạm
			const stretch = clamp(-bounce.y.v * 0.0016, -0.03, 0.06);
			const bsy = 1 + stretch - bounce.sq.x;
			const bsx = 1 - stretch * 0.5 + bounce.sq.x * 0.6;
			setT('word', tf(PIVOT.word, 0, bounce.y.x, 0, bsx, bsy));

			const own = {};
			LETTERS.forEach((id) => {
				const L = letters[id];
				const s = clamp(-L.y.v * 0.0018, -0.025, 0.035);
				const sy = 1 + s - L.sq.x + L.gr.x;
				const sx = 1 - s * 0.5 + L.sq.x * 0.6 - L.gr.x * 0.5;
				own[id] = tf(PIVOT[id], L.sh.x, L.y.x, L.r.x + L.lean.x, sx, sy);
				setT(id, own[id]);
			});

			EYES.forEach((id, i) => {
				const e = eyes[i];
				const parent = id === 'eye1' ? 'i' : 'a';
				// mắt đi liền khối với chữ chứa nó, rồi nhìn theo con trỏ quanh chân mắt
				setT(id, `${own[parent]} ${tf(PIVOT[id], e.ex.x, e.ey.x, e.er.x, 1, 1)}`);
				const lid = clamp(e.lid.x, 0, 1);
				const [, y0, , y1] = box(id);
				const total = (y1 - y0) + 1.6;
				const lidH = lid * total;
				const lidEl = els.current[`${id}-lid`];
				const lipEl = els.current[`${id}-lip`];
				lidEl?.forEach((el) => { el.setAttribute('height', f(lidH)); el.setAttribute('visibility', lid > 0.02 ? 'visible' : 'hidden'); });
				lipEl?.forEach((el) => { el.setAttribute('y', f(y0 - 0.8 + lidH - 0.9)); el.setAttribute('visibility', lid > 0.04 && lid < 0.98 ? 'visible' : 'hidden'); });
			});

			const follow = (letters.k1.y.x + letters.z2.y.x) / 2;
			const smileHover = 1 + 0.05 * hov;
			setT('mouth', tf(PIVOT.mouth, mouth.mx.x, follow + mouth.my.x, mouth.r.x, mouth.sx.x * smileHover, mouth.sy.x * (1 + 0.08 * hov)));

			circles.forEach((c, i) => {
				const b = CIRCLES[i].box;
				setT(`c${i}`, tf([(b[0] + b[2]) / 2, (b[1] + b[3]) / 2], 0, 0, 0, c.x, c.x));
			});

			setT('tagline', `translate(0 ${f(Math.sin((clock * Math.PI * 2 * 5) / LOOP) * 0.35)})`);
		};

		const frame = (now) => {
			if (!last) last = now;
			let remaining = Math.min(0.3, (now - last) / 1000);
			last = now;

			while (remaining > 0.0001) {
				const hStep = Math.min(remaining, 1 / 60);
				const prev = clock;
				clock += hStep;
				fire(TIMELINE, LOOP, prev, clock, run);
				fire(HOPS, HOP_LOOP, prev, clock, ([, id, power, dir]) => hop(id, power, dir));
				fire(PULSES, PULSE_LOOP, prev, clock, ([, i, scale]) => { circles[i].t = scale; });
				simulate(hStep);
				remaining -= hStep;
			}

			render();
			raf = onScreen && !document.hidden ? requestAnimationFrame(frame) : 0;
		};

		let onScreen = true;
		const start = () => {
			if (!raf) {
				last = 0;
				raf = requestAnimationFrame(frame);
			}
		};
		const sync = () => (onScreen && !document.hidden ? start() : (cancelAnimationFrame(raf), raf = 0));
		const io = typeof IntersectionObserver !== 'undefined'
			? new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); })
			: null;
		io?.observe(svg);
		document.addEventListener('visibilitychange', sync);

		if (interactive) {
			window.addEventListener('pointermove', track, { passive: true });
			window.addEventListener('pointerdown', track, { passive: true });
			window.addEventListener('pointerup', onUp, { passive: true });
			document.documentElement.addEventListener('pointerleave', release);
		}

		start();

		return () => {
			cancelAnimationFrame(raf);
			raf = 0;
			io?.disconnect();
			document.removeEventListener('visibilitychange', sync);
			window.removeEventListener('pointermove', track);
			window.removeEventListener('pointerdown', track);
			window.removeEventListener('pointerup', onUp);
			document.documentElement.removeEventListener('pointerleave', release);
			timers.forEach(clearTimeout);
			pokeRef.current = null;
		};
	}, [interactive]);

	const poke = () => pokeRef.current?.();

	const piece = (id, pass) => {
		const p = PIECE[id];

		if (pass === 'outline') {
			return (
				<g key={`${id}-o`} ref={reg(id)}>
					{p.rim.map((d, n) => <path key={n} d={d} fill={C.indigo} stroke={C.indigo} strokeWidth={OUTLINE_W} strokeLinejoin="round" />)}
				</g>
			);
		}

		const [x0, y0, x1, y1] = p.bbox;

		return (
			<g key={`${id}-c`} ref={reg(id)}>
				{p.rim.map((d, n) => <path key={`r${n}`} d={d} fill={C.rim} />)}
				{p.fill.map((d, n) => <path key={`f${n}`} d={d} fill={FILL[id]} />)}
				{EYES.includes(id) ? (
					// mí mắt: khối xanh tím cắt đúng theo hình phần trắng của mắt, trượt từ trên xuống
					<g clipPath={`url(#${uid}-${id})`}>
						<rect ref={reg(`${id}-lid`)} x={x0 - 1} y={y0 - 0.8} width={x1 - x0 + 2} height="0" fill={C.indigo} visibility="hidden" />
						<rect ref={reg(`${id}-lip`)} x={x0 - 1} y={y0 - 0.8} width={x1 - x0 + 2} height="0.9" fill={C.rim} visibility="hidden" />
					</g>
				) : null}
			</g>
		);
	};

	return (
		<svg
			ref={svgRef}
			className={`zzl ${className}`}
			viewBox={`${VX} ${VY} ${VW} ${VH}`}
			role="img"
			aria-label={label}
			onPointerDown={interactive ? poke : undefined}
		>
			<defs>
				{EYES.map((id) => (
					<clipPath key={id} id={`${uid}-${id}`}>
						<path d={PIECE[id].fill[0]} />
					</clipPath>
				))}
			</defs>

			{CIRCLES.map((c, i) => (
				<g key={c.id} ref={reg(`c${i}`)}>
					<path d={c.d} fill={c.fill} />
				</g>
			))}

			<g ref={reg('word')}>
				<path d={LOGO.backdrop} fill={C.indigo} />
				{PARTS.map((id) => piece(id, 'outline'))}
				{COLOR_ORDER.map((id) => piece(id, 'color'))}
				<g ref={reg('tagline')}>
					<path d={LOGO.tagline.back} fill={C.indigo} />
					<path d={LOGO.tagline.white} fill={C.white} />
				</g>
			</g>
		</svg>
	);
}
