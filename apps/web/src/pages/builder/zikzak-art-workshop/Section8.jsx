import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section8() {
	return (
		<BlockLayout
			blockId={"zz6Exf"}
			htmlId={"zz6Exf"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "7.50vw 7.50vw auto 3.33vw 1px",
				"--t-grid-template-rows": "minmax(27px, auto) minmax(27px, auto) minmax(12px, auto) minmax(12px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.43vw, auto) minmax(4.08vw, auto) minmax(3.35vw, auto) minmax(1.96vw, auto) 28.02vw",
				"--grid-template-rows": "minmax(42px, auto) minmax(50px, auto) minmax(41px, auto) minmax(24px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "31.70% 36.60% 31.70%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "79px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "500px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zX5W8K"}
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
					"--m-grid-row": "2/4",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zX5W8K"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(239, 106, 132); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>CHỦ ĐỀ TUẦN 1</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zfVvdd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/3",
					"--m-grid-row": "3/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zfVvdd"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 99, 130);\"><span style=\"font-family: Montserrat; font-weight: 500;\"><strong>Tháng 6</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
