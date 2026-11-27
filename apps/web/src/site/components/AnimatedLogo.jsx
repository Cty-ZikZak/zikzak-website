import React from 'react';
import '../styles/animated-logo.css';

/*
  Logo ZikZak chuyển động.
  - 2 dấu sắc trên chữ i và a là đôi mắt: chớp mắt, liếc nhẹ.
  - Nét nối giữa "Zik" và "Zak" là khuôn miệng: cười, khúc khích.
  - Các chữ cái nhún nhảy nhẹ theo làn sóng; 3 hình tròn trôi và "thở" như giọt nước.
  Ảnh từng lớp nằm trong public/brand/logo-anim (tạo từ file logo gốc 2000 × 1523).
  Dùng: <AnimatedLogo className="..." />; kích thước theo chiều rộng của khung chứa.
*/

const W = 2000;
const H = 1523;
const BASE = `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/brand/logo-anim`;

// Vị trí từng lớp trên logo gốc (px)
const P = {
	base: { x: 388, y: 329, w: 1286, h: 563 },
	z1: { x: 388, y: 329, w: 382, h: 563 },
	i: { x: 620, y: 495, w: 147, h: 267 },
	k1: { x: 740, y: 381, w: 292, h: 498 },
	z2: { x: 1004, y: 376, w: 344, h: 506 },
	a: { x: 1192, y: 498, w: 220, h: 304 },
	k2: { x: 1388, y: 375, w: 286, h: 478 },
	eye1: { x: 707, y: 341, w: 122, h: 183 },
	eye2: { x: 1312, y: 338, w: 122, h: 180 },
	mouth: { x: 930, y: 511, w: 179, h: 181 },
	tagline: { x: 525, y: 899, w: 1010, h: 97 },
};

const union = (a, b) => {
	const x = Math.min(a.x, b.x);
	const y = Math.min(a.y, b.y);

	return { x, y, w: Math.max(a.x + a.w, b.x + b.w) - x, h: Math.max(a.y + a.h, b.y + b.h) - y };
};

// Toạ độ phần trăm của một lớp so với khung cha
const box = (r, parent = { x: 0, y: 0, w: W, h: H }) => ({
	left: `${((r.x - parent.x) / parent.w) * 100}%`,
	top: `${((r.y - parent.y) / parent.h) * 100}%`,
	width: `${(r.w / parent.w) * 100}%`,
	height: `${(r.h / parent.h) * 100}%`,
});

function Layer({ name, parent, className = '', style }) {
	return (
		<span className={`zzl-layer ${className}`} style={{ ...box(P[name], parent), ...style }}>
			<img src={`${BASE}/${name}.webp`} alt="" draggable="false" />
		</span>
	);
}

// Chữ cái có mắt (i, a): mắt đi theo chữ khi nhún, và chớp riêng.
function LetterWithEye({ letter, eye, delay }) {
	const g = union(P[letter], P[eye]);

	return (
		<span className="zzl-layer zzl-letter" style={{ ...box(g), '--d': delay }}>
			<Layer name={letter} parent={g} />
			<Layer name={eye} parent={g} className="zzl-eye" />
		</span>
	);
}

export default function AnimatedLogo({ className = '', label = 'ZikZak — Shine Your Way, Slay Your Mind' }) {
	return (
		<span className={`zzl ${className}`} role="img" aria-label={label}>
			<svg className="zzl-circles" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
				<circle className="zzl-c zzl-c--yellow" cx="472.6" cy="603.3" r="340.4" fill="#FEF100" />
				<circle className="zzl-c zzl-c--cyan" cx="1386.7" cy="1005.1" r="432.9" fill="#53E2FF" />
				<circle className="zzl-c zzl-c--blue" cx="1646.4" cy="282.8" r="173.3" fill="#0067FF" />
			</svg>

			<Layer name="base" />
			<Layer name="z1" className="zzl-letter" style={{ '--d': '0s' }} />
			<LetterWithEye letter="i" eye="eye1" delay="0.16s" />
			<Layer name="k1" className="zzl-letter" style={{ '--d': '0.32s' }} />
			<Layer name="z2" className="zzl-letter" style={{ '--d': '0.48s' }} />
			<LetterWithEye letter="a" eye="eye2" delay="0.64s" />
			<Layer name="k2" className="zzl-letter" style={{ '--d': '0.8s' }} />
			<Layer name="mouth" className="zzl-mouth" />
			<Layer name="tagline" className="zzl-tagline" />
		</span>
	);
}
