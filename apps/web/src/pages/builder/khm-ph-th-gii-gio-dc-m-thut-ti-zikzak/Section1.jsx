import React from 'react';
import BlockBlogHeader from '@/components/builder/blocks/BlockBlogHeader';

export default function Section1() {
	return (
		<BlockBlogHeader
			blockId={"ai-cKCIw2"}
			blockClassName={"block block--blog-header block--desktop-first-visible block--mobile-first-visible transition transition--slide transition--root-hidden"}
			style={{
				"--align": "flex-start",
				"--text-align": "center",
				"--block-padding-top": "45px",
				"--block-padding": "45px 30px 45px 30px",
				"--block-padding-right": "30px",
				"--block-padding-bottom": "45px",
				"--block-padding-left": "30px",
				"--content-width": "954px",
				"--m-block-padding": "16px 16px 16px 16px",
				backgroundColor: "#ffffff"
			}}
			shownItems={{
				date: true,
				avatar: true,
				categories: true,
				description: true,
				minutesToRead: true,
				authorFullName: true
			}}
			blogTitleFontSize={32}
			post={{
				title: "Khám Phá Thế Giới Giáo Dục Mỹ Thuật Tại Zikzak",
				description: "Zikzak mang đến những sản phẩm và dịch vụ giáo dục mỹ thuật, thiết kế đồ họa, in ấn và hoạ phẩm chất lượng. Hãy cùng chúng tôi khám phá những cơ hội học tập và sáng tạo mới mẻ trong lĩnh vực nghệ thuật và thiết kế.",
				authorName: "",
				date: "2024-05-08T07:01:25.381Z",
				minutesToRead: "1",
				categories: []
			}}
			blogCategories={{}}
			blogReadingTimeText={"min read"}
			background={{
				color: "#ffffff",
				current: "color"
			}}
		/>
	);
}
