import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zl7gd7"}
			htmlId={"zl7gd7"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto 16.67vw auto auto 1px",
				"--t-grid-template-rows": "minmax(52px, auto) minmax(60px, auto) minmax(40px, auto) minmax(25px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(5.23vw, auto) minmax(9.80vw, auto) minmax(6.54vw, auto) minmax(4.90vw, auto) minmax(2.45vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(64px, auto) minmax(120px, auto) minmax(80px, auto) minmax(60px, auto) minmax(30px, auto) 1fr",
				"--m-grid-template-columns": "5.18% 89.33% 5.49%",
				"--grid-template-columns": "0.25% 15.77% 7.27% 0.16% 19.36% 57.19%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "178px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "354px"
			}}
			background={{
				color: "rgb(76, 205, 17)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zpkDtS"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "4/5",
					"--grid-column": "1/5",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpkDtS"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><strong>FEEDBACK</strong></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zyfVD7"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "5/6",
					"--grid-column": "2/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zyfVD7"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(255, 209, 25);\"><strong>CỦA HỌC VIÊN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zwTaNM"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "2/3",
					"--grid-column": "3/6",
					"--m-grid-row": "1/2",
					"--m-grid-column": "2/3",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zwTaNM"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Học viên cần hoàn thành 2 khóa nền tảng: <strong>Hình Họa Chì</strong> và <strong>Trang Trí Màu</strong> trước khi bước vào giai đoạn luyện đề chuyên sâu gồm: <strong>Hình Họa Chân Dung, Hình Họa Toàn Thân và Bố Cục Màu</strong>.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
