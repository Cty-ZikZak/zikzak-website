import { useNavigate } from 'react-router-dom';
import { getInternalLinkClickPath, scrollToSamePageHash } from './internalHref.js';

export function useInternalLinkClick() {
	const navigate = useNavigate();

	return (event) => {
		const path = getInternalLinkClickPath(event);

		if (path) {
			event.preventDefault();
			navigate(path);
			scrollToSamePageHash(path);
		}
	};
}
