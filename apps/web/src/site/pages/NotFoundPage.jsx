import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../components/SiteLayout.jsx';
import Orb from '../components/Orb.jsx';
import ZigzagChain from '../components/ZigzagChain.jsx';
import { brandColors } from '../data/site.js';

export default function NotFoundPage() {
	return (
		<SiteLayout title="Không tìm thấy trang">
			<section className="zz-section">
				<div className="zz-container zz-center">
					<ZigzagChain style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, marginBottom: 32 }}>
						<Orb size={110} color={brandColors.blue} label="4" data-zz-node="" style={{ marginTop: -40 }} />
						<Orb size={110} color={brandColors.yellow} label="0" data-zz-node="" style={{ marginTop: 40 }} />
						<Orb size={110} color={brandColors.cyan} label="4" data-zz-node="" style={{ marginTop: -40 }} />
					</ZigzagChain>
					<h1 className="zz-title">Bức tranh này chưa được vẽ</h1>
					<p className="zz-lead">Trang bạn tìm không tồn tại hoặc đã được chuyển đi.</p>
					<div className="zz-mt">
						<Link to="/" className="zz-btn zz-btn--primary">Về trang chủ</Link>
					</div>
				</div>
			</section>
		</SiteLayout>
	);
}
