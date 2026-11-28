import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, GraduationCap, Palette, Pause, Phone, Play, Sparkles, Trophy } from 'lucide-react';
import Orb from './Orb.jsx';
import { announcements } from '../data/site.js';

const ICONS = { gift: Gift, trophy: Trophy, palette: Palette, phone: Phone, sparkles: Sparkles, school: GraduationCap };

const BACKDROP = [
	{ c: 'var(--zz-yellow)', s: '150px', t: '-8%', l: '8%', d: '16s', x: '60px' },
	{ c: 'var(--zz-cyan)', s: '210px', t: '18%', l: '38%', d: '22s', x: '-90px' },
	{ c: 'var(--zz-green)', s: '120px', t: '-2%', l: '64%', d: '18s', x: '70px' },
	{ c: 'var(--zz-blue)', s: '170px', t: '30%', l: '84%', d: '24s', x: '-60px' },
	{ c: 'var(--zz-lime)', s: '90px', t: '40%', l: '22%', d: '14s', x: '50px' },
];

function Tile({ item, hidden }) {
	const Icon = ICONS[item.icon] || Sparkles;
	const content = (
		<>
			<Orb className="zz-tile__icon" color={item.color}><Icon /></Orb>
			<span className="zz-tile__body">
				<span className="zz-tile__tag">{item.tag}</span>
				<strong className="zz-tile__title">{item.title}</strong>
				{item.text ? <span className="zz-tile__text">{item.text}</span> : null}
			</span>
		</>
	);
	const props = { className: 'zz-tile zz-lg', tabIndex: hidden ? -1 : undefined };

	if (!item.href) {
		return <div {...props}>{content}</div>;
	}

	if (item.href.startsWith('/')) {
		return <Link to={item.href} {...props}>{content}</Link>;
	}

	return <a href={item.href} {...props}>{content}</a>;
}

// Dải thông tin chạy ngang: mỗi thông tin là một ô kính. Rê chuột / focus / bấm nút để tạm dừng.
export default function InfoTicker({ items = announcements }) {
	const [paused, setPaused] = useState(false);

	if (!items.length) {
		return null;
	}

	return (
		<section className={['zz-ticker', paused ? 'is-paused' : ''].filter(Boolean).join(' ')} aria-label="Thông tin nổi bật">
			<div className="zz-ticker__bg" aria-hidden="true">
				{BACKDROP.map((b) => (
					<i key={b.c} style={{ '--c': b.c, '--s': b.s, '--t': b.t, '--l': b.l, '--d': b.d, '--x': b.x }} />
				))}
			</div>

			<div className="zz-ticker__viewport">
				<ul className="zz-ticker__track" style={{ '--dur': `${items.length * 9}s` }}>
					{[...items, ...items].map((item, i) => (
						<li key={`${item.id}-${i}`} aria-hidden={i >= items.length ? 'true' : undefined}>
							<Tile item={item} hidden={i >= items.length} />
						</li>
					))}
				</ul>
			</div>

			<button type="button" className="zz-ticker__pause zz-lg" onClick={() => setPaused((v) => !v)} aria-pressed={paused}>
				{paused ? <Play /> : <Pause />}
				{paused ? 'Tiếp tục chạy' : 'Tạm dừng'}
			</button>
		</section>
	);
}
