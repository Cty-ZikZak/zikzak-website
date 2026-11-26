import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"zj4Bg4"}
			htmlId={"zj4Bg4"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "58.89vw auto 2px",
				"--t-grid-template-rows": "minmax(212px, auto) minmax(62px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(68.46vw, auto) minmax(8.66vw, auto) 15.44vw",
				"--grid-template-rows": "minmax(838px, auto) minmax(106px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "21.57% 56.86% 21.57%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "276px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1133px"
			}}
			background={{
				path: "web-design---3-1IhrpXAbwEFVZYYa.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design---3-1IhrpXAbwEFVZYYa.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design---3-1IhrpXAbwEFVZYYa.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"ai-Axs82D"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--m-text": "center",
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
					id={"ai-Axs82D"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 10px;\">Không chỉ là lớp học, Workshop tại Zikzak là không gian để bạn <span style=\"color: rgb(240, 106, 133);\"><strong>thử – chơi – sáng tạo</strong></span> với nhiều chất liệu thú vị.</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Từ những vật dụng quen thuộc như áo, nón lá, heo đất… dưới bàn tay của bạn, tất cả đều có thể trở thành <strong>tác phẩm độc nhất</strong>.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
