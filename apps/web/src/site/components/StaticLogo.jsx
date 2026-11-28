import React from 'react';
import { LOGO } from './zikzakLogoPaths.js';

/*
  Logo ZikZak tĩnh (vector) — cùng dữ liệu và bảng màu với logo động ở đầu trang chủ
  (lấy từ file EPS gốc), dùng cho thanh menu để màu luôn khớp.
*/
const C = { indigo: '#1900C8', rim: '#0067FF', green: '#00FF6D', cyan: '#00FFFF', yellow: '#FEF100', white: '#FFFFFF', bigCircle: '#53E2FF' };
const FILL = { z1: C.green, i: C.yellow, k1: C.cyan, z2: C.green, a: C.yellow, k2: C.cyan, mouth: C.white, eye1: C.white, eye2: C.white };
const LETTERS = ['z1', 'i', 'k1', 'z2', 'a', 'k2'];
const PARTS = [...LETTERS, 'eye1', 'eye2', 'mouth'];
const COLOR_ORDER = ['mouth', ...LETTERS, 'eye1', 'eye2'];
const OUTLINE_W = 3.4;

const [VX, VY, VW, VH] = LOGO.viewBox;

export default function StaticLogo({ className = '' }) {
	return (
		<svg className={`zz-slogo ${className}`} viewBox={`${VX} ${VY} ${VW} ${VH}`} role="img" aria-label="ZikZak" shapeRendering="geometricPrecision">
			<path d={LOGO.circles.yellow} fill={C.yellow} />
			<path d={LOGO.circles.cyan} fill={C.bigCircle} />
			<path d={LOGO.circles.blue} fill={C.rim} />
			<path d={LOGO.backdrop} fill={C.indigo} />
			{PARTS.map((id) => (
				<g key={`${id}-o`}>
					{LOGO.pieces[id].rim.map((d, n) => <path key={n} d={d} fill={C.indigo} stroke={C.indigo} strokeWidth={OUTLINE_W} strokeLinejoin="round" />)}
				</g>
			))}
			{COLOR_ORDER.map((id) => (
				<g key={`${id}-c`}>
					{LOGO.pieces[id].rim.map((d, n) => <path key={`r${n}`} d={d} fill={C.rim} />)}
					{LOGO.pieces[id].fill.map((d, n) => <path key={`f${n}`} d={d} fill={FILL[id]} />)}
				</g>
			))}
			<path d={LOGO.tagline.back} fill={C.indigo} />
			<path d={LOGO.tagline.white} fill={C.white} />
		</svg>
	);
}
