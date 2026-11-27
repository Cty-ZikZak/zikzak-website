import React, { useEffect, useRef, useState } from 'react';

// Hiện dần phần tử khi cuộn tới.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, style, ...rest }) {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;

		if (!node || typeof IntersectionObserver === 'undefined') {
			setIsVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(([entry]) => {
			// Phần tử đã nằm phía trên màn hình (cuộn nhanh, nhảy tới mục) cũng được hiện luôn.
			if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
				setIsVisible(true);
				observer.disconnect();
			}
		}, { rootMargin: '0px 0px -8% 0px' });

		observer.observe(node);

		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			className={['zz-reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
			style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
			{...rest}
		>
			{children}
		</Tag>
	);
}
