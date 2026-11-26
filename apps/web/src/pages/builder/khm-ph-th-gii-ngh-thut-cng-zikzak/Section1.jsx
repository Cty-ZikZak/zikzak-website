import React from 'react';
import BlockBlogHeader from '@/components/builder/blocks/BlockBlogHeader';

export default function Section1() {
	return (
		<BlockBlogHeader
			blockId={"ai-IBpw8e"}
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
				title: "Khám Phá Thế Giới Nghệ Thuật Cùng Zikzak",
				description: "Zikzak mang đến cho bạn những sản phẩm giáo dục mỹ thuật và thiết kế đồ họa chất lượng. Khám phá các khóa học, tài liệu và hoạ phẩm đa dạng, giúp bạn phát triển kỹ năng sáng tạo và nghệ thuật một cách hiệu quả nhất.",
				authorName: "",
				date: "2024-05-08T07:01:25.377Z",
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
