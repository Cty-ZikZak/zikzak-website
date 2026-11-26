import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section6() {
	return (
		<BlockLayout
			blockId={"zPUX1c"}
			htmlId={"zPUX1c"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "17.78vw 4.17vw auto 6.39vw 4px",
				"--t-grid-template-rows": "minmax(64px, auto) minmax(15px, auto) minmax(8px, auto) minmax(23px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.43vw, auto) minmax(3.27vw, auto) minmax(0.16vw, auto) minmax(4.90vw, auto) 21.65vw",
				"--grid-template-rows": "minmax(42px, auto) minmax(40px, auto) minmax(2px, auto) minmax(60px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "67.32% 32.68%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "114px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "409px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zS7N26"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/4",
					"--grid-column": "2/3",
					"--m-grid-row": "2/4",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zS7N26"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tranh vẽ</strong></span></h3>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z-c8cU"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/5",
					"--grid-column": "2/3",
					"--m-grid-row": "3/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z-c8cU"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(82, 226, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 48px;\"><span style=\"font-weight: 700;\"><strong>LỚP LUYỆN THI</strong></span></h3>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
