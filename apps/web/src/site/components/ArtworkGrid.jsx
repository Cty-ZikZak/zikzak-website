import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { programById } from '../data/site.js';

const describe = (art) => {
	const parts = [];

	if (art.student) {
		parts.push(art.age ? `${art.student}, ${art.age} tuổi` : art.student);
	} else if (art.age) {
		parts.push(`${art.age} tuổi`);
	}

	if (art.title) {
		parts.unshift(`“${art.title}”`);
	}

	return parts.join(' · ');
};

function Lightbox({ items, index, onClose, onMove }) {
	const art = items[index];

	useEffect(() => {
		const onKey = (event) => {
			if (event.key === 'Escape') onClose();
			if (event.key === 'ArrowRight') onMove(1);
			if (event.key === 'ArrowLeft') onMove(-1);
		};
		const { overflow } = document.body.style;

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', onKey);

		return () => {
			document.body.style.overflow = overflow;
			window.removeEventListener('keydown', onKey);
		};
	}, [onClose, onMove]);

	if (!art) {
		return null;
	}

	const program = programById[art.program];
	const caption = [describe(art), program?.name].filter(Boolean).join(' — ');

	return (
		<div className="zz-lightbox" role="dialog" aria-modal="true" aria-label="Xem tranh" onClick={onClose}>
			<button type="button" className="zz-lightbox__btn zz-lightbox__prev zz-glass" aria-label="Tranh trước" onClick={(e) => { e.stopPropagation(); onMove(-1); }}>
				<ChevronLeft />
			</button>
			<div className="zz-lightbox__stage" onClick={(e) => e.stopPropagation()}>
				<img className="zz-lightbox__img" src={art.src} alt={caption || 'Tranh của học viên ZikZak'} />
				<p className="zz-lightbox__caption zz-glass">
					{caption || 'Tranh của học viên ZikZak'} · {index + 1}/{items.length}
				</p>
			</div>
			<button type="button" className="zz-lightbox__btn zz-lightbox__next zz-glass" aria-label="Tranh tiếp theo" onClick={(e) => { e.stopPropagation(); onMove(1); }}>
				<ChevronRight />
			</button>
			<button type="button" className="zz-lightbox__btn zz-lightbox__close zz-glass" aria-label="Đóng" onClick={onClose}>
				<X />
			</button>
		</div>
	);
}

export default function ArtworkGrid({ items }) {
	const [openIndex, setOpenIndex] = useState(-1);
	const close = useCallback(() => setOpenIndex(-1), []);
	const move = useCallback((step) => {
		setOpenIndex((i) => (i + step + items.length) % items.length);
	}, [items.length]);

	return (
		<>
			<div className="zz-masonry">
				{items.map((art, i) => {
					const program = programById[art.program];
					const text = describe(art);

					return (
						<button
							key={art.id}
							type="button"
							className="zz-art zz-glass"
							style={{ '--c': program?.color || 'var(--zz-cyan)' }}
							onClick={() => setOpenIndex(i)}
							aria-label={`Phóng to tranh${text ? ` ${text}` : ''}`}
						>
							<img
								className="zz-art__img"
								src={art.thumb}
								alt={text || 'Tranh của học viên ZikZak'}
								loading="lazy"
								decoding="async"
								style={{ aspectRatio: i % 3 === 1 ? '3 / 4' : i % 3 === 2 ? '1 / 1' : '4 / 3' }}
								onLoad={(e) => { e.currentTarget.style.aspectRatio = 'auto'; }}
							/>
							{text || program ? (
								<span className="zz-art__meta">
									<i aria-hidden="true" />
									<span>{text ? <strong>{text}</strong> : null}{text && program ? ' · ' : ''}{program?.short}</span>
								</span>
							) : null}
						</button>
					);
				})}
			</div>
			{openIndex >= 0 ? <Lightbox items={items} index={openIndex} onClose={close} onMove={move} /> : null}
		</>
	);
}
