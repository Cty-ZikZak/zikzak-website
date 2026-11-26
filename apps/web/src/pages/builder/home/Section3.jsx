import React from 'react';
import BlockImageSlideshow from '@/components/builder/blocks/BlockImageSlideshow';

export default function Section3() {
	return (
		<BlockImageSlideshow
			blockId={"zWLA7c"}
			blockClassName={"block block--slideshow"}
			slides={[
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-ALp2y1pzlJI7w2Gv.jpg?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/banner-web-zikzak-AGBzPBg6WNf0yXJE.jpg?width=2560&fit=crop 2560w",
					alt: ""
				}
			]}
			isLoopEnabled={true}
			isAutoplayEnabled={true}
			autoplayInterval={3}
			isNavigationDotsVisible={false}
			isNavigationArrowsVisible={true}
			style={{
				"--navigationDotsColor": "rgba(27, 0, 199, 0)",
				"--navigationArrowsColor": "rgba(27, 0, 199, 0)",
				"--slideshow-min-height": "774px",
				"--slideshow-m-min-height": "194px",
				"--slideshow-arrow-color": "rgba(27, 0, 199, 0)",
				"--slideshow-dot-color": "rgba(27, 0, 199, 0)"
			}}
		/>
	);
}
