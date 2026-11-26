import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zUa7NJ"}
			htmlId={"zUa7NJ"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "0.28vw auto 17.50vw auto auto 0px",
				"--t-grid-template-rows": "minmax(1px, auto) minmax(39px, auto) minmax(63px, auto) minmax(31px, auto) minmax(23px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.92vw, auto) minmax(3.76vw, auto) minmax(4.90vw, auto) minmax(2.45vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(48px, auto) minmax(46px, auto) minmax(60px, auto) minmax(30px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "2.04% 0.25% 8.74% 7.11% 7.35% 40.85% 33.66%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "157px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "184px"
			}}
			background={{
				color: "rgb(76, 205, 17)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"z3cpbm"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "3/4",
					"--grid-column": "2/6",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3cpbm"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 24px;\"><strong>FEEDBACK</strong></h3>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zm98rC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "3/5",
					"--m-grid-row": "5/6",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zm98rC"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(255, 209, 25); --lineHeightMobile: 1.3; --fontSizeMobile: 18px;\"><strong>CỦA HỌC VIÊN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zKxr9m"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "1/2",
					"--grid-column": "4/7",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zKxr9m"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Học viên cần hoàn thành 2 khóa nền tảng: <strong>Hình Họa Chì</strong> và <strong>Trang Trí Màu</strong> trước khi luyện đề chuyên sâu: <strong>Chân Dung, Toàn Thân</strong> và <strong>Bố Cục Màu</strong>.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
