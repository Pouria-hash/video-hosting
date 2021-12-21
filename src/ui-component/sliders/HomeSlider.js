import { useRef } from 'react';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, A11y, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from 'styles/ui-component/sliders/SwiperSlider.module.scss';
import HomeCard from 'ui-component/cards/HomeCard';

export default function HomeSlider({ items, size }) {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<Swiper
			modules={[ Navigation, A11y, FreeMode ]}
			spaceBetween={20}
			slidesPerView={4}
			loop={true}
			navigation={{
				nextEl: navigationNextRef.current,
				prevEl: navigationPrevRef.current
			}}
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
					slidesPerView: 2,
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
					<HomeCard item={item} size={size} />
				</SwiperSlide>
			))}

			<div className={`${styles.sliderButton} ${styles.buttonNext}`} ref={navigationNextRef}>
				<FaAngleLeft />
			</div>
			<div className={`${styles.sliderButton} ${styles.buttonPrev}`} ref={navigationPrevRef}>
				<FaAngleRight />
			</div>
		</Swiper>
	);
}
