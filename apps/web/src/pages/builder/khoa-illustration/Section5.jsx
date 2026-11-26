import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"z2WDxq"}
			htmlId={"z2WDxq"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "21.67vw auto auto 2px",
				"--t-grid-template-rows": "minmax(78px, auto) minmax(26px, auto) minmax(26px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(15.28vw, auto) minmax(3.43vw, auto) minmax(0.90vw, auto) minmax(3.92vw, auto) 0.25vw",
				"--grid-template-rows": "minmax(187px, auto) minmax(42px, auto) minmax(11px, auto) minmax(48px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "32.11% 4.33% 27.04% 4.41% 32.11%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "132px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "291px"
			}}
			background={{
				path: "cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-4-G4JhMBn0EdXg9PCM.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zEKrOI"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "3/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zEKrOI"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>LỘ TRÌNH ĐÀO TẠO</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpLy3f"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/5",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpLy3f"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">👉 Tổng thời lượng: <strong>8 buổi (mỗi buổi 2.5 – 4 giờ)</strong><br>👉 Hình thức: Học online / offline + thực hành trực tiếp</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
