import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Users } from 'lucide-react';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ZigzagChain from '../components/ZigzagChain.jsx';
import Orb from '../components/Orb.jsx';
import Reveal from '../components/Reveal.jsx';
import ArtworkGrid from '../components/ArtworkGrid.jsx';
import { ContactBlock } from './RegisterPage.jsx';
import { useArtworks } from '../lib/artworks.js';
import { courseBySlug } from '../data/courses.js';
import { brandColors, programById } from '../data/site.js';

const FACT_ICONS = [Users, CalendarDays, Clock];
const FACT_COLORS = [brandColors.yellow, brandColors.blue, brandColors.green];
const LEVEL_COLORS = [brandColors.yellow, brandColors.cyan, brandColors.indigo];
const BENEFIT_COLORS = [brandColors.yellow, brandColors.cyan, brandColors.cyan, brandColors.green];

const INTEREST_BY_PROGRAM = {
	'thieu-nhi': 'Mỹ thuật thiếu nhi',
	'chuyen-sau': 'Mỹ thuật chuyên sâu',
	'luyen-thi': 'Luyện thi đại học',
	'do-hoa': 'Thiết kế đồ hoạ',
	'ky-thuat-so': 'Vẽ kỹ thuật số',
	workshop: 'Workshop',
};

export default function CoursePage() {
	const { slug } = useParams();
	const course = courseBySlug[slug];
	const { items } = useArtworks();

	if (!course) {
		return <Navigate to="/" replace />;
	}

	const program = programById[course.program];
	const color = program?.color || brandColors.blue;
	const related = course.related ? courseBySlug[course.related] : null;
	const programArt = items.filter((art) => art.program === course.program);
	const gallery = (programArt.length >= 4 ? programArt : items).slice(0, 8);

	return (
		<SiteLayout title={`${course.title} — ${course.badge}`} description={course.lead}>
			<section className="zz-course-hero">
				<div className="zz-container">
					<Reveal className="zz-course-hero__inner zz-glass zz-glass--tint" style={{ '--c': color }}>
						<div>
							<span className="zz-badge">{course.badge}</span>
							<h1>{course.title}</h1>
							<p className="zz-lead">{course.lead}</p>
							<div className="zz-actions zz-mt">
								<Link to={`/dang-ky?khoa=${encodeURIComponent(INTEREST_BY_PROGRAM[course.program] || '')}`} className="zz-btn zz-btn--primary">
									Đăng ký ngay <ArrowRight />
								</Link>
								{related ? (
									<Link to={`/khoa-hoc/${related.slug}`} className="zz-btn">Xem {related.badge.toLowerCase()}</Link>
								) : null}
							</div>
						</div>
						<ZigzagChain className="zz-facts">
							{course.facts.map((fact, i) => {
								const Icon = FACT_ICONS[i % FACT_ICONS.length];

								return (
									<div key={fact.label} className="zz-fact zz-glass">
										<Orb color={FACT_COLORS[i % FACT_COLORS.length]} data-zz-node="">
											<Icon color="#fff" size={20} />
										</Orb>
										<span><small>{fact.label}</small><strong>{fact.value}</strong></span>
									</div>
								);
							})}
						</ZigzagChain>
					</Reveal>
				</div>
			</section>

			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<SectionHead eyebrow="Lợi ích" title="Học tại ZikZak, bé nhận được gì?" />
					<div className="zz-features">
						{course.benefits.map((benefit, i) => (
							<Reveal key={benefit.title} className="zz-feature zz-glass" delay={i * 80}>
								<Orb color={BENEFIT_COLORS[i % BENEFIT_COLORS.length]} label={String(i + 1)} />
								<h3>{benefit.title}</h3>
								<p>{benefit.text}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="zz-section zz-section--tight">
				<div className="zz-container zz-split">
					<Reveal className="zz-list-card zz-glass" style={{ '--c': color }}>
						<h3>Nội dung học</h3>
						<ul className="zz-checklist">
							{course.curriculum.map((line) => <li key={line}>{line}</li>)}
						</ul>
					</Reveal>
					{course.format ? (
						<Reveal className="zz-list-card zz-glass" delay={120} style={{ '--c': brandColors.cyan }}>
							<h3>Hình thức học</h3>
							<ul className="zz-checklist">
								{course.format.map((line) => <li key={line}>{line}</li>)}
							</ul>
						</Reveal>
					) : (
						<Reveal className="zz-list-card zz-glass" delay={120} style={{ '--c': brandColors.cyan }}>
							<h3>Thông tin lớp</h3>
							<ul className="zz-checklist">
								{course.facts.map((fact) => <li key={fact.label}><span><strong>{fact.label}:</strong> {fact.value}</span></li>)}
							</ul>
						</Reveal>
					)}
				</div>
			</section>

			{course.levels?.length ? (
				<section className="zz-section">
					<div className="zz-container">
						<SectionHead
							eyebrow="Lộ trình"
							title="Hành trình phát triển sáng tạo"
							lead="Chương trình chia thành 3 cấp độ, bài học cập nhật hằng tuần để bé luôn hứng thú và tiến bộ."
						/>
						<ZigzagChain className="zz-levels">
							{course.levels.map((level, i) => (
								<Reveal key={level.name} className="zz-level" delay={i * 100}>
									<Orb size={120} color={LEVEL_COLORS[i % LEVEL_COLORS.length]} label={level.name} data-zz-node="" />
									<div className="zz-level__card zz-glass">
										<h3>{level.title}</h3>
										<p>{level.text}</p>
									</div>
								</Reveal>
							))}
						</ZigzagChain>
					</div>
				</section>
			) : null}

			{course.pricing?.length ? (
				<section className="zz-section zz-section--tight">
					<div className="zz-container">
						<SectionHead eyebrow="Học phí" title="Chọn lịch học phù hợp" lead={course.pricingNote} />
						<div className="zz-pricing">
							{course.pricing.map((plan, i) => (
								<Reveal key={plan.name} className={['zz-price zz-glass', plan.highlight ? 'zz-price--highlight' : ''].join(' ')} delay={i * 80}>
									{plan.highlight ? <span className="zz-price__flag">Phổ biến nhất</span> : null}
									<span className="zz-price__name">{plan.name}</span>
									<span className="zz-price__value">{plan.price} <small>{plan.unit}</small></span>
									<p>{plan.note}</p>
								</Reveal>
							))}
						</div>
					</div>
				</section>
			) : null}

			{gallery.length ? (
				<section className="zz-section">
					<div className="zz-container">
						<SectionHead eyebrow="Tác phẩm" title="Tranh của học viên" />
						<ArtworkGrid items={gallery} />
						<div className="zz-center zz-mt">
							<Link to="/trien-lam" className="zz-btn">Xem thêm tranh <ArrowRight /></Link>
						</div>
					</div>
				</section>
			) : null}

			<section className="zz-section">
				<div className="zz-container">
					<ContactBlock defaultInterest={INTEREST_BY_PROGRAM[course.program] || ''} />
				</div>
			</section>
		</SiteLayout>
	);
}
