import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridShape from '@/components/builder/elements/GridShape';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"zrr2JO"}
			htmlId={"zrr2JO"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "2.50vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw 4.72vw auto 3.33vw auto 5.00vw auto auto 3.06vw 1.39vw 9.17vw auto 1.39vw 0.28vw 2.78vw auto auto 2.50vw 4.44vw auto 4.44vw 5.28vw auto 4.44vw 0.83vw 3.89vw 6.67vw 1.11vw auto auto 1.11vw 6.67vw auto 5.83vw auto 5.56vw 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 0px",
				"--t-grid-template-rows": "minmax(9px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(59px, auto) minmax(16px, auto) minmax(17px, auto) minmax(9px, auto) minmax(12px, auto) minmax(54px, auto) minmax(18px, auto) minmax(3px, auto) minmax(3px, auto) minmax(11px, auto) minmax(5px, auto) minmax(33px, auto) minmax(10px, auto) minmax(5px, auto) minmax(1px, auto) minmax(10px, auto) minmax(24px, auto) minmax(41px, auto) minmax(9px, auto) minmax(16px, auto) minmax(50px, auto) minmax(16px, auto) minmax(19px, auto) minmax(31px, auto) minmax(16px, auto) minmax(3px, auto) minmax(14px, auto) minmax(24px, auto) minmax(4px, auto) minmax(5px, auto) minmax(27px, auto) minmax(4px, auto) minmax(24px, auto) minmax(11px, auto) minmax(21px, auto) minmax(23px, auto) minmax(20px, auto) minmax(16px, auto) minmax(25px, auto) minmax(16px, auto) minmax(25px, auto) minmax(16px, auto) minmax(25px, auto) minmax(16px, auto) minmax(25px, auto) minmax(16px, auto) minmax(25px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(0.33vw, auto) minmax(0.25vw, auto) minmax(1.39vw, auto) minmax(3.27vw, auto) minmax(0.98vw, auto) minmax(0.90vw, auto) minmax(1.39vw, auto) minmax(0.16vw, auto) minmax(1.14vw, auto) minmax(2.04vw, auto) minmax(0.08vw, auto) minmax(1.31vw, auto) minmax(3.27vw, auto) minmax(1.88vw, auto) minmax(1.31vw, auto) minmax(0.08vw, auto) minmax(1.31vw, auto) minmax(1.88vw, auto) minmax(0.98vw, auto) minmax(0.98vw, auto) minmax(0.41vw, auto) minmax(2.78vw, auto) minmax(1.88vw, auto) minmax(1.88vw, auto) minmax(0.74vw, auto) minmax(0.16vw, auto) minmax(0.41vw, auto) minmax(2.70vw, auto) minmax(0.65vw, auto) minmax(1.31vw, auto) minmax(0.08vw, auto) minmax(2.86vw, auto) minmax(1.88vw, auto) minmax(1.47vw, auto) minmax(0.33vw, auto) minmax(1.23vw, auto) minmax(0.08vw, auto) minmax(0.57vw, auto) minmax(1.06vw, auto) minmax(0.33vw, auto) minmax(1.39vw, auto) minmax(3.19vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(1.31vw, auto) minmax(1.14vw, auto) minmax(1.96vw, auto) minmax(3.27vw, auto) minmax(0.74vw, auto) minmax(1.96vw, auto) minmax(1.88vw, auto) minmax(4.00vw, auto) 0.90vw",
				"--grid-template-rows": "minmax(4px, auto) minmax(3px, auto) minmax(17px, auto) minmax(40px, auto) minmax(12px, auto) minmax(11px, auto) minmax(17px, auto) minmax(2px, auto) minmax(14px, auto) minmax(25px, auto) minmax(1px, auto) minmax(16px, auto) minmax(40px, auto) minmax(23px, auto) minmax(16px, auto) minmax(1px, auto) minmax(16px, auto) minmax(23px, auto) minmax(12px, auto) minmax(12px, auto) minmax(5px, auto) minmax(34px, auto) minmax(23px, auto) minmax(23px, auto) minmax(9px, auto) minmax(2px, auto) minmax(5px, auto) minmax(33px, auto) minmax(8px, auto) minmax(16px, auto) minmax(1px, auto) minmax(35px, auto) minmax(23px, auto) minmax(18px, auto) minmax(4px, auto) minmax(15px, auto) minmax(1px, auto) minmax(7px, auto) minmax(13px, auto) minmax(4px, auto) minmax(17px, auto) minmax(39px, auto) minmax(23px, auto) minmax(8px, auto) minmax(5px, auto) minmax(5px, auto) minmax(16px, auto) minmax(14px, auto) minmax(24px, auto) minmax(40px, auto) minmax(9px, auto) minmax(24px, auto) minmax(23px, auto) minmax(49px, auto) 1fr",
				"--m-grid-template-columns": "25.91% 10.67% 2.44% 5.18% 1.22% 9.76% 7.01% 0.91% 10.98% 25.91%",
				"--grid-template-columns": "1.63% 0.98% 0.08% 0.41% 1.63% 0.25% 1.55% 8.42% 3.59% 3.76% 1.96% 0.25% 3.35% 0.08% 0.33% 1.39% 0.33% 0.98% 2.78% 0.41% 1.39% 0.57% 1.06% 0.08% 0.41% 4.98% 5.64% 5.39% 4.00% 1.55% 3.27% 1.55% 3.92% 1.47% 0.08% 1.63% 6.45% 2.86% 0.90% 2.12% 3.27% 0.16% 1.88% 0.90% 0.25% 0.41% 0.33% 0.08% 2.45% 0.41% 0.16% 1.39% 0.98% 0.57% 0.33% 2.04% 0.90%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1112px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "891px"
			}}
			background={{
				path: "web-design-3-9Q1yHw87PUqHCkDO.png",
				color: "rgb(76, 205, 17)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-3-9Q1yHw87PUqHCkDO.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-3-9Q1yHw87PUqHCkDO.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zkwzIF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "16/19",
					"--grid-column": "5/11",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zkwzIF"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>KHỐI CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zl0LSB"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "21/27",
					"--grid-column": "2/17",
					"--m-grid-row": "11/13",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zl0LSB"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách cầm bút và kiểm soát nét chì</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng hình khối cơ bản</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đánh bóng, tạo sắc độ</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Hiểu ánh sáng và không gian</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziljOI"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "19/21",
					"--grid-column": "5/25",
					"--m-grid-row": "18/21",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ziljOI"}
					content={"<p dir=\"auto\" class=\"body\"><span style=\"font-weight: 700;\"><strong><em>Giai đoạn nền tảng (Tối thiểu 2 tháng)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zFE_b2"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 4,
					"--grid-row": "11/18",
					"--grid-column": "13/20",
					"--m-grid-row": "45/48",
					"--m-grid-column": "6/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zFE_b2"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zeWn4N"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "35/40",
					"--grid-column": "8/23",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zeWn4N"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TĨNH VẬT</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zf_0K_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "40/46",
					"--grid-column": "7/26",
					"--m-grid-row": "17/20",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zf_0K_"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng bố cục vật mẫu</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích cấu trúc vật thể</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Diễn tả chất liệu (gốm, thủy tinh, kim loại...)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cân đối tỷ lệ và không gian bài vẽ</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zCt3Gc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "9/12",
					"--grid-column": "33/51",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zCt3Gc"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ ĐẦU TƯỢNG</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zxwz55"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "12/17",
					"--grid-column": "32/53",
					"--m-grid-row": "27/30",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zxwz55"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tỷ lệ đầu người chuẩn</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích khối mặt: trán, mũi, má, cằm</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Ánh sáng trên bề mặt tượng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng khối chân dung cổ điển</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z9cNoJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "26/29",
					"--grid-column": "31/44",
					"--m-grid-row": "8/9",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z9cNoJ"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ CHÂN DUNG</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zBf5NR"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "29/31",
					"--grid-column": "31/47",
					"--m-grid-row": "22/25",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zBf5NR"}
					content={"<p dir=\"auto\" class=\"body\"><span style=\"font-weight: 700;\"><strong><em>(Dành cho học viên thi môn chân dung)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zQiOJr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "31/37",
					"--grid-column": "30/47",
					"--m-grid-row": "12/14",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zQiOJr"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Quan sát thần thái nhân vật</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Diễn tả nét mặt và biểu cảm</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xử lý tóc, da, mắt, mũi, môi</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tăng độ chính xác trong tỷ lệ khuôn mặt</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zuGySg"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "45/49",
					"--grid-column": "36/57",
					"--m-grid-row": "10/11",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zuGySg"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TOÀN THÂN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zCzNpt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "50/54",
					"--grid-column": "34/58",
					"--m-grid-row": "15/18",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zCzNpt"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tỷ lệ cơ thể người toàn thân</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tư thế đứng, ngồi, chuyển động</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Giải phẫu cơ bản tay – chân – thân người</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cân đối dáng người trong bố cục lớn</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zXya0x"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "49/50",
					"--grid-column": "35/55",
					"--m-grid-row": "28/29",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zXya0x"}
					content={"<p dir=\"auto\" class=\"body\"><span style=\"font-weight: 700;\"><strong><em>(Dành cho học viên thi môn toàn thân)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zY_1u8"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 15,
					"--grid-row": "3/10",
					"--grid-column": "43/54",
					"--m-grid-row": "40/43",
					"--m-grid-column": "9/10"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zY_1u8"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRDQq-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "13/17",
					"--grid-column": "16/18",
					"--m-grid-row": "29/31",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRDQq-"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>1</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zIHCz0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "32/36",
					"--grid-column": "19/21",
					"--m-grid-row": "32/33",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zIHCz0"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>2</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zrUNwk"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "4/8",
					"--grid-column": "46/50",
					"--m-grid-row": "34/36",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zrUNwk"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>3</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zV78V-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 18,
					"--grid-row": "30/38",
					"--grid-column": "15/24",
					"--m-grid-row": "44/46",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zV78V-"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zazU2L"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 20,
					"--grid-row": "20/28",
					"--grid-column": "39/45",
					"--m-grid-row": "47/49",
					"--m-grid-column": "2/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zazU2L"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zT1VmM"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 21,
					"--grid-row": "22/25",
					"--grid-column": "41/42",
					"--m-grid-row": "37/42",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zT1VmM"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>4</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziWBMr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 22,
					"--grid-row": "41/48",
					"--grid-column": "49/58",
					"--m-grid-row": "41/44",
					"--m-grid-column": "5/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"ziWBMr"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zXj_a8"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 23,
					"--grid-row": "42/47",
					"--grid-column": "52/56",
					"--m-grid-row": "35/38",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zXj_a8"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>5</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zvqVJ_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 24,
					"--grid-row": "2/6",
					"--grid-column": "6/22",
					"--m-grid-row": "14/16",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zvqVJ_"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Để học tốt hình họa chì, học viên sẽ đi theo lộ trình từ căn bản đến nâng cao, giúp hiểu bản chất thay vì học vẽ theo cảm tính.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zojTJf"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 25,
					"--grid-row": "39/51",
					"--grid-column": "24/28",
					"--m-grid-row": "19/39",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zojTJf"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=1024&fit=crop 1024w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={136}
					desktopHeight={208}
					mobileWidth={328}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSt2oV"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "52/53",
					"--grid-column": "4/27",
					"--m-grid-row": "23/26",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zSt2oV"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>Lưu ý dành cho học viên thi vào Đại học Mỹ thuật TP.HCM</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zEdUBy"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 27,
					"--grid-row": "53/55",
					"--grid-column": "3/29",
					"--m-grid-row": "20/24",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zEdUBy"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Học viên cần hoàn thành 2 khóa nền tảng: <strong>Hình Họa Chì</strong> và <strong>Trang Trí Màu</strong> trước khi bước vào giai đoạn luyện đề chuyên sâu gồm: <strong>Hình Họa Chân Dung, Hình Họa Toàn Thân và Bố Cục Màu</strong>.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zefO1z"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 28,
					"--grid-row": "14/15",
					"--grid-column": "9/12",
					"--m-grid-row": "50/51",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zefO1z"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z4iFy6"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 29,
					"--grid-row": "5/7",
					"--grid-column": "38/43",
					"--m-grid-row": "58/59",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z4iFy6"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSGKw6"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 30,
					"--grid-row": "33/34",
					"--grid-column": "10/14",
					"--m-grid-row": "52/53",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zSGKw6"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zucW16"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 31,
					"--grid-row": "23/24",
					"--grid-column": "37/39",
					"--m-grid-row": "54/55",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zucW16"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zCB6fJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 32,
					"--grid-row": "43/44",
					"--grid-column": "40/48",
					"--m-grid-row": "56/57",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zCB6fJ"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
