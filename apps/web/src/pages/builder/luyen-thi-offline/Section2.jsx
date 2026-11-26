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
			blockId={"zxCRN3"}
			htmlId={"zxCRN3"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "4.44vw auto auto 4.17vw auto 7.78vw auto 2.50vw auto 4.44vw auto 6.39vw auto 3.33vw auto 4.44vw auto auto 4.44vw auto 17.22vw auto 1.67vw auto 3.61vw auto 0.28vw 1.39vw 0.56vw 1.67vw auto auto 1.94vw 3.06vw 0.56vw auto 2.78vw 1.39vw 0.56vw 1.39vw 0.56vw auto 1.67vw 5.28vw 8.61vw auto auto 0.83vw auto 2.22vw 0.56vw auto 0.28vw 1.94vw auto 3.06vw auto 0px",
				"--t-grid-template-rows": "minmax(16px, auto) minmax(87px, auto) minmax(2px, auto) minmax(15px, auto) minmax(99px, auto) minmax(28px, auto) minmax(97px, auto) minmax(9px, auto) minmax(97px, auto) minmax(16px, auto) minmax(175px, auto) minmax(23px, auto) minmax(60px, auto) minmax(12px, auto) minmax(30px, auto) minmax(16px, auto) minmax(30px, auto) minmax(72px, auto) minmax(16px, auto) minmax(72px, auto) minmax(62px, auto) minmax(14px, auto) minmax(6px, auto) minmax(20px, auto) minmax(13px, auto) minmax(11px, auto) minmax(1px, auto) minmax(5px, auto) minmax(2px, auto) minmax(6px, auto) minmax(6px, auto) minmax(1px, auto) minmax(7px, auto) minmax(11px, auto) minmax(2px, auto) minmax(2px, auto) minmax(10px, auto) minmax(5px, auto) minmax(2px, auto) minmax(5px, auto) minmax(2px, auto) minmax(1px, auto) minmax(6px, auto) minmax(19px, auto) minmax(31px, auto) minmax(4px, auto) minmax(6px, auto) minmax(3px, auto) minmax(11px, auto) minmax(8px, auto) minmax(2px, auto) minmax(8px, auto) minmax(1px, auto) minmax(7px, auto) minmax(4px, auto) minmax(11px, auto) minmax(73px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(4.58vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(0.41vw, auto) minmax(0.41vw, auto) minmax(0.33vw, auto) minmax(1.55vw, auto) minmax(10.21vw, auto) minmax(1.31vw, auto) minmax(2.45vw, auto) minmax(0.74vw, auto) minmax(0.08vw, auto) minmax(3.27vw, auto) minmax(1.96vw, auto) minmax(2.70vw, auto) minmax(6.70vw, auto) minmax(0.41vw, auto) minmax(0.82vw, auto) minmax(1.80vw, auto) minmax(1.96vw, auto) minmax(1.63vw, auto) minmax(1.55vw, auto) minmax(0.25vw, auto) minmax(0.65vw, auto) minmax(1.88vw, auto) minmax(0.98vw, auto) minmax(0.98vw, auto) minmax(11.60vw, auto) minmax(1.39vw, auto) minmax(2.29vw, auto) minmax(1.39vw, auto) minmax(0.90vw, auto) minmax(1.14vw, auto) minmax(0.90vw, auto) minmax(0.65vw, auto) minmax(0.82vw, auto) minmax(0.82vw, auto) minmax(1.55vw, auto) minmax(1.63vw, auto) minmax(1.63vw, auto) minmax(2.04vw, auto) minmax(2.53vw, auto) minmax(0.65vw, auto) minmax(2.94vw, auto) minmax(2.94vw, auto) minmax(0.57vw, auto) minmax(0.98vw, auto) minmax(0.41vw, auto) minmax(2.45vw, auto) minmax(0.41vw, auto) minmax(2.12vw, auto) minmax(1.55vw, auto) minmax(15.60vw, auto) minmax(3.27vw, auto) 0.33vw",
				"--grid-template-rows": "minmax(56px, auto) minmax(8px, auto) minmax(2px, auto) minmax(5px, auto) minmax(5px, auto) minmax(4px, auto) minmax(19px, auto) minmax(125px, auto) minmax(16px, auto) minmax(30px, auto) minmax(9px, auto) minmax(1px, auto) minmax(40px, auto) minmax(24px, auto) minmax(33px, auto) minmax(82px, auto) minmax(5px, auto) minmax(10px, auto) minmax(22px, auto) minmax(24px, auto) minmax(20px, auto) minmax(19px, auto) minmax(3px, auto) minmax(8px, auto) minmax(23px, auto) minmax(12px, auto) minmax(12px, auto) minmax(142px, auto) minmax(17px, auto) minmax(28px, auto) minmax(17px, auto) minmax(11px, auto) minmax(14px, auto) minmax(11px, auto) minmax(8px, auto) minmax(10px, auto) minmax(10px, auto) minmax(19px, auto) minmax(20px, auto) minmax(20px, auto) minmax(25px, auto) minmax(31px, auto) minmax(8px, auto) minmax(36px, auto) minmax(36px, auto) minmax(7px, auto) minmax(12px, auto) minmax(5px, auto) minmax(30px, auto) minmax(5px, auto) minmax(26px, auto) minmax(19px, auto) minmax(191px, auto) minmax(40px, auto) 1fr",
				"--m-grid-template-columns": "4.27% 14.94% 0.30% 3.05% 1.52% 1.52% 0.30% 0.30% 0.61% 0.61% 2.13% 0.30% 0.61% 0.30% 0.61% 0.30% 0.61% 2.44% 0.30% 0.91% 2.13% 1.22% 1.83% 3.66% 0.30% 4.57% 5.79% 0.91% 12.50% 12.50% 13.72% 1.22% 3.66%",
				"--grid-template-columns": "1.55% 0.08% 1.47% 1.23% 0.33% 0.25% 2.53% 1.96% 1.23% 0.41% 0.98% 2.53% 0.90% 1.31% 0.16% 1.47% 0.16% 0.08% 6.29% 6.54% 1.23% 2.61% 2.37% 4.66% 8.17% 2.61% 1.23% 0.82% 0.25% 0.41% 0.33% 1.55% 0.25% 0.98% 0.33% 0.74% 2.53% 3.27% 0.25% 1.47% 1.47% 8.09% 0.41% 0.74% 0.49% 0.41% 0.41% 0.33% 0.65% 0.65% 0.08% 0.74% 1.31% 4.08% 1.96% 3.27% 3.27% 1.88% 0.25% 2.04%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1360px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1419px"
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
				elementId={"zsFgXY"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 3,
					"--grid-row": "3/15",
					"--grid-column": "17/38",
					"--m-grid-row": "2/4",
					"--m-grid-column": "2/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zsFgXY"}
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
				elementId={"zeQBke"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 4,
					"--grid-row": "10/27",
					"--grid-column": "30/50",
					"--m-grid-row": "2/3",
					"--m-grid-column": "29/33"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zeQBke"}
					background={"rgb(255, 198, 54)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 25px 50px -12px rgba(0, 0, 0, 0.25)"}
					opacity={"1"}
					height={"365px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zAmETO"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 2,
					"--grid-row": "21/33",
					"--grid-column": "14/41",
					"--m-grid-row": "5/6",
					"--m-grid-column": "1/26"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridCard
					id={"zAmETO"}
					background={"rgb(223, 255, 129)"}
					border={"1px solid rgba(255, 255, 0, 0)"}
					borderRadius={"20px"}
					boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"}
					opacity={"1"}
					height={"312px"}
					className={"layout-element__component layout-element__component--GridCard"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zM4i7-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "7/14",
					"--grid-column": "20/31",
					"--m-grid-row": "7/8",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zM4i7-"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>ĐỐI TƯỢNG PHÙ HỢP</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học sinh lớp 10 – 12 định hướng thi khối H, V</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉Người mới bắt đầu (mất gốc hoàn toàn vẫn học được)</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">👉 Học viên cần luyện thi cấp tốc giai đoạn nước rút</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">👉 Người muốn theo đuổi ngành: Thiết kế, Kiến trúc, Mỹ thuật</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_raLB"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "22/31",
					"--grid-column": "16/40",
					"--m-grid-row": "11/12",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z_raLB"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>LỢI ÍCH KHI HỌC OFFLINE</strong></h5><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>Tương tác trực tiếp – hiểu bài ngay tại lớp</strong><br>Được giải đáp thắc mắc ngay lập tức, không bị gián đoạn như học online.</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>Giảng viên theo sát từng học viên</strong><br>Sửa bài chi tiết, chỉ ra lỗi sai và hướng dẫn cách cải thiện cụ thể.</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>Môi trường học tập tập trung cao</strong><br>Không bị xao nhãng, tạo thói quen học đều đặn và nghiêm túc.</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><strong>Rèn kỹ năng làm bài &amp; phản xạ thi</strong><br>Thực hành liên tục với đề thi thật, học cách phân bổ thời gian hiệu quả.</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z45G5A"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "12/23",
					"--grid-column": "32/49",
					"--m-grid-row": "9/10",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z45G5A"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"><strong>PHƯƠNG PHÁP GIẢNG DẠY</strong></h5><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\"> Giảng dễ hiểu, đi từ bản chất → ứng dụng</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Kết hợp lý thuyết và thực hành ngay tại lớp</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Cá nhân hoá theo trình độ từng học viên</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(26, 26, 26); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kiểm tra định kỳ để theo dõi tiến độ</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsjOxe"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "39/41",
					"--grid-column": "19/44",
					"--m-grid-row": "13/14",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zsjOxe"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 0);\"><span style=\"font-weight: 700;\"><strong>MÔN HỌC CHÍNH (CẤU TRÚC THI THỰC TẾ)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z0Q19N"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "42/43",
					"--grid-column": "18/23",
					"--m-grid-row": "15/16",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z0Q19N"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Hình họa chì (V)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zKvLAd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "42/43",
					"--grid-column": "36/43",
					"--m-grid-row": "17/18",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zKvLAd"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Trang trí màu (H)</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zE9D3O"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "44/46",
					"--grid-column": "15/25",
					"--m-grid-row": "18/19",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zE9D3O"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Dựng hình – tỷ lệ – cấu trúc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Tĩnh vật – đầu tượng – chân dung</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Ánh sáng, khối, chất liệu</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zoWy43"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "44/46",
					"--grid-column": "33/54",
					"--m-grid-row": "20/21",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zoWy43"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Nguyên lý màu sắc – hòa sắc</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Cách điệu – sáng tạo họa tiết</p></li><li style=\"color: rgb(255, 255, 255);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Bố cục – giải đề thi</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zoHg4Z"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "49/50",
					"--grid-column": "18/24",
					"--m-grid-row": "28/33",
					"--m-grid-column": "13/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"zoHg4Z"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/hinh-hoa-chi"}
					target={"_self"}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"63.888888888888886vw"}
					mobileHeightVw={"5.555555555555555vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zklAVd"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "8/13",
					"--grid-column": "35/42",
					"--m-grid-row": "55/58",
					"--m-grid-column": "1/11"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zklAVd"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/untitled-2-b7QjVJcivEoV8pby.png?width=375&fit=crop"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={123}
					desktopHeight={181}
					mobileWidth={90}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRJilF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 15,
					"--grid-row": "18/20",
					"--grid-column": "26/27",
					"--m-grid-row": "24/25",
					"--m-grid-column": "20/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zRJilF"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"star"}
					height={32}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zlc856"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 16,
					"--grid-row": "24/26",
					"--grid-column": "7/8",
					"--m-grid-row": "34/37",
					"--m-grid-column": "4/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zlc856"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(159, 227, 58)"}
					shape={"ellipse"}
					height={31}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zYp1rV"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 17,
					"--grid-row": "33/35",
					"--grid-column": "47/51",
					"--m-grid-row": "45/48",
					"--m-grid-column": "30/31"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zYp1rV"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"triangle"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zvXcAq"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "25/40",
					"--grid-column": "34/52",
					"--m-grid-row": "42/57",
					"--m-grid-column": "1/22"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zvXcAq"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-bRHKAvmo2JWApGyX.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={285}
					desktopHeight={354}
					mobileWidth={125}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zjP-d1"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 19,
					"--grid-row": "45/47",
					"--grid-column": "11/13",
					"--m-grid-row": "29/32",
					"--m-grid-column": "20/23"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zjP-d1"}
					svg={"<svg width=\"86\" height=\"82\" viewBox=\"0 0 86 82\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M42.7975 0L52.9007 31.0942H85.5951L59.1447 50.3115L69.2479 81.4058L42.7975 62.1885L16.3472 81.4058L26.4503 50.3115L0 31.0942H32.6944L42.7975 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"star"}
					height={43}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpp2to"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 20,
					"--grid-row": "32/34",
					"--grid-column": "60/61",
					"--m-grid-row": "31/35",
					"--m-grid-column": "3/10"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zpp2to"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={25}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zaUctx"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 21,
					"--grid-row": "29/30",
					"--grid-column": "10/12",
					"--m-grid-row": "46/48",
					"--m-grid-column": "5/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zaUctx"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"triangle"}
					height={17}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zM2GL_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 22,
					"--grid-row": "36/37",
					"--grid-column": "28/29",
					"--m-grid-row": "26/27",
					"--m-grid-column": "9/12"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zM2GL_"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcbOKM"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 23,
					"--grid-row": "17/19",
					"--grid-column": "21/22",
					"--m-grid-row": "49/50",
					"--m-grid-column": "16/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zcbOKM"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zAAaSp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 24,
					"--grid-row": "38/39",
					"--grid-column": "4/6",
					"--m-grid-row": "22/23",
					"--m-grid-column": "11/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zAAaSp"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 255, 255)"}
					shape={"dodecagram"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zkwzWY"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 25,
					"--grid-row": "26/28",
					"--grid-column": "55/56",
					"--m-grid-row": "51/53",
					"--m-grid-column": "11/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zkwzWY"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(254, 146, 1)"}
					shape={"dodecagram"}
					height={24}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zySmnm"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "49/50",
					"--grid-column": "37/47",
					"--m-grid-row": "36/40",
					"--m-grid-column": "28/32"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"zySmnm"}
					text={"Xem chi tiết lộ trình học  →"}
					type={"primary"}
					href={"/trang-tri-mau"}
					target={"_self"}
					backgroundColor={"rgb(39, 107, 8)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(170, 88, 60)"}
					fontColorHover={"rgb(223, 246, 152)"}
					borderColorHover={"rgb(0, 0, 0)"}
					mobileWidthVw={"36.111111111111114vw"}
					mobileHeightVw={"5.277777777777778vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zQ0Y-4"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 27,
					"--grid-row": "52/53",
					"--grid-column": "1/2",
					"--m-grid-row": "45/49",
					"--m-grid-column": "16/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zQ0Y-4"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(159, 227, 58)"}
					shape={"mask-shape-14"}
					height={19}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1B6le"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 28,
					"--grid-row": "48/51",
					"--grid-column": "57/58",
					"--m-grid-row": "38/43",
					"--m-grid-column": "9/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z1B6le"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={40}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zBNP3v"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 1,
					"--grid-row": "9/11",
					"--grid-column": "45/53",
					"--m-grid-row": "39/44",
					"--m-grid-column": "3/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zBNP3v"}
					svg={"<svg width=\"91\" height=\"90\" viewBox=\"0 0 91 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M45.5957 0L54.9132 10.2267L68.0957 6.02886L71.0515 19.5442L84.5668 22.5L80.369 35.6825L90.5957 45L80.369 54.3175L84.5668 67.5L71.0515 70.4558L68.0957 83.9711L54.9132 79.7733L45.5957 90L36.2782 79.7733L23.0957 83.9711L20.1399 70.4558L6.62456 67.5L10.8224 54.3175L0.595703 45L10.8224 35.6825L6.62456 22.5L20.1399 19.5442L23.0957 6.02886L36.2782 10.2267L45.5957 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(159, 227, 58)"}
					shape={"dodecagram"}
					height={46}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSeSE4"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 29,
					"--grid-row": "2/5",
					"--grid-column": "9/10",
					"--m-grid-row": "32/41",
					"--m-grid-column": "21/27"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zSeSE4"}
					svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n  <path d=\"M168.562 42.5672C184.281 55.141 200 76.1523 200 99.8108C200 123.635 184.127 150.271 157.312 171.283C130.497 192.294 92.8952 207.68 62.9983 195.934C33.1014 184.187 11.064 145.473 3.2045 104.278C-4.655 63.2477 1.81753 19.9014 24.009 5.83869C46.2005 -8.38948 84.111 6.66591 110.772 16.2617C137.432 25.8574 152.997 29.9935 168.562 42.5672Z\" preserveAspectRatio=\"none\"></path>\n</svg> "}
					color={"rgb(254, 146, 1)"}
					shape={"mask-shape-14"}
					height={15}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z9o5oe"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 30,
					"--grid-row": "15/16",
					"--grid-column": "3/5",
					"--m-grid-row": "54/56",
					"--m-grid-column": "5/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"z9o5oe"}
					svg={"<svg width=\"89\" height=\"77\" viewBox=\"0 0 89 77\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<path d=\"M44.1673 0L88.3346 76.5H0L44.1673 0Z\" stroke=\"none\" preserveAspectRatio=\"none\"></path>\n</svg>\n"}
					color={"rgb(255, 133, 157)"}
					shape={"triangle"}
					height={33}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zNe4ug"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--z-index": 31,
					"--grid-row": "4/6",
					"--grid-column": "46/48",
					"--m-grid-row": "30/34",
					"--m-grid-column": "9/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridShape
					id={"zNe4ug"}
					svg={"<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n\t<circle cx=\"45\" cy=\"45\" r=\"45\" stroke=\"none\" preserveAspectRatio=\"none\"></circle>\n</svg>"}
					color={"rgb(255, 133, 157)"}
					shape={"ellipse"}
					height={10}
					className={"layout-element__component layout-element__component--GridShape"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zT0x9i"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 32,
					"--grid-row": "54/55",
					"--grid-column": "1/24",
					"--m-grid-row": "43/47",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zT0x9i"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>PHƯƠNG PHÁP GIẢNG DẠY</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zyWvmO"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 33,
					"--grid-row": "54/55",
					"--grid-column": "39/59",
					"--m-grid-row": "47/52",
					"--m-grid-column": "1/34"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zyWvmO"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><span style=\"font-weight: 700;\"><strong>MÔI TRƯỜNG HỌC TẬP</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
