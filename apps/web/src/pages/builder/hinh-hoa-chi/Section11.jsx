import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section11() {
	return (
		<BlockLayout
			blockId={"zuGNcJ"}
			htmlId={"zuGNcJ"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "3.89vw auto 2.22vw auto 4.44vw auto 4.44vw auto 3.61vw auto 6.11vw auto 2.50vw auto auto 2.78vw auto 4.44vw auto 4.72vw auto 18.06vw auto 0.28vw auto 3.89vw auto 4.17vw auto 9.17vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 4.44vw auto 3.89vw 0.56vw auto 4.44vw 4.44vw auto 4.44vw auto 8.89vw auto auto 0px",
				"--t-grid-template-rows": "minmax(14px, auto) minmax(26px, auto) minmax(8px, auto) minmax(31px, auto) minmax(16px, auto) minmax(31px, auto) minmax(16px, auto) minmax(31px, auto) minmax(13px, auto) minmax(31px, auto) minmax(22px, auto) minmax(31px, auto) minmax(9px, auto) minmax(31px, auto) minmax(13px, auto) minmax(10px, auto) minmax(13px, auto) minmax(16px, auto) minmax(13px, auto) minmax(17px, auto) minmax(13px, auto) minmax(65px, auto) minmax(18px, auto) minmax(1px, auto) minmax(18px, auto) minmax(14px, auto) minmax(23px, auto) minmax(15px, auto) minmax(23px, auto) minmax(33px, auto) minmax(56px, auto) minmax(16px, auto) minmax(75px, auto) minmax(16px, auto) minmax(75px, auto) minmax(16px, auto) minmax(75px, auto) minmax(16px, auto) minmax(32px, auto) minmax(16px, auto) minmax(32px, auto) minmax(14px, auto) minmax(2px, auto) minmax(16px, auto) minmax(16px, auto) minmax(16px, auto) minmax(56px, auto) minmax(16px, auto) minmax(56px, auto) minmax(32px, auto) minmax(90px, auto) minmax(62px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.10vw, auto) minmax(3.43vw, auto) minmax(2.53vw, auto) minmax(2.53vw, auto) minmax(3.43vw, auto) minmax(0.16vw, auto) minmax(1.31vw, auto) minmax(3.76vw, auto) minmax(0.98vw, auto) minmax(0.33vw, auto) minmax(5.39vw, auto) minmax(0.98vw, auto) minmax(1.47vw, auto) minmax(4.49vw, auto) minmax(0.57vw, auto) minmax(5.15vw, auto) minmax(0.33vw, auto) minmax(1.96vw, auto) minmax(0.25vw, auto) minmax(0.33vw, auto) minmax(1.96vw, auto) minmax(0.33vw, auto) minmax(1.23vw, auto) minmax(3.27vw, auto) minmax(0.57vw, auto) minmax(1.23vw, auto) minmax(0.57vw, auto) minmax(3.35vw, auto) minmax(0.41vw, auto) minmax(1.96vw, auto) minmax(1.96vw, auto) minmax(0.16vw, auto) minmax(1.96vw, auto) minmax(6.45vw, auto) minmax(2.53vw, auto) minmax(3.27vw, auto) minmax(0.16vw, auto) minmax(0.57vw, auto) minmax(2.70vw, auto) minmax(4.49vw, auto) minmax(1.47vw, auto) minmax(1.14vw, auto) minmax(3.35vw, auto) minmax(1.31vw, auto) minmax(4.49vw, auto) minmax(2.61vw, auto) minmax(2.86vw, auto) 3.59vw",
				"--grid-template-rows": "minmax(38px, auto) minmax(42px, auto) minmax(31px, auto) minmax(31px, auto) minmax(42px, auto) minmax(2px, auto) minmax(16px, auto) minmax(46px, auto) minmax(12px, auto) minmax(4px, auto) minmax(66px, auto) minmax(12px, auto) minmax(18px, auto) minmax(55px, auto) minmax(7px, auto) minmax(63px, auto) minmax(4px, auto) minmax(24px, auto) minmax(3px, auto) minmax(4px, auto) minmax(24px, auto) minmax(4px, auto) minmax(15px, auto) minmax(40px, auto) minmax(7px, auto) minmax(15px, auto) minmax(7px, auto) minmax(41px, auto) minmax(5px, auto) minmax(24px, auto) minmax(24px, auto) minmax(2px, auto) minmax(24px, auto) minmax(79px, auto) minmax(31px, auto) minmax(40px, auto) minmax(2px, auto) minmax(7px, auto) minmax(33px, auto) minmax(55px, auto) minmax(18px, auto) minmax(14px, auto) minmax(41px, auto) minmax(16px, auto) minmax(55px, auto) minmax(32px, auto) minmax(35px, auto) 1fr",
				"--m-grid-template-columns": "71.95% 28.05%",
				"--grid-template-columns": "1.06% 0.16% 0.16% 0.16% 5.31% 8.74% 0.74% 0.57% 1.47% 1.06% 3.19% 0.25% 6.13% 3.43% 5.80% 0.16% 3.92% 1.39% 3.02% 6.45% 0.16% 0.25% 0.16% 0.16% 1.31% 0.98% 0.98% 10.54% 1.23% 0.16% 7.52% 12.75% 0.98% 1.96% 1.06% 2.86% 0.08% 0.16% 1.72% 1.80%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1416px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1254px"
			}}
			background={{
				path: "web-design--8-l2EWsnVrUpGNofBG.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design--8-l2EWsnVrUpGNofBG.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--8-l2EWsnVrUpGNofBG.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zmkCH_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "19/27",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zmkCH_"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 20px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>HỌC PHÍ</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpS6Y2"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "1/11",
					"--m-grid-row": "23/24",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpS6Y2"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 204, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Học phí</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zH9Fae"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "10/12",
					"--grid-column": "21/34",
					"--m-grid-row": "31/32",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zH9Fae"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>550.000đ / tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>750.000đ / tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><p dir=\"auto\" class=\"body-large\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>950.000đ / tháng</strong> – (Học full tất cả các buổi)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zVFVg9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "15/17",
					"--grid-column": "21/35",
					"--m-grid-row": "47/48",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zVFVg9"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.485.000đ / 3 tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.050.000đ / 3 tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.550.000đ / 3 tháng</strong> – (Học full tất cả các buổi)</h6></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zQrIKM"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "25/29",
					"--grid-column": "22/36",
					"--m-grid-row": "49/50",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zQrIKM"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.900.000đ / 6 tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>4.050.000đ / 6 tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.050.000đ / 6 tháng</strong> – (Học full tất cả các buổi)</h6></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z7C6VF"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "18/19",
					"--grid-column": "24/37",
					"--m-grid-row": "15/16",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z7C6VF"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>165.000đ – 300.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSPQpI"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "30/31",
					"--grid-column": "23/39",
					"--m-grid-row": "19/20",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zSPQpI"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>400.000đ – 650.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zEZVQp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "7/9",
					"--grid-column": "2/8",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zEZVQp"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>1</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziccv-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "9/13",
					"--grid-column": "3/17",
					"--m-grid-row": "33/34",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ziccv-"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>899.000đ / tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.399.000đ / tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.799.000đ / tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.199.000đ / tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zqFaud"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "14/16",
					"--grid-column": "2/9",
					"--m-grid-row": "8/9",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zqFaud"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>3</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z7352o"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "16/20",
					"--grid-column": "3/17",
					"--m-grid-row": "35/36",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z7352o"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.808.000đ / 3 tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>3.942.000đ / 3 tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.292.000đ / 3 tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>6.372.000đ / 3 tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zi26Tp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "21/22",
					"--grid-column": "5/19",
					"--m-grid-row": "17/18",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zi26Tp"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>108.000đ – 432.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zm3F34"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "24/27",
					"--grid-column": "2/10",
					"--m-grid-row": "12/13",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zm3F34"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>6</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z9PlYP"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "28/32",
					"--grid-column": "2/16",
					"--m-grid-row": "37/38",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z9PlYP"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.616.000đ / 6 tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>7.884.000đ / 6 tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>10.152.000đ / 6 tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>12.096.000đ / 6 tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zmSc9U"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "33/34",
					"--grid-column": "4/20",
					"--m-grid-row": "21/22",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zmSc9U"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>216.000đ – 1.512.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2RJpC"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "40/41",
					"--grid-column": "1/13",
					"--m-grid-row": "39/40",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2RJpC"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>1 – 5 buổi</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\">👉 <strong>162.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zow0zY"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "5/6",
					"--grid-column": "1/12",
					"--m-grid-row": "27/28",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zow0zY"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tính theo tháng</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zEaDj9"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "36/38",
					"--grid-column": "1/14",
					"--m-grid-row": "29/30",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zEaDj9"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tính theo buổi</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zVAVo6"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "35/36",
					"--grid-column": "1/11",
					"--m-grid-row": "25/26",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zVAVo6"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 204, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Học phí</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRGu2r"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 20,
					"--grid-row": "39/47",
					"--grid-column": "26/38",
					"--m-grid-row": "50/53",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRGu2r"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Giảm <strong>10% mỗi bạn</strong> khi đăng ký lần đầu <strong>từ 2 bạn trở lên.</strong></p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đăng ký khóa ★ được tặng:</p><ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo chì trị giá 385.000đ<br><strong>hoặc</strong></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">1 hộp màu Pentel 12 màu trị giá 430.000đ</p><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\"></p></li></ul></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đăng ký khóa ★★ được tặng:</p><ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo chì trị giá 385.000đ<br><strong>hoặc</strong></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo màu trị giá 765.000đ</p></li></ul></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zi2l1y"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 21,
					"--grid-row": "36/37",
					"--grid-column": "28/32",
					"--m-grid-row": "43/45",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zi2l1y"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 14px;\"><span style=\"font-weight: 700;\"><strong>ƯU ĐÃI THÊM</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziMe5C"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 22,
					"--grid-row": "43/48",
					"--grid-column": "33/40",
					"--m-grid-row": "51/52",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"ziMe5C"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-5-FfBUmrQEzQPaLQzh.png?width=375&fit=crop"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={108}
					desktopHeight={179}
					mobileWidth={92}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1kWfJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 23,
					"--grid-row": "45/46",
					"--grid-column": "7/18",
					"--m-grid-row": "41/42",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z1kWfJ"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>11 buổi trở lên</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\">👉 <strong>108.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zTnPXH"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 24,
					"--grid-row": "42/44",
					"--grid-column": "6/15",
					"--m-grid-row": "44/46",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zTnPXH"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>6 – 10 buổi</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\">👉<strong> 135.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zRrnEG"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 25,
					"--grid-row": "8/11",
					"--grid-column": "22/29",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zRrnEG"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>1</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z1DVZS"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "14/16",
					"--grid-column": "24/30",
					"--m-grid-row": "10/11",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z1DVZS"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>3</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z5HWa5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 27,
					"--grid-row": "23/26",
					"--grid-column": "25/31",
					"--m-grid-row": "14/15",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z5HWa5"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; --fontSizeDesktop: 48px; font-weight: 700;\"><strong>6</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
