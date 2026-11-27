// Thông tin chung của ZikZak — sửa ở đây là cập nhật toàn bộ website.

const CDN = 'https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791';

export const cdn = (file, width = 768) => `${CDN}/${file}?width=${width}&fit=crop`;

export const contact = {
	company: 'Công ty TNHH Mỹ Thuật và Đồ Họa ZikZak',
	brand: 'ZikZak',
	tagline: 'Mỹ thuật các lứa tuổi',
	hotline: '0522552289',
	hotlineDisplay: '0522 552 289',
	zalo: 'https://zalo.me/0522552289',
	email: 'cskh@zikzakart.com',
	address: '174 Tân Mỹ, Tân Thuận Tây, Quận 7, TP.HCM',
	mapUrl: 'https://www.google.com/maps/search/?api=1&query=174+T%C3%A2n+M%E1%BB%B9%2C+T%C3%A2n+Thu%E1%BA%ADn+T%C3%A2y%2C+Qu%E1%BA%ADn+7%2C+TP.HCM',
	facebook: 'https://www.facebook.com/ZikZakArt',
	tiktok: 'https://tiktok.com/',
	logo: cdn('zikzak-logo-2025-rgb-m7VDxVKb1luePVNz.png', 375),
};

/*
  Bảng màu thương hiệu. Mỗi chương trình học có một màu riêng,
  dùng cho bong bóng kính, nhãn và đường zikzak.
*/
export const brandColors = {
	blue: '#176BE0',
	indigo: '#1900C8',
	cyan: '#52E2FF',
	yellow: '#FFE500',
	mint: '#00E6AA',
	orange: '#FF8A1E',
	pink: '#FF4F8B',
	purple: '#A31FD1',
	green: '#4CCD11',
};

export const programs = [
	{
		id: 'thieu-nhi',
		name: 'Mỹ Thuật Thiếu Nhi',
		short: 'Thiếu nhi',
		group: 'ZikZak Art Kid',
		audience: 'parents',
		age: '3 – 15 tuổi',
		color: brandColors.orange,
		blurb: 'Bé làm quen màu sắc, hình khối và tự do kể chuyện bằng tranh vẽ.',
		href: '/khoa-hoc/my-thuat-thieu-nhi-offline',
		image: cdn('img_0767-Aq2WNDrKexsrOQow.jpeg', 375),
	},
	{
		id: 'chuyen-sau',
		name: 'Mỹ Thuật Chuyên Sâu',
		short: 'Chuyên sâu',
		group: 'ZikZak Art Pro',
		audience: 'students',
		age: 'Mọi lứa tuổi, mọi trình độ',
		color: brandColors.indigo,
		blurb: 'Hình hoạ, trang trí màu và chất liệu bài bản cho người muốn đi xa.',
		href: '/zikzak-art-pro-or-my-thuat-chuyen-sau',
		image: cdn('img_0768-AMq1po0aE6I4KgqK.jpeg', 375),
	},
	{
		id: 'luyen-thi',
		name: 'Luyện Thi Đại Học',
		short: 'Luyện thi',
		group: 'ZikZak Art',
		audience: 'students',
		age: 'Học sinh THPT',
		color: brandColors.green,
		blurb: 'Hình hoạ chì, trang trí màu theo đề thi các trường mỹ thuật, kiến trúc.',
		href: '/zikzak-art-luyen-thi-dai-hoc',
		image: cdn('img_0770-dOqaNoVlvbCLXpVX.jpeg', 375),
	},
	{
		id: 'workshop',
		name: 'Workshop Nghệ Thuật',
		short: 'Workshop',
		group: 'ZikZak Art',
		audience: 'both',
		age: 'Cho mọi người',
		color: brandColors.pink,
		blurb: 'Một buổi trải nghiệm sáng tạo cùng gia đình, bạn bè hoặc đồng nghiệp.',
		href: '/zikzak-art-workshop',
		image: cdn('img_0769-mP4ONEx4gOsX7WnR.jpeg', 375),
	},
	{
		id: 'do-hoa',
		name: 'Thiết Kế Đồ Hoạ',
		short: 'Đồ hoạ',
		group: 'Graphic Design',
		audience: 'students',
		age: 'Từ 15 tuổi',
		color: brandColors.blue,
		blurb: 'Photoshop, Illustrator, Canva, UX/UI — học để làm được việc thật.',
		href: '/graphic-design-or-thiet-ke-djo-hoa',
		image: cdn('img_0768-ALpebawyXVuJ6LrX.JPG', 375),
	},
	{
		id: 'ky-thuat-so',
		name: 'Vẽ Kỹ Thuật Số',
		short: 'Kỹ thuật số',
		group: 'Digital Painting',
		audience: 'both',
		age: 'Mọi lứa tuổi',
		color: brandColors.purple,
		blurb: 'Vẽ trên iPad, máy tính với Procreate, Photoshop — từ nét đầu tiên.',
		href: '/digital-painting-or-ve-ky-thuat-so',
		image: cdn('img_0769-mv0WjrjR8EioBED1.JPG', 375),
	},
];

