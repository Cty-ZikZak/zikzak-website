import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridCard from '@/components/builder/elements/GridCard';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';
import GridImage from '@/components/builder/elements/GridImage';
import GridShape from '@/components/builder/elements/GridShape';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"zzb6ZC"}
			htmlId={"zzb6ZC"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "4.72vw auto 1.67vw 10.56vw 5.83vw auto 19.44vw 2.50vw 0.28vw auto auto 0.83vw 1.11vw auto auto 2.22vw 3.33vw 14.44vw auto auto 0.56vw 1.39vw 2.22vw 0.56vw auto 0.28vw 0.28vw 2.22vw 9.17vw 1.11vw 1.67vw auto 0.83vw 2.50vw 0.56vw 2.22vw auto 6.39vw auto 2.78vw 1.94vw 0.56vw auto 1.67vw auto auto 6.11vw auto 3.06vw 1.39vw auto auto 6.39vw auto 1.39vw 4.17vw auto auto 5.56vw auto 0px",
				"--t-grid-template-rows": "minmax(17px, auto) minmax(11px, auto) minmax(6px, auto) minmax(38px, auto) minmax(21px, auto) minmax(11px, auto) minmax(70px, auto) minmax(9px, auto) minmax(1px, auto) minmax(9px, auto) minmax(7px, auto) minmax(3px, auto) minmax(4px, auto) minmax(11px, auto) minmax(14px, auto) minmax(8px, auto) minmax(12px, auto) minmax(52px, auto) minmax(28px, auto) minmax(13px, auto) minmax(2px, auto) minmax(5px, auto) minmax(8px, auto) minmax(2px, auto) minmax(5px, auto) minmax(1px, auto) minmax(1px, auto) minmax(8px, auto) minmax(33px, auto) minmax(4px, auto) minmax(6px, auto) minmax(6px, auto) minmax(3px, auto) minmax(9px, auto) minmax(2px, auto) minmax(8px, auto) minmax(7px, auto) minmax(23px, auto) minmax(11px, auto) minmax(10px, auto) minmax(7px, auto) minmax(2px, auto) minmax(8px, auto) minmax(6px, auto) minmax(18px, auto) minmax(56px, auto) minmax(22px, auto) minmax(16px, auto) minmax(11px, auto) minmax(5px, auto) minmax(18px, auto) minmax(56px, auto) minmax(23px, auto) minmax(17px, auto) minmax(5px, auto) minmax(15px, auto) minmax(30px, auto) minmax(30px, auto) minmax(20px, auto) minmax(60px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(4.08vw, auto) minmax(0.49vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(1.88vw, auto) minmax(2.53vw, auto) minmax(7.68vw, auto) minmax(1.31vw, auto) minmax(2.45vw, auto) minmax(0.82vw, auto) minmax(5.23vw, auto) minmax(2.70vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.57vw, auto) minmax(2.04vw, auto) minmax(0.74vw, auto) minmax(3.35vw, auto) minmax(1.14vw, auto) minmax(4.58vw, auto) minmax(2.53vw, auto) minmax(0.16vw, auto) minmax(1.96vw, auto) minmax(8.42vw, auto) minmax(4.33vw, auto) minmax(1.39vw, auto) minmax(0.25vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(0.49vw, auto) minmax(2.04vw, auto) minmax(1.39vw, auto) minmax(2.78vw, auto) minmax(0.49vw, auto) minmax(1.06vw, auto) minmax(1.23vw, auto) minmax(0.49vw, auto) minmax(2.04vw, auto) minmax(0.49vw, auto) minmax(0.16vw, auto) minmax(0.49vw, auto) minmax(0.16vw, auto) minmax(1.39vw, auto) minmax(4.33vw, auto) minmax(0.16vw, auto) minmax(0.49vw, auto) minmax(0.82vw, auto) minmax(0.49vw, auto) minmax(1.96vw, auto) minmax(0.25vw, auto) minmax(0.25vw, auto) minmax(3.02vw, auto) minmax(3.10vw, auto) minmax(1.55vw, auto) minmax(10.29vw, auto) minmax(0.16vw, auto) minmax(3.10vw, auto) minmax(0.16vw, auto) minmax(3.27vw, auto) minmax(4.08vw, auto) minmax(24.84vw, auto) minmax(4.08vw, auto) minmax(20.92vw, auto) minmax(4.08vw, auto) minmax(18.95vw, auto) minmax(25.16vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(50px, auto) minmax(6px, auto) minmax(8px, auto) minmax(2px, auto) minmax(5px, auto) minmax(5px, auto) minmax(23px, auto) minmax(31px, auto) minmax(94px, auto) minmax(16px, auto) minmax(30px, auto) minmax(10px, auto) minmax(64px, auto) minmax(33px, auto) minmax(23px, auto) minmax(8px, auto) minmax(7px, auto) minmax(25px, auto) minmax(9px, auto) minmax(41px, auto) minmax(14px, auto) minmax(56px, auto) minmax(31px, auto) minmax(2px, auto) minmax(24px, auto) minmax(103px, auto) minmax(53px, auto) minmax(17px, auto) minmax(3px, auto) minmax(5px, auto) minmax(5px, auto) minmax(6px, auto) minmax(25px, auto) minmax(17px, auto) minmax(34px, auto) minmax(6px, auto) minmax(13px, auto) minmax(15px, auto) minmax(6px, auto) minmax(25px, auto) minmax(6px, auto) minmax(2px, auto) minmax(6px, auto) minmax(2px, auto) minmax(17px, auto) minmax(53px, auto) minmax(2px, auto) minmax(6px, auto) minmax(10px, auto) minmax(6px, auto) minmax(24px, auto) minmax(3px, auto) minmax(3px, auto) minmax(37px, auto) minmax(38px, auto) minmax(19px, auto) minmax(126px, auto) minmax(2px, auto) minmax(38px, auto) minmax(2px, auto) minmax(40px, auto) minmax(50px, auto) minmax(304px, auto) minmax(50px, auto) minmax(256px, auto) minmax(50px, auto) minmax(232px, auto) minmax(308px, auto) 1fr",
				"--m-grid-template-columns": "0.91% 3.05% 0.30% 0.30% 0.30% 0.61% 0.61% 0.30% 0.30% 1.52% 1.22% 1.52% 2.13% 0.91% 11.89% 7.32% 4.27% 0.61% 3.66% 1.22% 1.52% 5.49% 1.83% 3.35% 0.30% 0.91% 0.91% 0.61% 2.74% 1.22% 3.05% 0.30% 0.30% 5.18% 3.05% 0.30% 1.83% 6.40% 3.66% 1.83% 0.91% 2.74% 0.61% 1.22% 0.91% 0.91% 0.91% 0.30% 0.61% 0.91% 2.13%",
				"--grid-template-columns": "1.55% 0.08% 1.47% 1.23% 0.33% 3.02% 0.74% 0.98% 0.82% 0.41% 0.25% 0.16% 3.43% 0.08% 1.31% 2.45% 0.08% 1.72% 1.63% 2.37% 7.52% 5.23% 0.49% 0.33% 0.33% 1.23% 1.88% 2.78% 4.66% 1.96% 0.41% 2.21% 1.23% 0.82% 0.25% 0.74% 1.55% 0.74% 0.49% 1.63% 1.96% 6.37% 0.08% 6.54% 2.04% 0.65% 0.49% 0.25% 0.57% 0.90% 0.08% 0.33% 0.90% 0.25% 0.49% 4.90% 0.98% 0.98% 1.55% 0.74% 3.27% 2.04% 3.10%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "924px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1352px"
			}}
			background={{
				path: "web-design-1-rIGz2owbeS5HBjU4.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-1-rIGz2owbeS5HBjU4.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"z3EJ6U"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 3,
					"--grid-row": "4/14",
					"--grid-column": "18/42",
					"--m-grid-row": "2/12",
					"--m-grid-column": "1/36"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"z3EJ6U"}
					background={"rgb(223, 255, 129)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"}
					opacity={"1"}
					height={"280px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zQKSmT"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 4,
					"--grid-row": "11/22",
					"--grid-column": "36/52",
					"--m-grid-row": "10/24",
					"--m-grid-column": "24/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zQKSmT"}
					background={"rgb(255, 198, 54)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 25px 50px -12px rgba(0, 0, 0, 0.25)"}
					opacity={"1"}
					height={"264px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zi9qI3"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 2,
					"--grid-row": "20/27",
					"--grid-column": "24/43",
					"--m-grid-row": "17/33",
					"--m-grid-column": "1/43"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zi9qI3"}
					background={"rgb(223, 255, 129)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"}
					opacity={"1"}
					height={"271px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zHqsul"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "35/37",
					"--grid-column": "19/49",
					"--m-grid-row": "28/34",
					"--m-grid-column": "6/47",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zHqsul"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>MÔN HỌC CHÍNH (CẤU TRÚC THI THỰC TẾ)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zdSK7V"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "39/41",
					"--grid-column": "19/23",
					"--m-grid-row": "45/46",
					"--m-grid-column": "9/21"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zdSK7V"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Hình họa chì (V)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zlKGBw"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "40/42",
					"--grid-column": "38/45",
					"--m-grid-row": "51/52",
					"--m-grid-column": "1/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zlKGBw"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Trang trí màu (H)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z6HL_H"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "45/48",
					"--grid-column": "17/29",
					"--m-grid-row": "46/47",
					"--m-grid-column": "1/33"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z6HL_H"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng hình – tỷ lệ – cấu trúc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tĩnh vật – đầu tượng – chân dung</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Ánh sáng, khối, chất liệu</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zHjicd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "44/47",
					"--grid-column": "37/54",
					"--m-grid-row": "52/53",
					"--m-grid-column": "20/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zHjicd"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Nguyên lý màu sắc – hòa sắc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu – sáng tạo họa tiết</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Bố cục – giải đề thi</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zLow1t"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "50/52",
					"--grid-column": "19/27",
					"--m-grid-row": "48/49",
					"--m-grid-column": "10/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"zLow1t"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/hinh-hoa-chi"}
					target={"_self"}
					fontFamily={"Montserrat"}
					fontWeight={500}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"44.166666666666664vw"}
					mobileHeightVw={"4.444444444444445vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z4epF0"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "8/13",
					"--grid-column": "40/44",
					"--m-grid-row": "5/12",
					"--m-grid-column": "29/51"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"z4epF0"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={123}
					desktopHeight={181}
					mobileWidth={131}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zAGDbQ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 12,
					"--grid-row": "17/19",
					"--grid-column": "31/33",
					"--m-grid-row": "30/33",
					"--m-grid-column": "11/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zAGDbQ"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"star"}
					height={32}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zh1dZO"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 13,
					"--grid-row": "23/24",
					"--grid-column": "7/10",
					"--m-grid-row": "39/40",
					"--m-grid-column": "8/12"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zh1dZO"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(159, 227, 58)"}
					shape={"ellipse"}
					height={31}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zE_ygR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 14,
					"--grid-row": "33/34",
					"--grid-column": "51/56",
					"--m-grid-row": "23/26",
					"--m-grid-column": "41/45"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zE_ygR"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"triangle"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zPix9f"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "21/31",
					"--grid-column": "41/53",
					"--m-grid-row": "51/56",
					"--m-grid-column": "13/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zPix9f"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={248}
					desktopHeight={308}
					mobileWidth={89}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zICpqK"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 16,
					"--grid-row": "49/53",
					"--grid-column": "13/15",
					"--m-grid-row": "25/29",
					"--m-grid-column": "28/31"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zICpqK"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"star"}
					height={43}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zM5Mca"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 17,
					"--grid-row": "43/46",
					"--grid-column": "62/63",
					"--m-grid-row": "2/3",
					"--m-grid-column": "2/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zM5Mca"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zJqMAw"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 18,
					"--grid-row": "28/29",
					"--grid-column": "14/16",
					"--m-grid-row": "36/38",
					"--m-grid-column": "1/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zJqMAw"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"triangle"}
					height={17}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zWtxbb"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 19,
					"--grid-row": "30/32",
					"--grid-column": "34/35",
					"--m-grid-row": "42/44",
					"--m-grid-column": "50/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zWtxbb"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zPbYab"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 20,
					"--grid-row": "16/18",
					"--grid-column": "26/27",
					"--m-grid-row": "6/7",
					"--m-grid-column": "42/44"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zPbYab"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSpvTF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 21,
					"--grid-row": "36/38",
					"--grid-column": "4/6",
					"--m-grid-row": "22/27",
					"--m-grid-column": "23/27"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zSpvTF"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"dodecagram"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zbzayE"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 22,
					"--grid-row": "25/26",
					"--grid-column": "57/59",
					"--m-grid-row": "32/35",
					"--m-grid-column": "39/41"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zbzayE"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"dodecagram"}
					height={24}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zOtW8U"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 23,
					"--grid-row": "51/54",
					"--grid-column": "39/46",
					"--m-grid-row": "54/55",
					"--m-grid-column": "23/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"zOtW8U"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/trang-tri-mau"}
					target={"_self"}
					fontFamily={"Montserrat"}
					fontWeight={500}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"45.55555555555556vw"}
					mobileHeightVw={"4.722222222222222vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcNkGh"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 24,
					"--grid-row": "56/57",
					"--grid-column": "1/2",
					"--m-grid-row": "15/16",
					"--m-grid-column": "17/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zcNkGh"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_FpAh"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 25,
					"--grid-row": "53/55",
					"--grid-column": "58/61",
					"--m-grid-row": "19/20",
					"--m-grid-column": "34/37"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z_FpAh"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={40}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z7-GEc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 1,
					"--grid-row": "10/12",
					"--grid-column": "47/55",
					"--m-grid-row": "8/11",
					"--m-grid-column": "46/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z7-GEc"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(159, 227, 58)"}
					shape={"dodecagram"}
					height={46}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ztubxD"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 26,
					"--grid-row": "3/6",
					"--grid-column": "9/11",
					"--m-grid-row": "20/21",
					"--m-grid-column": "48/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"ztubxD"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zMFiYi"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 27,
					"--grid-row": "14/15",
					"--grid-column": "3/5",
					"--m-grid-row": "14/15",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zMFiYi"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"triangle"}
					height={33}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zdWA6g"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 28,
					"--grid-row": "5/7",
					"--grid-column": "48/50",
					"--m-grid-row": "2/4",
					"--m-grid-column": "35/38"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zdWA6g"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zOmfMJ"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 29,
					"--grid-row": "59/61",
					"--grid-column": "8/28",
					"--m-grid-row": "58/59",
					"--m-grid-column": "1/52",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zOmfMJ"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>HÌNH THỨC TƯƠNG TÁC</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zfh4Je"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 30,
					"--grid-row": "58/60",
					"--grid-column": "40/60",
					"--m-grid-row": "57/58",
					"--m-grid-column": "1/52",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zfh4Je"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>MÔI TRƯỜNG HỌC TẬP</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zy2y8k"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 31,
					"--grid-row": "61/62",
					"--grid-column": "19/49",
					"--m-grid-row": "37/43",
					"--m-grid-column": "15/40",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zy2y8k"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>MÔN HỌC CHÍNH </strong></span><span style=\"--fontSizeMobile: 14px; font-weight: 700;\"><strong>(CẤU TRÚC THI THỰC TẾ)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRy6IS"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 32,
					"--grid-row": "63/64",
					"--grid-column": "22/39",
					"--m-grid-row": "4/9",
					"--m-grid-column": "7/32"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRy6IS"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>ĐỐI TƯỢNG PHÙ HỢP</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học sinh lớp 10 – 12 định hướng thi khối H, V</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉Người mới bắt đầu (mất gốc hoàn toàn vẫn học được)</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học viên cần luyện thi cấp tốc giai đoạn nước rút</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">👉 Người muốn theo đuổi ngành: Thiết kế, Kiến trúc, Mỹ thuật</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zJ0Azw"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 33,
					"--grid-row": "65/66",
					"--grid-column": "20/30",
					"--m-grid-row": "13/23",
					"--m-grid-column": "26/49"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zJ0Azw"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>PHƯƠNG PHÁP DẠY</strong></h5><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"> Giảng dễ hiểu, đi từ bản chất → ứng dụng</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Kết hợp lý thuyết và thực hành ngay tại lớp</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Cá nhân hoá theo trình độ từng học viên</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kiểm tra định kỳ để theo dõi tiến độ</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zB2Ggx"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 34,
					"--grid-row": "67/68",
					"--grid-column": "12/25",
					"--m-grid-row": "18/31",
					"--m-grid-column": "5/22"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zB2Ggx"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>LỢI ÍCH KHI HỌC OFFLINE</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Tương tác trực tiếp – hiểu bài ngay tại lớp</span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Giảng viên theo sát từng học viên.</span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Môi trường học tập tập trung cao</span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 400;\">Rèn kỹ năng làm bài &amp; phản xạ thi</span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zDOGPh"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 35,
					"--grid-row": "68/69",
					"--grid-column": "41/53",
					"--m-grid-row": "41/50",
					"--m-grid-column": "30/47"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zDOGPh"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={248}
					desktopHeight={308}
					mobileWidth={113}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z6AUY8"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 36,
					"--grid-row": "2/9",
					"--grid-column": "21/32",
					"--m-grid-row": "60/61",
					"--m-grid-column": "16/37",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z6AUY8"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"--fontSizeMobile: 14px; font-weight: 700;\"><strong>HÌNH THỨC </strong></span><span style=\"font-weight: 700;\"><strong>TƯƠNG TÁC</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
