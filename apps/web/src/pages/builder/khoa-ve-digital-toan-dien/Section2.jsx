import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"z0FT_l"}
			htmlId={"z0FT_l"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "62.22vw auto 4px",
				"--t-grid-template-rows": "minmax(224px, auto) minmax(73px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(64.05vw, auto) minmax(8.50vw, auto) 8.33vw",
				"--grid-template-rows": "minmax(784px, auto) minmax(104px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "15.69% 71.24% 13.07%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "301px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "990px"
			}}
			background={{
				path: "web-design-digital-painting-UJU00AssIvOni9Yp.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-digital-painting-UJU00AssIvOni9Yp.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-UJU00AssIvOni9Yp.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zCmVDd"}
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
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zCmVDd"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Yêu thích vẽ digital nhưng chưa biết bắt đầu từ đâu? Khóa học tại ZikZak Art giúp bạn<span style=\"color: rgb(204, 0, 255);\"> </span><span style=\"color: rgb(204, 0, 255); font-weight: 700;\"><strong>làm quen công cụ, luyện nét, dựng hình, phối màu và hoàn thiện artwork cá nhân.</strong></span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Không chỉ học phần mềm, bạn còn được rèn tư duy quan sát, sửa bài, tạo nhân vật, không gian và cảm xúc cho tranh.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
