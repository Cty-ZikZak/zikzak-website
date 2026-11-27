import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead, { Eyebrow } from '../components/SectionHead.jsx';
import ZigzagChain from '../components/ZigzagChain.jsx';
import Orb from '../components/Orb.jsx';
import MascotOrb from '../components/MascotOrb.jsx';
import Reveal from '../components/Reveal.jsx';
import Band from '../components/Band.jsx';
import ProgramChain from '../components/ProgramChain.jsx';
import PhotoChain from '../components/PhotoChain.jsx';
import AgePicker from '../components/AgePicker.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ThemeSong from '../components/ThemeSong.jsx';
import Faq from '../components/Faq.jsx';
import { ContactBlock } from './RegisterPage.jsx';
import { useArtworks } from '../lib/artworks.js';
import { achievements, brandColors, contact, faqs, mascots, programs } from '../data/site.js';

const HERO_CAST = [
	{ src: mascots.kidBrush, color: brandColors.yellow, x: 22, y: 36, size: 'clamp(112px, 21vw, 196px)', delay: 0 },
	{ src: mascots.sketch, color: brandColors.cyan, x: 52, y: 72, size: 'clamp(104px, 19vw, 178px)', delay: 0.8 },
	{ src: mascots.digital, color: brandColors.green, x: 80, y: 34, size: 'clamp(104px, 19vw, 182px)', delay: 1.6 },
];

const HERO_DECO = [
	{ color: brandColors.blue, x: 7, y: 80, size: 'clamp(30px, 5vw, 52px)', delay: 0.4 },
	{ color: brandColors.indigo, x: 93, y: 76, size: 'clamp(38px, 6vw, 64px)', delay: 1.2 },
	{ color: brandColors.lime, x: 52, y: 14, size: 'clamp(22px, 3.6vw, 36px)', delay: 2 },
];

const REASONS = [
	{ title: 'Kích thích tưởng tượng', text: 'Bài vẽ theo chủ đề mới mỗi tuần — học viên được tự do kể câu chuyện của riêng mình.', color: brandColors.yellow },
	{ title: 'Lớp nhỏ, kèm sát', text: 'Lớp thiếu nhi offline 6 – 10 bé, chia theo độ tuổi. Giáo viên góp ý cho từng bạn.', color: brandColors.blue },
	{ title: 'Nhiều chất liệu', text: 'Sáp màu, màu nước, màu poster, chì, thủ công, iPad… học không bao giờ nhàm chán.', color: brandColors.green },
	{ title: 'Thấy rõ tiến bộ', text: 'Lộ trình Starter → Junior → Master; lớp online gửi báo cáo tiến độ cho cha mẹ.', color: brandColors.cyan },
];

function Hero() {
	return (
		<section className="zz-hero2">
			<div className="zz-container zz-hero2__grid">
				<Reveal>
					<Eyebrow>Shine your way · Slay your mind</Eyebrow>
					<h1>
						Ươm mầm <span className="zz-scribble">sáng tạo</span> cho mọi lứa tuổi
					</h1>
					<p className="zz-lead">
						ZikZak là nơi ươm mầm và phát triển khả năng mỹ thuật cho học viên ở mọi lứa tuổi — nơi mọi
						giới hạn được khai phá và sự sáng tạo luôn được tôn vinh.
					</p>
					<div className="zz-actions">
						<Link to="/dang-ky" className="zz-btn zz-btn--primary">
							Học thử miễn phí 1 buổi <ArrowRight />
						</Link>
						<Link to="/trien-lam" className="zz-btn">
							<Images /> Xem tranh học viên
						</Link>
					</div>
					<div className="zz-hero__chips">
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.yellow }} />Từ 3 tuổi</span>
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.cyan }} />Online & Offline</span>
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.green }} />Quận 7, TP.HCM</span>
					</div>
				</Reveal>

				<div className="zz-hero2__stage" aria-hidden="true">
					<ZigzagChain>
						{HERO_CAST.map((m) => (
							<span key={m.src} style={{ position: 'absolute', left: `${m.x}%`, top: `${m.y}%` }}>
								<MascotOrb src={m.src} color={m.color} size={m.size} float delay={m.delay} />
							</span>
						))}
					</ZigzagChain>
					{HERO_DECO.map((d) => (
						<Orb
							key={d.color}
							className="zz-hero2__deco"
							float
							delay={d.delay}
							size={d.size}
							color={d.color}
							style={{ position: 'absolute', left: `${d.x}%`, top: `${d.y}%` }}
						/>
					))}
					<span className="zz-bubble zz-glass" style={{ left: '0%', top: '2%' }}>
						<i style={{ '--c': brandColors.yellow }} />Hôm nay vẽ gì nhỉ?
					</span>
					<span className="zz-bubble zz-glass" style={{ right: '0%', top: '64%' }}>
						<i style={{ '--c': brandColors.cyan }} />Slay your mind!
					</span>
				</div>
			</div>
		</section>
	);
}

