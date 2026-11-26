import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridShape from '@/components/builder/elements/GridShape';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"ai-wSutoj"}
			htmlId={"ai-wSutoj"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--rows": 12,
				"--row-gap": "16px",
				"--row-size": "48px",
				"--column-gap": "24px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "56px 16px 56px 16px",
				"--grid-gap-history": "16px 24px",
				"--m-grid-template-rows": "11.11vw auto 3.89vw auto 11.11vw 11.39vw auto 4.44vw auto 4.44vw auto 4.44vw auto 0.83vw auto 8.33vw 6.67vw 11.11vw auto 4.72vw auto 4.44vw auto 4.44vw auto 0.83vw auto auto 33px",
				"--t-grid-template-rows": "minmax(40px, auto) minmax(82px, auto) minmax(14px, auto) minmax(48px, auto) minmax(40px, auto) minmax(41px, auto) minmax(23px, auto) minmax(16px, auto) minmax(168px, auto) minmax(16px, auto) minmax(40px, auto) minmax(16px, auto) minmax(23px, auto) minmax(3px, auto) minmax(24px, auto) minmax(30px, auto) minmax(24px, auto) minmax(40px, auto) minmax(23px, auto) minmax(17px, auto) minmax(144px, auto) minmax(16px, auto) minmax(38px, auto) minmax(16px, auto) minmax(23px, auto) minmax(3px, auto) minmax(24px, auto) minmax(40px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(6.70vw, auto) minmax(4.90vw, auto) minmax(1.47vw, auto) minmax(3.92vw, auto) minmax(2.61vw, auto) minmax(3.27vw, auto) minmax(2.45vw, auto) minmax(0.98vw, auto) minmax(3.92vw, auto) minmax(5.72vw, auto) minmax(0.25vw, auto) minmax(1.47vw, auto) minmax(0.25vw, auto) minmax(1.96vw, auto) minmax(3.51vw, auto) 6.21vw",
				"--grid-template-rows": "minmax(82px, auto) minmax(60px, auto) minmax(18px, auto) minmax(48px, auto) minmax(32px, auto) minmax(40px, auto) minmax(30px, auto) minmax(12px, auto) minmax(48px, auto) minmax(70px, auto) minmax(3px, auto) minmax(18px, auto) minmax(3px, auto) minmax(24px, auto) minmax(43px, auto) 1fr",
				"--m-grid-template-columns": "7.62% 1.83% 1.83% 1.52% 0.61% 0.61% 2.74% 26.83% 0.30% 11.89% 0.30% 27.13% 0.30% 2.44% 1.52% 1.22% 1.83% 1.83% 7.62%",
				"--grid-template-columns": "0.08% 4.25% 3.92% 0.98% 10.95% 13.48% 11.60% 0.16% 4.17% 0.90% 4.25% 3.92% 1.14% 6.54% 4.25% 25.25% 4.17%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1065px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "607px"
			}}
			background={{
				color: "#ffffff",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"ai-kmEfrK"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 2,
					"--grid-row": "6/16",
					"--grid-column": "11/18",
					"--m-grid-row": "18/29",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"ai-kmEfrK"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"none\" fill=\"none\" viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>"}
					color={"#FFE5D9"}
					shape={"rectangle"}
					height={291}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-9nQmrL"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "center",
					"--m-element-margin": "0 0 40px 0",
					"--z-index": 3,
					"--grid-row": "2/3",
					"--grid-column": "1/18",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-9nQmrL"}
					content={"<h3 dir=\"auto\" style=\"\">Đánh giá khách hàng</h3>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-YUVJI9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "4/5",
					"--grid-column": "7/15",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-YUVJI9"}
					content={"<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Khách hàng hài lòng với sản phẩm và dịch vụ của Zikzak.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-2Pxpdn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "9/10",
					"--grid-column": "12/17",
					"--m-grid-row": "21/22",
					"--m-grid-column": "3/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-2Pxpdn"}
					content={"<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Sản phẩm của Zikzak rất chất lượng, giúp tôi phát triển kỹ năng mỹ thuật.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-saTHgE"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "12/14",
					"--grid-column": "14/17",
					"--m-grid-row": "25/26",
					"--m-grid-column": "5/16"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-saTHgE"}
					content={"<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\">Nguyễn Văn A</h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-JZD1zH"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "11/15",
					"--grid-column": "12/13",
					"--m-grid-row": "23/24",
					"--m-grid-column": "10/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"ai-JZD1zH"}
					src={"https://images.unsplash.com/photo-1597306957833-433de12c3af6?auto=format&fit=crop&w=48"}
					alt={"The word 'ART' is carved in a textured, concrete-like material, with rough, brush-stroke patterns covering the surface. It is set against a slate grey, wooden textured background."}
					objectFit={"cover"}
					desktopWidth={48}
					desktopHeight={48}
					mobileWidth={39}
					desktopBorderRadius={"50%"}
					mobileBorderRadius={"50%"}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-t7HBdu"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "14/15",
					"--grid-column": "14/17",
					"--m-grid-row": "27/28",
					"--m-grid-column": "8/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-t7HBdu"}
					content={"<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Hà Nội</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-BPuXLi"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "9/10",
					"--grid-column": "3/9",
					"--m-grid-row": "9/10",
					"--m-grid-column": "2/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-BPuXLi"}
					content={"<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Dịch vụ tuyệt vời, sản phẩm đa dạng và chất lượng, tôi rất hài lòng với Zikzak.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-D5HFWz"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "11/15",
					"--grid-column": "3/4",
					"--m-grid-row": "11/12",
					"--m-grid-column": "9/12"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"ai-D5HFWz"}
					src={"https://images.unsplash.com/photo-1635604963601-8f355aad1941?auto=format&fit=crop&w=48"}
					alt={"A close-up view of a graphic design featuring the text 'ON DISPLAY' highlighted in red on a white background. The letters are bold and part of a limited edition print design. Curved lines and shapes in black, green, and red are artistically arranged around the text."}
					objectFit={"cover"}
					desktopWidth={48}
					desktopHeight={48}
					mobileWidth={41}
					desktopBorderRadius={"50%"}
					mobileBorderRadius={"50%"}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-d75Too"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "11/13",
					"--grid-column": "5/8",
					"--m-grid-row": "13/14",
					"--m-grid-column": "7/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-d75Too"}
					content={"<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\">Trần Thị B</h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-sJ5ICr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "14/15",
					"--grid-column": "5/8",
					"--m-grid-row": "15/16",
					"--m-grid-column": "8/13"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-sJ5ICr"}
					content={"<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Đà Nẵng</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-5KH0ao"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 1,
					"--grid-row": "6/16",
					"--grid-column": "2/10",
					"--m-grid-row": "6/17",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"ai-5KH0ao"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"none\" fill=\"none\" viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>"}
					color={"#FFE5D9"}
					shape={"rectangle"}
					height={291}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-tpKred"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "7/8",
					"--grid-column": "12/16",
					"--m-grid-row": "19/20",
					"--m-grid-column": "4/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-tpKred"}
					content={"<h6 dir=\"auto\">★★★★★</h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-UQCQ2O"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "7/8",
					"--grid-column": "3/6",
					"--m-grid-row": "7/8",
					"--m-grid-column": "6/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-UQCQ2O"}
					content={"<h6 dir=\"auto\">★★★★★</h6>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
