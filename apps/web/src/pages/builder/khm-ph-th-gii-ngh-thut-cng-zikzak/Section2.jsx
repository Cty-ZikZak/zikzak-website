import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridImage from '@/components/builder/elements/GridImage';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"ai-RWhjOI"}
			htmlId={"ai-RWhjOI"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--m-block-padding": "56px 16px",
				"--m-grid-template-rows": "11.11vw auto 17.78vw auto 0px",
				"--t-grid-template-rows": "minmax(40px, auto) minmax(320px, auto) minmax(64px, auto) minmax(30px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.27vw, auto) minmax(28.10vw, auto) minmax(4.74vw, auto) minmax(1.96vw, auto) 4.90vw",
				"--grid-template-rows": "minmax(40px, auto) minmax(344px, auto) minmax(58px, auto) minmax(24px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "140px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "526px"
			}}
			background={{
				color: "#ffffff",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"ai-t_6fPV"}
				className={"layout-element layout-element--layout transition transition--slide transition--root-hidden"}
				style={{
					"--align": "center",
					"--justify": "center",
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"ai-t_6fPV"}
					src={"https://images.unsplash.com/photo-1602214710513-5cb3f729a809?auto=format&fit=crop&w=812"}
					srcset={"https://images.unsplash.com/photo-1602214710513-5cb3f729a809?auto=format&fit=crop&w=375 375w, https://images.unsplash.com/photo-1602214710513-5cb3f729a809?auto=format&fit=crop&w=768 768w, https://images.unsplash.com/photo-1602214710513-5cb3f729a809?auto=format&fit=crop&w=1024 1024w, https://images.unsplash.com/photo-1602214710513-5cb3f729a809?auto=format&fit=crop&w=1920 1920w"}
					alt={"A bright studio space features a drawing tablet on a wooden desk displaying digital art in progress. The image on the screen shows a character with long blonde hair and intricate clothing. Natural light streams through a window illuminating the workspace. Various art tools like a color palette and rolled papers are scattered around, alongside a computer monitor."}
					objectFit={"cover"}
					desktopWidth={812}
					desktopHeight={344}
					mobileWidth={328}
					desktopBorderRadius={0}
					mobileBorderRadius={0}
					rel={"nofollow"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ai-5jIcME"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--m-element-margin": "0 0 16px 0",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/3",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ai-5jIcME"}
					content={"<p style=\"color: #0d141a\" class=\"body\">Giáo dục mỹ thuật</p>"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
