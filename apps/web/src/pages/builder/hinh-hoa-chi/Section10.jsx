import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section10() {
	return (
		<BlockLayout
			blockId={"zc01bv"}
			htmlId={"zc01bv"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "0.83vw auto auto 8.33vw 7.22vw auto 19.44vw 5.28vw 7.22vw auto 19.44vw 0.83vw auto 0.83vw 7.22vw auto 19.44vw auto 35.28vw 7.78vw auto auto 4.72vw 6.67vw auto auto auto 6.11vw auto auto auto 27.78vw auto auto 4.17vw 8.61vw auto 8.89vw auto 8.33vw auto 16.39vw 1.39vw auto auto 90px",
				"--t-grid-template-rows": "minmax(3px, auto) minmax(18px, auto) minmax(23px, auto) minmax(30px, auto) minmax(26px, auto) minmax(5px, auto) minmax(70px, auto) minmax(19px, auto) minmax(26px, auto) minmax(5px, auto) minmax(70px, auto) minmax(3px, auto) minmax(13px, auto) minmax(3px, auto) minmax(26px, auto) minmax(5px, auto) minmax(70px, auto) minmax(13px, auto) minmax(127px, auto) minmax(28px, auto) minmax(3px, auto) minmax(53px, auto) minmax(17px, auto) minmax(24px, auto) minmax(7px, auto) minmax(49px, auto) minmax(13px, auto) minmax(22px, auto) minmax(31px, auto) minmax(56px, auto) minmax(13px, auto) minmax(100px, auto) minmax(18px, auto) minmax(23px, auto) minmax(15px, auto) minmax(31px, auto) minmax(6px, auto) minmax(32px, auto) minmax(37px, auto) minmax(30px, auto) minmax(37px, auto) minmax(59px, auto) minmax(5px, auto) minmax(18px, auto) minmax(158px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(9.07vw, auto) minmax(2.53vw, auto) minmax(3.43vw, auto) minmax(1.31vw, auto) minmax(0.16vw, auto) minmax(2.37vw, auto) minmax(0.16vw, auto) minmax(2.53vw, auto) minmax(5.72vw, auto) minmax(1.96vw, auto) minmax(0.33vw, auto) minmax(2.29vw, auto) minmax(0.25vw, auto) minmax(2.29vw, auto) minmax(0.33vw, auto) minmax(2.37vw, auto) minmax(3.35vw, auto) minmax(0.33vw, auto) minmax(1.96vw, auto) minmax(2.04vw, auto) minmax(0.33vw, auto) minmax(0.25vw, auto) minmax(1.72vw, auto) minmax(0.82vw, auto) minmax(1.55vw, auto) minmax(1.31vw, auto) minmax(1.23vw, auto) minmax(2.86vw, auto) minmax(1.63vw, auto) minmax(0.41vw, auto) minmax(1.96vw, auto) minmax(3.68vw, auto) minmax(0.16vw, auto) minmax(1.96vw, auto) minmax(7.52vw, auto) minmax(2.53vw, auto) minmax(0.49vw, auto) minmax(2.94vw, auto) minmax(0.33vw, auto) minmax(0.74vw, auto) minmax(1.96vw, auto) minmax(4.49vw, auto) minmax(0.82vw, auto) minmax(3.51vw, auto) minmax(0.98vw, auto) minmax(1.31vw, auto) minmax(4.49vw, auto) minmax(0.08vw, auto) minmax(7.76vw, auto) 3.51vw",
				"--grid-template-rows": "minmax(111px, auto) minmax(31px, auto) minmax(42px, auto) minmax(16px, auto) minmax(2px, auto) minmax(29px, auto) minmax(2px, auto) minmax(31px, auto) minmax(70px, auto) minmax(24px, auto) minmax(4px, auto) minmax(28px, auto) minmax(3px, auto) minmax(28px, auto) minmax(4px, auto) minmax(29px, auto) minmax(41px, auto) minmax(4px, auto) minmax(24px, auto) minmax(25px, auto) minmax(4px, auto) minmax(3px, auto) minmax(21px, auto) minmax(10px, auto) minmax(19px, auto) minmax(16px, auto) minmax(15px, auto) minmax(35px, auto) minmax(20px, auto) minmax(5px, auto) minmax(24px, auto) minmax(45px, auto) minmax(2px, auto) minmax(24px, auto) minmax(92px, auto) minmax(31px, auto) minmax(6px, auto) minmax(36px, auto) minmax(4px, auto) minmax(9px, auto) minmax(24px, auto) minmax(55px, auto) minmax(10px, auto) minmax(43px, auto) minmax(12px, auto) minmax(16px, auto) minmax(55px, auto) minmax(1px, auto) minmax(95px, auto) 1fr",
				"--m-grid-template-columns": "56.71% 0.61% 2.74% 1.22% 38.72%",
				"--grid-template-columns": "0.16% 0.16% 0.16% 0.16% 6.78% 7.60% 0.65% 0.16% 0.16% 3.43% 3.19% 0.57% 5.80% 4.00% 4.17% 0.16% 5.31% 0.08% 2.94% 7.35% 0.08% 0.08% 0.08% 0.08% 0.41% 1.55% 1.96% 10.46% 1.23% 7.76% 12.25% 1.31% 2.04% 0.74% 3.10% 0.08% 0.16% 1.39% 2.21%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1530px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "1323px"
			}}
			background={{
				path: "web-design--gd-phone--19-GchpX4KUA5kuVTha.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design--gd-phone--19-GchpX4KUA5kuVTha.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design--gd-phone--19-GchpX4KUA5kuVTha.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zZR_o0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "9/10",
					"--grid-column": "22/33",
					"--m-grid-row": "21/23",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zZR_o0"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>550.000đ / tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>750.000đ / tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><p dir=\"auto\" class=\"body-large\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>950.000đ / tháng</strong> – (Học full tất cả các buổi)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ziIR7P"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "16/18",
					"--grid-column": "23/34",
					"--m-grid-row": "25/27",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ziIR7P"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.485.000đ / 3 tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.050.000đ / 3 tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.550.000đ / 3 tháng</strong> – (Học full tất cả các buổi)</h6></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zUv63-"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "27/30",
					"--grid-column": "21/35",
					"--m-grid-row": "30/31",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zUv63-"}
					content={"<ul dir=\"auto\"><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.900.000đ / 6 tháng</strong> – (Học 1 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>4.050.000đ / 6 tháng</strong> – (Học 2–3 buổi / tuần)</h6></li><li><h6 dir=\"auto\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.050.000đ / 6 tháng</strong> – (Học full tất cả các buổi)</h6></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zM8Uee"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "19/20",
					"--grid-column": "26/37",
					"--m-grid-row": "27/28",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zM8Uee"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>165.000đ – 300.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zL7TbJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "31/32",
					"--grid-column": "24/36",
					"--m-grid-row": "31/32",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zL7TbJ"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>400.000đ – 650.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zU7iyc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 6,
					"--grid-row": "5/7",
					"--grid-column": "5/7",
					"--m-grid-row": "5/7",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zU7iyc"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>1</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2Vqf0"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 7,
					"--grid-row": "9/11",
					"--grid-column": "2/17",
					"--m-grid-row": "6/8",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2Vqf0"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>899.000đ / tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.399.000đ / tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>1.799.000đ / tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.199.000đ / tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zSSm-t"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 8,
					"--grid-row": "13/15",
					"--grid-column": "5/9",
					"--m-grid-row": "9/11",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zSSm-t"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>3</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zjQUWd"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 9,
					"--grid-row": "17/21",
					"--grid-column": "2/17",
					"--m-grid-row": "10/12",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zjQUWd"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>2.808.000đ / 3 tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>3.942.000đ / 3 tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.292.000đ / 3 tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>6.372.000đ / 3 tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z8YL_R"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 10,
					"--grid-row": "22/24",
					"--grid-column": "4/18",
					"--m-grid-row": "13/14",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z8YL_R"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>108.000đ – 432.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zm2u2_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 11,
					"--grid-row": "26/28",
					"--grid-column": "4/8",
					"--m-grid-row": "15/17",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zm2u2_"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>6</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zwTBAy"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 12,
					"--grid-row": "29/33",
					"--grid-column": "1/16",
					"--m-grid-row": "16/18",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zwTBAy"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>5.616.000đ / 6 tháng</strong> – (Học 2 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>7.884.000đ / 6 tháng</strong> – (Học 3 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>10.152.000đ / 6 tháng</strong> – (Học 4 buổi / tuần)</p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\"><strong>12.096.000đ / 6 tháng</strong> – (Học 5 buổi / tuần)</p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z_C7Mc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 13,
					"--grid-row": "34/35",
					"--grid-column": "3/20",
					"--m-grid-row": "18/19",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z_C7Mc"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">🎁 <em>Tiết kiệm từ </em><strong><em>216.000đ – 1.512.000đ</em></strong><em> so với đăng ký từng tháng.</em></p>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zTgqV8"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 14,
					"--grid-row": "42/43",
					"--grid-column": "3/13",
					"--m-grid-row": "36/38",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zTgqV8"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>1 – 5 buổi</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\">👉 <strong>162.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zODIeo"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 15,
					"--grid-row": "37/39",
					"--grid-column": "1/14",
					"--m-grid-row": "34/35",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zODIeo"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tính theo buổi</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zGhn8q"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 16,
					"--grid-row": "36/37",
					"--grid-column": "1/11",
					"--m-grid-row": "33/34",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zGhn8q"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 204, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Học phí</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zzVyXx"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 17,
					"--grid-row": "41/49",
					"--grid-column": "27/38",
					"--m-grid-row": "45/46",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zzVyXx"}
					content={"<ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Giảm <strong>10% mỗi bạn</strong> khi đăng ký lần đầu <strong>từ 2 bạn trở lên.</strong></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đăng ký khóa ★ được tặng:</p><ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo chì trị giá 385.000đ<br><strong>hoặc</strong></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">1 hộp màu Pentel 12 màu trị giá 430.000đ</p></li></ul></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Đăng ký khóa ★★ được tặng:</p><ul dir=\"auto\"><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo chì trị giá 385.000đ<br><strong>hoặc</strong></p></li><li><p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Combo màu trị giá 765.000đ</p></li></ul></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zdzQ8h"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 18,
					"--grid-row": "38/40",
					"--grid-column": "28/31",
					"--m-grid-row": "44/45",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zdzQ8h"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(76, 205, 17); --lineHeightMobile: 1.3; --fontSizeMobile: 14px;\"><span style=\"font-weight: 700;\"><strong>ƯU ĐÃI THÊM</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zFM7zT"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 19,
					"--grid-row": "45/50",
					"--grid-column": "32/39",
					"--m-grid-row": "37/43",
					"--m-grid-column": "4/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zFM7zT"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-5-FfBUmrQEzQPaLQzh.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-5-FfBUmrQEzQPaLQzh.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/mascot-no-background-5-FfBUmrQEzQPaLQzh.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={108}
					desktopHeight={179}
					mobileWidth={131}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zXSbFH"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 20,
					"--grid-row": "47/48",
					"--grid-column": "10/19",
					"--m-grid-row": "41/42",
					"--m-grid-column": "1/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zXSbFH"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>11 buổi trở lên</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\">👉 <strong>108.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zvh9tA"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 21,
					"--grid-row": "44/46",
					"--grid-column": "6/15",
					"--m-grid-row": "39/40",
					"--m-grid-column": "1/5"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zvh9tA"}
					content={"<ul dir=\"auto\"><li style=\"color: rgb(13, 19, 26);\"><p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 19, 26); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 18px;\">Đăng ký từ <strong>6 – 10 buổi</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(39, 107, 8); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\">👉<strong> 135.000đ / buổi</strong></p></li></ul>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zmczyr"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 22,
					"--grid-row": "6/8",
					"--grid-column": "25/29",
					"--m-grid-row": "20/22",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zmczyr"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>1</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zcTflz"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 23,
					"--grid-row": "12/14",
					"--grid-column": "26/30",
					"--m-grid-row": "24/26",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zcTflz"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>3</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z313bk"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 24,
					"--grid-row": "23/25",
					"--grid-column": "26/30",
					"--m-grid-row": "29/30",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z313bk"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>GÓI </strong></span><span style=\"color: rgb(46, 145, 0); --fontSizeMobile: 24px; font-weight: 700;\"><strong>6</strong></span><span style=\"font-weight: 700;\"><strong> THÁNG</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zaleKO"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "left",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 25,
					"--grid-row": "2/3",
					"--grid-column": "1/11",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zaleKO"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(255, 204, 0); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 14px; --fontSizeDesktop: 24px;\"><span style=\"font-weight: 700;\"><strong>Học phí</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"z2wexp"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "left",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 26,
					"--grid-row": "3/4",
					"--grid-column": "1/12",
					"--m-grid-row": "3/4",
					"--m-grid-column": "1/6"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"z2wexp"}
					content={"<h5 dir=\"auto\" style=\"color: rgb(242, 100, 61); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 18px; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Tính theo tháng</strong></span></h5>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
