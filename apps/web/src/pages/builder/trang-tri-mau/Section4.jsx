import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zszC-y"}
			htmlId={"zszC-y"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "8.61vw 11.11vw auto auto auto auto 25.28vw 11.11vw auto 6.11vw auto 19.17vw 25.00vw 10.00vw auto auto auto 26.11vw 10.56vw auto auto auto 1.11vw auto 22.22vw 10.00vw auto auto auto 1.67vw auto 14.44vw auto 1px",
				"--t-grid-template-rows": "minmax(31px, auto) minmax(40px, auto) minmax(2px, auto) minmax(28px, auto) minmax(13px, auto) minmax(75px, auto) minmax(91px, auto) minmax(40px, auto) minmax(2px, auto) minmax(22px, auto) minmax(6px, auto) minmax(69px, auto) minmax(90px, auto) minmax(36px, auto) minmax(6px, auto) minmax(24px, auto) minmax(75px, auto) minmax(94px, auto) minmax(38px, auto) minmax(4px, auto) minmax(26px, auto) minmax(13px, auto) minmax(4px, auto) minmax(75px, auto) minmax(80px, auto) minmax(36px, auto) minmax(6px, auto) minmax(24px, auto) minmax(13px, auto) minmax(6px, auto) minmax(75px, auto) minmax(52px, auto) minmax(13px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(9.97vw, auto) minmax(3.27vw, auto) minmax(5.15vw, auto) minmax(2.70vw, auto) minmax(0.57vw, auto) minmax(1.96vw, auto) minmax(7.84vw, auto) minmax(0.41vw, auto) minmax(3.27vw, auto) minmax(1.96vw, auto) minmax(0.16vw, auto) minmax(6.37vw, auto) minmax(1.47vw, auto) minmax(1.80vw, auto) minmax(7.84vw, auto) minmax(0.08vw, auto) minmax(3.27vw, auto) minmax(1.96vw, auto) minmax(3.43vw, auto) minmax(1.96vw, auto) minmax(2.45vw, auto) minmax(7.52vw, auto) minmax(3.84vw, auto) minmax(4.08vw, auto) minmax(1.88vw, auto) minmax(4.08vw, auto) minmax(1.88vw, auto) minmax(4.08vw, auto) minmax(1.88vw, auto) minmax(4.08vw, auto) minmax(1.88vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(122px, auto) minmax(40px, auto) minmax(63px, auto) minmax(33px, auto) minmax(7px, auto) minmax(24px, auto) minmax(96px, auto) minmax(5px, auto) minmax(40px, auto) minmax(24px, auto) minmax(2px, auto) minmax(78px, auto) minmax(18px, auto) minmax(22px, auto) minmax(96px, auto) minmax(1px, auto) minmax(40px, auto) minmax(24px, auto) minmax(42px, auto) minmax(24px, auto) minmax(30px, auto) minmax(92px, auto) minmax(47px, auto) minmax(50px, auto) minmax(23px, auto) minmax(50px, auto) minmax(23px, auto) minmax(50px, auto) minmax(23px, auto) minmax(50px, auto) minmax(23px, auto) 1fr",
				"--m-grid-template-columns": "3.35% 0.30% 0.61% 1.52% 2.74% 0.30% 0.91% 1.22% 0.61% 0.30% 0.30% 0.30% 48.17% 10.67% 0.61% 0.61% 2.13% 2.13% 1.83% 0.61% 1.22% 0.61% 0.91% 4.88% 0.91% 0.30% 3.96% 7.93%",
				"--grid-template-columns": "1.55% 1.14% 0.33% 1.96% 1.55% 12.17% 2.21% 1.31% 7.27% 0.41% 0.74% 0.82% 0.41% 4.25% 1.06% 0.49% 0.25% 2.53% 0.74% 1.47% 4.41% 9.97% 1.55% 3.92% 1.55% 3.92% 1.47% 0.08% 18.63% 1.55% 3.84% 0.08% 1.55% 1.55% 2.37% 0.90%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1210px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "874px"
			}}
			background={{
				path: "web-design--gd-phone--16-tUyFxIux6UozHlWu.png",
				color: "rgb(76, 205, 17)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design--gd-phone--16-tUyFxIux6UozHlWu.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--16-tUyFxIux6UozHlWu.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zWLH1C"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "4/6",
					"--grid-column": "4/9",
					"--m-grid-row": "3/5",
					"--m-grid-column": "10/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zWLH1C"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>MÀU CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpxB60"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "7/8",
					"--grid-column": "2/14",
					"--m-grid-row": "6/7",
					"--m-grid-column": "4/26"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpxB60"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Vòng thuần sắc</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Gam nóng – lạnh</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sắc độ, cường độ màu</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kỹ thuật pha màu và chuyển màu cơ bản</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zIXlDS"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "6/7",
					"--grid-column": "4/16",
					"--m-grid-row": "5/6",
					"--m-grid-column": "11/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zIXlDS"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>Giai đoạn nền tảng (Khoảng 2-3 tháng)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z3dXCl"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "13/15",
					"--grid-column": "6/15",
					"--m-grid-row": "9/12",
					"--m-grid-column": "9/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3dXCl"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TẢ THỰC</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zHM0zi"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "15/16",
					"--grid-column": "5/17",
					"--m-grid-row": "11/13",
					"--m-grid-column": "2/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zHM0zi"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu hoa lá, động vật, hình học</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chuyển vật thể thật thành họa tiết trang trí</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo nhịp điệu bằng nét và mảng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xây dựng ngôn ngữ tạo hình cá nhân</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zPKt6V"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "2/3",
					"--grid-column": "26/33",
					"--m-grid-row": "15/17",
					"--m-grid-column": "7/28"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zPKt6V"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>CÁCH ĐIỆU HỌA TIẾT</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zjRG9F"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "3/5",
					"--grid-column": "25/34",
					"--m-grid-row": "17/18",
					"--m-grid-column": "2/27"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zjRG9F"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách điệu hoa lá, động vật, hình học</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chuyển vật thể thật thành họa tiết trang trí</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo nhịp điệu bằng nét và mảng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xây dựng ngôn ngữ tạo hình cá nhân</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcTxV0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "9/10",
					"--grid-column": "24/30",
					"--m-grid-row": "20/22",
					"--m-grid-column": "6/22"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zcTxV0"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>GIẢI ĐỀ CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2nFyh"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "10/11",
					"--grid-column": "24/32",
					"--m-grid-row": "22/23",
					"--m-grid-column": "8/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2nFyh"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(</em>Giai đoạn vận dụng kiến thức vào bài thi<em>)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zow0PB"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "12/14",
					"--grid-column": "23/31",
					"--m-grid-row": "24/25",
					"--m-grid-column": "3/21"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zow0PB"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích đề bài</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Chia bố cục mảng chính – phụ</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Sắp xếp họa tiết vào không gian</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tạo điểm nhấn thị giác</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z9t7a2"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "17/18",
					"--grid-column": "29/36",
					"--m-grid-row": "27/29",
					"--m-grid-column": "13/23"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z9t7a2"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17);\"><strong>VẼ TOÀN THÂN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zfKD9g"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "19/22",
					"--grid-column": "27/37",
					"--m-grid-row": "31/32",
					"--m-grid-column": "5/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zfKD9g"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Luyện đề thi các năm trước</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Làm quen nhiều dạng chủ đề</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Kết hợp chữ và hình trong bố cục</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Rèn tốc độ xử lý bài trong thời gian giới hạn</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqqnLi"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "18/19",
					"--grid-column": "28/35",
					"--m-grid-row": "29/30",
					"--m-grid-column": "13/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zqqnLi"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(Giai đoạn giải đề nâng cao)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zMcSB9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "20/21",
					"--grid-column": "3/21",
					"--m-grid-row": "33/34",
					"--m-grid-column": "1/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zMcSB9"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong>Lưu ý dành cho học viên thi vào Đại học Mỹ thuật TP.HCM</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zhdgZF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "23/24",
					"--grid-column": "18/22",
					"--m-grid-row": "2/4",
					"--m-grid-column": "11/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zhdgZF"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>1</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zsxfbE"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "25/26",
					"--grid-column": "7/10",
					"--m-grid-row": "8/10",
					"--m-grid-column": "9/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zsxfbE"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>2</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zoi3aW"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "27/28",
					"--grid-column": "8/13",
					"--m-grid-row": "14/16",
					"--m-grid-column": "8/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zoi3aW"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>3</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zC3yPt"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "29/30",
					"--grid-column": "12/20",
					"--m-grid-row": "19/21",
					"--m-grid-column": "7/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zC3yPt"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>4</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zI0hNL"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "31/32",
					"--grid-column": "11/19",
					"--m-grid-row": "26/28",
					"--m-grid-column": "12/16"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zI0hNL"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>5</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
