import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead, { Eyebrow } from '../components/SectionHead.jsx';
import ZigzagChain from '../components/ZigzagChain.jsx';
import Orb from '../components/Orb.jsx';
import Reveal from '../components/Reveal.jsx';
import ProgramChain from '../components/ProgramChain.jsx';
import ArtworkGrid from '../components/ArtworkGrid.jsx';
import { ContactBlock } from './RegisterPage.jsx';
import { useArtworks } from '../lib/artworks.js';
import { achievements, brandColors, programs } from '../data/site.js';

const HERO_NODES = [
	{ x: 16, y: 30, size: 'clamp(96px, 24vw, 176px)', color: brandColors.orange },
	{ x: 40, y: 72, size: 'clamp(84px, 20vw, 140px)', color: brandColors.cyan },
	{ x: 62, y: 26, size: 'clamp(104px, 26vw, 190px)', color: brandColors.blue },
	{ x: 85, y: 66, size: 'clamp(80px, 19vw, 132px)', color: brandColors.pink },
];

const REASONS = [
	{ title: 'Kích thích tưởng tượng', text: 'Bài vẽ theo chủ đề mới mỗi tuần — học viên được tự do kể câu chuyện của riêng mình.', color: brandColors.orange },
	{ title: 'Lớp nhỏ, kèm sát', text: '6 – 10 học viên mỗi lớp, chia theo độ tuổi. Giáo viên sửa bài cho từng người.', color: brandColors.blue },
	{ title: 'Nhiều chất liệu', text: 'Sáp màu, màu nước, poster, chì, thủ công, iPad… không bao giờ nhàm chán.', color: brandColors.mint },
	{ title: 'Thấy rõ tiến bộ', text: 'Lộ trình Starter → Junior → Master và báo cáo tiến độ định kỳ gửi phụ huynh.', color: brandColors.purple },
];

const parentPrograms = programs.filter((p) => p.audience !== 'students');
const studentPrograms = programs.filter((p) => p.audience !== 'parents');

function Hero({ artworks }) {
	return (
		<section className="zz-hero">
			<div className="zz-container zz-hero__grid">
				<Reveal>
					<Eyebrow>Shine your way · Slay your mind</Eyebrow>
					<h1 className="zz-hero__title">
						Ươm mầm <span className="zz-highlight">sáng tạo</span> cho <span className="zz-zig">mọi</span> lứa tuổi
					</h1>
					<p className="zz-lead">
						ZikZak là trường mỹ thuật dành cho bé từ 3 tuổi đến người lớn — nơi mọi giới hạn được khai phá
						và sự sáng tạo luôn được tôn vinh.
					</p>
					<div className="zz-actions">
						<Link to="/dang-ky" className="zz-btn zz-btn--primary">
							Đăng ký học thử miễn phí <ArrowRight />
						</Link>
						<Link to="/trien-lam" className="zz-btn">
							<Images /> Xem tranh học viên
						</Link>
					</div>
					<div className="zz-hero__chips">
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.orange }} />Từ 3 tuổi</span>
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.blue }} />Online & Offline</span>
						<span className="zz-chip zz-glass"><i style={{ '--c': brandColors.mint }} />Lớp 6 – 10 học viên</span>
					</div>
				</Reveal>

				<div className="zz-hero__art" aria-hidden="true">
					<ZigzagChain>
						{HERO_NODES.map((node, i) => (
							<span key={node.x} className="zz-hero__node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
								<Orb size={node.size} color={node.color} image={artworks[i]?.thumb} data-zz-node="" />
							</span>
						))}
					</ZigzagChain>
					<Orb className="zz-hero__node" float delay={0.6} size="clamp(34px, 7vw, 54px)" color={brandColors.yellow} style={{ position: 'absolute', left: '36%', top: '14%' }} />
					<Orb className="zz-hero__node" float delay={1.4} size="clamp(26px, 5vw, 40px)" color={brandColors.mint} style={{ position: 'absolute', left: '90%', top: '22%' }} />
					<Orb className="zz-hero__node" float delay={2.2} size="clamp(22px, 4vw, 32px)" color={brandColors.purple} style={{ position: 'absolute', left: '10%', top: '78%' }} />
					<div className="zz-hero__badge zz-glass" style={{ left: '0', bottom: '0' }}>
						<strong>3 – 99</strong>tuổi đều học được
					</div>
					<div className="zz-hero__badge zz-glass" style={{ right: '0', top: '0' }}>
						<strong>6</strong>chương trình học
					</div>
				</div>
			</div>
		</section>
	);
}

