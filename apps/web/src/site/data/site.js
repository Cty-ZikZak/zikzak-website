// Thông tin chung của ZikZak — sửa ở đây là cập nhật toàn bộ website.

const CDN = 'https://horizons-cdn.hostinger.com/697136e7-8f0a-411b-92e3-d9be55f07791';

export const cdn = (file, width = 768) => `${CDN}/${file}?width=${width}&fit=crop`;

// Ảnh thương hiệu lưu ngay trong website (thư mục public/brand).
const asset = (path) => `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/brand/${path}`;

export const mascots = {
	teacher: asset('mascots/teacher.webp'),
	kidBrush: asset('mascots/kid-brush.webp'),
	painter: asset('mascots/painter.webp'),
	sketch: asset('mascots/sketch.webp'),
	craft: asset('mascots/craft.webp'),
	designer: asset('mascots/designer.webp'),
	digital: asset('mascots/digital.webp'),
};

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
	logo: asset('logo.webp'),
	logoArt: asset('logo-art.webp'),
	themeSongYoutubeId: 'gjOL9fV6Qlo',
};

/*
  Bảng màu thương hiệu — lấy từ logo ZikZak.
  Mỗi chương trình học có một màu riêng cho bong bóng kính.
*/
export const brandColors = {
	indigo: '#1A00C8',
	blue: '#0A5CF5',
	cyan: '#00E1FF',
	green: '#00E070',
	yellow: '#FFE600',
	lime: '#B8F03C',
};

export const programs = [
	{
		id: 'thieu-nhi',
		name: 'Mỹ Thuật Thiếu Nhi',
		short: 'Thiếu nhi',
		group: 'ZikZak Art Kid',
		audience: 'parents',
		age: '3 – 15 tuổi',
		color: brandColors.yellow,
		mascot: mascots.kidBrush,
		blurb: 'Bé làm quen màu sắc, hình khối và tự do kể chuyện bằng tranh vẽ.',
		href: '/khoa-hoc/my-thuat-thieu-nhi-offline',
	},
	{
		id: 'chuyen-sau',
		name: 'Mỹ Thuật Chuyên Sâu',
		short: 'Chuyên sâu',
		group: 'ZikZak Art Pro',
		audience: 'students',
		age: 'Mọi lứa tuổi, mọi trình độ',
		color: brandColors.indigo,
		mascot: mascots.painter,
		blurb: 'Hình hoạ, trang trí màu và chất liệu bài bản cho người muốn đi xa.',
		href: '/zikzak-art-pro-or-my-thuat-chuyen-sau',
	},
	{
		id: 'luyen-thi',
		name: 'Luyện Thi Đại Học',
		short: 'Luyện thi',
		group: 'ZikZak Art',
		audience: 'students',
		age: 'Học sinh THPT',
		color: brandColors.green,
		mascot: mascots.sketch,
		blurb: 'Hình hoạ chì, trang trí màu theo đề thi các trường mỹ thuật, kiến trúc.',
		href: '/zikzak-art-luyen-thi-dai-hoc',
	},
	{
		id: 'workshop',
		name: 'Workshop Nghệ Thuật',
		short: 'Workshop',
		group: 'ZikZak Art',
		audience: 'both',
		age: 'Cho mọi người',
		color: brandColors.cyan,
		mascot: mascots.craft,
		blurb: 'Một buổi trải nghiệm sáng tạo cùng gia đình, bạn bè hoặc đồng nghiệp.',
		href: '/zikzak-art-workshop',
	},
	{
		id: 'do-hoa',
		name: 'Thiết Kế Đồ Hoạ',
		short: 'Đồ hoạ',
		group: 'Graphic Design',
		audience: 'students',
		age: 'Từ 15 tuổi',
		color: brandColors.blue,
		mascot: mascots.designer,
		blurb: 'Photoshop, Illustrator, Canva, UX/UI — học để làm được việc thật.',
		href: '/graphic-design-or-thiet-ke-djo-hoa',
	},
	{
		id: 'ky-thuat-so',
		name: 'Vẽ Kỹ Thuật Số',
		short: 'Kỹ thuật số',
		group: 'Digital Painting',
		audience: 'both',
		age: 'Mọi lứa tuổi',
		color: brandColors.lime,
		mascot: mascots.digital,
		blurb: 'Vẽ trên iPad, máy tính với Procreate, Photoshop — từ nét đầu tiên.',
		href: '/digital-painting-or-ve-ky-thuat-so',
	},
];

