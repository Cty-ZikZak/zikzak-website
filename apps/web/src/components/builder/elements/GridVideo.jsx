import React, { useState } from 'react';

function isEmbedUrl(src) {
	if (!src) {
		return false;
	}

	if (/\.mp4($|\?)/i.test(src)) {
		return false;
	}

	return /youtube\.com\/embed|youtu\.be|vimeo\.com\/video|player\.vimeo\.com|\/embed\//i.test(src);
}

export default function GridVideo({
	id,
	src = '',
	provider = 'youtube',
	jpg = '',
	webp = '',
}) {
	const isAutoplay = /[?&]autoplay=1/.test(src);
	const [isPlaying, setIsPlaying] = useState(isAutoplay);

	const wrapperStyle = {
		position: 'relative',
		width: '100%',
		height: '100%',
		background: '#111',
		overflow: 'hidden',
	};

	const mediaStyle = {
		position: 'absolute',
		inset: 0,
		width: '100%',
		height: '100%',
		border: 0,
		objectFit: 'cover',
		display: 'block',
	};

	if (!src) {
		return (
			<div className="grid-video" data-element-id={id} style={wrapperStyle}>
				<span style={{ color: '#fff', padding: 12 }}>GridVideo</span>
			</div>
		);
	}

	const useIframe = provider === 'youtube' || provider === 'vimeo' || isEmbedUrl(src);

	if (useIframe && (isPlaying || !jpg)) {
		return (
			<div className="grid-video" data-element-id={id} style={wrapperStyle}>
				<iframe
					title="Video"
					src={src}
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={mediaStyle}
				/>
			</div>
		);
	}

	if (useIframe && jpg) {
		return (
			<div className="grid-video" data-element-id={id} style={wrapperStyle}>
				<picture>
					{webp ? <source type="image/webp" srcSet={webp} /> : null}
					<img src={jpg} alt="" loading="lazy" style={mediaStyle} />
				</picture>
				<button
					type="button"
					aria-label="Play video"
					onClick={() => setIsPlaying(true)}
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 68,
						height: 48,
						border: 0,
						borderRadius: 8,
						background: 'rgba(30,30,30,0.8)',
						cursor: 'pointer',
						color: '#fff',
					}}
				>
					▶
				</button>
			</div>
		);
	}

	return (
		<div className="grid-video" data-element-id={id} style={wrapperStyle}>
			<video
				src={src}
				poster={jpg || undefined}
				controls
				playsInline
				style={mediaStyle}
			/>
		</div>
	);
}
