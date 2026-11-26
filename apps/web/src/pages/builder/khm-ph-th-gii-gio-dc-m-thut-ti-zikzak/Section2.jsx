import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridImage from '@/components/builder/elements/GridImage';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section2() {
	return (
		<BlockLayout
			blockId={"ai-wO8CR-"}
			htmlId={"ai-wO8CR-"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--m-block-padding": "56px 16px",
				"--m-grid-template-rows": "11.11vw auto 17.78vw auto 0px",
				"--t-grid-template-rows": "minmax(40px, auto) minmax(320px, auto) minmax(64px, auto) minmax(30px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.27vw, auto) minmax(28.10vw, auto) minmax(4.58vw, auto) minmax(1.96vw, auto) 5.15vw",
				"--grid-template-rows": "minmax(40px, auto) minmax(344px, auto) minmax(56px, auto) minmax(24px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "16.83% 66.34% 16.83%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "140px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "527px"
			}}
			background={{
				color: "#ffffff",
				current: "color"
			}}
		>
			<LayoutElement
				elementId={"ai-PF-ona"}
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
					id={"ai-PF-ona"}
					src={"https://images.unsplash.com/photo-1606608254110-bd5d9ca5633a?auto=format&fit=crop&w=812"}
					srcset={"https://images.unsplash.com/photo-1606608254110-bd5d9ca5633a?auto=format&fit=crop&w=375 375w, https://images.unsplash.com/photo-1606608254110-bd5d9ca5633a?auto=format&fit=crop&w=768 768w, https://images.unsplash.com/photo-1606608254110-bd5d9ca5633a?auto=format&fit=crop&w=1024 1024w, https://images.unsplash.com/photo-1606608254110-bd5d9ca5633a?auto=format&fit=crop&w=1920 1920w"}
					alt={"Graffiti art with bold, angular shapes and vibrant colors covers a textured wall. The design incorporates layers of green, yellow, and black with splashes of paint. The style suggests a dynamic and energetic feel, achieved through the use of sharp lines and contrasting shades."}
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
				elementId={"ai-6rlr79"}
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
					id={"ai-6rlr79"}
					content={"<p style=\"color: #0d141a\" class=\"body\">Giáo dục mỹ thuật</p>"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
