import React from 'react';

const base = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 24 24',
	'aria-hidden': true,
	focusable: false,
};

export function ZaloIcon(props) {
	return (
		<svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M12 3c5 0 9 3.4 9 7.6s-4 7.6-9 7.6c-.9 0-1.8-.1-2.6-.3L5 20l1-3.6C4.2 15 3 12.9 3 10.6 3 6.4 7 3 12 3Z" />
			<path d="M8.5 8.5h4l-4 5h4M15 8.5v5" />
		</svg>
	);
}

export function TikTokIcon(props) {
	return (
		<svg {...base} fill="currentColor" {...props}>
			<path d="M16.6 2h-3.3v13.3a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.3 6.2V8.7a7.8 7.8 0 0 0 4.4 1.4V6.8a4.5 4.5 0 0 1-4.4-4.8Z" />
		</svg>
	);
}

export function FacebookIcon(props) {
	return (
		<svg {...base} fill="currentColor" {...props}>
			<path d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
		</svg>
	);
}
