import { Fragment, useRef } from 'react';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, A11y, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/templates/sliders/SwiperSlider.module.scss';

export default function SimilarItemsSlider({ items, navigation }) {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<Swiper
			modules={[ Navigation, A11y, FreeMode ]}
			spaceBetween={20}
			slidesPerView={4}
			navigation={{
				nextEl: navigationNextRef.current,
				prevEl: navigationPrevRef.current
			}}
			freeMode
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) =>
				// Delay execution for the refs to be defined
				setTimeout(() => {
					// Override prevEl & nextEl now that refs are defined
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.params.navigation.nextEl = navigationNextRef.current;

					// Re-init navigation
					swiper.navigation.destroy();
					swiper.navigation.init();
					swiper.navigation.update();
				})}
			breakpoints={{
				// when window width is >= 320px
				320: {
					slidesPerView: 3,
					spaceBetween: 5
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 3,
					spaceBetween: 8
				},
				// when window width is >= 640px
				769: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}}
			className={styles.swiperContainer}
		>
			{items.map((item) => (
				<SwiperSlide key={item.id} className={styles.swiperSlide}>
					slides{' '}
				</SwiperSlide>
			))}

			<div className={`${styles.sliderButton} ${styles.buttonPrev}`} ref={navigationPrevRef}>
				<FaAngleRight />
			</div>
			<div className={`${styles.sliderButton} ${styles.buttonNext}`} ref={navigationNextRef}>
				<FaAngleLeft />
			</div>
		</Swiper>
	);
}
