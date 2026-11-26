import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zGJJta"}
			htmlId={"zGJJta"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "6.67vw auto 4px",
				"--t-grid-template-rows": "minmax(24px, auto) minmax(26px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(10.70vw, auto) minmax(3.27vw, auto) 2.37vw",
				"--grid-template-rows": "minmax(131px, auto) minmax(40px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "33.99% 32.03% 33.99%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "54px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "200px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zUz2NA"}
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
					id={"zUz2NA"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><span style=\"font-weight: 700;\"><strong>BẠN SẼ ĐƯỢC HỌC GÌ?</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
