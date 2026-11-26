import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridButton from '@/components/builder/elements/GridButton';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"zy-fTQ"}
			htmlId={"zy-fTQ"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "37.78vw 3.61vw 3.06vw 1.11vw auto auto 0.28vw 3.89vw 2.50vw auto 61px",
				"--t-grid-template-rows": "minmax(136px, auto) minmax(13px, auto) minmax(11px, auto) minmax(4px, auto) minmax(9px, auto) minmax(3px, auto) minmax(1px, auto) minmax(14px, auto) minmax(9px, auto) minmax(39px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(34.07vw, auto) minmax(1.96vw, auto) minmax(2.53vw, auto) minmax(0.74vw, auto) minmax(3.92vw, auto) minmax(1.96vw, auto) minmax(15.60vw, auto) minmax(2.45vw, auto) minmax(2.53vw, auto) minmax(2.53vw, auto) 7.92vw",
				"--grid-template-rows": "minmax(417px, auto) minmax(24px, auto) minmax(31px, auto) minmax(9px, auto) minmax(48px, auto) minmax(24px, auto) minmax(191px, auto) minmax(30px, auto) minmax(31px, auto) minmax(31px, auto) 1fr",
				"--m-grid-template-columns": "4.88% 0.30% 44.82% 7.62% 6.10% 22.56% 6.10% 2.44% 5.18%",
				"--grid-template-columns": "11.93% 36.03% 9.15% 6.94% 3.59% 8.25% 4.08% 3.59% 16.42%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "300px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "933px"
			}}
			background={{
				path: "web-design-2-IOmZqqW1gG73ftKr.png",
				color: "rgb(255, 255, 255)",
				image: "https://assets.zyrosite.com/YZ98XDRNZwSqWQyg/web-design-2-IOmZqqW1gG73ftKr.png",
				origin: "assets",
				current: "image",
				src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-2-IOmZqqW1gG73ftKr.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"zZcMIJ"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--m-text": "center",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "5/7",
					"--grid-column": "2/3",
					"--m-grid-row": "10/11",
					"--m-grid-column": "2/9"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zZcMIJ"}
					content={"<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 10px;\">Phù hợp cho người mới bắt đầu hoặc muốn học vẽ digital bài bản, từ nền tảng mỹ thuật, tư duy tạo hình, màu sắc – ánh sáng đến quy trình hoàn thiện tranh.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zUeYtc"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 3,
					"--grid-row": "8/9",
					"--grid-column": "4/7",
					"--m-grid-row": "4/7",
					"--m-grid-column": "3/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"zUeYtc"}
					text={"Xem chi tiết khóa học  →"}
					type={"primary"}
					href={"/khoa-ve-digital-toan-dien"}
					target={"_self"}
					fontFamily={"Montserrat"}
					fontWeight={500}
					backgroundColor={"rgb(208, 0, 255)"}
					fontColor={"rgb(255, 255, 0)"}
					borderColor={"rgb(0, 0, 0)"}
					backgroundColorHover={"rgb(255, 255, 0)"}
					fontColorHover={"rgb(209, 8, 255)"}
					borderColorHover={"rgb(0, 0, 0)"}
					fontSizeMobile={10}
					mobileWidthVw={"40.833333333333336vw"}
					mobileHeightVw={"4.444444444444445vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zpVNRD"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 4,
					"--grid-row": "3/4",
					"--grid-column": "6/8",
					"--m-grid-row": "3/6",
					"--m-grid-column": "6/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zpVNRD"}
					content={"<h3 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 12px; --fontSizeDesktop: 18px; margin-bottom: 8px;\"><span style=\"font-family: Montserrat; font-weight: 700;\"><strong>56 Buổi</strong></span></h3>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zAD4Xk"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/6",
					"--grid-column": "5/9",
					"--m-grid-row": "2/9",
					"--m-grid-column": "5/8"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zAD4Xk"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-8-xqwfKXbOxSFmX3pr.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-8-xqwfKXbOxSFmX3pr.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-8-xqwfKXbOxSFmX3pr.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={239}
					desktopHeight={112}
					mobileWidth={114}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zhqQCG"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 5,
					"--grid-row": "10/11",
					"--grid-column": "6/8",
					"--m-grid-row": "5/8",
					"--m-grid-column": "6/7"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zhqQCG"}
					content={"<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 10px; --fontSizeDesktop: 24px;\"><span style=\"font-family: Montserrat; font-weight: 500;\">21.900.000đ</span></p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
