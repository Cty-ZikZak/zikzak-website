import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zT2XBd"}
			htmlId={"zT2XBd"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "22.22vw auto 12px",
				"--t-grid-template-rows": "minmax(80px, auto) minmax(26px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(9.80vw, auto) minmax(3.43vw, auto) 27.61vw",
				"--grid-template-rows": "minmax(120px, auto) minmax(42px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "54.08% 43.22% 2.70%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "118px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "500px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zMsZRq"}
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
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zMsZRq"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(82, 226, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>ZIKZAK NHẬN IN NHỮNG GÌ?</strong></span></h3>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
