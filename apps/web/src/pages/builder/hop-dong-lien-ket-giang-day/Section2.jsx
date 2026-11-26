import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"zmV_fG"}
			htmlId={"zmV_fG"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto 47px",
				"--t-grid-template-rows": "minmax(125px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(37.91vw, auto) minmax(12.42vw, auto) 3.27vw",
				"--grid-template-rows": "minmax(464px, auto) minmax(152px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "14.13% 71.73% 14.13%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "172px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "656px"
			}}
			background={{
				path: "wed-design---halkgd-QhtIb2sRffVREFpI.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/wed-design---halkgd-QhtIb2sRffVREFpI.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---halkgd-QhtIb2sRffVREFpI.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zxzBzJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "1/2",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zxzBzJ"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Với sứ mệnh <span style=\"color: rgb(25, 0, 200);\"><strong>“Đưa mỹ thuật đến gần hơn với mọi học sinh”</strong></span>, Trung Tâm Mỹ Thuật <strong>ZikZak</strong> triển khai mô hình <span style=\"color: rgb(25, 0, 200);\"><strong>liên kết giảng dạy Mỹ thuật chuyên nghiệp</strong></span> dành cho các trường <span style=\"color: rgb(25, 0, 200);\"><strong>Mầm non – Tiểu học – THCS – THPT</strong> </span>trên địa bàn TP. Hồ Chí Minh.</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">ZikZak đồng hành cùng nhà trường trong việc xây dựng chương trình học phù hợp, tổ chức lớp học ngoại khóa, đào tạo năng khiếu mỹ thuật và hỗ trợ các hoạt động nghệ thuật trong môi trường học đường. Mục tiêu của chúng tôi là giúp học sinh được học mỹ thuật một cách bài bản, sáng tạo và giàu cảm hứng hơn.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
