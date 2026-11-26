import React from 'react';
import BlockImageSlideshow from '@/components/builder/blocks/BlockImageSlideshow';

export default function Section6() {
	return (
		<BlockImageSlideshow
			blockId={"zrhva7"}
			blockClassName={"block block--slideshow"}
			slides={[
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-KsK8Lqb6FQjjj1wD.png?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/web-design-5-jwtzA41pgSMPXjW7.png?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://cdn.zyrosite.com/cdn-builder-placeholders/asset-manager/image-YX452yb11eIkBgzn.png",
					alt: "Woman with flowers in her hair"
				},
				{
					src: "https://cdn.zyrosite.com/cdn-builder-placeholders/asset-manager/image-A85NDw46r5I5wqjp.png",
					alt: "Raindrops in blue background"
				}
			]}
			isLoopEnabled={false}
			isAutoplayEnabled={false}
			autoplayInterval={3}
			isNavigationDotsVisible={false}
			isNavigationArrowsVisible={true}
			style={{
				"--navigationDotsColor": "rgb(0, 0, 0)",
				"--navigationArrowsColor": "rgb(255, 255, 0)",
				"--slideshow-min-height": "545px",
				"--slideshow-m-min-height": "189px",
				"--slideshow-arrow-color": "rgb(255, 255, 0)",
				"--slideshow-dot-color": "rgb(0, 0, 0)"
			}}
		/>
	);
}
