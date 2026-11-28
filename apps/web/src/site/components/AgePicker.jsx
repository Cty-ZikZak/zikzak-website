import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MascotOrb from './MascotOrb.jsx';
import Reveal from './Reveal.jsx';
import { ageGroups, programById } from '../data/site.js';

// "Chọn lớp theo độ tuổi" — ba ô kính màu (xanh lá, xanh ngọc, xanh dương), mỗi ô liệt kê các chương trình phù hợp.
export default function AgePicker() {
	return (
		<div className="zz-ages">
			{ageGroups.map((group, i) => (
				<Reveal key={group.id} delay={i * 0.08} className="zz-agecard zz-lg" style={{ '--c': group.color }}>
					<h3 className="zz-agecard__label">{group.label}</h3>
					<ul className="zz-agecard__list">
						{group.programs.map((id) => {
							const program = programById[id];

							return (
								<li key={id}>
									<Link to={program.href} className="zz-agecard__program">
										<MascotOrb src={program.mascot} color={program.color} size={52} />
										<strong>{program.name}</strong>
										<ArrowRight aria-hidden="true" />
									</Link>
								</li>
							);
						})}
					</ul>
				</Reveal>
			))}
		</div>
	);
}
