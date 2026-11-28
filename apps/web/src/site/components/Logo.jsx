import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StaticLogo from './StaticLogo.jsx';

export function Wordmark() {
	return (
		<span className="zz-wordmark" aria-hidden="true">
			{'ZikZak'.split('').map((letter, i) => <span key={i}>{letter}</span>)}
		</span>
	);
}

export default function Logo() {
	return (
		<Link to="/" className="zz-logo" aria-label="ZikZak — Trang chủ">
			<StaticLogo mono />
		</Link>
	);
}
