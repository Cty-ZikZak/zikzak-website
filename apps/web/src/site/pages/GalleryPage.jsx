import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../components/SiteLayout.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ArtworkGrid from '../components/ArtworkGrid.jsx';
import { useArtworks } from '../lib/artworks.js';
import { programs } from '../data/site.js';

export default function GalleryPage() {
	const { items, source } = useArtworks();
	const [filter, setFilter] = useState('all');

	const available = useMemo(
		() => programs.filter((p) => items.some((art) => art.program === p.id)),
		[items],
	);
	const visible = filter === 'all' ? items : items.filter((art) => art.program === filter);

	return (
		<SiteLayout
			title="Tranh của học viên"
			description="Triển lãm tranh của học viên ZikZak — mỹ thuật thiếu nhi, chuyên sâu, luyện thi, đồ hoạ và vẽ kỹ thuật số."
		>
			<section className="zz-section zz-section--tight">
				<div className="zz-container">
					<SectionHead
						as="h1"
						eyebrow="Triển lãm"
						title={<>Mỗi bức tranh là một <span className="zz-highlight">câu chuyện</span></>}
						lead="Tác phẩm của học viên ZikZak qua từng buổi học — được cập nhật thường xuyên sau mỗi lớp."
					/>

					{available.length ? (
						<div className="zz-filters" role="group" aria-label="Lọc theo chương trình">
							<button type="button" className="zz-filter zz-glass" style={{ '--c': 'var(--zz-blue)' }} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
								<i aria-hidden="true" /> Tất cả
							</button>
							{available.map((program) => (
								<button
									key={program.id}
									type="button"
									className="zz-filter zz-glass"
									style={{ '--c': program.color }}
									aria-pressed={filter === program.id}
									onClick={() => setFilter(program.id)}
								>
									<i aria-hidden="true" /> {program.short}
								</button>
							))}
						</div>
					) : null}

					{source === 'loading' ? (
						<p className="zz-center zz-lead">Đang tải tranh…</p>
					) : (
						<ArtworkGrid key={filter} items={visible} />
					)}

					<div className="zz-center zz-mt">
						<Link to="/dang-ky" className="zz-btn zz-btn--sun">Cho con học thử một buổi</Link>
					</div>
				</div>
			</section>
		</SiteLayout>
	);
}
