import React from 'react';
import Reveal from './Reveal.jsx';

const DOTS = ['var(--zz-blue)', 'var(--zz-yellow)', 'var(--zz-cyan)'];

export function Eyebrow({ children }) {
	return (
		<span className="zz-eyebrow">
			<span className="zz-eyebrow__dots" aria-hidden="true">
				{DOTS.map((c) => <i key={c} style={{ '--c': c }} />)}
			</span>
			{children}
		</span>
	);
}

export default function SectionHead({ eyebrow, title, lead, align = 'center', as: Heading = 'h2' }) {
	return (
		<Reveal className={['zz-section-head', align === 'left' ? 'zz-section-head--left' : ''].filter(Boolean).join(' ')}>
			{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
			<Heading className="zz-title">{title}</Heading>
			{lead ? <p className="zz-lead">{lead}</p> : null}
		</Reveal>
	);
}
