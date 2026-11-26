export function isInternalHref(href) {
	if (!href || typeof href !== 'string') {
		return false;
	}

	if (href.startsWith('//') || href.startsWith('/\\')) {
		return false;
	}

	return href.startsWith('/');
}

export function isPlainLeftClick(event) {
	return !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

// The router does not scroll again for a link to the hash already in the URL, so repeat anchor clicks scroll here.
export function scrollToSamePageHash(href, { location = window.location, document = window.document } = {}) {
	const url = new URL(href, location.href);

	if (!url.hash || url.pathname !== location.pathname) {
		return false;
	}

	const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));

	target?.scrollIntoView({ behavior: 'smooth', block: 'start' });

	return Boolean(target);
}

export function getInternalLinkClickPath(event) {
	if (!isPlainLeftClick(event)) {
		return null;
	}

	const anchor = event.target?.closest?.('a[href]');

	if (!anchor || !event.currentTarget.contains(anchor)) {
		return null;
	}

	const target = anchor.getAttribute('target');

	if ((target && target !== '_self') || anchor.hasAttribute('download')) {
		return null;
	}

	const href = anchor.getAttribute('href');

	return isInternalHref(href) ? href : null;
}
