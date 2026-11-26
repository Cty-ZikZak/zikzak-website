import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"zCjbsZ"}
			htmlId={"zCjbsZ"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "66.67vw auto 2px",
				"--t-grid-template-rows": "minmax(240px, auto) minmax(92px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(67.32vw, auto) minmax(7.03vw, auto) 12.25vw",
				"--grid-template-rows": "minmax(824px, auto) minmax(86px, auto) 1fr",
				"--m-grid-template-columns": "8.84% 82.01% 9.15%",
				"--grid-template-columns": "14.38% 71.24% 14.38%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "334px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1060px"
			}}
			background={{
				path: "web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-1-qc1JOWRYyDGPfu9O.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"z2Uh2Q"}
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
					id={"z2Uh2Q"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(204, 0, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 14px;\"><strong>Vẽ digital trên iPad – Biến ý tưởng thành tranh chuyên nghiệp</strong></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Khóa học Procreate tại ZikZak Art giúp bạn làm chủ iPad, Apple Pencil và tạo tranh minh họa, sticker, nhân vật, artwork cá nhân qua lộ trình dễ hiểu, thực hành liên tục và được chỉnh bài trực tiếp.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
