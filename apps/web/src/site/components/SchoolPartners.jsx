import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MascotOrb from './MascotOrb.jsx';
import Reveal from './Reveal.jsx';
import { nb } from '../lib/text.js';
import { partnerSchools, schoolLevels, schoolPillars } from '../data/site.js';

// Hợp đồng ngoại khoá với nhà trường: 4 cấp học → 4 điểm mạnh → các trường đang hợp tác → nút liên hệ.
export default function SchoolPartners() {
	return (
		<div className="zz-school">
			<div className="zz-school__levels">
				{schoolLevels.map((level, i) => (
					<Reveal key={level.id} delay={i * 70} className="zz-level2 zz-lg" style={{ '--c': level.color }}>
						<MascotOrb src={level.mascot} color={level.color} size={92} />
						<span className="zz-level2__name">{level.name}</span>
					</Reveal>
				))}
			</div>

			<Reveal className="zz-school__pillars zz-lg">
				{schoolPillars.map((pillar, i) => (
					<div key={pillar.title} className="zz-pillar">
						<span className="zz-pillar__no">{i + 1}</span>
						<h3>{pillar.title}</h3>
						<p>{nb(pillar.text)}</p>
					</div>
				))}
			</Reveal>

			<Reveal className="zz-school__partners">
				<span className="zz-school__cap">Đang hợp tác cùng ZikZak</span>
				<ul>
					{partnerSchools.map((name) => <li key={name}>{name}</li>)}
					<li className="is-more">và nhiều trường khác…</li>
				</ul>
			</Reveal>

			<div className="zz-center">
				<Link to="/hop-dong-lien-ket-giang-day" className="zz-btn zz-btn--primary">Tìm hiểu hợp tác <ArrowRight /></Link>
			</div>
		</div>
	);
}
