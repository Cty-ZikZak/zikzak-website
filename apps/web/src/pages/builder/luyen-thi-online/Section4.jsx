import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"zEZyO8"}
			htmlId={"zEZyO8"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "0.56vw auto 8.33vw auto 12.78vw auto 7.50vw 21.39vw auto 31px",
				"--t-grid-template-rows": "minmax(2px, auto) minmax(102px, auto) minmax(30px, auto) minmax(26px, auto) minmax(46px, auto) minmax(6px, auto) minmax(27px, auto) minmax(77px, auto) minmax(24px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(7.84vw, auto) minmax(2.61vw, auto) minmax(3.27vw, auto) minmax(6.54vw, auto) minmax(1.31vw, auto) minmax(0.74vw, auto) 2.53vw",
				"--grid-template-rows": "minmax(96px, auto) minmax(32px, auto) minmax(40px, auto) minmax(80px, auto) minmax(16px, auto) minmax(9px, auto) 1fr",
				"--m-grid-template-columns": "8.54% 12.50% 27.13% 13.72% 16.77% 15.55% 5.79%",
				"--grid-template-columns": "6.70% 0.16% 1.55% 32.68% 1.31% 0.16% 16.50% 0.08% 30.88% 3.84% 0.16% 5.96%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "371px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "304px"
			}}
			background={{
				color: "rgb(255, 255, 255)",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"zK5M7L"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "right",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "1/2",
					"--grid-column": "9/11",
					"--m-grid-row": "1/3",
					"--m-grid-column": "5/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zK5M7L"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Mỗi học viên đều có tốc độ tiến bộ khác nhau.<br>Vì vậy, giáo viên sẽ <strong>theo dõi sát bài tập từng người</strong> để điều chỉnh hướng học phù hợp, đảm bảo không ai bị bỏ lại phía sau.</p>"}
					textAlign={"left"}
					textAlignMobile={"right"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zQAuaT"}
				className={"layout-element layout-element--layout layout-element--mobile-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "1/2",
					"--grid-column": "2/6",
					"--m-grid-row": "8/10",
					"--m-grid-column": "3/6",
					"--m-hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zQAuaT"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Học live cùng giảng viên theo lịch bạn đã chọn</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Gửi bài qua Zalo để nhận xét</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Giảng viên sẽ kèm 1:1</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Được hỗ trợ ngoài giờ nếu cần hỏi bài thêm</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z3AQKl"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "4/6",
					"--grid-column": "8/12",
					"--m-grid-row": "5/7",
					"--m-grid-column": "2/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3AQKl"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">✔ Nắm chắc kiến thức nền tảng<br>✔ Theo kịp lộ trình luyện thi chuẩn<br>✔ Tự tin làm bài thi mỹ thuật tại nhà hoặc tại trường<br>✔ Sẵn sàng bước vào kỳ thi năng khiếu đại học</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z3sXF6"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "3/4",
					"--grid-column": "8/10",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z3sXF6"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 20px;\"><span style=\"font-weight: 700;\"><strong>KẾT QUẢ NHẬN ĐƯỢC</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zNNBOr"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "3/7",
					"--grid-column": "4/5",
					"--m-grid-row": "6/9",
					"--m-grid-column": "1/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zNNBOr"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/ca-6b6Dui2ci4LOCZYa.png?width=768&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/ca-6b6Dui2ci4LOCZYa.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/ca-6b6Dui2ci4LOCZYa.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/ca-6b6Dui2ci4LOCZYa.png?width=1024&fit=crop 1024w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={400}
					desktopHeight={145}
					mobileWidth={328}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqTytB"}
				className={"layout-element layout-element--layout layout-element--desktop-element-hidden transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "3/5",
					"--grid-column": "3/7",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4",
					"--hidden-element-z-index": 0
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zqTytB"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Học live cùng giảng viên theo lịch bạn đã chọn</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Gửi bài qua Zalo để nhận xét</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px; margin-bottom: 8px;\">Giảng viên sẽ kèm 1:1</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Được hỗ trợ ngoài giờ nếu cần hỏi bài thêm</p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
