/*
  Dữ liệu các khoá học. Mỗi khoá là một mục trong danh sách dưới đây và
  tự động có trang riêng tại /khoa-hoc/<slug>, dùng chung một mẫu trang.
  Thêm khoá mới: sao chép một mục, đổi slug và nội dung.
*/

const levelsThieuNhi = [
	{
		name: 'Starter',
		title: 'Làm quen mỹ thuật',
		text: 'Bé làm quen các yếu tố nền tảng của hội hoạ: đường nét, hình khối và màu sắc, qua những chủ đề gần gũi giúp phát triển quan sát và trí tưởng tượng.',
	},
	{
		name: 'Junior',
		title: 'Khám phá chất liệu',
		text: 'Bé trải nghiệm màu sáp, màu nước, bút màu… với chủ đề mới cập nhật hằng tuần, phát triển kỹ năng và sự sáng tạo.',
	},
	{
		name: 'Master',
		title: 'Đề tài nâng cao',
		text: 'Bé vẽ phong cảnh, nhân vật, tranh theo chủ đề; học sắp xếp bố cục, phối màu và hoàn thiện một bức tranh có ý tưởng rõ ràng.',
	},
];

const pricingThieuNhi = [
	{ name: '1 buổi/tuần', price: '500.000đ', unit: '/ tháng', note: '4 buổi mỗi tháng' },
	{ name: '2 buổi/tuần', price: '800.000đ', unit: '/ tháng', note: '8 buổi mỗi tháng', highlight: true },
	{ name: '3 buổi/tuần', price: '1.000.000đ', unit: '/ tháng', note: '12 buổi mỗi tháng' },
];

export const courses = [
	{
		slug: 'my-thuat-thieu-nhi-offline',
		program: 'thieu-nhi',
		title: 'Mỹ Thuật Thiếu Nhi',
		badge: 'Lớp Offline',
		lead: 'Lớp vẽ nhóm nhỏ tại ZikZak — nơi bé tự do tưởng tượng, tự tin thể hiện và yêu thích nghệ thuật từ sớm.',
		facts: [
			{ label: 'Độ tuổi', value: '4 – 12 tuổi' },
			{ label: 'Lịch học', value: '2 buổi/tuần · 90 phút' },
			{ label: 'Sĩ số', value: '6 – 10 bé, chia theo tuổi' },
		],
		benefits: [
			{ title: 'Kích thích trí tưởng tượng', text: 'Qua các bài vẽ theo chủ đề, bé được tự do sáng tạo và thể hiện ý tưởng riêng.' },
			{ title: 'Tăng khả năng quan sát', text: 'Bé học cách nhìn hình dạng, màu sắc và chi tiết của sự vật xung quanh để đưa vào tranh.' },
			{ title: 'Tự tin hơn mỗi ngày', text: 'Mỗi bức tranh hoàn thành giúp bé tự hào và tự tin hơn khi thể hiện suy nghĩ.' },
			{ title: 'Làm quen nghệ thuật sớm', text: 'Bé trải nghiệm màu sáp, màu nước, bút màu trong môi trường học vui vẻ.' },
		],
		curriculum: [
			'Làm quen màu sắc, cách pha và cảm nhận màu',
			'Hình khối cơ bản, vẽ vật thể đơn giản',
			'Vẽ sáng tạo theo chủ đề, kể chuyện bằng hình ảnh',
			'Thủ công – tạo hình với nhiều chất liệu',
			'Rèn khả năng quan sát, tư duy và biểu đạt cảm xúc',
		],
		levels: levelsThieuNhi,
		pricing: pricingThieuNhi,
		pricingNote: 'Học viên nghỉ có phép được học bù.',
		related: 'my-thuat-thieu-nhi-online',
	},
	{
		slug: 'my-thuat-thieu-nhi-online',
		program: 'thieu-nhi',
		title: 'Mỹ Thuật Thiếu Nhi',
		badge: 'Lớp Online',
		lead: 'Bé học vẽ ngay tại nhà cùng giáo viên ZikZak — lịch linh hoạt, bài học sinh động, có sửa bài riêng sau mỗi buổi.',
		facts: [
			{ label: 'Độ tuổi', value: '4 – 12 tuổi' },
			{ label: 'Lịch học', value: '1 – 2 buổi/tuần · 90 phút' },
			{ label: 'Khung giờ', value: 'Sáng · Chiều · Tối' },
		],
		benefits: [
			{ title: 'Học tại nhà, linh hoạt', text: 'Phụ huynh dễ dàng sắp xếp lịch học cho con theo khung sáng, chiều hoặc tối.' },
			{ title: 'Dễ hiểu, dễ thực hành', text: 'Giáo viên hướng dẫn từng bước, bé dễ theo dõi và làm theo.' },
			{ title: 'Phát triển sáng tạo', text: 'Bé tự tin vẽ ra ý tưởng riêng của mình.' },
			{ title: 'Tập trung & khéo léo', text: 'Bé rèn quan sát, phối màu và hoàn thiện tác phẩm.' },
		],
		curriculum: [
			'Làm quen hội hoạ: màu sắc, hình dạng, đường nét, dụng cụ cơ bản',
			'Vẽ tranh sáng tạo: gia đình, động vật, thiên nhiên, lễ hội…',
			'Thủ công mỹ thuật: cắt dán, xé giấy, tạo hình đơn giản',
			'Nhiều chất liệu: sáp màu, chì màu, màu nước, màu poster',
		],
		format: [
			'Học trực tiếp cùng giáo viên qua Google Meet',
			'Hoặc học qua video bài giảng quay sẵn, xem lại bất cứ lúc nào',
			'Giáo viên sửa bài và góp ý riêng sau mỗi buổi',
			'Báo cáo tiến độ học tập gửi cha mẹ 4 tháng/lần',
		],
		levels: levelsThieuNhi,
		pricing: pricingThieuNhi,
		pricingNote: 'Học viên nghỉ có phép được học bù.',
		related: 'my-thuat-thieu-nhi-offline',
	},
];

export const courseBySlug = Object.fromEntries(courses.map((c) => [c.slug, c]));
