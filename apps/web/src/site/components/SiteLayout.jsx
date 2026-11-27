import React from 'react';
import { Helmet } from 'react-helmet';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import QuickContact from './QuickContact.jsx';
import '../styles/site.css';

const BLOBS = [
	{ c: '#176BE0', s: '46vmax', top: '-12%', left: '-10%', d: '34s', x: '6vmax', y: '4vmax' },
	{ c: '#52E2FF', s: '40vmax', top: '-8%', left: '62%', d: '28s', x: '-5vmax', y: '6vmax' },
	{ c: '#FFE500', s: '34vmax', top: '58%', left: '-8%', d: '30s', x: '5vmax', y: '-4vmax' },
	{ c: '#A31FD1', s: '38vmax', top: '62%', left: '70%', d: '36s', x: '-6vmax', y: '-5vmax' },
	{ c: '#00E6AA', s: '28vmax', top: '30%', left: '38%', d: '40s', x: '4vmax', y: '5vmax' },
];

const SITE_NAME = 'ZikZak — Mỹ thuật các lứa tuổi';

export default function SiteLayout({ title, description, children }) {
	const fullTitle = title ? `${title} | ZikZak` : SITE_NAME;

	return (
		<div className="zz">
			<Helmet>
				<html lang="vi" />
				<title>{fullTitle}</title>
				{description ? <meta name="description" content={description} /> : null}
				<meta property="og:title" content={fullTitle} />
				{description ? <meta property="og:description" content={description} /> : null}
				<meta name="theme-color" content="#176BE0" />
			</Helmet>

			<div className="zz-backdrop" aria-hidden="true">
				{BLOBS.map((b) => (
					<span
						key={b.c}
						className="zz-backdrop__blob"
						style={{ '--c': b.c, '--s': b.s, '--d': b.d, '--x': b.x, '--y': b.y, top: b.top, left: b.left }}
					/>
				))}
				<span className="zz-backdrop__pattern" />
			</div>

			<SiteHeader />
			<main id="main">{children}</main>
			<SiteFooter />
			<QuickContact />
		</div>
	);
}
