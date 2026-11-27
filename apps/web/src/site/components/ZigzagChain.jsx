import React, { useId, useLayoutEffect, useRef, useState } from 'react';

const COLORS = ['#176BE0', '#52E2FF', '#00E6AA', '#FFE500', '#FF8A1E', '#FF4F8B', '#A31FD1'];

/*
  Nối các bong bóng bên trong bằng một đường zikzak.
  Đánh dấu điểm nối bằng thuộc tính data-zz-node trên phần tử con;
  đường được đo lại tự động khi đổi kích thước màn hình, nên bố cục
  (ngang trên máy tính, so le dọc trên điện thoại) do CSS quyết định.
*/
export default function ZigzagChain({ as: Tag = 'div', className = '', children, ...rest }) {
	const ref = useRef(null);
	const gradientId = useId().replace(/:/g, '');
	const [geometry, setGeometry] = useState({ d: '', x1: 0, x2: 0, y1: 0, y2: 0 });

	useLayoutEffect(() => {
		const container = ref.current;

		if (!container) {
			return undefined;
		}

		let frame = 0;

		const measure = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const box = container.getBoundingClientRect();
				const points = [...container.querySelectorAll('[data-zz-node]')]
					.map((node) => {
						const rect = node.getBoundingClientRect();

						return rect.width
							? [rect.left - box.left + rect.width / 2, rect.top - box.top + rect.height / 2]
							: null;
					})
					.filter(Boolean);

				if (points.length < 2) {
					setGeometry((g) => (g.d ? { d: '', x1: 0, x2: 0, y1: 0, y2: 0 } : g));
					return;
				}

				const xs = points.map(([x]) => x);
				const ys = points.map(([, y]) => y);
				const d = points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

				setGeometry({ d, x1: Math.min(...xs), x2: Math.max(...xs), y1: Math.min(...ys), y2: Math.max(...ys) });
			});
		};

		measure();

		const observer = new ResizeObserver(measure);
		observer.observe(container);
		container.querySelectorAll('[data-zz-node]').forEach((node) => observer.observe(node));
		window.addEventListener('load', measure);
		// Hiệu ứng xuất hiện dịch chuyển các phần tử: đo lại khi chuyển động kết thúc.
		container.addEventListener('transitionend', measure);
		const lateMeasure = window.setTimeout(measure, 900);

		return () => {
			cancelAnimationFrame(frame);
			window.clearTimeout(lateMeasure);
			observer.disconnect();
			window.removeEventListener('load', measure);
			container.removeEventListener('transitionend', measure);
		};
	}, [children]);

	return (
		<Tag ref={ref} className={['zz-chain', className].filter(Boolean).join(' ')} {...rest}>
			{children}
			{/* Đặt sau các phần tử con để :nth-child trong CSS đếm đúng thứ tự. */}
			<svg className="zz-chain__svg" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient
						id={gradientId}
						gradientUnits="userSpaceOnUse"
						x1={geometry.x1}
						y1={geometry.y1}
						x2={geometry.x2 === geometry.x1 ? geometry.x1 + 1 : geometry.x2}
						y2={geometry.y2}
					>
						{COLORS.map((color, i) => (
							<stop key={color} offset={`${(i / (COLORS.length - 1)) * 100}%`} stopColor={color} />
						))}
					</linearGradient>
				</defs>
				{geometry.d ? (
					<>
						<path className="zz-chain__glow" d={geometry.d} />
						<path className="zz-chain__solid" d={geometry.d} stroke={`url(#${gradientId})`} />
						<path className="zz-chain__line" d={geometry.d} stroke={`url(#${gradientId})`} />
					</>
				) : null}
			</svg>
		</Tag>
	);
}
