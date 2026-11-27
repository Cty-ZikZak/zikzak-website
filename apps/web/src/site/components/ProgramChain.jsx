import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ZigzagChain from './ZigzagChain.jsx';
import MascotOrb from './MascotOrb.jsx';
import Reveal from './Reveal.jsx';

// Các chương trình học xếp so le, mỗi chương trình một nhân vật ZikZak, nối bằng đường zikzak.
export default function ProgramChain({ items }) {
	return (
		<ZigzagChain className="zz-programs">
			{items.map((program, i) => (
				<Reveal key={program.id} delay={i * 80}>
					<Link to={program.href} className="zz-program" style={{ '--c': program.color }}>
						<MascotOrb src={program.mascot} color={program.color} size={136} />
						<div className="zz-program__card zz-glass">
							<span className="zz-program__group">{program.group}</span>
							<h3>{program.name}</h3>
							<span className="zz-program__age">{program.age}</span>
							<p>{program.blurb}</p>
							<span className="zz-program__more">Xem khoá học <ArrowRight /></span>
						</div>
					</Link>
				</Reveal>
			))}
		</ZigzagChain>
	);
}
