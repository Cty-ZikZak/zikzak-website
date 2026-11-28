import React, { useId } from 'react';
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

/*
  Bản đơn sắc trắng (mono): mọi mảng màu (trắng, vàng, xanh ngọc, xanh lá, xanh dương) thành màu trắng;
  các mảng xanh dương đậm (viền chữ, nền sau chữ, nền khẩu hiệu) thành phần khoét rỗng.
  Làm bằng mặt nạ: vẽ lại logo với "màu" = trắng, "xanh đậm" = đen, rồi dùng làm mặt nạ cho một khối trắng.
*/
function MonoLogo({ className }) {
	const id = useId().replace(/:/g, '');

	return (
		<svg className={`zz-slogo zz-slogo--mono ${className}`} viewBox={`${VX} ${VY} ${VW} ${VH}`} role="img" aria-label="ZikZak" shapeRendering="geometricPrecision">
			<defs>
				<mask id={`${id}-m`} maskUnits="userSpaceOnUse" x={VX} y={VY} width={VW} height={VH}>
					<path d={LOGO.circles.yellow} fill="#fff" />
					<path d={LOGO.circles.cyan} fill="#fff" />
					<path d={LOGO.circles.blue} fill="#fff" />
					<path d={LOGO.backdrop} fill="#000" />
					{PARTS.map((pid) => (
						<g key={`${pid}-o`}>
							{LOGO.pieces[pid].rim.map((d, n) => <path key={n} d={d} fill="#000" stroke="#000" strokeWidth={OUTLINE_W} strokeLinejoin="round" />)}
						</g>
					))}
					{COLOR_ORDER.map((pid) => (
						<g key={`${pid}-c`}>
							{LOGO.pieces[pid].rim.map((d, n) => <path key={`r${n}`} d={d} fill="#fff" />)}
							{LOGO.pieces[pid].fill.map((d, n) => <path key={`f${n}`} d={d} fill="#fff" />)}
						</g>
					))}
					<path d={LOGO.tagline.back} fill="#000" />
					<path d={LOGO.tagline.white} fill="#fff" />
				</mask>
			</defs>
			<rect x={VX} y={VY} width={VW} height={VH} fill="#fff" mask={`url(#${id}-m)`} />
		</svg>
	);
}

export default function StaticLogo({ className = '', mono = false }) {
	if (mono) {
		return <MonoLogo className={className} />;
	}

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
