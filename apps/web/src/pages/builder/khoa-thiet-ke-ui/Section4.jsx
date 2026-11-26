import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zMc21D"}
			htmlId={"zMc21D"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "51.11vw auto 75px",
				"--t-grid-template-rows": "minmax(184px, auto) minmax(131px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(50.98vw, auto) minmax(17.57vw, auto) 35.29vw",
				"--grid-template-rows": "minmax(624px, auto) minmax(215px, auto) 1fr",
				"--m-grid-template-columns": "64.63% 35.37%",
				"--grid-template-columns": "16.83% 25.41% 57.76%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "390px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1271px"
			}}
			background={{
				path: "cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-design-laoo-nW4tckHlyMrmvxPA.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"z4jKaR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z4jKaR"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Khóa học phù hợp với</strong></span></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Người mới bắt đầu</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Sinh viên ngành Thiết kế, Multimedia, Marketing, CNTT</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Graphic Designer</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Freelancer</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chủ shop, startup </p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
