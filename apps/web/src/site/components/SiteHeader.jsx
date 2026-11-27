import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { nav } from '../data/site.js';

export default function SiteHeader() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<header className="zz-header">
			<div className="zz-header__bar zz-glass">
				<Logo />

				<nav className="zz-nav" aria-label="Điều hướng chính">
					{nav.map((item) => (item.children ? (
						<div className="zz-nav__item" key={item.label}>
							<button type="button" className="zz-nav__link" aria-haspopup="true">
								{item.label}
								<ChevronDown />
							</button>
							<div className="zz-nav__menu zz-glass">
								{item.children.map((child) => (
									<Link key={child.href} to={child.href} className="zz-nav__sub">
										<strong>{child.label}</strong>
										<small>{child.note}</small>
									</Link>
								))}
							</div>
						</div>
					) : (
						<div className="zz-nav__item" key={item.href}>
							<NavLink to={item.href} end className="zz-nav__link">
								{item.label}
							</NavLink>
						</div>
					)))}
				</nav>

				<Link to="/dang-ky" className="zz-btn zz-btn--primary zz-btn--small zz-header__cta">
					Học thử miễn phí
				</Link>

				<button
					type="button"
					className="zz-burger"
					aria-expanded={isOpen}
					aria-controls="zz-mobile-nav"
					aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
					onClick={() => setIsOpen((value) => !value)}
				>
					{isOpen ? <X /> : <Menu />}
				</button>
			</div>

			<nav id="zz-mobile-nav" className="zz-mobile-nav zz-glass" hidden={!isOpen} aria-label="Điều hướng">
				{nav.map((item) => (item.children ? (
					<React.Fragment key={item.label}>
						<div className="zz-mobile-nav__group">{item.label}</div>
						{item.children.map((child) => (
							<NavLink key={child.href} to={child.href} className="zz-mobile-nav__child">
								{child.label}
							</NavLink>
						))}
					</React.Fragment>
				) : (
					<NavLink key={item.href} to={item.href} end>
						{item.label}
					</NavLink>
				)))}
				<Link to="/dang-ky" className="zz-btn zz-btn--primary">Học thử miễn phí 1 buổi</Link>
			</nav>
		</header>
	);
}
