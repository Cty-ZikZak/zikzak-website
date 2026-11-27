import React from 'react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead from '../components/SectionHead.jsx';
import AnimatedLogo from '../components/AnimatedLogo.jsx';

// Trang xem thử logo chuyển động (không có trên menu).
export default function LogoPage() {
	return (
		<SiteLayout title="Logo chuyển động">
			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<SectionHead eyebrow="Xem thử" title="Logo ZikZak chuyển động" lead="Đôi mắt chớp, miệng cười, chữ nhún nhảy và các hình tròn trôi nhẹ." />
					<div className="zz-glass" style={{ padding: 'clamp(16px, 4vw, 48px)', background: '#fff' }}>
						<AnimatedLogo />
					</div>
					<div className="zz-split zz-mt">
						<div className="zz-glass" style={{ padding: 24 }}>
							<AnimatedLogo />
						</div>
						<div className="zz-glass" style={{ padding: 24, background: 'var(--zz-indigo)' }}>
							<AnimatedLogo />
						</div>
					</div>
				</div>
			</section>
		</SiteLayout>
	);
}
