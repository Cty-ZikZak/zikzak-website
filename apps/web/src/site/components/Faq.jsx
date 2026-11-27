import React from 'react';
import { Plus } from 'lucide-react';

export default function Faq({ items }) {
	return (
		<div className="zz-faq">
			{items.map((item, i) => (
				<details key={item.q} className="zz-faq__item zz-glass" open={i === 0}>
					<summary>
						<span>{item.q}</span>
						<span className="zz-faq__icon" aria-hidden="true"><Plus /></span>
					</summary>
					<p>{item.a}</p>
				</details>
			))}
		</div>
	);
}
