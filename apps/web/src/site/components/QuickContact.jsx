import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Orb from './Orb.jsx';
import { ZaloIcon } from './icons.jsx';
import { contact } from '../data/site.js';

// Nút gọi / Zalo luôn hiển thị: bong bóng nổi trên máy tính, thanh dưới cùng trên điện thoại.
export default function QuickContact() {
	return (
		<>
			<div className="zz-quick">
				<Orb as="a" href={contact.zalo} target="_blank" rel="noreferrer" color="var(--zz-cyan)" aria-label="Nhắn Zalo cho ZikZak">
					<ZaloIcon />
					<span className="zz-quick__label zz-glass">Nhắn Zalo</span>
				</Orb>
				<Orb as="a" href={`tel:${contact.hotline}`} color="var(--zz-blue)" aria-label={`Gọi ${contact.hotlineDisplay}`}>
					<Phone />
					<span className="zz-quick__label zz-glass">{contact.hotlineDisplay}</span>
				</Orb>
			</div>

			<div className="zz-mobilebar zz-glass">
				<a href={`tel:${contact.hotline}`}><Phone /> Gọi</a>
				<a href={contact.zalo} target="_blank" rel="noreferrer"><ZaloIcon /> Zalo</a>
				<Link to="/dang-ky" className="zz-btn zz-btn--primary">Học thử</Link>
			</div>
		</>
	);
}
