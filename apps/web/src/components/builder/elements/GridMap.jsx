import React from 'react';

export default function GridMap({ id, embedUrl = '' }) {
	return (
		<div
			className="grid-map"
			data-element-id={id}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				background: '#ebeff2',
			}}
		>
			{embedUrl ? (
				<iframe
					title="Map"
					src={embedUrl}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					style={{
						width: '100%',
						height: '100%',
						border: 0,
						display: 'block',
					}}
				/>
			) : (
				<span style={{ padding: 12 }}>GridMap</span>
			)}
		</div>
	);
}
