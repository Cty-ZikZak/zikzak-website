import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zMq7ZG"}
			htmlId={"zMq7ZG"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "33.33vw auto auto 3px",
				"--t-grid-template-rows": "minmax(120px, auto) minmax(26px, auto) minmax(52px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(13.89vw, auto) minmax(3.43vw, auto) minmax(7.11vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(170px, auto) minmax(42px, auto) minmax(87px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "19.04% 8.50% 44.85% 8.58% 19.04%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "201px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "299px"
			}}
			background={{
				path: "web-design-digital-painting-2-HGfHc8MxYETsppcS.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-digital-painting-2-HGfHc8MxYETsppcS.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-HGfHc8MxYETsppcS.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zqbn4g"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
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
					id={"zqbn4g"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(189, 40, 227); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>CHƯƠNG TRÌNH ĐÀO TẠO</strong></span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zO8HPj"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "2/5",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zO8HPj"}
					content={"<h2 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px; margin-bottom: 8px;\"><span style=\"font-family: Montserrat; font-weight: 500;\"><strong>Tổng thời lượng: 56 buổi</strong></span></h2><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chương trình được chia thành 6 chặng học rõ ràng, giúp bạn đi từ người mới bắt đầu đến khi có thể tự hoàn thiện sản phẩm.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
