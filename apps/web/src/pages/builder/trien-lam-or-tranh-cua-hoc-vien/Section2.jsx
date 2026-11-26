import React from 'react';
import BlockImageSlideshow from '@/components/builder/blocks/BlockImageSlideshow';

export default function Section2() {
	return (
		<BlockImageSlideshow
			blockId={"zLEA5t"}
			blockClassName={"block block--slideshow"}
			slides={[
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-1-vAtvAq6cUozyobyg.png?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/wed-design---in-ao-n-eUiXj7qNF5cCL0BC.png?width=2560&fit=crop 2560w",
					alt: ""
				}
			]}
			isLoopEnabled={true}
			isAutoplayEnabled={true}
			autoplayInterval={3}
			isNavigationDotsVisible={true}
			isNavigationArrowsVisible={false}
			style={{
				"--navigationDotsColor": "rgb(25, 0, 200)",
				"--navigationArrowsColor": "rgb(0, 0, 0)",
				"--slideshow-min-height": "790px",
				"--slideshow-m-min-height": "215px",
				"--slideshow-arrow-color": "rgb(0, 0, 0)",
				"--slideshow-dot-color": "rgb(25, 0, 200)"
			}}
		/>
	);
}
