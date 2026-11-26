import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridShape from '@/components/builder/elements/GridShape';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"zBsS-v"}
			htmlId={"zBsS-v"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto auto 3.06vw auto 4.44vw 16.67vw auto auto 1.67vw 0.56vw 2.22vw auto 0.56vw 3.89vw auto 4.44vw 2.22vw 4.44vw 5.00vw auto auto 1.67vw 2.50vw 0.28vw auto 1.94vw 2.22vw 0.28vw 0.83vw auto 3.33vw 0.28vw 0.83vw auto 0.56vw auto 3.61vw 4.44vw 3.61vw 0.83vw 0.56vw auto 3.61vw 5.56vw 2.50vw auto 4.44vw auto 0px",
				"--t-grid-template-rows": "minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(75px, auto) minmax(11px, auto) minmax(26px, auto) minmax(16px, auto) minmax(60px, auto) minmax(15px, auto) minmax(10px, auto) minmax(6px, auto) minmax(2px, auto) minmax(8px, auto) minmax(25px, auto) minmax(2px, auto) minmax(14px, auto) minmax(1px, auto) minmax(16px, auto) minmax(8px, auto) minmax(16px, auto) minmax(18px, auto) minmax(7px, auto) minmax(1px, auto) minmax(6px, auto) minmax(9px, auto) minmax(1px, auto) minmax(9px, auto) minmax(7px, auto) minmax(8px, auto) minmax(1px, auto) minmax(3px, auto) minmax(9px, auto) minmax(12px, auto) minmax(1px, auto) minmax(3px, auto) minmax(13px, auto) minmax(2px, auto) minmax(19px, auto) minmax(13px, auto) minmax(16px, auto) minmax(13px, auto) minmax(3px, auto) minmax(2px, auto) minmax(15px, auto) minmax(13px, auto) minmax(20px, auto) minmax(9px, auto) minmax(13px, auto) minmax(16px, auto) minmax(13px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(1.39vw, auto) minmax(2.70vw, auto) minmax(0.98vw, auto) minmax(0.90vw, auto) minmax(1.96vw, auto) minmax(1.06vw, auto) minmax(0.25vw, auto) minmax(2.12vw, auto) minmax(1.14vw, auto) minmax(0.25vw, auto) minmax(2.29vw, auto) minmax(1.88vw, auto) minmax(1.39vw, auto) minmax(0.98vw, auto) minmax(1.06vw, auto) minmax(0.25vw, auto) minmax(0.98vw, auto) minmax(1.96vw, auto) minmax(0.41vw, auto) minmax(1.39vw, auto) minmax(2.78vw, auto) minmax(1.88vw, auto) minmax(1.23vw, auto) minmax(0.16vw, auto) minmax(0.49vw, auto) minmax(1.31vw, auto) minmax(1.31vw, auto) minmax(0.74vw, auto) minmax(1.23vw, auto) minmax(0.16vw, auto) minmax(3.27vw, auto) minmax(1.88vw, auto) minmax(1.39vw, auto) minmax(0.41vw, auto) minmax(0.90vw, auto) minmax(0.65vw, auto) minmax(1.72vw, auto) minmax(0.90vw, auto) minmax(1.39vw, auto) minmax(2.61vw, auto) minmax(1.88vw, auto) minmax(1.06vw, auto) minmax(0.16vw, auto) minmax(0.82vw, auto) minmax(1.31vw, auto) minmax(1.14vw, auto) minmax(1.96vw, auto) minmax(2.04vw, auto) minmax(1.39vw, auto) minmax(1.96vw, auto) minmax(2.45vw, auto) minmax(3.43vw, auto) 0.08vw",
				"--grid-template-rows": "minmax(17px, auto) minmax(33px, auto) minmax(12px, auto) minmax(11px, auto) minmax(24px, auto) minmax(13px, auto) minmax(3px, auto) minmax(26px, auto) minmax(14px, auto) minmax(3px, auto) minmax(28px, auto) minmax(23px, auto) minmax(17px, auto) minmax(12px, auto) minmax(13px, auto) minmax(3px, auto) minmax(12px, auto) minmax(24px, auto) minmax(5px, auto) minmax(17px, auto) minmax(34px, auto) minmax(23px, auto) minmax(15px, auto) minmax(2px, auto) minmax(6px, auto) minmax(16px, auto) minmax(16px, auto) minmax(9px, auto) minmax(15px, auto) minmax(2px, auto) minmax(40px, auto) minmax(23px, auto) minmax(17px, auto) minmax(5px, auto) minmax(11px, auto) minmax(8px, auto) minmax(21px, auto) minmax(11px, auto) minmax(17px, auto) minmax(32px, auto) minmax(23px, auto) minmax(13px, auto) minmax(2px, auto) minmax(10px, auto) minmax(16px, auto) minmax(14px, auto) minmax(24px, auto) minmax(25px, auto) minmax(17px, auto) minmax(24px, auto) minmax(30px, auto) minmax(42px, auto) 1fr",
				"--m-grid-template-columns": "3.96% 1.83% 0.30% 1.52% 4.27% 0.30% 1.83% 5.49% 3.05% 1.52% 6.40% 6.71% 62.80%",
				"--grid-template-columns": "0.08% 0.16% 0.65% 1.47% 1.80% 1.55% 11.85% 2.21% 1.80% 5.31% 0.08% 2.04% 0.08% 1.63% 0.41% 0.08% 0.82% 0.41% 0.25% 2.53% 0.08% 0.90% 0.65% 0.33% 1.06% 1.80% 8.25% 1.72% 7.76% 1.55% 3.43% 1.63% 3.59% 1.47% 0.08% 2.86% 8.99% 0.08% 0.08% 0.16% 1.47% 1.31% 3.27% 1.14% 1.55% 0.25% 0.08% 0.08% 2.94% 0.49% 1.14% 1.31% 0.33% 2.04% 0.90%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "800px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "874px"
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
				elementId={"znWMph"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "12/13",
					"--grid-column": "8/11",
					"--m-grid-row": "15/17",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"znWMph"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zbhBam"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "14/18",
					"--grid-column": "5/10",
					"--m-grid-row": "1/2",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zbhBam"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>MÀU CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zjafNy"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "19/25",
					"--grid-column": "4/17",
					"--m-grid-row": "10/11",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zjafNy"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Vòng thuần sắc</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Gam nóng – lạnh</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sắc độ, cường độ màu</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kỹ thuật pha màu và chuyển màu cơ bản</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zT-VzQ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "18/19",
					"--grid-column": "5/18",
					"--m-grid-row": "54/55",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zT-VzQ"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>Giai đoạn nền tảng (Khoảng 2-3 tháng)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zq3kR0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 5,
					"--grid-row": "9/17",
					"--grid-column": "12/23",
					"--m-grid-row": "50/51",
					"--m-grid-column": "9/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zq3kR0"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z6CzgM"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "35/38",
					"--grid-column": "7/22",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z6CzgM"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TẢ THỰC</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zGMBDg"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "38/43",
					"--grid-column": "6/24",
					"--m-grid-row": "14/16",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zGMBDg"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu hoa lá, động vật, hình học</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chuyển vật thể thật thành họa tiết trang trí</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo nhịp điệu bằng nét và mảng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xây dựng ngôn ngữ tạo hình cá nhân</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zX477o"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "5/10",
					"--grid-column": "33/42",
					"--m-grid-row": "5/6",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zX477o"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>CÁCH ĐIỆU HỌA TIẾT</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zn4QDF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "10/16",
					"--grid-column": "32/52",
					"--m-grid-row": "25/34",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zn4QDF"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu hoa lá, động vật, hình học</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chuyển vật thể thật thành họa tiết trang trí</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo nhịp điệu bằng nét và mảng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xây dựng ngôn ngữ tạo hình cá nhân</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zlmqgD"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "24/28",
					"--grid-column": "31/45",
					"--m-grid-row": "7/8",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zlmqgD"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>GIẢI ĐỀ CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zGNgRh"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "28/30",
					"--grid-column": "31/51",
					"--m-grid-row": "36/39",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zGNgRh"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(</em>Giai đoạn vận dụng kiến thức vào bài thi<em>)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zljndt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "31/36",
					"--grid-column": "30/46",
					"--m-grid-row": "37/46",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zljndt"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích đề bài</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chia bố cục mảng chính – phụ</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sắp xếp họa tiết vào không gian</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo điểm nhấn thị giác</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zS2KUZ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "44/47",
					"--grid-column": "36/55",
					"--m-grid-row": "9/10",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zS2KUZ"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TOÀN THÂN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zX7TQ-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "48/52",
					"--grid-column": "34/56",
					"--m-grid-row": "47/54",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zX7TQ-"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Luyện đề thi các năm trước</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Làm quen nhiều dạng chủ đề</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kết hợp chữ và hình trong bố cục</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Rèn tốc độ xử lý bài trong thời gian giới hạn</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zud7b0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "47/48",
					"--grid-column": "35/53",
					"--m-grid-row": "42/43",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zud7b0"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(Giai đoạn giải đề nâng cao)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zKKOWT"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 16,
					"--grid-row": "1/8",
					"--grid-column": "48/56",
					"--m-grid-row": "44/45",
					"--m-grid-column": "4/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zKKOWT"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zydAUj"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "11/15",
					"--grid-column": "15/19",
					"--m-grid-row": "19/24",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zydAUj"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>1</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ztkppt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 20,
					"--grid-row": "31/34",
					"--grid-column": "18/21",
					"--m-grid-row": "25/30",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ztkppt"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>2</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zs0b_X"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "2/6",
					"--grid-column": "50/54",
					"--m-grid-row": "33/41",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zs0b_X"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>3</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zgDJLr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 19,
					"--grid-row": "29/36",
					"--grid-column": "13/26",
					"--m-grid-row": "44/47",
					"--m-grid-column": "10/13"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zgDJLr"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z45aom"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 21,
					"--grid-row": "20/27",
					"--grid-column": "39/47",
					"--m-grid-row": "48/52",
					"--m-grid-column": "2/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z45aom"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2gec7"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 22,
					"--grid-row": "21/26",
					"--grid-column": "43/44",
					"--m-grid-row": "43/47",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2gec7"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>4</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziCzeC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 23,
					"--grid-row": "39/46",
					"--grid-column": "48/56",
					"--m-grid-row": "38/40",
					"--m-grid-column": "3/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"ziCzeC"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.089 0C174.339 0 200 65.9669 200 126.582C200 171.887 160.89 200 121.089 200C67.5113 200 0 187.57 0 126.582C0 53.4983 56.886 0 121.089 0Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(255, 255, 0)"}
					shape={"mask-shape-13"}
					height={113}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z28lWv"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 24,
					"--grid-row": "40/45",
					"--grid-column": "50/54",
					"--m-grid-row": "49/53",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z28lWv"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(170, 88, 60);\"><strong>5</strong></h1>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z0i4Q4"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 25,
					"--grid-row": "4/7",
					"--grid-column": "3/20",
					"--m-grid-row": "12/13",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z0i4Q4"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"text-transform: none; letter-spacing: normal; font-family: Montserrat; font-weight: 400;\">*Với môn thi Bố cục màu, lộ trình sẽ có sự thay đổi để tập trung vào môn thi</span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zFXTYr"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "37/49",
					"--grid-column": "25/28",
					"--m-grid-row": "22/28",
					"--m-grid-column": "5/12"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zFXTYr"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={136}
					desktopHeight={208}
					mobileWidth={75}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziVOu5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 27,
					"--grid-row": "50/51",
					"--grid-column": "2/27",
					"--m-grid-row": "56/57",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ziVOu5"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong>Lưu ý dành cho học viên thi vào Đại học Mỹ thuật TP.HCM</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zzOKAr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 28,
					"--grid-row": "51/53",
					"--grid-column": "1/29",
					"--m-grid-row": "18/24",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zzOKAr"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Học viên cần hoàn thành 2 khóa nền tảng: <strong>Hình Họa Chì</strong> và <strong>Trang Trí Màu</strong> trước khi bước vào giai đoạn luyện đề chuyên sâu gồm: <strong>Hình Họa Chân Dung, Hình Họa Toàn Thân và Bố Cục Màu</strong>.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zYy3-A"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 29,
					"--grid-row": "1/4",
					"--grid-column": "3/16",
					"--m-grid-row": "31/35",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zYy3-A"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 48px;\"><strong>LỘ TRÌNH HỌC</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsMB4x"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 30,
					"--grid-row": "3/5",
					"--grid-column": "38/47",
					"--m-grid-row": "32/36",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zsMB4x"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zn5Zb7"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 31,
					"--grid-row": "32/33",
					"--grid-column": "9/14",
					"--m-grid-row": "20/21",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zn5Zb7"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zV3XZd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 32,
					"--grid-row": "22/23",
					"--grid-column": "37/41",
					"--m-grid-row": "27/29",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zV3XZd"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsGYcP"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 33,
					"--grid-row": "41/42",
					"--grid-column": "40/49",
					"--m-grid-row": "23/26",
					"--m-grid-column": "1/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zsGYcP"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN</strong></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
