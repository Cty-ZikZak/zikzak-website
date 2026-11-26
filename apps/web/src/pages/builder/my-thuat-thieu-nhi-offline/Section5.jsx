import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zvvVfl"}
			htmlId={"zvvVfl"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "10.56vw auto 194px",
				"--t-grid-template-rows": "minmax(38px, auto) minmax(42px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.54vw, auto) minmax(3.43vw, auto) 58.09vw",
				"--grid-template-rows": "minmax(80px, auto) minmax(42px, auto) 1fr",
				"--m-grid-template-columns": "12.80% 48.17% 39.02%",
				"--grid-template-columns": "23.37% 30.64% 46.00%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "274px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "833px"
			}}
			background={{
				path: "starter-pY4IH3wjPZJkaSMH.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/starter-pY4IH3wjPZJkaSMH.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/starter-pY4IH3wjPZJkaSMH.png?width=2560&fit=crop 2560w"
			}}
			backgroundImagePosition={100}
		>
			<LayoutElement
				elementId={"zn21SJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zn21SJ"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 149, 51); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 16px; --fontSizeDesktop: 32px;\"><strong>HỌC VIÊN TẠI ZIKZAK</strong></h5>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
