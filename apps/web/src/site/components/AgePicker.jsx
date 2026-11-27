import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MascotOrb from './MascotOrb.jsx';
import { ageGroups, programById } from '../data/site.js';

// "Con bạn bao nhiêu tuổi?" — chọn nhóm tuổi để xem chương trình phù hợp.
export default function AgePicker() {
	const [activeId, setActiveId] = useState(ageGroups[1].id);
	const active = ageGroups.find((g) => g.id === activeId) || ageGroups[0];

	const onKeyDown = (event) => {
		const index = ageGroups.findIndex((g) => g.id === activeId);
		const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

		if (step) {
			event.preventDefault();
			const next = ageGroups[(index + step + ageGroups.length) % ageGroups.length];
			setActiveId(next.id);
			document.getElementById(`age-tab-${next.id}`)?.focus();
		}
	};

	return (
		<div className="zz-age">
			<div className="zz-age__tabs" role="tablist" aria-label="Chọn độ tuổi">
				{ageGroups.map((group) => (
					<button
						key={group.id}
						id={`age-tab-${group.id}`}
						type="button"
						role="tab"
						aria-selected={group.id === activeId}
						aria-controls="age-panel"
						tabIndex={group.id === activeId ? 0 : -1}
						className="zz-age__tab zz-glass"
						onClick={() => setActiveId(group.id)}
						onKeyDown={onKeyDown}
					>
						{group.label}
					</button>
				))}
			</div>

			<div id="age-panel" className="zz-age__panel zz-glass" role="tabpanel" aria-labelledby={`age-tab-${active.id}`}>
				<div className="zz-age__intro">
					<span className="zz-age__label">{active.label}</span>
					<h3>{active.title}</h3>
					<p>{active.text}</p>
				</div>
				<div className="zz-age__programs">
					{active.programs.map((id) => {
						const program = programById[id];

						return (
							<Link key={id} to={program.href} className="zz-age__program">
								<MascotOrb src={program.mascot} color={program.color} size={84} />
								<span>
									<strong>{program.name}</strong>
									<small>{program.age}</small>
								</span>
								<ArrowRight aria-hidden="true" />
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
