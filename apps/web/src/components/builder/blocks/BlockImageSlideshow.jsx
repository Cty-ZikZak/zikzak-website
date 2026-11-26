import React, {
	useCallback,
	useEffect,
	useState,
} from 'react';

export default function BlockImageSlideshow({
	blockId,
	blockClassName = 'block block--slideshow',
	slides = [],
	isLoopEnabled = false,
	isAutoplayEnabled = false,
	autoplayInterval = 3,
	isNavigationDotsVisible = true,
	isNavigationArrowsVisible = true,
	style = {},
}) {
	const items = Array.isArray(slides) ? slides.filter((slide) => slide?.src) : [];
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const count = items.length;
	const safeIndex = count ? index % count : 0;

	const goTo = useCallback((nextIndex) => {
		if (!count) {
			return;
		}
		setIndex(((nextIndex % count) + count) % count);
	}, [count]);

	const goNext = useCallback(() => {
		if (!count) {
			return;
		}
		if (!isLoopEnabled && safeIndex >= count - 1) {
			return;
		}
		goTo(safeIndex + 1);
	}, [count, goTo, isLoopEnabled, safeIndex]);

	const goPrev = useCallback(() => {
		if (!count) {
			return;
		}
		if (!isLoopEnabled && safeIndex <= 0) {
			return;
		}
		goTo(safeIndex - 1);
	}, [count, goTo, isLoopEnabled, safeIndex]);

	useEffect(() => {
		if (!isAutoplayEnabled || count < 2 || paused) {
			return undefined;
		}

		const ms = Math.max(1, Number(autoplayInterval) || 3) * 1000;
		const timer = window.setInterval(() => {
			setIndex((current) => {
				if (!isLoopEnabled && current >= count - 1) {
					return current;
				}
				return (current + 1) % count;
			});
		}, ms);

		return () => {
			window.clearInterval(timer);
		};
	}, [autoplayInterval, count, isAutoplayEnabled, isLoopEnabled, paused]);

	if (!count) {
		return null;
	}

	const showPrev = isNavigationArrowsVisible && (isLoopEnabled || safeIndex > 0);
	const showNext = isNavigationArrowsVisible && (isLoopEnabled || safeIndex < count - 1);

	return (
		<section
			className={blockClassName}
			data-block-id={blockId}
		>
			<div
				className="slideshow"
				style={style}
				onMouseEnter={() => setPaused(true)}
				onMouseLeave={() => setPaused(false)}
			>
				{items.map((slide, slideIndex) => (
					<img
						key={`${slide.src}-${slideIndex}`}
						className={[
							'slideshow__slide',
							slideIndex === safeIndex ? 'slideshow__slide--current' : '',
						].filter(Boolean).join(' ')}
						src={slide.src}
						srcSet={slide.srcset || undefined}
						sizes={slide.srcset ? '100vw' : undefined}
						alt={slide.alt || ''}
						loading={slideIndex === 0 ? 'eager' : 'lazy'}
					/>
				))}
				{showPrev ? (
					<button
						type="button"
						className="slideshow__nav slideshow__nav--left"
						aria-label="Previous slide"
						onClick={goPrev}
					>
						<svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden="true">
							<path d="M1 25L13 13L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				) : null}
				{showNext ? (
					<button
						type="button"
						className="slideshow__nav slideshow__nav--right"
						aria-label="Next slide"
						onClick={goNext}
					>
						<svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden="true">
							<path d="M1 25L13 13L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				) : null}
				{isNavigationDotsVisible && count > 1 ? (
					<div className="slideshow__dots" role="tablist" aria-label="Slides">
						{items.map((slide, slideIndex) => (
							<button
								key={`dot-${slide.src}-${slideIndex}`}
								type="button"
								className={[
									'slideshow__dot',
									slideIndex === safeIndex ? 'slideshow__dot--current' : '',
								].filter(Boolean).join(' ')}
								aria-label={`Go to slide ${slideIndex + 1}`}
								aria-selected={slideIndex === safeIndex}
								onClick={() => goTo(slideIndex)}
							/>
						))}
					</div>
				) : null}
			</div>
		</section>
	);
}
