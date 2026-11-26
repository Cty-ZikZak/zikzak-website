import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridImage from '@/components/builder/elements/GridImage';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"ai-UlpRGP"}
			htmlId={"ai-UlpRGP"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "8.89vw 2.22vw auto 3.89vw 33px",
				"--t-grid-template-rows": "minmax(32px, auto) minmax(8px, auto) minmax(26px, auto) minmax(14px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(13.07vw, auto) minmax(1.31vw, auto) minmax(8.42vw, auto) minmax(3.02vw, auto) 12.91vw",
				"--grid-template-rows": "minmax(160px, auto) minmax(16px, auto) minmax(103px, auto) minmax(37px, auto) 1fr",
				"--m-grid-template-columns": "26.83% 27.13% 46.04%",
				"--grid-template-columns": "24.26% 42.16% 33.58%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "113px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "474px"
			}}
			background={{
				alt: "black and white bed linen",
				path: "photo-1586105251261-72a756497a11",
				color: "rgb(25, 25, 255)",
				image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxpbnRlcmlvcnxlbnwwfHx8fDE3MTM5NzE1OTJ8MA&ixlib=rb-4.0.3?w=1366&q=70&auto=format",
				video: {
					videoSrc: "https://videos.pexels.com/video-files/8157312/8157312-uhd_3840_2160_25fps.mp4",
					videoThumbnailSrc: "https://images.pexels.com/videos/8157312/pexels-photo-8157312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
				},
				origin: "unsplash",
				current: "video",
				gradient: {
					angle: 135,
					colors: [
						{
							value: "#686DF3"
						},
						{
							value: "rgb(143, 17, 168)"
						}
					],
					isAnimated: false
				},
				"overlay-opacity": "0.00"
			}}
			backgroundImagePosition={"center"}
		>
			<LayoutElement
				elementId={"zLpDL_"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--align": "flex-start",
					"--justify": "flex-start",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "3/4",
					"--m-grid-row": "3/4",
					"--m-grid-column": "3/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"zLpDL_"}
					content={"<h3 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.58; --fontSizeMobile: 10px; --fontSizeDesktop: 25.8px\" dir=\"auto\"><span style=\"color: rgb(255, 255, 0); --fontSizeDesktop: 33px; font-family: Montserrat; font-weight: 700\"><strong>SHINE</strong></span><span style=\"color: rgb(255, 255, 0); font-family: Montserrat; font-weight: 700\"><strong>  </strong></span><span style=\"color: rgb(255, 255, 255); font-family: Montserrat; font-weight: 700\"><strong>your way</strong></span><br>                        <span style=\"color: rgb(82, 226, 255); --fontSizeDesktop: 32px; font-family: Montserrat; font-weight: 700\"><strong>SLAY</strong></span><span style=\"color: rgb(82, 226, 255); font-family: Montserrat; font-weight: 700\"><strong> </strong></span><span style=\"color: rgb(255, 255, 0); font-family: Montserrat; font-weight: 700\"><strong> </strong></span><span style=\"color: rgb(255, 255, 255); font-family: Montserrat; font-weight: 700\"><strong>your mind</strong></span></h3>"}
					textAlign={"left"}
					textAlignMobile={"left"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"zCWF_F"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/5",
					"--grid-column": "1/2",
					"--m-grid-row": "2/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"zCWF_F"}
					src={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/zikzak-logo-rgb-03-mk3JMlEQODFkaokX.png?width=375&fit=crop"}
					srcset={"https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/zikzak-logo-rgb-03-mk3JMlEQODFkaokX.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/zikzak-logo-rgb-03-mk3JMlEQODFkaokX.png?width=768&fit=crop 768w"}
					alt={""}
					objectFit={"cover"}
					desktopWidth={297}
					desktopHeight={156}
					mobileWidth={88}
					desktopBorderRadius={"0px"}
					mobileBorderRadius={"0px"}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
