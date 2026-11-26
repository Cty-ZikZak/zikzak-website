import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridCard from '@/components/builder/elements/GridCard';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section9() {
	return (
		<BlockLayout
			blockId={"zyflw0"}
			htmlId={"zyflw0"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "3.33vw auto 5.56vw auto 13.89vw auto 6.67vw auto 1.11vw auto 4.44vw auto 5.56vw auto 1.11vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 0px",
				"--t-grid-template-rows": "minmax(12px, auto) minmax(52px, auto) minmax(20px, auto) minmax(50px, auto) minmax(50px, auto) minmax(56px, auto) minmax(24px, auto) minmax(52px, auto) minmax(4px, auto) minmax(64px, auto) minmax(16px, auto) minmax(44px, auto) minmax(20px, auto) minmax(200px, auto) minmax(4px, auto) minmax(48px, auto) minmax(16px, auto) minmax(24px, auto) minmax(16px, auto) minmax(48px, auto) minmax(16px, auto) minmax(24px, auto) minmax(16px, auto) minmax(72px, auto) minmax(16px, auto) minmax(72px, auto) minmax(16px, auto) minmax(48px, auto) minmax(16px, auto) minmax(48px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(13.07vw, auto) minmax(3.43vw, auto) minmax(4.17vw, auto) minmax(0.41vw, auto) minmax(2.37vw, auto) minmax(0.90vw, auto) minmax(3.02vw, auto) minmax(0.90vw, auto) minmax(5.88vw, auto) minmax(1.06vw, auto) minmax(2.21vw, auto) minmax(0.49vw, auto) minmax(1.31vw, auto) minmax(0.16vw, auto) minmax(3.27vw, auto) minmax(3.92vw, auto) minmax(5.88vw, auto) minmax(3.10vw, auto) minmax(0.16vw, auto) 36.11vw",
				"--grid-template-rows": "minmax(160px, auto) minmax(42px, auto) minmax(51px, auto) minmax(5px, auto) minmax(29px, auto) minmax(11px, auto) minmax(37px, auto) minmax(11px, auto) minmax(72px, auto) minmax(13px, auto) minmax(27px, auto) minmax(6px, auto) minmax(16px, auto) minmax(2px, auto) minmax(40px, auto) minmax(48px, auto) minmax(72px, auto) minmax(38px, auto) minmax(2px, auto) 1fr",
				"--m-grid-template-columns": "4.27% 3.35% 12.80% 58.84% 13.11% 3.35% 4.27%",
				"--grid-template-columns": "2.12% 1.55% 1.55% 16.09% 1.63% 1.55% 2.04% 1.80% 1.39% 1.14% 13.24% 0.49% 2.53% 1.72% 2.21% 2.53% 0.65% 16.01% 0.65% 2.53% 1.88% 0.08% 1.63% 0.25% 1.39% 15.85% 1.31% 1.96% 2.21%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1164px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1124px"
			}}
			background={{
				path: "cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png",
				color: "rgb(0, 172, 254)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-3-9Ex85RxDGYTq3nBb.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zhmT7I"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "6/24",
					"--m-grid-row": "2/3",
					"--m-grid-column": "3/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zhmT7I"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>SAU KHÓA HỌC BẠN SẼ LÀM ĐƯỢC GÌ?</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zXSB84"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 2,
					"--grid-row": "5/12",
					"--grid-column": "2/7",
					"--m-grid-row": "4/5",
					"--m-grid-column": "2/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zXSB84"}
					background={"rgb(254, 253, 227)"}
					border={"1px solid rgba(0, 0, 0, 0)"}
					borderRadius={"30px"}
					boxShadow={"none"}
					opacity={"1"}
					height={"200px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziAb6d"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 3,
					"--grid-row": "15/20",
					"--grid-column": "8/15",
					"--m-grid-row": "10/11",
					"--m-grid-column": "2/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"ziAb6d"}
					background={"rgba(0, 174, 255, 0)"}
					border={"2px solid rgb(254, 253, 227)"}
					borderRadius={"30px"}
					boxShadow={"none"}
					opacity={"1"}
					height={"200px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zAjrRP"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 4,
					"--grid-row": "5/12",
					"--grid-column": "16/21",
					"--m-grid-row": "6/7",
					"--m-grid-column": "2/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zAjrRP"}
					background={"rgb(244, 246, 228)"}
					border={"1px solid rgba(0, 0, 0, 0)"}
					borderRadius={"30px"}
					boxShadow={"none"}
					opacity={"1"}
					height={"200px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zwLfHe"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 5,
					"--grid-row": "5/12",
					"--grid-column": "23/29",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zwLfHe"}
					background={"rgba(0, 174, 255, 0)"}
					border={"2px solid rgb(244, 246, 228)"}
					borderRadius={"30px"}
					boxShadow={"none"}
					opacity={"1"}
					height={"200px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zMh6Oe"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "14/19",
					"--grid-column": "22/29",
					"--m-grid-row": "12/13",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zMh6Oe"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/chatgpt-image-may-8-2026-08_11_27-pm-OxwAJPzgkXomYyd6.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/chatgpt-image-may-8-2026-08_11_27-pm-OxwAJPzgkXomYyd6.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/chatgpt-image-may-8-2026-08_11_27-pm-OxwAJPzgkXomYyd6.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/chatgpt-image-may-8-2026-08_11_27-pm-OxwAJPzgkXomYyd6.png?width=1024&fit=crop 1024w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={275}
					desktopHeight={200}
					mobileWidth={328}
					desktopBorderRadius={"30px"}
					mobileBorderRadius={"30px"}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zTaSrU"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "4/13",
					"--grid-column": "10/12",
					"--m-grid-row": "14/15",
					"--m-grid-column": "4/5"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zTaSrU"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-vJA0X8Sw9gziF34Y.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-vJA0X8Sw9gziF34Y.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-vJA0X8Sw9gziF34Y.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={176}
					desktopHeight={211}
					mobileWidth={193}
					desktopBorderRadius={"30px"}
					mobileBorderRadius={"30px"}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zifUOw"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "6/8",
					"--grid-column": "4/5",
					"--m-grid-row": "16/17",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zifUOw"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(158, 80, 255);\"><strong>THIẾT KẾ SOCIAL MEDIA NHANH CHÓNG</strong></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zn7IOz"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "8/11",
					"--grid-column": "3/6",
					"--m-grid-row": "24/25",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zn7IOz"}
					content={"<p dir=\"auto\" class=\"body\">Tự tạo bài đăng Facebook, Instagram, TikTok chuyên nghiệp cho thương hiệu cá nhân hoặc công việc.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zzvQye"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "7/9",
					"--grid-column": "18/19",
					"--m-grid-row": "20/21",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zzvQye"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(158, 80, 255);\"><span style=\"font-weight: 700;\"><strong>TỰ LÀM SLIDE THUYẾT TRÌNH ẤN TƯỢNG</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zA_Snp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "9/10",
					"--grid-column": "17/20",
					"--m-grid-row": "28/29",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zA_Snp"}
					content={"<p dir=\"auto\" class=\"body\">Thiết kế slide hiện đại, trực quan và có tính thẩm mỹ cao.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zCrm3c"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "7/9",
					"--grid-column": "26/27",
					"--m-grid-row": "22/23",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zCrm3c"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>TỰ TẠO VIDEO CONTENT ĐƠN GIẢN</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zMG9dR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "9/10",
					"--grid-column": "25/28",
					"--m-grid-row": "30/31",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zMG9dR"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Làm video ngắn phục vụ social media, quảng bá sản phẩm hoặc học tập.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zvXURg"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "16/17",
					"--grid-column": "11/13",
					"--m-grid-row": "18/19",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zvXURg"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>TỰ CHỦ HÌNH ẢNH THƯƠNG HIỆU</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5B6tn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "17/18",
					"--grid-column": "9/14",
					"--m-grid-row": "26/27",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z5B6tn"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Không còn phụ thuộc hoàn toàn vào designer cho các nhu cầu thiết kế cơ bản.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
