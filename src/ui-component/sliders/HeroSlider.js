import React, { useRef, Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from 'styles/ui-component/sliders/HeroSlider.module.scss';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { FaAngleRight, FaAngleLeft, FaPlay } from 'react-icons/fa';

// install Swiper modules
SwiperCore.use([ Autoplay, Pagination, Navigation ]);

export default function HeroSlider({ items }) {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<Fragment>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={{
					nextEl: navigationNextRef.current,
					prevEl: navigationPrevRef.current
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
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
				className={styles.swiper}
			>
				{items.map((item, index) => (
					<SwiperSlide key={item.id} className={styles.swiperSlide}>
						<Box
							sx={{
								height: '100%',
								width: '100%',
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
								background: `linear-gradient( to left , #00000069 , #000000b0) , url(${item.image})`
							}}
							className={styles.item}
						>
							<Grid
								container
								justifyContent="space-evenly"
								alignItems="center"
								sx={{ height: '100%', p: 4 }}
							>
								<Grid item xs={12} md={5}>
									<Box sx={{ textAlign: 'start' }}>
										<Typography
											variant="h2"
											color="whiteText.main"
											mb={1}
											sx={{
												fontWeight: 'bold',
												fontFamily: 'Helvetica',
												textTransform: 'uppercase'
											}}
										>
											{item.title}
										</Typography>
										<Typography variant="h6" color="whiteText.light" mb={2}>
											{item.subtitle}
										</Typography>
										<Button variant="contained" color="primary" size="large">
											<Box component="span" sx={{ mr: 1, display: 'flex' }}>
												<FaPlay />
											</Box>{' '}
											Watch Now
										</Button>
									</Box>
								</Grid>
								<Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
									<Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
										<Box
											component="img"
											src={item.image}
											alt={item.title}
											sx={{
												maxWidth: '100%',
												height: '100%',
												borderRadius: '10px',
												objectFit: 'cover'
											}}
										/>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
				))}
				<Box className={`${styles.button} ${styles.buttonPrev}`} ref={navigationPrevRef}>
					<FaAngleRight />
				</Box>

				<Box className={`${styles.button} ${styles.buttonNext}`} ref={navigationNextRef}>
					<FaAngleLeft />
				</Box>
			</Swiper>
		</Fragment>
	);
}
