import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section9() {
	return (
		<BlockLayout
			blockId={"zqbj3Z"}
			htmlId={"zqbj3Z"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "4.44vw auto auto 8.89vw auto auto 5.56vw auto auto auto 5.56vw 3.06vw auto 0.56vw 3.06vw auto auto auto 5.00vw auto 0.83vw 2.78vw auto auto auto 4.17vw 0.83vw auto 0.83vw 1.94vw auto auto 0.28vw auto 0.28vw 41px",
				"--t-grid-template-rows": "minmax(16px, auto) minmax(18px, auto) minmax(26px, auto) minmax(32px, auto) minmax(108px, auto) minmax(72px, auto) minmax(20px, auto) minmax(24px, auto) minmax(24px, auto) minmax(24px, auto) minmax(20px, auto) minmax(11px, auto) minmax(2px, auto) minmax(2px, auto) minmax(11px, auto) minmax(2px, auto) minmax(9px, auto) minmax(52px, auto) minmax(18px, auto) minmax(13px, auto) minmax(3px, auto) minmax(10px, auto) minmax(3px, auto) minmax(10px, auto) minmax(52px, auto) minmax(15px, auto) minmax(3px, auto) minmax(13px, auto) minmax(3px, auto) minmax(7px, auto) minmax(6px, auto) minmax(10px, auto) minmax(1px, auto) minmax(51px, auto) minmax(1px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(1.96vw, auto) minmax(2.53vw, auto) minmax(5.07vw, auto) minmax(0.90vw, auto) minmax(18.22vw, auto) minmax(2.53vw, auto) minmax(2.86vw, auto) minmax(0.57vw, auto) minmax(0.90vw, auto) minmax(3.59vw, auto) minmax(3.68vw, auto) minmax(5.64vw, auto) minmax(0.57vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(0.82vw, auto) minmax(1.72vw, auto) minmax(0.16vw, auto) minmax(0.57vw, auto) minmax(5.31vw, auto) minmax(0.57vw, auto) minmax(3.19vw, auto) minmax(0.33vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.41vw, auto) minmax(0.82vw, auto) minmax(1.72vw, auto) minmax(0.16vw, auto) minmax(0.33vw, auto) minmax(5.39vw, auto) minmax(0.16vw, auto) minmax(3.43vw, auto) minmax(0.57vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(0.82vw, auto) minmax(1.72vw, auto) minmax(0.49vw, auto) minmax(0.08vw, auto) minmax(0.16vw, auto) minmax(5.64vw, auto) minmax(0.08vw, auto) minmax(6.29vw, auto) 5.80vw",
				"--grid-template-rows": "minmax(24px, auto) minmax(31px, auto) minmax(62px, auto) minmax(11px, auto) minmax(223px, auto) minmax(31px, auto) minmax(35px, auto) minmax(7px, auto) minmax(11px, auto) minmax(44px, auto) minmax(45px, auto) minmax(69px, auto) minmax(7px, auto) minmax(23px, auto) minmax(8px, auto) minmax(2px, auto) minmax(10px, auto) minmax(21px, auto) minmax(2px, auto) minmax(7px, auto) minmax(65px, auto) minmax(7px, auto) minmax(39px, auto) minmax(4px, auto) minmax(23px, auto) minmax(8px, auto) minmax(5px, auto) minmax(10px, auto) minmax(21px, auto) minmax(2px, auto) minmax(4px, auto) minmax(66px, auto) minmax(2px, auto) minmax(42px, auto) minmax(7px, auto) minmax(23px, auto) minmax(8px, auto) minmax(2px, auto) minmax(10px, auto) minmax(21px, auto) minmax(6px, auto) minmax(1px, auto) minmax(2px, auto) minmax(69px, auto) minmax(1px, auto) minmax(77px, auto) 1fr",
				"--m-grid-template-columns": "21.34% 1.22% 14.94% 1.52% 0.61% 2.74% 0.30% 3.66% 0.30% 5.18% 2.44% 0.61% 0.91% 8.23% 2.13% 3.35% 0.30% 3.05% 27.13%",
				"--grid-template-columns": "15.85% 5.15% 0.25% 1.80% 1.23% 0.98% 3.35% 6.29% 7.92% 12.50% 8.82% 5.47% 0.49% 4.66% 0.98% 0.41% 0.25% 2.61% 4.41% 0.74% 15.85%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "733px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1269px"
			}}
			background={{
				path: "web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-digital-painting-2-KpMEVXsyXxkJtPZ7.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"ziYRLO"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "1/8",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"ziYRLO"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(188, 40, 224); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>XUYÊN SUỐT 32 BUỔI HỌC</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zwQHPt"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "1/10",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zwQHPt"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(225, 107, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 48px;\"><span style=\"font-weight: 700;\"><strong>BẠN SẼ NHẬN ĐƯỢC</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zzP0DY"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "5/10",
					"--grid-column": "1/9",
					"--m-grid-row": "4/7",
					"--m-grid-column": "1/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zzP0DY"}
					content={"<h3 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Feedback trực tiếp từ Mentor</strong></span></h3><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Chỉnh sửa chi tiết về ánh sáng, màu sắc, bố cục và kỹ thuật render.</p><h3 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Thực hành liên tục theo project</strong></span></h3><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Mỗi giai đoạn đều có bài tập và artwork thực tế.</p><h3 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Học theo workflow của Artist hiện đại</strong></span></h3><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Tiếp cận quy trình làm việc thực chiến trong lĩnh vực Illustration &amp; Concept Art.</p><h3 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px; margin-bottom: 8px;\"><span style=\"font-weight: 700;\"><strong>Xây dựng portfolio ngay trong quá trình học</strong></span></h3><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Không học lý thuyết suông — mỗi buổi học đều góp phần tạo nên sản phẩm hoàn chỉnh của riêng bạn.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zlTmMr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "15/21",
					"--grid-column": "16/22",
					"--m-grid-row": "13/18",
					"--m-grid-column": "11/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zlTmMr"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Truyện tranh</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zChnuP"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "14/16",
					"--grid-column": "14/22",
					"--m-grid-row": "12/14",
					"--m-grid-column": "16/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zChnuP"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Họa sĩ</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqkcMY"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "21/23",
					"--grid-column": "17/22",
					"--m-grid-row": "18/19",
					"--m-grid-column": "14/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zqkcMY"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Thiết kế nhân vật, biểu cảm và bối cảnh để xây dựng những câu chuyện bằng hình ảnh đầy cảm xúc.</p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zVowmZ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "25/27",
					"--grid-column": "19/22",
					"--m-grid-row": "20/21",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zVowmZ"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 217, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Họa sĩ</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zrH85B"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "26/32",
					"--grid-column": "13/22",
					"--m-grid-row": "21/25",
					"--m-grid-column": "11/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zrH85B"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Minh họa</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zEESAv"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "30/33",
					"--grid-column": "18/22",
					"--m-grid-row": "25/26",
					"--m-grid-column": "13/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zEESAv"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sáng tạo artwork cho poster, bìa sách, social media, thương hiệu và các dự án truyền thông sáng tạo.</p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsQ8Tt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "36/38",
					"--grid-column": "19/22",
					"--m-grid-row": "28/29",
					"--m-grid-column": "15/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zsQ8Tt"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 217, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Thiết kế</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zBjEX5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "37/44",
					"--grid-column": "21/22",
					"--m-grid-row": "29/33",
					"--m-grid-column": "11/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zBjEX5"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Thời trang</strong></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zTjfxm"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "43/46",
					"--grid-column": "17/22",
					"--m-grid-row": "33/35",
					"--m-grid-column": "12/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zTjfxm"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kết hợp kỹ năng hội họa và sáng tạo để phác thảo trang phục, fashion concept và visual lookbook.</p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zmByde"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "12/47",
					"--grid-column": "7/15",
					"--m-grid-row": "5/6",
					"--m-grid-column": "16/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zmByde"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-YpbPbw7PD3HITlnr.png?width=768&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-YpbPbw7PD3HITlnr.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-YpbPbw7PD3HITlnr.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-YpbPbw7PD3HITlnr.png?width=1440&fit=crop 1440w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={606}
					desktopHeight={674}
					mobileWidth={111}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z-9bK7"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "35/40",
					"--grid-column": "1/4",
					"--m-grid-row": "27/31",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z-9bK7"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Freelance</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1Eo0Z"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "39/41",
					"--grid-column": "1/3",
					"--m-grid-row": "30/32",
					"--m-grid-column": "1/5"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z1Eo0Z"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 217, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Digital artist</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zWzZeK"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "42/45",
					"--grid-column": "1/5",
					"--m-grid-row": "34/36",
					"--m-grid-column": "1/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zWzZeK"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Nhận commission, bán artwork hoặc phát triển portfolio để làm việc tự do trong lĩnh vực sáng tạo.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z87CQR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "13/18",
					"--grid-column": "1/2",
					"--m-grid-row": "12/16",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z87CQR"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Concept</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zhTFF5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "20/22",
					"--grid-column": "1/6",
					"--m-grid-row": "18/19",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zhTFF5"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phát triển ý tưởng hình ảnh cho game, animation, phim ảnh hoặc các sản phẩm giải trí kỹ thuật số.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5WuBt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "17/19",
					"--grid-column": "1/3",
					"--m-grid-row": "15/17",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z5WuBt"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 217, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Artist</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zxK0NW"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 20,
					"--grid-row": "24/29",
					"--grid-column": "1/2",
					"--m-grid-row": "20/23",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zxK0NW"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 32px; margin-bottom: 8px;\"><strong>Character</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z3itgb"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 21,
					"--grid-row": "28/30",
					"--grid-column": "1/3",
					"--m-grid-row": "22/24",
					"--m-grid-column": "1/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3itgb"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 217, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><strong>Designer</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpmof0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 22,
					"--grid-row": "31/34",
					"--grid-column": "1/4",
					"--m-grid-row": "25/26",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpmof0"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Thiết kế nhân vật với phong cách và cá tính riêng, từ fantasy, anime đến semi-realistic.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zVlQ_M"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 23,
					"--grid-row": "8/11",
					"--grid-column": "12/22",
					"--m-grid-row": "10/11",
					"--m-grid-column": "9/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zVlQ_M"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(252, 252, 178); --lineHeightDesktop: 1.3; --fontSizeDesktop: 48px;\"><span style=\"font-weight: 700;\"><strong>SAU KHÓA HỌC</strong></span></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zusvKG"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 24,
					"--grid-row": "7/9",
					"--grid-column": "11/22",
					"--m-grid-row": "9/10",
					"--m-grid-column": "10/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"zusvKG"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 180); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>LÀM ĐƯỢC GÌ</strong></span></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zFV9iy"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "right",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 25,
					"--grid-row": "6/7",
					"--grid-column": "20/22",
					"--m-grid-row": "8/9",
					"--m-grid-column": "11/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zFV9iy"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Bạn sẽ</strong></span></p>"}
					textAlign={"right"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