export const programById = Object.fromEntries(programs.map((p) => [p.id, p]));

// Liên kết ngoại khoá với nhà trường (nội dung lấy từ trang "Liên kết giảng dạy cho trường học")
export const schoolLevels = [
	{ id: 'mam-non', name: 'Mầm non', color: brandColors.yellow, mascot: mascots.kidBrush },
	{ id: 'tieu-hoc', name: 'Tiểu học', color: brandColors.green, mascot: mascots.craft },
	{ id: 'thcs', name: 'THCS', color: brandColors.cyan, mascot: mascots.painter },
	{ id: 'thpt', name: 'THPT', color: brandColors.blue, mascot: mascots.sketch },
];

export const schoolPillars = [
	{
		title: 'Chương trình bài bản',
		text: 'Giáo án độc quyền của ZikZak, hoặc theo sách giáo khoa Mỹ thuật chuẩn của Bộ Giáo dục & Đào tạo.',
	},
	{
		title: 'Giáo viên chuyên nghiệp',
		text: 'Thân thiện và am hiểu tâm lý từng lứa tuổi.',
	},
	{
		title: 'Đào tạo đội tuyển',
		text: 'Hơn 10 năm rèn luyện học sinh tham gia hội thi mỹ thuật từ cấp thành phố đến cấp quốc gia.',
	},
	{
		title: 'Hỗ trợ công tác nghệ thuật',
		text: 'Tư vấn, thực hiện trang trí, tạo hình và các hoạt động mỹ thuật trong trường.',
	},
];

export const partnerSchools = [
	'Mầm non Cô Giang',
	'Mầm non Nguyễn Thái Bình',
	'Mầm non 30/4',
	'Mầm non Tuổi Hoa',
	'Mầm non Hướng Dương',
	'Mầm non Rạng Đông 10',
	'Mầm non Mặt Trời Bé Con',
	'Mầm non Sao Mai',
	'Mầm non Anh Việt Mỹ',
	'Tiểu học Anh Việt Mỹ',
];

// Chương trình theo độ tuổi (phần "Chọn lớp theo độ tuổi" trên trang chủ): mỗi nhóm một ô kính màu.
export const ageGroups = [
	{
		id: 'nhi',
		label: '3 – 10 tuổi',
		color: brandColors.green,
		programs: ['thieu-nhi', 'workshop'],
	},
	{
		id: 'thieu-nien',
		label: '11 – 15 tuổi',
		color: brandColors.cyan,
		programs: ['chuyen-sau', 'luyen-thi', 'workshop'],
	},
	{
		id: 'tu-15',
		label: '15 tuổi trở lên',
		color: brandColors.blue,
		programs: ['chuyen-sau', 'luyen-thi', 'do-hoa', 'ky-thuat-so', 'workshop'],
	},
	{
		id: 'nguoi-lon',
		label: 'Người lớn',
		color: brandColors.indigo,
		programs: ['chuyen-sau', 'do-hoa', 'ky-thuat-so', 'workshop'],
	},
];

