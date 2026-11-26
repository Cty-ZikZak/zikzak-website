import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zmAIxd"}
			htmlId={"zmAIxd"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "38.33vw auto 140px",
				"--t-grid-template-rows": "minmax(138px, auto) minmax(126px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(49.02vw, auto) minmax(16.83vw, auto) 28.68vw",
				"--grid-template-rows": "minmax(600px, auto) minmax(206px, auto) 1fr",
				"--m-grid-template-columns": "61.89% 38.11%",
				"--grid-template-columns": "16.01% 30.56% 53.43%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "404px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1157px"
			}}
			background={{
				path: "web-design--gd-phone--8-VuItkwPhaHxsp76Y.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--8-VuItkwPhaHxsp76Y.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"z6ZvlC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z6ZvlC"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Khóa học phù hợp với</strong></span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px; margin-bottom: 8px;\">Freelancer</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Người mới bắt đầu học Motion Graphics</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Content Creator / Video Editor</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Sinh viên thiết kế đồ họa</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Người làm social media marketing</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
