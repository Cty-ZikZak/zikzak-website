import React, { useState } from 'react';

/*
  Bong bóng kính lỏng — họa tiết chủ đạo của ZikZak.
  color: màu thương hiệu; image: ảnh tranh (tuỳ chọn) hiển thị bên trong bong bóng.
*/
export default function Orb({
	as: Tag = 'span',
	size,
	color,
	image,
	alt = '',
	label,
	children,
	float = false,
	delay = 0,
	className = '',
	style,
	...rest
}) {
	const [hasImage, setHasImage] = useState(Boolean(image));

	return (
		<Tag
			className={[
				'zz-orb',
				hasImage ? 'zz-orb--has-img' : '',
				float ? 'zz-orb--float' : '',
				className,
			].filter(Boolean).join(' ')}
			style={{
				...(size != null ? { '--size': typeof size === 'number' ? `${size}px` : size } : {}),
				'--c': color,
				'--delay': `${delay}s`,
				...style,
			}}
			{...rest}
		>
			{image && hasImage ? (
				<img
					className="zz-orb__img"
					src={image}
					alt={alt}
					loading="lazy"
					decoding="async"
					onError={() => setHasImage(false)}
				/>
			) : null}
			{label ? <span className="zz-orb__label">{label}</span> : null}
			{children}
		</Tag>
	);
}
