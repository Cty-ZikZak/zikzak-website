import React from 'react';
import { Link } from 'react-router-dom';
import Orb from './Orb.jsx';
import { FacebookIcon, TikTokIcon, ZaloIcon } from './icons.jsx';
import { contact, programs } from '../data/site.js';

export default function SiteFooter() {
	return (
		<footer className="zz-footer">
			<div className="zz-container">
				<div className="zz-footer__panel zz-glass">
					<div className="zz-footer__brand">
						<img src={contact.logo} alt="ZikZak" width="100" height="64" loading="lazy" />
						<p>
							Nơi ươm mầm và phát triển khả năng mỹ thuật cho học viên ở mọi lứa tuổi — nơi sự sáng tạo
							luôn được tôn vinh.
						</p>
						<div className="zz-socials">
							<Orb as="a" href={contact.facebook} target="_blank" rel="noreferrer" color="var(--zz-blue)" aria-label="Facebook ZikZak">
								<FacebookIcon />
							</Orb>
							<Orb as="a" href={contact.tiktok} target="_blank" rel="noreferrer" color="var(--zz-cyan)" aria-label="TikTok ZikZak">
								<TikTokIcon />
							</Orb>
							<Orb as="a" href={contact.zalo} target="_blank" rel="noreferrer" color="var(--zz-cyan)" aria-label="Zalo ZikZak">
								<ZaloIcon />
							</Orb>
						</div>
					</div>

					<div>
						<h4>Chương trình</h4>
						<ul>
							{programs.map((program) => (
								<li key={program.id}><Link to={program.href}>{program.name}</Link></li>
							))}
							<li><Link to="/trien-lam">Tranh học viên</Link></li>
						</ul>
					</div>

					<div>
						<h4>Liên hệ</h4>
						<ul>
							<li><a href={`tel:${contact.hotline}`}>Hotline: <strong>{contact.hotlineDisplay}</strong></a></li>
							<li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
							<li><a href={contact.mapUrl} target="_blank" rel="noreferrer">{contact.address}</a></li>
							<li><Link to="/hop-dong-lien-ket-giang-day">Liên kết giảng dạy cho trường học</Link></li>
						</ul>
					</div>
				</div>

				<img className="zz-footer__logo" src={contact.logoArt} alt="ZikZak Art" width="560" height="317" loading="lazy" />

				<div className="zz-footer__bottom">
					<span>© {new Date().getFullYear()} {contact.company}</span>
					<span>Shine your way · Slay your mind</span>
				</div>
			</div>
		</footer>
	);
}