// Cảm nhận của học viên (trích từ ảnh banner trên website cũ).
export const testimonials = [
	{
		name: 'Phan Hoàng Thuý Nhi',
		school: 'Đại học Mỹ thuật TP.HCM',
		photo: asset('students/thuy-nhi.webp'),
		quote: 'ZikZak để lại trong mình nhiều ấn tượng sâu sắc. Thầy rất nhiệt tình, luôn theo sát và hỗ trợ học viên hết mình. Dù bạn là người hướng nội thích yên tĩnh hay hướng ngoại thích tương tác, đều dễ dàng hoà nhập. Thầy tạo điều kiện tối đa để mỗi học viên phát triển kỹ năng vẽ và sẵn sàng cho kỳ thi đại học.',
	},
	{
		name: 'Trần Mỹ Cơ',
		school: 'Đại học Kiến trúc TP.HCM',
		photo: asset('students/my-co.webp'),
		quote: 'Học tại ZikZak từ những ngày đầu, lúc đó lớp chỉ tầm 10 bạn thôi mà vui lắm. … Thầy gần gũi vui vẻ, học ra học chơi ra chơi. Thầy rất tận tâm và chu đáo luôn. Đợt đó thấy không chỉ dạy con phát triển kĩ năng mà còn cả tinh thần nữa. …',
	},
	{
		name: 'Naughtee – Quốc Khánh',
		school: 'Đại học Văn Lang',
		photo: asset('students/quoc-khanh.webp'),
		quote: 'Lúc còn mù mờ không biết đời mình sẽ đi về đâu, tự nhiên rớt cái bịch vô lớp vẽ của thầy. Ai ngờ vui thiệt, vẽ riết mà đầu cũng sáng ra, mở được cả đống lối đi mới. Thầy thì tận tình, bạn bè thì chịu chơi, bài ra đều mà tiếng cười cũng không thiếu…',
	},
	{
		name: 'Lê Ngọc Thảo',
		school: 'Đại học Kiến trúc TP.HCM',
		photo: asset('students/ngoc-thao.webp'),
		quote: 'Trải nghiệm học tại ZikZak vui như đi chơi!!! Thầy vui, các bạn thì xàm xàm dễ cưng. Đi học cả đám cười suốt, cuối buổi thì: “Ủa nay mình vẽ gì zậy ta?”. Nói chứ mê lắm, học vui và kỹ năng vẽ rất lên tay.',
	},
	{
		name: 'Đặng Văn Kiệt',
		school: 'Đại học Mỹ thuật TP.HCM',
		photo: asset('students/van-kiet.webp'),
		quote: 'Lớp vẽ ở đây WOW nha! Không chỉ là nơi chinh phục ước mơ đậu vào trường Mỹ thuật mà còn là một trải nghiệm đáng nhớ. Không khí học tập ở lớp lúc nào cũng thoải mái, thầy vui vẻ và có nhiều năng lượng tích cực để truyền cho học trò. … Mãi iêu ❤',
	},
];

// Câu hỏi thường gặp — chỉ ghi những thông tin ZikZak đã công bố.
export const faqs = [
	{
		q: 'Có được học thử trước khi đăng ký không?',
		a: 'Có. Học viên được học thử miễn phí 1 buổi để làm quen lớp, giáo viên và cách học trước khi đăng ký.',
	},
	{
		q: 'Bé mấy tuổi thì học được?',
		a: 'Chương trình Mỹ thuật thiếu nhi dành cho bé từ 3 đến 15 tuổi, lớp chia theo nhóm tuổi để nội dung phù hợp với khả năng của từng bé. Học viên lớn hơn có các chương trình Chuyên sâu, Luyện thi, Thiết kế đồ hoạ và Vẽ kỹ thuật số.',
	},
	{
		q: 'Một lớp có bao nhiêu bé?',
		a: 'Lớp offline học theo nhóm nhỏ 6 – 10 bé, chia theo độ tuổi, để giáo viên kèm sát từng bé.',
	},
	{
		q: 'Học online thì học như thế nào?',
		a: 'Bé học trực tiếp cùng giáo viên qua Google Meet, hoặc học qua video bài giảng quay sẵn để xem lại bất cứ lúc nào. Giáo viên sửa bài và góp ý riêng sau mỗi buổi, gửi báo cáo tiến độ cho cha mẹ 4 tháng/lần.',
	},
	{
		q: 'Học phí lớp thiếu nhi bao nhiêu?',
		a: '500.000đ/tháng cho 1 buổi/tuần, 800.000đ/tháng cho 2 buổi/tuần, 1.000.000đ/tháng cho 3 buổi/tuần.',
	},
	{
		q: 'Nghỉ học có được học bù không?',
		a: 'Có. Học viên nghỉ được học bù.',
	},
	{
		q: 'ZikZak ở đâu?',
		a: '174 Tân Mỹ, Tân Thuận Tây, Quận 7, TP.HCM. Gọi 0522 552 289 hoặc nhắn Zalo để được tư vấn lịch học.',
	},
];

