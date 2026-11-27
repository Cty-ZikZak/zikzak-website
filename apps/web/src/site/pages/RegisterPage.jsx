import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead from '../components/SectionHead.jsx';
import LeadForm from '../components/LeadForm.jsx';
import Orb from '../components/Orb.jsx';
import { ZaloIcon } from '../components/icons.jsx';
import { contact, interestOptions } from '../data/site.js';

export function ContactBlock({ defaultInterest = '' }) {
	return (
		<div className="zz-contact">
			<div className="zz-contact__info">
				<SectionHead
					align="left"
					eyebrow="Học thử miễn phí"
					title="Bắt đầu hành trình sáng tạo cùng ZikZak"
					lead="Phụ huynh và học viên được tư vấn lộ trình, xếp lớp theo độ tuổi và học thử một buổi trước khi đăng ký."
				/>
				<div className="zz-contact__list">
					<a className="zz-contact__row zz-glass" href={`tel:${contact.hotline}`}>
						<Orb color="var(--zz-blue)"><Phone /></Orb>
						<span><small>Hotline</small>{contact.hotlineDisplay}</span>
					</a>
					<a className="zz-contact__row zz-glass" href={contact.zalo} target="_blank" rel="noreferrer">
						<Orb color="var(--zz-cyan)"><ZaloIcon /></Orb>
						<span><small>Zalo</small>Nhắn tin tư vấn nhanh</span>
					</a>
					<a className="zz-contact__row zz-glass" href={`mailto:${contact.email}`}>
						<Orb color="var(--zz-purple)"><Mail /></Orb>
						<span><small>Email</small>{contact.email}</span>
					</a>
					<a className="zz-contact__row zz-glass" href={contact.mapUrl} target="_blank" rel="noreferrer">
						<Orb color="var(--zz-orange)"><MapPin /></Orb>
						<span><small>Cơ sở</small>{contact.address}</span>
					</a>
				</div>
			</div>
			<LeadForm defaultInterest={defaultInterest} />
		</div>
	);
}

export default function RegisterPage() {
	const [params] = useSearchParams();
	const requested = params.get('khoa') || '';
	const defaultInterest = interestOptions.includes(requested) ? requested : '';

	return (
		<SiteLayout title="Đăng ký học thử" description="Đăng ký học thử miễn phí tại ZikZak — tư vấn lộ trình mỹ thuật cho bé và học viên mọi lứa tuổi.">
			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<ContactBlock defaultInterest={defaultInterest} />
				</div>
			</section>
		</SiteLayout>
	);
}
