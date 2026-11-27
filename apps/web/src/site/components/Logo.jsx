import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../data/site.js';

export function Wordmark() {
	return (
		<span className="zz-wordmark" aria-hidden="true">
			{'ZikZak'.split('').map((letter, i) => <span key={i}>{letter}</span>)}
		</span>
	);
}

export default function Logo() {
	const [hasImage, setHasImage] = useState(true);

	return (
		<Link to="/" className="zz-logo" aria-label="ZikZak — Trang chủ">
			{hasImage ? (
				<img src={contact.logo} alt="ZikZak" width="132" height="44" onError={() => setHasImage(false)} />
			) : (
				<Wordmark />
			)}
		</Link>
	);
}
