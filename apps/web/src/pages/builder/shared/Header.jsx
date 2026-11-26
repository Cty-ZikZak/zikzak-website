import React from 'react';
import BlockNavigation from '@/components/builder/blocks/BlockNavigation';

export default function Header() {
	return (
		<BlockNavigation
			logoSrc={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/zikzak-logo-2025-rgb-Yle4Bek6qgHyywbV.png?width=768&fit=scale-down"}
			logoText={"ZikZak"}
			logoHref={"/"}
			logoHeightDesktop={88}
			logoHeightMobile={64}
			isLogoVisible
			layout={"desktop-5"}
			mobileLayout={"mobile-3"}
			mobileLinksAlignment={"left"}
			isSticky
			cartIconSize={"24px"}
			style={{
				"--width": "1240px",
				"--padding-top": "10px",
				"--padding": "10px 16px 10px 16px",
				"--padding-right": "16px",
				"--padding-bottom": "10px",
				"--padding-left": "16px",
				"--m-padding-top": "0px",
				"--m-padding": "0px 16px 0px 16px",
				"--m-padding-right": "16px",
				"--m-padding-bottom": "0px",
				"--m-padding-left": "16px",
				"--logo-width": "124px",
				"--cartIconSize": "24px",
				"--link-spacing": "33px",
				"--m-logo-width": "90px",
				"--m-link-spacing": "30px",
				"--element-spacing": "10px",
				"--m-element-spacing": "64px",
				"--contrastBackgroundColor": "rgb(72, 141, 236)",
				"--nav-bg": "rgb(23, 107, 224)",
				"--nav-link-font-family": "Montserrat",
				"--nav-link-font-weight": "700",
				"--nav-link-color": "rgb(255, 255, 255)",
				"--nav-link-text-color": "rgb(255, 255, 255)",
				"--nav-link-color-hover": "rgb(255, 255, 0)",
				"--nav-link-text-color-hover": "rgb(255, 255, 0)"
			}}
			nav={[
				{
					id: "RRJ2yd",
					href: "/",
					text: "Trang Chủ",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "zHOSUA",
					href: "",
					text: "ZikZak Art",
					isHidden: false,
					hasDropdown: true,
					subItems: [
						{
							id: "KUISuc",
							href: "/zikzak-art-kid-or-my-thuat-thieu-nhi",
							text: "ZikZak Art Kid   |   Mỹ Thuật Thiếu Nhi",
							isHidden: false,
							hasDropdown: false
						},
						{
							id: "lJeJtR",
							href: "/zikzak-art-pro-or-my-thuat-chuyen-sau",
							text: "ZikZak Art Pro   |   Mỹ Thuật Chuyên Sâu",
							isHidden: false,
							hasDropdown: false
						},
						{
							id: "GJlbWc",
							href: "/zikzak-art-luyen-thi-dai-hoc",
							text: "ZikZak Art Luyện Thi Đại Học",
							isHidden: false,
							hasDropdown: false
						},
						{
							id: "BHG_X8",
							href: "/zikzak-art-workshop",
							text: "ZikZak Art Workshop",
							isHidden: false,
							hasDropdown: false
						}
					]
				},
				{
					id: "z_8Hry",
					href: "",
					text: "Thiết Kế Đồ Hoạ",
					isHidden: false,
					hasDropdown: true,
					subItems: [
						{
							id: "ejWMUw",
							href: "/graphic-design-or-thiet-ke-djo-hoa",
							text: "Graphic Design   |   Thiết Kế Đồ Hoạ",
							isHidden: false,
							hasDropdown: false
						},
						{
							id: "y_znHO",
							href: "/digital-painting-or-ve-ky-thuat-so",
							text: "Digital Painting   |   Vẽ Kỹ Thuật Số",
							isHidden: false,
							hasDropdown: false
						},
						{
							id: "zHM5ua",
							href: "/trien-lam-or-tranh-cua-hoc-vien",
							text: "Triển lãm  |  Tranh của học viên",
							isHidden: false,
							hasDropdown: false
						}
					]
				},
				{
					id: "mN8UhT",
					href: "/hop-dong-lien-ket-giang-day",
					text: "Hợp Đồng Liên Kết Giảng Dạy",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "PHvCW1",
					href: "/in-an",
					text: "In Ấn",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "UEIbEU",
					href: "/zikzak-shop",
					text: "ZikZak Shop",
					isHidden: false,
					hasDropdown: false
				}
			]}
			ctaButton={{
				elementId: "z--c27",
				props: {
					id: "z--c27",
					text: "Đăng ký ngay",
					type: "primary",
					href: "/djang-ky-ngay",
					target: "_self",
					fontFamily: "Montserrat",
					fontWeight: 500,
					borderWidth: 0,
					backgroundColor: "rgb(82, 226, 255)",
					fontColor: "rgb(255, 255, 0)",
					borderColor: "rgba(0, 0, 0, 0)",
					backgroundColorHover: "rgb(255, 255, 0)",
					fontColorHover: "rgb(82, 226, 255)",
					borderColorHover: "rgb(0, 0, 0)",
					fontSizeDesktop: 14,
					mobileWidthVw: "auto",
					mobileHeightVw: "auto"
				}
			}}
		/>
	);
}
