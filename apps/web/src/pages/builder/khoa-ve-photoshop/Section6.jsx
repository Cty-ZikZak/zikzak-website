import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section6() {
	return (
		<BlockLayout
			blockId={"zf07L5"}
			htmlId={"zf07L5"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "17.78vw auto 0.28vw auto 1px",
				"--t-grid-template-rows": "minmax(64px, auto) minmax(26px, auto) minmax(1px, auto) minmax(133px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(16.34vw, auto) minmax(3.43vw, auto) minmax(1.14vw, auto) minmax(12.83vw, auto) 0.41vw",
				"--grid-template-rows": "minmax(200px, auto) minmax(42px, auto) minmax(14px, auto) minmax(157px, auto) 1fr",
				"--m-grid-template-columns": "5.49% 89.02% 5.49%",
				"--grid-template-columns": "19.04% 8.50% 44.85% 8.58% 19.04%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "225px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "418px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zoupsc"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "3/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zoupsc"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(189, 40, 227); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>CHƯƠNG TRÌNH ĐÀO TẠO</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSX-xC"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zSX-xC"}
					content={"<h2 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Lộ trình </strong></span><span style=\"color: rgb(189, 40, 227); font-weight: 700;\"><strong>32 buổi</strong></span><span style=\"font-weight: 700;\"><strong> được xây dựng như một hành trình phát triển tư duy Artist chuyên nghiệp</strong></span></h2><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span>Thay vì học rời rạc từng công cụ, khóa học tại ZIKZAK ART được thiết kế theo mô hình phát triển kỹ năng thực chiến — từ nền tảng hội họa đến quy trình tạo artwork hoàn chỉnh bằng Adobe Photoshop.</span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span>Trong suốt 32 buổi học, học viên sẽ liên tục được thực hành, chỉnh bài và nâng cấp tư duy hình ảnh theo từng giai đoạn rõ ràng.</span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
