import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"zdOfPI"}
			htmlId={"zdOfPI"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "49.44vw auto 67px",
				"--t-grid-template-rows": "minmax(178px, auto) minmax(126px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(54.98vw, auto) minmax(16.26vw, auto) 46.81vw",
				"--grid-template-rows": "minmax(673px, auto) minmax(199px, auto) 1fr",
				"--m-grid-template-columns": "7.93% 37.50% 54.57%",
				"--grid-template-columns": "16.83% 32.03% 51.14%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "371px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1445px"
			}}
			background={{
				path: "cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-1-5tTXFUotUqi2VmYo.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zGyc9Q"}
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
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zGyc9Q"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Khóa học phù hợp với</strong></span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Người mới bắt đầu</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Designer đồ họa</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Sinh viên thiết kế</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Nhân viên Marketing</span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 400;\">Freelancer</span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
