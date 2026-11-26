import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section8() {
	return (
		<BlockLayout
			blockId={"zqZzWA"}
			htmlId={"zqZzWA"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "22.22vw auto 0px",
				"--t-grid-template-rows": "minmax(80px, auto) minmax(60px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.27vw, auto) minmax(3.27vw, auto) 34.31vw",
				"--grid-template-rows": "minmax(40px, auto) minmax(40px, auto) 1fr",
				"--m-grid-template-columns": "11.28% 77.13% 11.59%",
				"--grid-template-columns": "25.25% 49.51% 25.25%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "140px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "500px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"z8pLip"}
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
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z8pLip"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(25, 0, 200);\"><strong>THỜI KHÓA BIỂU TUẦN 2 - THÁNG 4</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
