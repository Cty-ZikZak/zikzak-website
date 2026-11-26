import React from 'react';
import BlockImageSlideshow from '@/components/builder/blocks/BlockImageSlideshow';

export default function Section8() {
	return (
		<BlockImageSlideshow
			blockId={"zeBLxz"}
			blockClassName={"block block--slideshow"}
			slides={[
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts-2x-PTrqatLiCE4JMuee.png?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts1-2x-3jPaYMknUAKAm8Ki.png?width=2560&fit=crop 2560w",
					alt: ""
				},
				{
					src: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=1440&fit=crop",
					srcset: "https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791/pts2-2x-QaVTfoTzcPSNTfPN.png?width=2560&fit=crop 2560w",
					alt: ""
				}
			]}
			isLoopEnabled={true}
			isAutoplayEnabled={true}
			autoplayInterval={3}
			isNavigationDotsVisible={true}
			isNavigationArrowsVisible={false}
			style={{
				"--navigationDotsColor": "rgb(255, 230, 2)",
				"--navigationArrowsColor": "rgb(0, 0, 0)",
				"--slideshow-min-height": "609px",
				"--slideshow-m-min-height": "178px",
				"--slideshow-arrow-color": "rgb(0, 0, 0)",
				"--slideshow-dot-color": "rgb(255, 230, 2)"
			}}
		/>
	);
}
