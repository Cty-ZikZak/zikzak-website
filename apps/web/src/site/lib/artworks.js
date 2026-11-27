import { useEffect, useState } from 'react';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { fallbackArtworks } from '../data/artworks.js';

/*
  Kho tranh học viên.
  Giáo viên tải ảnh lên trang quản trị PocketBase, bảng "artworks":
  một lần tải có thể chọn nhiều ảnh cùng lúc (ví dụ cả lớp sau một buổi học).
  Nếu chưa kết nối được PocketBase, website dùng danh sách dự phòng trong data/artworks.js.
*/

const COLLECTION = 'artworks';
let cache = null;

const toArtworks = (record) => {
	const images = Array.isArray(record.images) ? record.images : [record.images].filter(Boolean);

	return images.map((file, index) => ({
		id: `${record.id}-${index}`,
		src: pocketbaseClient.files.getURL(record, file, { thumb: '1200x0' }),
		thumb: pocketbaseClient.files.getURL(record, file, { thumb: '480x0' }),
		title: record.title || '',
		student: record.student_name || '',
		age: record.student_age || null,
		program: record.program || '',
		featured: Boolean(record.featured),
	}));
};

export async function loadArtworks() {
	if (cache) {
		return cache;
	}

	try {
		const records = await pocketbaseClient.collection(COLLECTION).getFullList({
			filter: 'hidden != true',
			sort: '-featured,-created',
			requestKey: null,
			signal: AbortSignal.timeout ? AbortSignal.timeout(6000) : undefined,
		});
		const items = records.flatMap(toArtworks);

		cache = { items: items.length ? items : fallbackArtworks, source: items.length ? 'live' : 'fallback' };
	} catch {
		cache = { items: fallbackArtworks, source: 'fallback' };
	}

	return cache;
}

export function useArtworks() {
	const [state, setState] = useState(() => cache || { items: [], source: 'loading' });

	useEffect(() => {
		let isActive = true;

		loadArtworks().then((result) => {
			if (isActive) {
				setState(result);
			}
		});

		return () => {
			isActive = false;
		};
	}, []);

	return state;
}