/*
  Dải thông tin chạy ở đầu trang chủ — mỗi mục là một ô kính.
  Sửa, thêm, bớt tại đây (chỉ ghi thông tin có thật). icon: gift | trophy | palette | phone | sparkles | school
  href: đường dẫn trong web (/dang-ky…), số điện thoại (tel:…) hoặc để trống nếu chỉ là thông báo.
*/
const announcementList = [
	{
		id: 'hoc-thu',
		tag: 'Ưu đãi',
		title: 'Học thử miễn phí 1 buổi',
		text: 'Làm quen lớp, giáo viên và cách học trước khi đăng ký.',
		href: '/dang-ky',
		image: asset('news/hoc-thu.webp'),
		color: brandColors.yellow,
	},
	{
		id: 'bitex',
		tag: 'Thành tích',
		title: 'Mầm non 30/4 đạt giải cao hội thi “Bé vẽ sáng tạo cùng Bitex”',
		text: 'Cấp Thành phố, năm học 2025 – 2026.',
		href: '/trien-lam',
		image: asset('news/bitex.webp'),
		color: brandColors.cyan,
	},
	{
		id: 'thieu-nhi',
		tag: 'Mỹ thuật thiếu nhi',
		title: 'Lớp vẽ cho bé 3 – 15 tuổi',
		text: 'Học offline tại Quận 7 hoặc online tại nhà.',
		href: '/khoa-hoc/my-thuat-thieu-nhi-offline',
		image: asset('news/thieu-nhi.webp'),
		color: brandColors.green,
	},
	{
		id: 'net-ve-xanh',
		tag: 'Chúc mừng',
		title: 'Bé họa sĩ nhí Mầm non Nguyễn Thái Bình đạt giải “Nét vẽ xanh”',
		text: 'Hội thi năm học 2025 – 2026.',
		href: '/trien-lam',
		image: asset('news/net-ve-xanh.webp'),
		color: brandColors.blue,
	},
	{
		id: 'hoc-phi',
		tag: 'Học phí',
		title: 'Từ 500.000đ / tháng',
		text: 'Lớp thiếu nhi 1 buổi/tuần. Nghỉ có phép được học bù.',
		href: '/khoa-hoc/my-thuat-thieu-nhi-offline',
		image: asset('news/hoc-phi.webp'),
		color: brandColors.lime,
	},
	{
		id: 'truong-hoc',
		tag: 'Dành cho nhà trường',
		title: 'Liên kết giảng dạy Mỹ thuật',
		text: 'Mầm non, Tiểu học, THCS và THPT.',
		href: '/hop-dong-lien-ket-giang-day',
		image: asset('news/truong-hoc.webp'),
		color: brandColors.indigo,
	},
	{
		id: 'hotline',
		tag: 'Tư vấn',
		title: 'Gọi 0522 552 289',
		text: 'Hoặc nhắn Zalo để được tư vấn lịch học.',
		href: 'tel:0522552289',
		image: asset('news/hotline.webp'),
		color: brandColors.cyan,
	},
];

