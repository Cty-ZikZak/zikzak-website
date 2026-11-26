import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zKnUO_"}
			htmlId={"zKnUO_"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "10.83vw auto auto 0px",
				"--t-grid-template-rows": "minmax(39px, auto) minmax(23px, auto) minmax(31px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.27vw, auto) minmax(3.27vw, auto) minmax(0.16vw, auto) minmax(4.90vw, auto) 19.12vw",
				"--grid-template-rows": "minmax(40px, auto) minmax(40px, auto) minmax(2px, auto) minmax(60px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "32.68% 20.34% 46.98%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "93px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "376px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"znzCvv"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/4",
					"--grid-column": "1/2",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"znzCvv"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tranh vẽ</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1Gw5p"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/5",
					"--grid-column": "1/3",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z1Gw5p"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(82, 226, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 48px;\"><span style=\"font-weight: 700;\"><strong>LỚP CHUYÊN NGHIỆP</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