function Paths() {
	return (
		<section className="zz-section zz-section--tight">
			<div className="zz-container zz-paths">
				<Reveal className="zz-path zz-glass zz-glass--tint" style={{ '--c': brandColors.orange }}>
					<span className="zz-path__orbs" aria-hidden="true">
						<Orb size={110} color={brandColors.orange} />
						<Orb size={70} color={brandColors.yellow} />
					</span>
					<Eyebrow>Dành cho phụ huynh</Eyebrow>
					<h3>Con được vẽ, được kể chuyện, được tự tin</h3>
					<p>Lớp nhóm nhỏ chia theo tuổi, giáo viên đồng hành sát sao và gửi báo cáo tiến độ cho cha mẹ.</p>
					<ul>
						{parentPrograms.map((p) => <li key={p.id} style={{ '--c': p.color }}>{p.name} · {p.age}</li>)}
					</ul>
					<div className="zz-actions">
						<Link to="/khoa-hoc/my-thuat-thieu-nhi-offline" className="zz-btn zz-btn--sun">Lớp mỹ thuật thiếu nhi</Link>
					</div>
				</Reveal>

				<Reveal className="zz-path zz-glass zz-glass--tint" delay={120} style={{ '--c': brandColors.blue }}>
					<span className="zz-path__orbs" aria-hidden="true">
						<Orb size={110} color={brandColors.blue} />
						<Orb size={70} color={brandColors.cyan} />
					</span>
					<Eyebrow>Dành cho học viên</Eyebrow>
					<h3>Nâng tay nghề, luyện thi, làm nghề sáng tạo</h3>
					<p>Từ hình hoạ nền tảng đến thiết kế đồ hoạ và vẽ kỹ thuật số — học bài bản, làm được sản phẩm thật.</p>
					<ul>
						{studentPrograms.map((p) => <li key={p.id} style={{ '--c': p.color }}>{p.name} · {p.age}</li>)}
					</ul>
					<div className="zz-actions">
						<Link to="/dang-ky" className="zz-btn zz-btn--primary">Tư vấn lộ trình</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

export default function HomePage() {
	const { items } = useArtworks();
	const featured = items.filter((art) => art.featured);
	const preview = (featured.length >= 8 ? featured : items).slice(0, 8);

	return (
		<SiteLayout description="ZikZak — trường mỹ thuật các lứa tuổi tại Quận 7, TP.HCM: mỹ thuật thiếu nhi, chuyên sâu, luyện thi đại học, thiết kế đồ hoạ, vẽ kỹ thuật số và workshop.">
			<Hero artworks={preview} />
			<Paths />

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead
						eyebrow="Chương trình học"
						title={<>Sáu con đường, một <span className="zz-highlight">hành trình zikzak</span></>}
						lead="Mỗi chương trình là một bong bóng màu — chọn điểm bắt đầu phù hợp với độ tuổi và mục tiêu."
					/>
					<ProgramChain items={programs} />
				</div>
			</section>

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead
						eyebrow="Triển lãm"
						title="Tranh của học viên ZikZak"
						lead="Cập nhật sau mỗi buổi học — phụ huynh có thể theo dõi hành trình sáng tạo của con tại đây."
					/>
					{preview.length ? <ArtworkGrid items={preview} /> : null}
					<div className="zz-center zz-mt">
						<Link to="/trien-lam" className="zz-btn zz-btn--primary">Xem toàn bộ triển lãm <ArrowRight /></Link>
					</div>
				</div>
			</section>

			<section className="zz-section">
				<div className="zz-container">
					<SectionHead eyebrow="Vì sao chọn ZikZak" title="Giáo dục sáng tạo, kiến thức thực chất" />
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

			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<SectionHead eyebrow="Thành tích" title="Học viên ZikZak toả sáng" />
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

			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<Reveal className="zz-banner zz-glass zz-glass--tint" style={{ '--c': brandColors.cyan }}>
						<div>
							<Eyebrow>Dành cho nhà trường</Eyebrow>
							<h2>Liên kết giảng dạy Mỹ thuật</h2>
							<p>ZikZak cung cấp giáo viên và chương trình Mỹ thuật cho các trường Mầm non, Tiểu học, THCS và THPT.</p>
						</div>
						<Link to="/hop-dong-lien-ket-giang-day" className="zz-btn zz-btn--primary">Tìm hiểu hợp tác <ArrowRight /></Link>
						<span className="zz-banner__orbs" aria-hidden="true">
							<Orb size={180} color={brandColors.cyan} />
						</span>
					</Reveal>
				</div>
			</section>

			<section className="zz-section" id="dang-ky">
				<div className="zz-container">
					<ContactBlock />
				</div>
			</section>
		</SiteLayout>
	);
}
