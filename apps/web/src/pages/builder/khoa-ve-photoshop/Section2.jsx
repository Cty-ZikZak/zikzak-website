import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"zix_Er"}
			htmlId={"zix_Er"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "4.44vw auto 209px",
				"--t-grid-template-rows": "minmax(16px, auto) minmax(99px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(66.67vw, auto) minmax(8.50vw, auto) 13.81vw",
				"--grid-template-rows": "minmax(816px, auto) minmax(104px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "14.38% 71.24% 14.38%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "324px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1089px"
			}}
			background={{
				path: "cac-khaa-digital-NMV3cc641SRmvyN8.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/cac-khaa-digital-NMV3cc641SRmvyN8.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/cac-khaa-digital-NMV3cc641SRmvyN8.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zBEPB2"}
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
					id={"zBEPB2"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Tại ZikZak Art, khóa học Photoshop Painting được xây dựng dành riêng cho những ai yêu thích <span style=\"color: rgb(204, 0, 255);\"><strong>vẽ kỹ thuật số, concept art, illustration và sáng tạo hình ảnh chuyên nghiệp</strong></span> bằng phần mềm Adobe Photoshop. </p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dù bạn là người mới bắt đầu hay đã biết cơ bản, khóa học sẽ giúp bạn từng bước làm chủ tư duy hình khối, ánh sáng, màu sắc và kỹ thuật digital painting hiện đại.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
