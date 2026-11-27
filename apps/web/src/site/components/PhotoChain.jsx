import React, { useCallback, useState } from 'react';
import ZigzagChain from './ZigzagChain.jsx';
import { Lightbox } from './ArtworkGrid.jsx';

const SHAPES = ['arch', 'circle', 'blob', 'arch-down', 'circle', 'arch'];
const COLORS = ['var(--zz-yellow)', 'var(--zz-cyan)', 'var(--zz-green)', 'var(--zz-blue)', 'var(--zz-yellow)', 'var(--zz-cyan)'];

// Ảnh học viên trong các khung hình tròn / vòm, nối bằng đường zikzak.
export default function PhotoChain({ items }) {
	const [openIndex, setOpenIndex] = useState(-1);
	const close = useCallback(() => setOpenIndex(-1), []);
	const move = useCallback((step) => setOpenIndex((i) => (i + step + items.length) % items.length), [items.length]);

	return (
		<>
			<ZigzagChain className="zz-photos">
				{items.map((art, i) => (
					<button
						key={art.id}
						type="button"
						className={`zz-photo zz-photo--${SHAPES[i % SHAPES.length]}`}
						style={{ '--c': COLORS[i % COLORS.length] }}
						onClick={() => setOpenIndex(i)}
						aria-label="Phóng to tranh của học viên"
						data-zz-node=""
					>
						<img src={art.thumb} alt="Học viên ZikZak với tác phẩm của mình" loading="lazy" decoding="async" />
					</button>
				))}
			</ZigzagChain>
			{openIndex >= 0 ? <Lightbox items={items} index={openIndex} onClose={close} onMove={move} /> : null}
		</>
	);
}
