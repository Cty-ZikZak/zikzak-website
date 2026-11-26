import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section7() {
	return (
		<BlockLayout
			blockId={"z8FNdX"}
			htmlId={"z8FNdX"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto auto 15px",
				"--t-grid-template-rows": "minmax(31px, auto) minmax(26px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(4.41vw, auto) minmax(3.43vw, auto) minmax(3.92vw, auto) 3.10vw",
				"--grid-template-rows": "minmax(54px, auto) minmax(42px, auto) minmax(48px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "32.11% 4.33% 27.04% 4.41% 32.11%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "72px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "182px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zO2Uv9"}
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
					"--m-grid-row": "1/2",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zO2Uv9"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>LỘ TRÌNH ĐÀO TẠO</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zjN4-1"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "2/5",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zjN4-1"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">👉 Tổng thời lượng: <strong>8 buổi (mỗi buổi 2.5 – 4 giờ)</strong><br>👉 Hình thức: Học online / offline + thực hành trực tiếp</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
