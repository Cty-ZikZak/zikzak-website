import React from 'react';
import { Link } from 'react-router-dom';
import { isInternalHref, isPlainLeftClick, scrollToSamePageHash } from './internalHref.js';

export { isInternalHref };

export default function SmartLink({
	href = '#',
	to,
	target,
	rel,
	children,
	onClick,
	...rest
}) {
	const destination = to ?? href;
	const openInNewTab = Boolean(target) && target !== '_self';

	if (!openInNewTab && isInternalHref(destination)) {
		const handleClick = (event) => {
			onClick?.(event);

			if (isPlainLeftClick(event)) {
				scrollToSamePageHash(destination);
			}
		};

		return (
			<Link to={destination} target={target} rel={rel} onClick={handleClick} {...rest}>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={destination}
			target={target}
			rel={rel}
			onClick={onClick}
			{...rest}
		>
			{children}
		</a>
	);
}
