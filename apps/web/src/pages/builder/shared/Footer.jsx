import React from 'react';
import SiteFooter from '@/site/components/SiteFooter';
import QuickContact from '@/site/components/QuickContact';
import '@/site/styles/site.css';

// Các trang cũ (chưa chuyển sang giao diện mới) dùng chung footer mới của ZikZak.
export default function Footer() {
	return (
		<div className="zz zz--embed">
			<SiteFooter />
			<QuickContact />
		</div>
	);
}
