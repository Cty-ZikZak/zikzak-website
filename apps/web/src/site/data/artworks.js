import { cdn } from './site.js';

/*
  Tranh học viên dự phòng — chỉ hiển thị khi website chưa kết nối được
  kho tranh trên trang quản trị (PocketBase, bảng "artworks").
  Khi đã kết nối, giáo viên chỉ cần tải ảnh lên trang quản trị, không cần sửa file này.
*/

const files = [
	['bain-sao-img_2449-Ubj4ZS90Fv0IQgDO.JPG', 'thieu-nhi'],
	['img_0097-oB6wMIKVKiwnK2za.JPG', 'thieu-nhi'],
	['img_7239-Rf4DLnWLjToW8Iot.JPG', 'thieu-nhi'],
	['img_5443-hH0AkjcUdOMz9NeX.JPEG', 'thieu-nhi'],
	['img_1425-E9MCDeks106ha594.JPG', 'thieu-nhi'],
	['img_3435-ACzewxyUlf7CpmCn.JPEG', 'thieu-nhi'],
	['img_9954-Q25Em6qH2kTEg8Qm.JPEG', 'thieu-nhi'],
	['img_2585-UXkHqlRSSUypBrfL.JPG', 'thieu-nhi'],
	['img_0973-nIP2VJh9YSoz5MmE.JPG'],
	['img_4563-RnoA9kBu2wQoDl2W.JPG'],
	['img_5441-UKD0uZyOlK2QnpSQ.JPEG'],
	['img_7759-XWpDWTQ0gwn33WvM.JPG'],
	['2-mau-O1vPzbjbnRYrF3WD.png', 'do-hoa'],
	['6-mau-MwLCjobQwnJmWZ46.png', 'do-hoa'],
	['2.-saopsnh-mxAsrA04CZGFcbl5.png', 'do-hoa'],
	['bia-14-1-_baa-trc-TTyilvuSPq68pkBE.png', 'do-hoa'],
	['bia-14-1-_bookmark-1-Atb8nxenttoTBILn.png', 'do-hoa'],
	['z.1-map-game-sac-u-uoqTlCVwgr2nuY9K.png', 'do-hoa'],
];

export const fallbackArtworks = files.map(([file, program], index) => ({
	id: `static-${index}`,
	src: cdn(file, 768),
	thumb: cdn(file, 480),
	title: '',
	student: '',
	age: null,
	program: program || '',
	featured: index < 8,
}));
