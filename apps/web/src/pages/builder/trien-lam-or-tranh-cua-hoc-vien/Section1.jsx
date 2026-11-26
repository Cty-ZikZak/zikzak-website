import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"zhdr50"}
			htmlId={"zhdr50"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "41.94vw auto 13px",
				"--t-grid-template-rows": "minmax(151px, auto) minmax(73px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(49.02vw, auto) minmax(8.50vw, auto) 12.17vw",
				"--grid-template-rows": "minmax(600px, auto) minmax(104px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "22.63% 54.66% 22.71%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "237px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "853px"
			}}
			background={{
				path: "wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---tria-n-lam-lQ7B6PuRGJwZeoPb.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zYOhDR"}
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
					id={"zYOhDR"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Nơi lưu giữ hành trình sáng tạo của từng học viên</strong></span></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span>Trang triển lãm tranh ZikZak được xây dựng như một </span><span style=\"font-family: Montserrat; font-weight: 500;\">không gian trưng bày trực tuyến</span><span>, nơi phụ huynh và học viên có thể cùng nhìn lại </span><span style=\"font-weight: 700;\"><strong>những tác phẩm nổi bật</strong></span><span> qua từng lớp học, từng khóa vẽ và từng giai đoạn phát triển kỹ năng.</span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