export const programById = Object.fromEntries(programs.map((p) => [p.id, p]));

export const nav = [
	{ label: 'Trang chủ', href: '/' },
	{
		label: 'ZikZak Art',
		children: [
			{ label: 'Mỹ thuật thiếu nhi', href: '/zikzak-art-kid-or-my-thuat-thieu-nhi', note: '3 – 15 tuổi' },
			{ label: 'Mỹ thuật chuyên sâu', href: '/zikzak-art-pro-or-my-thuat-chuyen-sau', note: 'Mọi trình độ' },
			{ label: 'Luyện thi đại học', href: '/zikzak-art-luyen-thi-dai-hoc', note: 'Khối V, H' },
			{ label: 'Workshop', href: '/zikzak-art-workshop', note: 'Trải nghiệm' },
		],
	},
	{
		label: 'Đồ hoạ & Kỹ thuật số',
		children: [
			{ label: 'Thiết kế đồ hoạ', href: '/graphic-design-or-thiet-ke-djo-hoa', note: 'Từ 15 tuổi' },
			{ label: 'Vẽ kỹ thuật số', href: '/digital-painting-or-ve-ky-thuat-so', note: 'iPad & máy tính' },
		],
	},
	{ label: 'Tranh học viên', href: '/trien-lam' },
	{ label: 'Liên kết trường học', href: '/hop-dong-lien-ket-giang-day' },
	{ label: 'In ấn', href: '/in-an' },
];

export const achievements = [
	{
		title: 'Trường Mầm non 30/4 – Phường Sài Gòn đạt thành tích cao tại Hội thi “Bé vẽ sáng tạo cùng Bitex” cấp Thành phố, năm học 2025 – 2026',
		image: cdn('698372527_122170581026921614_8104200020606162314_n-t4Y2geMgIJk0PD7B.jpg', 375),
	},
	{
		title: 'Phường Sài Gòn tuyển chọn tác phẩm xuất sắc tham gia Hội thi “Bé vẽ sáng tạo cùng Bitex” cấp Thành phố',
		image: cdn('671663615_122167003022921614_785691213545402072_n-HdU1jCMPlVWwI6ZQ.jpg', 375),
	},
	{
		title: 'Chúc mừng các bé hoạ sĩ nhí Mầm non Nguyễn Thái Bình đạt giải Hội thi “Nét vẽ xanh” năm học 2025 – 2026',
		image: cdn('708345516_4395629487346526_5468696960701474871_n-44pmianMPO5bWYZo.jpg', 375),
	},
];

export const interestOptions = [
	'Mỹ thuật thiếu nhi',
	'Mỹ thuật chuyên sâu',
	'Luyện thi đại học',
	'Thiết kế đồ hoạ',
	'Vẽ kỹ thuật số',
	'Workshop',
	'Liên kết giảng dạy cho trường',
];
