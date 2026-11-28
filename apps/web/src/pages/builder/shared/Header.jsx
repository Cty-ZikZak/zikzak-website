import React from 'react';
import SiteHeader from '@/site/components/SiteHeader';
import '@/site/styles/site.css';
import '@/site/styles/glass27.css';

// Các trang cũ (chưa chuyển sang giao diện mới) dùng chung header mới của ZikZak.
export default function Header() {
	return (
		<div className="zz zz--embed zz--embed-header">
			<SiteHeader />
		</div>
	);
}
