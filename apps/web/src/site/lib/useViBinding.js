import { useEffect } from 'react';
import { watchVietnamese } from './viBind.js';

// Gắn chống-rớt-chữ tiếng Việt cho toàn bộ website. Thêm ?vi=0 vào địa chỉ để tắt (dùng khi so sánh).
export function useViBinding() {
	useEffect(() => {
		const root = document.getElementById('root');

		if (!root || new URLSearchParams(window.location.search).get('vi') === '0') {
			return undefined;
		}

		return watchVietnamese(root);
	}, []);
}