/*
  Mỗi ô thông tin hiển thị một bộ 3 ảnh xếp chồng như những lá bài: ảnh ở giữa (nằm trên cùng) là `image`.
  Muốn tự chọn ảnh hai bên, thêm `images: [ảnhTrái, ảnhGiữa, ảnhPhải]` vào mục tương ứng ở trên;
  nếu không có, hệ thống tự lấy hai ảnh khác trong thư viện ảnh để ghép cùng.
*/
const cardPool = [
	asset('students/thuy-nhi.webp'),
	asset('news/thieu-nhi.webp'),
	asset('students/my-co.webp'),
	asset('news/bitex.webp'),
	asset('students/quoc-khanh.webp'),
	asset('news/net-ve-xanh.webp'),
	asset('students/ngoc-thao.webp'),
	asset('news/truong-hoc.webp'),
	asset('students/van-kiet.webp'),
	asset('news/hoc-thu.webp'),
];

// Đoạn tóm tắt hiển thị trên bản tin khi ô thông tin phóng lớn (có thể sửa; hoặc thêm `summary` ngay trong mục)
const summaries = {
	'hoc-thu': 'Bé được trải nghiệm một buổi học thật tại lớp: làm quen giáo viên, bạn bè và cách học trước khi quyết định đăng ký. Hoàn toàn miễn phí.',
	bitex: 'Học sinh Mầm non 30/4 đạt giải cao tại hội thi “Bé vẽ sáng tạo cùng Bitex” cấp Thành phố, năm học 2025 – 2026, với những bức tranh giàu màu sắc và trí tưởng tượng.',
	'thieu-nhi': 'Lớp mỹ thuật cho bé từ 3 đến 15 tuổi, học offline tại Quận 7 hoặc online tại nhà. Bài vẽ theo chủ đề mới mỗi tuần, bé được tự do kể câu chuyện của riêng mình.',
	'net-ve-xanh': 'Bé họa sĩ nhí Mầm non Nguyễn Thái Bình đạt giải tại hội thi “Nét vẽ xanh”, năm học 2025 – 2026. Chúc mừng các bạn nhỏ và quý thầy cô!',
	'hoc-phi': 'Lớp thiếu nhi học 1 buổi mỗi tuần, học phí từ 500.000đ/tháng. Học viên nghỉ có phép được học bù.',
	'truong-hoc': 'ZikZak liên kết giảng dạy môn Mỹ thuật cho các cấp học: Mầm non, Tiểu học, THCS và THPT, với chương trình phù hợp từng độ tuổi.',
	hotline: 'Gọi 0522 552 289 hoặc nhắn Zalo để được tư vấn lịch học và lớp phù hợp với bé.',
};

export const announcements = announcementList.map((item, i) => {
	if (item.images?.length) {
		return { ...item, summary: item.summary || summaries[item.id] || item.text };
	}

	const others = cardPool.filter((src) => src !== item.image);
	const left = others[(i * 2 + 1) % others.length];
	const right = others.filter((src) => src !== left)[(i * 3 + 4) % (others.length - 1)];

	return { ...item, summary: item.summary || summaries[item.id] || item.text, images: [left, item.image, right] };
});

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
		image: cdn('698372527_122170581026921614_8104200020606162314_n-t4Y2geMgIJk0PD7B.jpg', 480),
	},
	{
		title: 'Phường Sài Gòn tuyển chọn tác phẩm xuất sắc tham gia Hội thi “Bé vẽ sáng tạo cùng Bitex” cấp Thành phố',
		image: cdn('671663615_122167003022921614_785691213545402072_n-HdU1jCMPlVWwI6ZQ.jpg', 480),
	},
	{
		title: 'Chúc mừng các bé hoạ sĩ nhí Mầm non Nguyễn Thái Bình đạt giải Hội thi “Nét vẽ xanh” năm học 2025 – 2026',
		image: cdn('708345516_4395629487346526_5468696960701474871_n-44pmianMPO5bWYZo.jpg', 480),
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
