import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zcS6VD"}
			htmlId={"zcS6VD"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "8.61vw 10.28vw auto auto 1.39vw auto 2.22vw auto 19.17vw 10.83vw auto auto 1.11vw auto 24.44vw auto auto auto 22.50vw 11.11vw auto auto auto auto 19.44vw 11.11vw auto auto 0.83vw auto 0.83vw auto 13.89vw auto 3px",
				"--t-grid-template-rows": "minmax(31px, auto) minmax(37px, auto) minmax(5px, auto) minmax(21px, auto) minmax(5px, auto) minmax(13px, auto) minmax(8px, auto) minmax(75px, auto) minmax(69px, auto) minmax(39px, auto) minmax(3px, auto) minmax(23px, auto) minmax(4px, auto) minmax(75px, auto) minmax(88px, auto) minmax(42px, auto) minmax(26px, auto) minmax(75px, auto) minmax(81px, auto) minmax(40px, auto) minmax(2px, auto) minmax(24px, auto) minmax(13px, auto) minmax(75px, auto) minmax(70px, auto) minmax(40px, auto) minmax(2px, auto) minmax(24px, auto) minmax(3px, auto) minmax(13px, auto) minmax(3px, auto) minmax(75px, auto) minmax(50px, auto) minmax(13px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.66vw, auto) minmax(3.27vw, auto) minmax(4.58vw, auto) minmax(3.19vw, auto) minmax(0.08vw, auto) minmax(0.57vw, auto) minmax(2.61vw, auto) minmax(1.96vw, auto) minmax(3.19vw, auto) minmax(3.84vw, auto) minmax(0.65vw, auto) minmax(0.16vw, auto) minmax(3.10vw, auto) minmax(1.96vw, auto) minmax(2.94vw, auto) minmax(3.35vw, auto) minmax(0.49vw, auto) minmax(1.06vw, auto) minmax(1.72vw, auto) minmax(7.43vw, auto) minmax(0.41vw, auto) minmax(2.86vw, auto) minmax(1.96vw, auto) minmax(4.00vw, auto) minmax(1.96vw, auto) minmax(1.88vw, auto) minmax(4.00vw, auto) minmax(3.84vw, auto) minmax(3.84vw, auto) 0.00vw",
				"--grid-template-rows": "minmax(106px, auto) minmax(40px, auto) minmax(56px, auto) minmax(39px, auto) minmax(1px, auto) minmax(7px, auto) minmax(32px, auto) minmax(24px, auto) minmax(39px, auto) minmax(47px, auto) minmax(8px, auto) minmax(2px, auto) minmax(38px, auto) minmax(24px, auto) minmax(36px, auto) minmax(41px, auto) minmax(6px, auto) minmax(13px, auto) minmax(21px, auto) minmax(91px, auto) minmax(5px, auto) minmax(35px, auto) minmax(24px, auto) minmax(49px, auto) minmax(24px, auto) minmax(23px, auto) minmax(49px, auto) minmax(47px, auto) minmax(47px, auto) 1fr",
				"--m-grid-template-columns": "4.57% 1.22% 1.22% 0.30% 4.88% 0.30% 0.30% 0.30% 0.61% 0.30% 0.30% 0.61% 31.71% 5.79% 0.61% 0.30% 0.30% 11.28% 3.35% 1.83% 3.66% 2.44% 0.61% 2.13% 2.44% 0.91% 0.91% 0.30% 2.13% 7.01% 7.32%",
				"--grid-template-columns": "1.63% 1.06% 0.41% 1.88% 1.55% 8.42% 3.59% 3.76% 1.96% 3.59% 1.80% 6.45% 1.14% 0.41% 4.98% 15.03% 1.55% 3.27% 1.55% 3.92% 1.47% 0.08% 1.63% 9.31% 8.33% 1.55% 3.27% 1.55% 1.55% 2.37% 0.90%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1170px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "891px"
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
				elementId={"z-XNua"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "5/8",
					"--grid-column": "4/9",
					"--m-grid-row": "3/5",
					"--m-grid-column": "6/19"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z-XNua"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>KHỐI CƠ BẢN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRmA8e"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "9/13",
					"--grid-column": "2/12",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/23"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRmA8e"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cách cầm bút và kiểm soát nét chì</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng hình khối cơ bản</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đánh bóng, tạo sắc độ</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Hiểu ánh sáng và không gian</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zR_in2"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "8/9",
					"--grid-column": "4/14",
					"--m-grid-row": "6/7",
					"--m-grid-column": "7/22"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zR_in2"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>Giai đoạn nền tảng (Tối thiểu 2 tháng)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zJuyrC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "17/20",
					"--grid-column": "6/13",
					"--m-grid-row": "11/13",
					"--m-grid-column": "8/20"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zJuyrC"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>VẼ TĨNH VẬT</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z0beTL"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "20/22",
					"--grid-column": "5/15",
					"--m-grid-row": "14/15",
					"--m-grid-column": "3/30"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z0beTL"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng bố cục vật mẫu</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích cấu trúc vật thể</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Diễn tả chất liệu (gốm, thủy tinh, kim loại...)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cân đối tỷ lệ và không gian bài vẽ</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zuOAIB"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "2/3",
					"--grid-column": "20/28",
					"--m-grid-row": "17/18",
					"--m-grid-column": "11/24"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zuOAIB"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>VẼ ĐẦU TƯỢNG</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zTsTmE"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "3/6",
					"--grid-column": "19/29",
					"--m-grid-row": "18/19",
					"--m-grid-column": "4/29"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zTsTmE"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tỷ lệ đầu người chuẩn</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phân tích khối mặt: trán, mũi, má, cằm</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Ánh sáng trên bề mặt tượng</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Dựng khối chân dung cổ điển</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5-3HA"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "12/14",
					"--grid-column": "18/26",
					"--m-grid-row": "21/23",
					"--m-grid-column": "9/21"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z5-3HA"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>VẼ CHÂN DUNG</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zYUSgn"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "14/15",
					"--grid-column": "18/27",
					"--m-grid-row": "23/24",
					"--m-grid-column": "8/25"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zYUSgn"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(Dành cho học viên thi môn chân dung)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zd5bgi"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "15/19",
					"--grid-column": "17/27",
					"--m-grid-row": "24/25",
					"--m-grid-column": "5/31"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zd5bgi"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Quan sát thần thái nhân vật</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Diễn tả nét mặt và biểu cảm</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Xử lý tóc, da, mắt, mũi, môi</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tăng độ chính xác trong tỷ lệ khuôn mặt</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zGNzD_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "21/23",
					"--grid-column": "23/31",
					"--m-grid-row": "27/29",
					"--m-grid-column": "13/27"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zGNzD_"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><strong>VẼ TOÀN THÂN</strong></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zN4pX8"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "24/27",
					"--grid-column": "21/32",
					"--m-grid-row": "32/33",
					"--m-grid-column": "5/28"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zN4pX8"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tỷ lệ cơ thể người toàn thân</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Tư thế đứng, ngồi, chuyển động</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Giải phẫu cơ bản tay – chân – thân người</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Cân đối dáng người trong bố cục lớn</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zy2rT3"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "23/24",
					"--grid-column": "22/30",
					"--m-grid-row": "30/31",
					"--m-grid-column": "11/26"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zy2rT3"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong><em>(Dành cho học viên thi môn toàn thân)</em></strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zgF6kH"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "25/26",
					"--grid-column": "3/16",
					"--m-grid-row": "34/35",
					"--m-grid-column": "1/32"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zgF6kH"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 0); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"><span style=\"font-weight: 700;\"><strong>Lưu ý dành cho học viên thi vào Đại học Mỹ thuật TP.HCM</strong></span></p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zp72DP"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "4/7",
					"--grid-column": "7/10",
					"--m-grid-row": "2/4",
					"--m-grid-column": "7/14"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zp72DP"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>1</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zaRfLs"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "16/18",
					"--grid-column": "8/11",
					"--m-grid-row": "10/12",
					"--m-grid-column": "9/17"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zaRfLs"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>2</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_A9r5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "10/11",
					"--grid-column": "24/25",
					"--m-grid-row": "16/17",
					"--m-grid-column": "10/16"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z_A9r5"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>3</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zmZV7H"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "28/29",
					"--grid-column": "24/25",
					"--m-grid-row": "20/22",
					"--m-grid-column": "9/15"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zmZV7H"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>4</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2xlQZ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "29/30",
					"--grid-column": "24/25",
					"--m-grid-row": "26/28",
					"--m-grid-column": "12/18"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2xlQZ"}
					content={"<h6 dir=\"auto\" style=\"color: rgb(170, 88, 60); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 18px;\"><strong>GIAI ĐOẠN </strong><span style=\"--fontSizeMobile: 32px;\"><strong>5</strong></span></h6>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
