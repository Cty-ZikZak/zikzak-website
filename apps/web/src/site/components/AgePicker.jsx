import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MascotOrb from './MascotOrb.jsx';
import Reveal from './Reveal.jsx';
import { ageGroups, programById } from '../data/site.js';

// "Chọn lớp theo độ tuổi" — mỗi độ tuổi là một ô kính màu gọn; bấm chọn thì mới sổ ra các chương trình phù hợp.
export default function AgePicker() {
	const [openId, setOpenId] = useState(null);

	return (
		<div className="zz-ages">
			{ageGroups.map((group, i) => {
				const open = openId === group.id;

				return (
					<Reveal key={group.id} delay={i * 0.08} className={`zz-agecard zz-lg${open ? ' is-open' : ''}`} style={{ '--c': group.color }}>
						<button
							type="button"
							className="zz-agecard__head"
							aria-expanded={open}
							aria-controls={`age-list-${group.id}`}
							onClick={() => setOpenId(open ? null : group.id)}
						>
							<span className="zz-agecard__label">{group.label}</span>
							<ChevronDown aria-hidden="true" />
						</button>
						<div id={`age-list-${group.id}`} className="zz-agecard__body" role="region" aria-label={`Chương trình cho ${group.label}`}>
							<ul className="zz-agecard__list">
								{group.programs.map((id) => {
									const program = programById[id];

									return (
										<li key={id}>
											<Link to={program.href} className="zz-agecard__program" tabIndex={open ? undefined : -1}>
												<MascotOrb src={program.mascot} color={program.color} size={52} />
												<strong>{program.name}</strong>
												<ArrowRight aria-hidden="true" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
}
