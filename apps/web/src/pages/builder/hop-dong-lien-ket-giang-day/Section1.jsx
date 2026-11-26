import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"zMm8uh"}
			htmlId={"zMm8uh"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "28.89vw auto 2px",
				"--t-grid-template-rows": "minmax(104px, auto) minmax(65px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(37.91vw, auto) minmax(5.88vw, auto) 9.80vw",
				"--grid-template-rows": "minmax(464px, auto) minmax(72px, auto) 1fr",
				"--m-grid-template-columns": "1.52% 96.65% 1.83%",
				"--grid-template-columns": "14.13% 71.73% 14.13%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "171px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "656px"
			}}
			background={{
				path: "wed-design---halkgd-QhtIb2sRffVREFpI.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/wed-design---halkgd-QhtIb2sRffVREFpI.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"ai-N7S4TO"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-N7S4TO"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">ZikZak triển khai mô hình liên kết giảng dạy Mỹ thuật cho các trường<span style=\"font-weight: 700;\"><strong> </strong></span><span style=\"color: rgb(25, 0, 200); font-weight: 700;\"><strong>Mầm non – Tiểu học – THCS – THPT tại TP.HCM</strong></span>, đồng hành xây dựng chương trình, tổ chức lớp ngoại khóa và hoạt động nghệ thuật, giúp học sinh học vẽ bài bản, sáng tạo và giàu cảm hứng hơn.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