export default function HomePage() {
	const { items } = useArtworks();
	const featured = items.filter((art) => art.featured);
	const photos = (featured.length >= 6 ? featured : items).slice(0, 6);

	return (
		<SiteLayout description="ZikZak — trường mỹ thuật các lứa tuổi tại Quận 7, TP.HCM: mỹ thuật thiếu nhi, chuyên sâu, luyện thi đại học, thiết kế đồ hoạ, vẽ kỹ thuật số và workshop.">
			<Hero />

			<Band color="var(--zz-yellow)">
				<div className="zz-container">
					<SectionHead
						eyebrow="Chọn lớp theo độ tuổi"
						title={<>Con bạn <span className="zz-scribble" style={{ '--sc': 'var(--zz-cyan)' }}>bao nhiêu tuổi?</span></>}
						lead="Chọn độ tuổi để xem chương trình phù hợp — từ bé mầm non đến học sinh ôn thi và người đi làm."
					/>
					<AgePicker />
				</div>
			</Band>

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead
						eyebrow="Chương trình học"
						title={<>Sáu con đường, một hành trình <span className="zz-scribble">zikzak</span></>}
						lead="Mỗi chương trình có một người bạn đồng hành — chọn điểm bắt đầu phù hợp với độ tuổi và mục tiêu."
					/>
					<ProgramChain items={programs} />
				</div>
			</section>

			<Band color="var(--zz-cyan)">
				<div className="zz-container">
					<SectionHead
						eyebrow="Triển lãm"
						title={<>Tranh của <span className="zz-scribble">học viên</span> ZikZak</>}
						lead="Cập nhật sau mỗi buổi học — phụ huynh theo dõi hành trình sáng tạo của con ngay tại đây."
					/>
					{photos.length ? <PhotoChain items={photos} /> : null}
					<div className="zz-center">
						<Link to="/trien-lam" className="zz-btn zz-btn--primary">Xem toàn bộ triển lãm <ArrowRight /></Link>
					</div>
				</div>
			</Band>

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead eyebrow="Vì sao chọn ZikZak" title={<>Giáo dục sáng tạo, kiến thức <span className="zz-scribble" style={{ '--sc': 'var(--zz-green)' }}>thực chất</span></>} />
					<div className="zz-features">
						{REASONS.map((reason, i) => (
							<Reveal key={reason.title} className="zz-feature zz-glass" delay={i * 80}>
								<Orb color={reason.color} label={String(i + 1)} />
								<h3>{reason.title}</h3>
								<p>{reason.text}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<Band dark decor>
				<div className="zz-container">
					<SectionHead
						eyebrow="Học viên nói gì"
						title="Từ lớp vẽ ZikZak đến giảng đường đại học"
						lead="Những học viên luyện thi tại ZikZak đã đỗ vào các trường mỹ thuật, kiến trúc mơ ước."
					/>
					<div className="zz-schools">
						<span>ĐH Mỹ thuật TP.HCM</span>
						<span>ĐH Kiến trúc TP.HCM</span>
						<span>ĐH Văn Lang</span>
					</div>
					<Testimonials />
				</div>
			</Band>

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead eyebrow="Thành tích" title="Học viên nhí ZikZak toả sáng" />
					<div className="zz-news">
						{achievements.map((item, i) => (
							<Reveal key={item.title} className="zz-news__item zz-glass" delay={i * 80}>
								<img src={item.image} alt="" loading="lazy" onError={(e) => { e.currentTarget.removeAttribute('src'); }} />
								<p>{item.title}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<Band color="var(--zz-green)">
				<div className="zz-container zz-song">
					<SectionHead
						align="left"
						eyebrow="Ca khúc chủ đề"
						title={<>Shine your way <span className="zz-scribble">Slay your mind</span></>}
						lead="Ca khúc của ZikZak với giai điệu hiện đại, trẻ trung và thông điệp “Toả sáng bản lĩnh – Làm chủ tư duy”: lời cam kết đồng hành trên con đường chinh phục đam mê, khám phá thế giới đầy màu sắc cùng các bạn học viên."
					/>
					<Reveal>
						<ThemeSong videoId={contact.themeSongYoutubeId} />
					</Reveal>
				</div>
			</Band>

			<section className="zz-section">
				<div className="zz-container zz-faq-wrap">
					<div>
						<SectionHead align="left" eyebrow="Phụ huynh hay hỏi" title="Câu hỏi thường gặp" lead="Chưa thấy câu trả lời? Gọi hoặc nhắn Zalo cho ZikZak nhé." />
						<MascotOrb src={mascots.craft} color={brandColors.yellow} size={180} float />
					</div>
					<Faq items={faqs} />
				</div>
			</section>

			<Band color="var(--zz-yellow)">
				<div className="zz-container zz-partner">
					<MascotOrb src={mascots.teacher} color={brandColors.cyan} size={170} />
					<div>
						<Eyebrow>Dành cho nhà trường</Eyebrow>
						<h2>Liên kết giảng dạy Mỹ thuật</h2>
						<p>ZikZak hợp tác giảng dạy môn Mỹ thuật tại các trường Mầm non, Tiểu học, THCS và THPT.</p>
					</div>
					<Link to="/hop-dong-lien-ket-giang-day" className="zz-btn zz-btn--primary">Tìm hiểu hợp tác <ArrowRight /></Link>
				</div>
			</Band>

			<section className="zz-section" id="dang-ky">
				<div className="zz-container">
					<ContactBlock />
				</div>
			</section>
		</SiteLayout>
	);
}
