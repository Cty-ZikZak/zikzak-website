import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zN7u99"}
			htmlId={"zN7u99"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "10.56vw auto 8px",
				"--t-grid-template-rows": "minmax(38px, auto) minmax(26px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(1.96vw, auto) minmax(3.43vw, auto) 0.98vw",
				"--grid-template-rows": "minmax(24px, auto) minmax(42px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "29.00% 41.99% 29.00%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "72px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "78px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zhuruC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
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
					id={"zhuruC"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>LỢI ÍCH KHI HỌC PHOTOSHOP</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
