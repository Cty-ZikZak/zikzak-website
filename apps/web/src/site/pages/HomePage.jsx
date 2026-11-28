import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead, { Eyebrow } from '../components/SectionHead.jsx';
import InfoTicker from '../components/InfoTicker.jsx';
import AnimatedLogo from '../components/AnimatedLogo.jsx';
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
import { nb } from '../lib/text.js';
import { achievements, brandColors, contact, faqs, mascots, programs } from '../data/site.js';

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
				<Reveal className="zz-hero2__copy">
					<h1 className="zz-h1">
						<span className="zz-h1__big">Ươm mầm</span>{' '}
						<span className="zz-h1__hand">
							<span className="zz-h1__hand-in">
								<span className="zz-h1__hand-text" data-text="sáng tạo">sáng tạo</span>
							</span>
						</span>{' '}
						<span className="zz-h1__sub">cho mọi lứa tuổi</span>
					</h1>
					<p className="zz-lead zz-hero2__lead">
						{nb('ZikZak là nơi ươm mầm và phát triển khả năng mỹ thuật cho học viên ở mọi lứa tuổi — nơi mọi giới hạn được khai phá và sự sáng tạo luôn được tôn vinh.')}
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

				<div className="zz-hero2__logo">
					<AnimatedLogo />
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
			<InfoTicker />

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
								<p>{nb(reason.text)}</p>
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
						<p>{nb('ZikZak hợp tác giảng dạy môn Mỹ thuật tại các trường Mầm non, Tiểu học, THCS và THPT.')}</p>
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
