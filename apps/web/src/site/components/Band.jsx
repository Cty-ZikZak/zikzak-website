import React from 'react';
import Orb from './Orb.jsx';

/*
  Dải màu của một phần trang, mép trên/dưới cắt răng cưa zikzak.
  color: màu thương hiệu; dark: nền xanh tím đậm như banner ZikZak.
*/
export default function Band({ color = 'var(--zz-yellow)', dark = false, decor = false, id, className = '', children }) {
	return (
		<section
			id={id}
			className={['zz-band', dark ? 'zz-band--dark' : '', className].filter(Boolean).join(' ')}
			style={{ '--band': color }}
		>
			{decor ? (
				<span className="zz-band__decor" aria-hidden="true">
					<Orb size="clamp(160px, 26vw, 360px)" color="var(--zz-yellow)" style={{ position: 'absolute', left: '-6%', top: '-18%' }} />
					<Orb size="clamp(110px, 16vw, 220px)" color="var(--zz-cyan)" style={{ position: 'absolute', right: '8%', top: '-10%' }} />
					<Orb size="clamp(140px, 20vw, 280px)" color="var(--zz-green)" style={{ position: 'absolute', right: '-5%', bottom: '-14%' }} />
				</span>
			) : null}
			<div className="zz-band__inner">{children}</div>
		</section>
	);
}
