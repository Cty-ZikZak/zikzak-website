/*
  Chống "rớt chữ": gắn n từ cuối bằng khoảng trắng không ngắt dòng,
  nên đoạn văn không bao giờ để một từ lẻ ở dòng cuối (kể cả trình duyệt chưa có text-wrap: pretty).
*/
export const nb = (text, n = 2) => {
	if (typeof text !== 'string') {
		return text;
	}

	const words = text.split(' ');

	if (words.length <= n) {
		return text;
	}

	return `${words.slice(0, -n).join(' ')} ${words.slice(-n).join(' ')}`;
};
