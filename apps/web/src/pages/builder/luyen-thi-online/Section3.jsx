import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"zENEAN"}
			htmlId={"zENEAN"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "1.11vw auto 0px",
				"--t-grid-template-rows": "minmax(4px, auto) minmax(60px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(4.08vw, auto) minmax(6.54vw, auto) minmax(4.08vw, auto) minmax(6.54vw, auto) 19.61vw",
				"--grid-template-rows": "minmax(50px, auto) minmax(80px, auto) minmax(50px, auto) minmax(80px, auto) 1fr",
				"--m-grid-template-columns": "48.17% 16.77% 35.06%",
				"--grid-template-columns": "17.73% 6.37% 20.42% 6.37% 49.10%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "64px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "500px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zRAXrd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "3/5",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRAXrd"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"--fontSizeMobile: 14px; font-weight: 700;\"><strong>HÌNH THỨC </strong></span><span style=\"font-weight: 700;\"><strong>TƯƠNG TÁC</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zixLs9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "3/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zixLs9"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"--fontSizeMobile: 14px; font-weight: 700;\"><strong>MÔI TRƯỜNG</strong></span><span style=\"font-weight: 700;\"><strong> HỌC TẬP</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
