import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MarketLaunch from 'assets/images/MarketLaunch.png';

const UpgradeAccountBaner = () => {
	return (
		<Link to="/">
			<Paper
				variant="outlined"
				sx={{
					p: 2,
					position: 'relative',
					height: '200px',
					display: 'flex',
					flexDirection: 'column',
					'&:hover': {
						boxShadow: 5,
						cursor: 'pointer'
					}
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						display: 'flex',
						alignItema: 'center',
						justifyContent: 'center',
						top: -30,
						right: 25,
						marginTop: '-1rem'
					}}
				>
					<img src={MarketLaunch} alt="ارتقا حساب کاربری" />
				</Box>

				<Box sx={{ mt: 'auto', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
					<Typography variant="caption" color="primary.main">
						با 20٪ تخفیف همین امروز حساب خود را به سطح آلفا ارتقا و سئو سایت خود را بهبود ببخشید.
					</Typography>
					<Box>
						<Button variant="outlined" color="primary" sx={{ borderColor: 'secondary.main' }}>
							ارتقا حساب کاربری
						</Button>
					</Box>
				</Box>
			</Paper>
		</Link>
	);
};

export default UpgradeAccountBaner;
