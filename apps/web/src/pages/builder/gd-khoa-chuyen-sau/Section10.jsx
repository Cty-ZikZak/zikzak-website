import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridShape from '@/components/builder/elements/GridShape';

export default function Section10() {
	return (
		<BlockLayout
			blockId={"znDYPv"}
			htmlId={"znDYPv"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "3.33vw auto 164.44vw auto 7.78vw 1.94vw 1.67vw auto auto auto 3.61vw 1.94vw 1.67vw auto 1.94vw auto 3.61vw 3.61vw auto auto 3.89vw 1.94vw 1.67vw auto 1.94vw auto 5.56vw 1.94vw 1.67vw auto 1.94vw auto 38px",
				"--t-grid-template-rows": "minmax(12px, auto) minmax(52px, auto) minmax(592px, auto) minmax(52px, auto) minmax(28px, auto) minmax(7px, auto) minmax(6px, auto) minmax(13px, auto) minmax(7px, auto) minmax(7px, auto) minmax(13px, auto) minmax(7px, auto) minmax(6px, auto) minmax(13px, auto) minmax(7px, auto) minmax(7px, auto) minmax(13px, auto) minmax(13px, auto) minmax(13px, auto) minmax(14px, auto) minmax(14px, auto) minmax(7px, auto) minmax(6px, auto) minmax(13px, auto) minmax(7px, auto) minmax(7px, auto) minmax(20px, auto) minmax(7px, auto) minmax(6px, auto) minmax(13px, auto) minmax(7px, auto) minmax(7px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(1.96vw, auto) minmax(3.27vw, auto) minmax(103.84vw, auto) minmax(6.54vw, auto) minmax(5.72vw, auto) minmax(0.33vw, auto) minmax(0.33vw, auto) minmax(0.33vw, auto) minmax(0.74vw, auto) minmax(0.33vw, auto) minmax(1.39vw, auto) minmax(0.33vw, auto) minmax(0.82vw, auto) minmax(0.33vw, auto) minmax(0.25vw, auto) minmax(0.33vw, auto) minmax(0.41vw, auto) minmax(3.59vw, auto) minmax(0.65vw, auto) minmax(1.06vw, auto) minmax(1.72vw, auto) minmax(1.14vw, auto) minmax(0.57vw, auto) 15.11vw",
				"--grid-template-rows": "minmax(24px, auto) minmax(40px, auto) minmax(1271px, auto) minmax(80px, auto) minmax(70px, auto) minmax(4px, auto) minmax(4px, auto) minmax(4px, auto) minmax(9px, auto) minmax(4px, auto) minmax(17px, auto) minmax(4px, auto) minmax(10px, auto) minmax(4px, auto) minmax(3px, auto) minmax(4px, auto) minmax(5px, auto) minmax(44px, auto) minmax(8px, auto) minmax(13px, auto) minmax(21px, auto) minmax(14px, auto) minmax(7px, auto) 1fr",
				"--m-grid-template-columns": "4.57% 0.61% 0.30% 1.22% 3.66% 5.18% 0.61% 2.74% 1.52% 2.44% 0.30% 1.22% 3.35% 0.61% 3.66% 35.67% 3.66% 2.74% 1.22% 0.61% 0.91% 3.66% 12.50% 2.13% 0.61% 0.30% 0.30% 3.66%",
				"--grid-template-columns": "2.37% 4.82% 2.37% 1.14% 0.16% 1.88% 8.42% 2.04% 1.23% 1.06% 4.90% 2.94% 2.12% 1.47% 6.62% 1.47% 1.14% 0.33% 5.07% 2.70% 7.19% 2.61% 0.82% 1.06% 0.65% 4.41% 1.88% 1.63% 4.25% 1.80% 1.06% 7.68% 10.70%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1034px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1849px"
			}}
			background={{
				path: "web-design--gd-phone--11-p3KNRFUJLAkcesYO.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--11-p3KNRFUJLAkcesYO.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zgGuyh"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "4/5",
					"--grid-column": "13/26",
					"--m-grid-row": "4/5",
					"--m-grid-column": "2/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zgGuyh"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>KẾT QUẢ ĐẦU RA SAU KHÓA HỌC</strong></h5>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRnDke"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "2/3",
					"--grid-column": "11/29",
					"--m-grid-row": "2/3",
					"--m-grid-column": "5/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRnDke"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(25, 0, 200); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><span style=\"font-weight: 700;\"><strong>MỘT VÀI SẢN PHẨM CỦA HỌC VIÊN</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zslzZ4"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 3,
					"--grid-row": "6/16",
					"--grid-column": "1/4",
					"--m-grid-row": "6/11",
					"--m-grid-column": "1/10"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zslzZ4"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M174.537 100C190.372 89.3849 200 75.3671 200 60C200 26.8629 155.228 0 100 0C44.7715 0 0 26.8629 0 60C0 75.3671 9.62845 89.3849 25.4631 100C9.62845 110.615 0 124.633 0 140C0 173.137 44.7715 200 100 200C155.228 200 200 173.137 200 140C200 124.633 190.372 110.615 174.537 100Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(193, 78, 0)"}
					shape={"mask-shape-4"}
					height={63}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zU90jD"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "8/14",
					"--grid-column": "6/12",
					"--m-grid-row": "7/10",
					"--m-grid-column": "12/21"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zU90jD"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xây dựng tư duy sáng tạo đa chiều, linh hoạt và hiện đại</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zf2xNl"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "10/12",
					"--grid-column": "2/3",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zf2xNl"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px;\"><strong>Tư duy</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpRm8s"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 6,
					"--grid-row": "7/17",
					"--grid-column": "14/17",
					"--m-grid-row": "12/17",
					"--m-grid-column": "22/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zpRm8s"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M174.537 100C190.372 89.3849 200 75.3671 200 60C200 26.8629 155.228 0 100 0C44.7715 0 0 26.8629 0 60C0 75.3671 9.62845 89.3849 25.4631 100C9.62845 110.615 0 124.633 0 140C0 173.137 44.7715 200 100 200C155.228 200 200 173.137 200 140C200 124.633 190.372 110.615 174.537 100Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(82, 226, 255)"}
					shape={"mask-shape-4"}
					height={63}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zxhgAq"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "11/13",
					"--grid-column": "15/16",
					"--m-grid-row": "14/15",
					"--m-grid-column": "23/28"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zxhgAq"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px;\"><strong>Kiến thức</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z3Q04k"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "6/18",
					"--grid-column": "19/24",
					"--m-grid-row": "13/16",
					"--m-grid-column": "7/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3Q04k"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sử dụng và kết hợp các yếu tố đồ họa hiệu quả, có tính thẩm mỹ cao</p>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_tNJI"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 9,
					"--grid-row": "7/17",
					"--grid-column": "27/31",
					"--m-grid-row": "18/21",
					"--m-grid-column": "1/13"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z_tNJI"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M174.537 100C190.372 89.3849 200 75.3671 200 60C200 26.8629 155.228 0 100 0C44.7715 0 0 26.8629 0 60C0 75.3671 9.62845 89.3849 25.4631 100C9.62845 110.615 0 124.633 0 140C0 173.137 44.7715 200 100 200C155.228 200 200 173.137 200 140C200 124.633 190.372 110.615 174.537 100Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(76, 205, 17)"}
					shape={"mask-shape-4"}
					height={63}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcWL6t"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "11/13",
					"--grid-column": "28/30",
					"--m-grid-row": "19/20",
					"--m-grid-column": "3/9"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zcWL6t"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px;\"><strong>Kỹ năng</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zUDW10"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "9/15",
					"--grid-column": "32/34",
					"--m-grid-row": "19/20",
					"--m-grid-column": "14/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zUDW10"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Thành thạo Photoshop – Illustrator – InDesign</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zfNU3U"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 12,
					"--grid-row": "19/24",
					"--grid-column": "5/9",
					"--m-grid-row": "22/27",
					"--m-grid-column": "18/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zfNU3U"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M174.537 100C190.372 89.3849 200 75.3671 200 60C200 26.8629 155.228 0 100 0C44.7715 0 0 26.8629 0 60C0 75.3671 9.62845 89.3849 25.4631 100C9.62845 110.615 0 124.633 0 140C0 173.137 44.7715 200 100 200C155.228 200 200 173.137 200 140C200 124.633 190.372 110.615 174.537 100Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(0, 106, 255)"}
					shape={"mask-shape-4"}
					height={63}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zKKQXS"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "21/22",
					"--grid-column": "7/8",
					"--m-grid-row": "24/25",
					"--m-grid-column": "20/27"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zKKQXS"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px;\"><strong>Trải nghiệm</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zd0RbA"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "20/23",
					"--grid-column": "10/18",
					"--m-grid-row": "23/26",
					"--m-grid-column": "6/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zd0RbA"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Vận dụng lý thuyết vào thiết kế bộ Brand Identity hoàn chỉnh</p>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zNXCdR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 15,
					"--grid-row": "19/24",
					"--grid-column": "20/23",
					"--m-grid-row": "28/33",
					"--m-grid-column": "1/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zNXCdR"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M174.537 100C190.372 89.3849 200 75.3671 200 60C200 26.8629 155.228 0 100 0C44.7715 0 0 26.8629 0 60C0 75.3671 9.62845 89.3849 25.4631 100C9.62845 110.615 0 124.633 0 140C0 173.137 44.7715 200 100 200C155.228 200 200 173.137 200 140C200 124.633 190.372 110.615 174.537 100Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 148, 51)"}
					shape={"mask-shape-4"}
					height={63}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zl62_X"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "21/22",
					"--grid-column": "21/22",
					"--m-grid-row": "30/31",
					"--m-grid-column": "4/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zl62_X"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 16px;\"><strong>Ceftificate</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqOZZF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "20/23",
					"--grid-column": "25/33",
					"--m-grid-row": "29/32",
					"--m-grid-column": "16/26"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zqOZZF"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Nhận chứng chỉ hoàn thành khóa học Thiết kế Đồ Họa Chuyên Sâu</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
