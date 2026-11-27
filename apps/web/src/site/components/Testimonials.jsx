import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Orb from './Orb.jsx';
import { testimonials } from '../data/site.js';

const COLORS = ['var(--zz-yellow)', 'var(--zz-cyan)', 'var(--zz-green)'];

export default function Testimonials() {
	const trackRef = useRef(null);

	const scroll = (direction) => {
		const track = trackRef.current;
		const card = track?.firstElementChild;

		if (track && card) {
			track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 20), behavior: 'smooth' });
		}
	};

	return (
		<div className="zz-quotes">
			<div className="zz-quotes__track" ref={trackRef} tabIndex={0} aria-label="Cảm nhận của học viên">
				{testimonials.map((item, i) => (
					<figure key={item.name} className="zz-quote">
						<span className="zz-quote__mark" aria-hidden="true">“</span>
						<blockquote>{item.quote}</blockquote>
						<figcaption>
							<Orb size={64} color={COLORS[i % COLORS.length]} image={item.photo} alt={item.name} />
							<span>
								<strong>{item.name}</strong>
								<small>Học viên · đỗ {item.school}</small>
							</span>
						</figcaption>
					</figure>
				))}
			</div>
			<div className="zz-quotes__nav">
				<button type="button" className="zz-lightbox__btn zz-glass" aria-label="Cảm nhận trước" onClick={() => scroll(-1)}><ChevronLeft /></button>
				<button type="button" className="zz-lightbox__btn zz-glass" aria-label="Cảm nhận tiếp theo" onClick={() => scroll(1)}><ChevronRight /></button>
			</div>
		</div>
	);
}
