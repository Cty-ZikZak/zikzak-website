import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section6() {
	return (
		<BlockLayout
			blockId={"zB7klZ"}
			htmlId={"zB7klZ"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto auto 165px",
				"--t-grid-template-rows": "minmax(52px, auto) minmax(13px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(20.42vw, auto) minmax(3.27vw, auto) minmax(2.45vw, auto) 59.56vw",
				"--grid-template-rows": "minmax(250px, auto) minmax(40px, auto) minmax(30px, auto) 1fr",
				"--m-grid-template-columns": "16.46% 66.77% 16.77%",
				"--grid-template-columns": "28.68% 6.70% 29.25% 6.70% 28.68%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "230px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1049px"
			}}
			background={{
				path: "web-design---7-FXU1STHPBgmfi47F.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design---7-FXU1STHPBgmfi47F.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---7-FXU1STHPBgmfi47F.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zo4ow0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/5",
					"--m-grid-row": "1/2",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zo4ow0"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><span style=\"font-weight: 700;\"><strong>THỜI KHÓA BIỂU LỚP ONLINE</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zYjRhn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "3/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zYjRhn"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><strong>(Từ ngày 1/6/2025 - 1/7/2026)</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
