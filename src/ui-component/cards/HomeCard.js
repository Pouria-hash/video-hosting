import React from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Box, Button, Stack, Typography } from '@mui/material';
import { FaPlay } from 'react-icons/fa';

import styles from 'styles/ui-component/cards/HomeCard.module.scss';

const HomeCard = ({ item, size }) => {
	const navigation = useNavigate();

	return (
		<motion.div
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.3 }
			}}
		>
			<Box
				sx={{
					position: 'relative'
				}}
				className={styles.card}
			>
				<Box
					className={styles.card_thumb}
					sx={{ height: size === 'small' ? 160 : size === 'medium' ? 210 : size === 'large' ? 320 : 160 }}
				>
					<Box
						component="img"
						src={item.image}
						alt={item.title}
						sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</Box>
				<Box className={styles.card_content}>
					<Box
						sx={{
							p: 2,
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							justifyContent: size === 'small' ? 'center' : 'flex-end'
						}}
					>
						<Typography variant="h6" component="h2" color="text.primary">
							{item.title}
						</Typography>
						<Stack direction="row" alignItems="center" spacing={2} mb={2}>
							<Box sx={{ bgcolor: 'grey.dark', px: 0.5 }}>
								<Typography variant="caption" color="text.primary">
									{item.age}
								</Typography>
							</Box>
							<Typography variant="body2" color="text.primary">
								{item.duration}
							</Typography>
						</Stack>
						<Box>
							<Button
								variant="contained"
								size="small"
								color="primary"
								onClick={() => navigation(`/movies/${item.title}`)}
							>
								<Box sx={{ display: 'flex', mr: 1 }}>
									<FaPlay />
								</Box>
								Play Now
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</motion.div>
	);
};

export default HomeCard;
