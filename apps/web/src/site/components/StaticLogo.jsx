import React from 'react';
import { ROUND_LOGO } from './zikzakRoundLogo.js';

/*
  Logo ZikZak tròn (vector, từ file Illustrator "ZiKZaK Logo tròn") cho thanh menu.
  - mono: đơn sắc trắng — mọi mảng màu thành trắng, mảng xanh dương đậm (viền chữ) thành phần khoét rỗng
    (dùng mặt nạ nên nhìn xuyên thấy nền phía sau).
  - mặc định: nguyên màu.
*/
export default function StaticLogo({ className = '', mono = false }) {
	const [x, y, w, h] = ROUND_LOGO.viewBox.split(' ').map(Number);

	if (mono) {
		const markup = `<defs>${ROUND_LOGO.defs}<mask id="zrl-mask" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${w}" height="${h}">${ROUND_LOGO.mono}</mask></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" mask="url(#zrl-mask)"/>`;

		return (
			<svg
				className={`zz-slogo zz-slogo--mono ${className}`}
				viewBox={ROUND_LOGO.viewBox}
				role="img"
				aria-label="ZikZak"
				shapeRendering="geometricPrecision"
				dangerouslySetInnerHTML={{ __html: markup }}
			/>
		);
	}

	return (
		<svg
			className={`zz-slogo ${className}`}
			viewBox={ROUND_LOGO.viewBox}
			role="img"
			aria-label="ZikZak"
			shapeRendering="geometricPrecision"
			dangerouslySetInnerHTML={{ __html: `<defs>${ROUND_LOGO.defs}</defs>${ROUND_LOGO.color}` }}
		/>
	);
}
