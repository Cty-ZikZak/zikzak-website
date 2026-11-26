import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section7() {
	return (
		<BlockLayout
			blockId={"zKG9Th"}
			htmlId={"zKG9Th"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "20.28vw auto 1.67vw auto 44px",
				"--t-grid-template-rows": "minmax(73px, auto) minmax(31px, auto) minmax(6px, auto) minmax(70px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(10.70vw, auto) minmax(3.43vw, auto) minmax(6.54vw, auto) 12.99vw",
				"--grid-template-rows": "minmax(131px, auto) minmax(42px, auto) minmax(80px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "27.45% 10.46% 24.18% 10.38% 27.53%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "224px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "412px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zo5JNA"}
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
					id={"zo5JNA"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(239, 106, 132); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>LỊCH WORKSHOP</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcEY1Z"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "2/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zcEY1Z"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 12px; margin-bottom: 8px;\">📅 <strong>Chủ nhật mỗi tuần</strong><br>📌 Có thể đăng ký theo nhóm / lớp riêng</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 12px;\">👉 Theo dõi fanpage hoặc inbox để cập nhật lịch mỗi tuần mới nhất</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
