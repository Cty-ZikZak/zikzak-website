import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Orb from './Orb.jsx';

// Video ca khúc chủ đề — chỉ tải YouTube khi người xem bấm phát.
export default function ThemeSong({ videoId }) {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className="zz-video zz-glass">
			{isPlaying ? (
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
					title="Ca khúc Shine Your Way – Slay Your Mind"
					allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
					allowFullScreen
				/>
			) : (
				<button type="button" className="zz-video__poster" onClick={() => setIsPlaying(true)} aria-label="Phát video ca khúc Shine Your Way – Slay Your Mind">
					<img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
					<Orb size={96} color="var(--zz-yellow)" className="zz-video__play">
						<Play fill="currentColor" />
					</Orb>
				</button>
			)}
		</div>
	);
}
