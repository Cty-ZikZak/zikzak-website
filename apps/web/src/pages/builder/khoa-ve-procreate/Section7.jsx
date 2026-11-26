import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section7() {
	return (
		<BlockLayout
			blockId={"zwujL1"}
			htmlId={"zwujL1"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto auto 16px",
				"--t-grid-template-rows": "minmax(31px, auto) minmax(65px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(21.24vw, auto) minmax(3.43vw, auto) minmax(7.11vw, auto) 0.41vw",
				"--grid-template-rows": "minmax(260px, auto) minmax(42px, auto) minmax(87px, auto) 1fr",
				"--m-grid-template-columns": "6.71% 86.28% 7.01%",
				"--grid-template-columns": "19.04% 8.50% 44.85% 8.58% 19.04%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "112px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "394px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zDInFx"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "3/4",
					"--m-grid-row": "1/2",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zDInFx"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(189, 40, 227); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>CHƯƠNG TRÌNH ĐÀO TẠO</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zLW0r8"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "2/5",
					"--m-grid-row": "2/3",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zLW0r8"}
					content={"<h2 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px; margin-bottom: 8px;\"><span style=\"font-family: Montserrat; font-weight: 500;\"><strong>Tổng thời lượng: 32 buổi</strong></span></h2><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span>Chương trình được chia thành 5 chặng học rõ ràng, giúp bạn đi từ người mới bắt đầu đến khi có thể tự hoàn thiện sản phẩm minh họa cá nhân.</span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
