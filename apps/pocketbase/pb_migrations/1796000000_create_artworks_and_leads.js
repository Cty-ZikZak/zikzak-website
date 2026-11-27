/// <reference path="../pb_data/types.d.ts" />

/*
  - artworks: kho tranh học viên. Mỗi bản ghi chứa một hoặc nhiều ảnh
    (có thể tải cả lớp cùng lúc). Ai cũng xem được, chỉ quản trị viên được sửa.
  - leads: đăng ký tư vấn từ website. Ai cũng gửi được, chỉ quản trị viên được xem.
*/

const PROGRAMS = ['thieu-nhi', 'chuyen-sau', 'luyen-thi', 'workshop', 'do-hoa', 'ky-thuat-so'];

migrate(
	(app) => {
		const artworks = new Collection({
			type: 'base',
			name: 'artworks',
			listRule: 'hidden != true',
			viewRule: 'hidden != true',
			createRule: null,
			updateRule: null,
			deleteRule: null,
			fields: [
				{
					name: 'images',
					type: 'file',
					required: true,
					maxSelect: 99,
					maxSize: 15728640,
					mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'],
					thumbs: ['480x0', '1200x0'],
				},
				{ name: 'program', type: 'select', maxSelect: 1, values: PROGRAMS },
				{ name: 'title', type: 'text', max: 200 },
				{ name: 'student_name', type: 'text', max: 120 },
				{ name: 'student_age', type: 'number', min: 2, max: 99, onlyInt: true },
				{ name: 'featured', type: 'bool' },
				{ name: 'hidden', type: 'bool' },
				{ name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
				{ name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
			],
		});
		app.save(artworks);

		const leads = new Collection({
			type: 'base',
			name: 'leads',
			listRule: null,
			viewRule: null,
			createRule: '',
			updateRule: null,
			deleteRule: null,
			fields: [
				{ name: 'name', type: 'text', required: true, max: 120 },
				{ name: 'phone', type: 'text', required: true, max: 30 },
				{ name: 'email', type: 'text', max: 160 },
				{ name: 'interest', type: 'text', max: 200 },
				{ name: 'learner_age', type: 'text', max: 40 },
				{ name: 'message', type: 'text', max: 2000 },
				{ name: 'page', type: 'text', max: 200 },
				{ name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
			],
		});
		app.save(leads);
	},
	(app) => {
		for (const name of ['artworks', 'leads']) {
			try {
				app.delete(app.findCollectionByNameOrId(name));
			} catch {
				// collection already removed
			}
		}
	},
);
