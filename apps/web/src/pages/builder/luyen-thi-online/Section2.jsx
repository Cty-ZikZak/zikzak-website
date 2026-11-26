import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridCard from '@/components/builder/elements/GridCard';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';
import GridImage from '@/components/builder/elements/GridImage';
import GridShape from '@/components/builder/elements/GridShape';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"zPIgha"}
			htmlId={"zPIgha"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "4.72vw auto 1.11vw 0.56vw 10.56vw 5.83vw auto 19.44vw 2.78vw auto 1.94vw auto 0.56vw 1.39vw auto auto 2.22vw 3.33vw auto 0.83vw 4.44vw auto auto 7.78vw 1.67vw auto auto 2.78vw 6.39vw auto 2.22vw 1.94vw auto 9.17vw 2.78vw auto auto 2.50vw 11.11vw auto 1.11vw 1.39vw 2.22vw auto 1.67vw auto auto 6.11vw 2.22vw auto 1.94vw 2.50vw 1.39vw auto auto 6.39vw auto 2.78vw 8.06vw 17.50vw auto auto 11px",
				"--t-grid-template-rows": "minmax(17px, auto) minmax(11px, auto) minmax(4px, auto) minmax(2px, auto) minmax(38px, auto) minmax(21px, auto) minmax(11px, auto) minmax(70px, auto) minmax(10px, auto) minmax(2px, auto) minmax(7px, auto) minmax(7px, auto) minmax(2px, auto) minmax(5px, auto) minmax(11px, auto) minmax(14px, auto) minmax(8px, auto) minmax(12px, auto) minmax(49px, auto) minmax(3px, auto) minmax(16px, auto) minmax(12px, auto) minmax(13px, auto) minmax(28px, auto) minmax(6px, auto) minmax(1px, auto) minmax(4px, auto) minmax(10px, auto) minmax(23px, auto) minmax(15px, auto) minmax(8px, auto) minmax(7px, auto) minmax(8px, auto) minmax(33px, auto) minmax(10px, auto) minmax(6px, auto) minmax(3px, auto) minmax(9px, auto) minmax(40px, auto) minmax(11px, auto) minmax(4px, auto) minmax(5px, auto) minmax(8px, auto) minmax(10px, auto) minmax(6px, auto) minmax(18px, auto) minmax(56px, auto) minmax(22px, auto) minmax(8px, auto) minmax(8px, auto) minmax(7px, auto) minmax(9px, auto) minmax(5px, auto) minmax(13px, auto) minmax(56px, auto) minmax(23px, auto) minmax(17px, auto) minmax(10px, auto) minmax(29px, auto) minmax(63px, auto) minmax(30px, auto) minmax(30px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(4.58vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(1.31vw, auto) minmax(0.57vw, auto) minmax(10.21vw, auto) minmax(1.31vw, auto) minmax(0.98vw, auto) minmax(1.47vw, auto) minmax(0.82vw, auto) minmax(2.29vw, auto) minmax(2.94vw, auto) minmax(2.70vw, auto) minmax(1.88vw, auto) minmax(0.65vw, auto) minmax(0.57vw, auto) minmax(2.04vw, auto) minmax(0.74vw, auto) minmax(0.57vw, auto) minmax(1.39vw, auto) minmax(1.39vw, auto) minmax(1.14vw, auto) minmax(4.58vw, auto) minmax(2.53vw, auto) minmax(0.16vw, auto) minmax(1.96vw, auto) minmax(6.54vw, auto) minmax(1.88vw, auto) minmax(3.27vw, auto) minmax(1.06vw, auto) minmax(1.39vw, auto) minmax(0.25vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(0.49vw, auto) minmax(2.04vw, auto) minmax(1.39vw, auto) minmax(2.78vw, auto) minmax(0.49vw, auto) minmax(1.06vw, auto) minmax(1.23vw, auto) minmax(0.49vw, auto) minmax(2.04vw, auto) minmax(0.49vw, auto) minmax(0.16vw, auto) minmax(0.49vw, auto) minmax(0.16vw, auto) minmax(1.39vw, auto) minmax(1.55vw, auto) minmax(2.78vw, auto) minmax(0.16vw, auto) minmax(0.49vw, auto) minmax(0.82vw, auto) minmax(0.49vw, auto) minmax(1.96vw, auto) minmax(0.25vw, auto) minmax(0.25vw, auto) minmax(3.02vw, auto) minmax(3.10vw, auto) minmax(1.55vw, auto) minmax(4.58vw, auto) minmax(3.27vw, auto) minmax(2.45vw, auto) minmax(0.16vw, auto) minmax(3.10vw, auto) minmax(0.16vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(56px, auto) minmax(8px, auto) minmax(2px, auto) minmax(5px, auto) minmax(5px, auto) minmax(16px, auto) minmax(7px, auto) minmax(125px, auto) minmax(16px, auto) minmax(12px, auto) minmax(18px, auto) minmax(10px, auto) minmax(28px, auto) minmax(36px, auto) minmax(33px, auto) minmax(23px, auto) minmax(8px, auto) minmax(7px, auto) minmax(25px, auto) minmax(9px, auto) minmax(7px, auto) minmax(17px, auto) minmax(17px, auto) minmax(14px, auto) minmax(56px, auto) minmax(31px, auto) minmax(2px, auto) minmax(24px, auto) minmax(80px, auto) minmax(23px, auto) minmax(40px, auto) minmax(13px, auto) minmax(17px, auto) minmax(3px, auto) minmax(5px, auto) minmax(5px, auto) minmax(6px, auto) minmax(25px, auto) minmax(17px, auto) minmax(34px, auto) minmax(6px, auto) minmax(13px, auto) minmax(15px, auto) minmax(6px, auto) minmax(25px, auto) minmax(6px, auto) minmax(2px, auto) minmax(6px, auto) minmax(2px, auto) minmax(17px, auto) minmax(19px, auto) minmax(34px, auto) minmax(2px, auto) minmax(6px, auto) minmax(10px, auto) minmax(6px, auto) minmax(24px, auto) minmax(3px, auto) minmax(3px, auto) minmax(37px, auto) minmax(38px, auto) minmax(19px, auto) minmax(56px, auto) minmax(40px, auto) minmax(30px, auto) minmax(2px, auto) minmax(38px, auto) minmax(2px, auto) 1fr",
				"--m-grid-template-columns": "0.91% 3.05% 0.30% 0.61% 0.30% 0.30% 0.61% 0.30% 1.83% 0.91% 0.30% 1.52% 2.13% 0.91% 19.21% 4.27% 1.22% 1.22% 1.83% 1.22% 7.01% 4.57% 0.61% 0.91% 0.30% 0.91% 0.61% 1.22% 2.74% 3.05% 0.30% 0.30% 1.22% 3.96% 3.05% 0.30% 1.83% 6.40% 3.66% 1.83% 0.91% 1.22% 1.52% 0.61% 1.22% 0.91% 0.91% 0.91% 0.61% 0.30% 0.91% 2.13%",
				"--grid-template-columns": "1.55% 0.08% 1.47% 1.23% 0.33% 3.02% 0.74% 0.98% 0.82% 0.41% 0.41% 3.43% 0.08% 0.90% 0.41% 2.45% 0.08% 1.72% 0.49% 0.98% 15.28% 0.49% 0.33% 0.33% 1.23% 0.33% 1.55% 2.78% 6.62% 2.61% 1.23% 0.82% 0.25% 0.74% 0.98% 0.57% 0.74% 0.16% 0.33% 1.63% 1.80% 0.16% 6.37% 0.08% 6.54% 1.88% 0.16% 0.65% 0.49% 0.25% 0.49% 0.08% 0.25% 0.65% 0.08% 0.33% 0.90% 0.25% 0.49% 4.90% 0.98% 0.98% 1.55% 0.74% 3.27% 2.04% 3.10%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1015px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1352px"
			}}
			background={{
				path: "web-design-1-rIGz2owbeS5HBjU4.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-1-rIGz2owbeS5HBjU4.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-1-rIGz2owbeS5HBjU4.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zM5WKN"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 3,
					"--grid-row": "3/15",
					"--grid-column": "18/43",
					"--m-grid-row": "2/13",
					"--m-grid-column": "1/36"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zM5WKN"}
					background={"rgb(223, 255, 129)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"}
					opacity={"1"}
					height={"280px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zDu0he"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 4,
					"--grid-row": "10/25",
					"--grid-column": "34/56",
					"--m-grid-row": "10/22",
					"--m-grid-column": "25/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zDu0he"}
					background={"rgb(255, 198, 54)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 25px 50px -12px rgba(0, 0, 0, 0.25)"}
					opacity={"1"}
					height={"264px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z8bLqg"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 2,
					"--grid-row": "21/31",
					"--grid-column": "23/44",
					"--m-grid-row": "18/28",
					"--m-grid-column": "1/44"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"z8bLqg"}
					background={"rgb(223, 255, 129)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"}
					opacity={"1"}
					height={"271px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z8h8wY"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "7/14",
					"--grid-column": "21/36",
					"--m-grid-row": "4/11",
					"--m-grid-column": "7/31"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z8h8wY"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 14px; margin-bottom: 8px;\"><strong>ONLINE PHÙ HỢP VỚI AI?</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học sinh ở xa, không thuận tiện di chuyển đến lớp</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học viên ở tỉnh/thành khác muốn học cùng giảng viên chuyên môn</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Người bận lịch học văn hóa nhưng vẫn muốn luyện thi mỹ thuật</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">👉 Người cần học linh hoạt theo thời gian cá nhân</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z6bK02"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "23/30",
					"--grid-column": "27/42",
					"--m-grid-row": "19/27",
					"--m-grid-column": "6/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z6bK02"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 16px; margin-bottom: 8px;\"><strong>ƯU ĐIỂM </strong></h5><h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 14px; margin-bottom: 8px;\"><strong>LỚP ONLINE</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">✔ Học ở bất kỳ đâu<br>✔ Tiết kiệm thời gian di chuyển<br>✔ Linh hoạt chọn lịch học<br>✔ Có thể xem lại bài giảng<br>✔ Theo sát như lớp trực tiếp</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zHcM3U"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "13/22",
					"--grid-column": "39/47",
					"--m-grid-row": "14/20",
					"--m-grid-column": "29/50"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zHcM3U"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 14px; margin-bottom: 8px;\"><strong>HỌC ONLINE CÓ GÌ KHÁC?</strong></h5><p dir=\"auto\" class=\"body\" style=\"color: rgb(0, 0, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Học trực tuyến qua nền tảng: <strong>Google Meet</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(0, 0, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Nộp và sửa bài qua <strong>Zalo</strong></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpuBBs"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "40/42",
					"--grid-column": "19/51",
					"--m-grid-row": "33/38",
					"--m-grid-column": "5/48",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpuBBs"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>MÔN HỌC CHÍNH (CẤU TRÚC THI THỰC TẾ)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zoDJ3a"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "44/46",
					"--grid-column": "19/22",
					"--m-grid-row": "46/47",
					"--m-grid-column": "9/21"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zoDJ3a"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Hình họa chì (V)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zF5YPn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "45/47",
					"--grid-column": "37/46",
					"--m-grid-row": "53/55",
					"--m-grid-column": "1/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zF5YPn"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Trang trí màu (H)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zugz2j"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "50/54",
					"--grid-column": "17/29",
					"--m-grid-row": "47/48",
					"--m-grid-column": "1/32"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zugz2j"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng hình – tỷ lệ – cấu trúc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tĩnh vật – đầu tượng – chân dung</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Ánh sáng, khối, chất liệu</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zNUkYt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "49/53",
					"--grid-column": "35/58",
					"--m-grid-row": "55/56",
					"--m-grid-column": "20/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zNUkYt"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Nguyên lý màu sắc – hòa sắc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu – sáng tạo họa tiết</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Bố cục – giải đề thi</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z-GRHc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "56/58",
					"--grid-column": "19/26",
					"--m-grid-row": "49/51",
					"--m-grid-column": "7/23"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"z-GRHc"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/hinh-hoa-chi"}
					target={"_self"}
					fontFamily={"Montserrat"}
					fontWeight={500}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"44.72222222222222vw"}
					mobileHeightVw={"4.444444444444445vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ztiE2N"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "8/13",
					"--grid-column": "40/45",
					"--m-grid-row": "6/13",
					"--m-grid-column": "28/52"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"ztiE2N"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={123}
					desktopHeight={181}
					mobileWidth={131}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1iZKf"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 15,
					"--grid-row": "18/20",
					"--grid-column": "30/31",
					"--m-grid-row": "35/37",
					"--m-grid-column": "10/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z1iZKf"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"star"}
					height={32}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5KGTn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 16,
					"--grid-row": "26/27",
					"--grid-column": "7/10",
					"--m-grid-row": "40/41",
					"--m-grid-column": "8/12"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z5KGTn"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(159, 227, 58)"}
					shape={"ellipse"}
					height={31}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zvaE39"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 17,
					"--grid-row": "38/39",
					"--grid-column": "55/60",
					"--m-grid-row": "30/31",
					"--m-grid-column": "41/46"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zvaE39"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"triangle"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zXZTEM"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "24/36",
					"--grid-column": "41/57",
					"--m-grid-row": "50/60",
					"--m-grid-column": "13/18",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zXZTEM"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={248}
					desktopHeight={308}
					mobileWidth={91}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqrRAv"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 19,
					"--grid-row": "55/59",
					"--grid-column": "12/14",
					"--m-grid-row": "32/34",
					"--m-grid-column": "27/30"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zqrRAv"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"star"}
					height={43}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zi4dE9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 20,
					"--grid-row": "48/51",
					"--grid-column": "66/67",
					"--m-grid-row": "2/3",
					"--m-grid-column": "2/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zi4dE9"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zP8gKT"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 21,
					"--grid-row": "33/34",
					"--grid-column": "13/16",
					"--m-grid-row": "26/29",
					"--m-grid-column": "1/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zP8gKT"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"triangle"}
					height={17}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zHGZjp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 22,
					"--grid-row": "35/37",
					"--grid-column": "32/33",
					"--m-grid-row": "44/45",
					"--m-grid-column": "51/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zHGZjp"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsV8xU"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 23,
					"--grid-row": "17/19",
					"--grid-column": "25/26",
					"--m-grid-row": "7/8",
					"--m-grid-column": "42/45"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zsV8xU"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zN81gN"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 24,
					"--grid-row": "41/43",
					"--grid-column": "4/6",
					"--m-grid-row": "25/29",
					"--m-grid-column": "22/26"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zN81gN"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"dodecagram"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z-OUyp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 25,
					"--grid-row": "28/29",
					"--grid-column": "61/63",
					"--m-grid-row": "36/39",
					"--m-grid-column": "39/41"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z-OUyp"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"dodecagram"}
					height={24}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5gf4i"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "57/60",
					"--grid-column": "38/48",
					"--m-grid-row": "57/58",
					"--m-grid-column": "22/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"z5gf4i"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/trang-tri-mau"}
					target={"_self"}
					fontFamily={"Montserrat"}
					fontWeight={500}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"45.55555555555556vw"}
					mobileHeightVw={"4.722222222222222vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zJVyrl"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 27,
					"--grid-row": "62/63",
					"--grid-column": "1/2",
					"--m-grid-row": "16/17",
					"--m-grid-column": "16/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zJVyrl"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zNbhtk"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 28,
					"--grid-row": "59/61",
					"--grid-column": "62/65",
					"--m-grid-row": "21/23",
					"--m-grid-column": "33/37"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zNbhtk"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={40}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zPHuAH"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 1,
					"--grid-row": "9/12",
					"--grid-column": "49/59",
					"--m-grid-row": "9/12",
					"--m-grid-column": "47/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zPHuAH"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(159, 227, 58)"}
					shape={"dodecagram"}
					height={46}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zg4fQ-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 29,
					"--grid-row": "2/5",
					"--grid-column": "9/11",
					"--m-grid-row": "23/24",
					"--m-grid-column": "49/53"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zg4fQ-"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_XQPV"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 30,
					"--grid-row": "15/16",
					"--grid-column": "3/5",
					"--m-grid-row": "15/16",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z_XQPV"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"triangle"}
					height={33}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zrlP8r"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 31,
					"--grid-row": "4/6",
					"--grid-column": "50/53",
					"--m-grid-row": "2/5",
					"--m-grid-column": "35/38"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zrlP8r"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zwoDB_"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 32,
					"--grid-row": "67/69",
					"--grid-column": "8/28",
					"--m-grid-row": "62/63",
					"--m-grid-column": "1/53",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zwoDB_"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>HÌNH THỨC TƯƠNG TÁC</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zuCj5f"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 33,
					"--grid-row": "66/68",
					"--grid-column": "40/64",
					"--m-grid-row": "61/62",
					"--m-grid-column": "1/53",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zuCj5f"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>MÔI TRƯỜNG HỌC TẬP</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zKjdre"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 34,
					"--grid-row": "64/65",
					"--grid-column": "20/52",
					"--m-grid-row": "39/43",
					"--m-grid-column": "15/40",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zKjdre"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>MÔN HỌC CHÍNH </strong></span><span style=\"--fontSizeMobile: 14px; font-weight: 700;\"><strong>(CẤU TRÚC THI THỰC TẾ)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsdfUJ"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 35,
					"--grid-row": "11/32",
					"--grid-column": "15/24",
					"--m-grid-row": "42/52",
					"--m-grid-column": "34/43"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zsdfUJ"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-2-JcKvcZvmXYhEyZ72.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={272}
					desktopHeight={508}
					mobileWidth={76}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zbkCP9"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 36,
					"--grid-row": "52/66",
					"--grid-column": "54/68",
					"--m-grid-row": "54/59",
					"--m-grid-column": "11/19",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zbkCP9"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-yZkp46GjMmcY5v9R.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={248}
					desktopHeight={308}
					mobileWidth={101}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
