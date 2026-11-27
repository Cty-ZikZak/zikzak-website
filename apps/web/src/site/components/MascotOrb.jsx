import React, { useState } from 'react';
import Orb from './Orb.jsx';

/*
  Nhân vật ZikZak đứng trước một bong bóng kính màu thương hiệu.
  Bong bóng là điểm nối của đường zikzak (data-zz-node).
*/
export default function MascotOrb({ src, color, size = 140, className = '', float = false, delay = 0 }) {
	const [hasImage, setHasImage] = useState(Boolean(src));
	const sizeValue = typeof size === 'number' ? `${size}px` : size;

	return (
		<span
			className={['zz-mascot', float ? 'zz-mascot--float' : '', className].filter(Boolean).join(' ')}
			style={{ '--size': sizeValue, '--delay': `${delay}s` }}
		>
			<Orb color={color} data-zz-node="" />
			{hasImage ? (
				<img
					className="zz-mascot__img"
					src={src}
					alt=""
					loading="lazy"
					decoding="async"
					onError={() => setHasImage(false)}
				/>
			) : null}
		</span>
	);
}
