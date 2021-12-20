import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AuthCardMobileHeader = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = location.pathname.split('/')[2];

	const handleRouter = (route) => {
		navigate(`/auth/${route}`);
	};
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="center"
			sx={{ borderBottom: '1px solid', borderColor: 'secondary.main' }}
		>
			<Grid item xs={6}>
				<Box
					sx={{
						height: '100%',
						width: '100%',
						display: 'flex',
						py: 1,
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						position: 'relative',

						background:
							pathname === 'login'
								? 'linear-gradient(270deg, rgba(14, 112, 212, 0.3) 50%, rgba(40, 207, 228, 0.3) 100%)'
								: '#fff',
						'&:after': {
							content: '" "',
							height: '70%', //You can change this if you want smaller/bigger borders
							width: '1px',
							position: 'absolute',
							right: '0',
							top: '20%', // If you want to set a smaller height and center it, change this value
							backgroundColor: 'primary.main' // The color of your border
						}
					}}
					onClick={() => handleRouter('login')}
				>
					<Typography variant="subtitle1" color="primary.main">
						ورود
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={6}>
				<Box
					sx={{
						height: '100%',
						width: '100%',
						display: 'flex',
						py: 1,
						cursor: 'pointer',
						alignItems: 'center',
						justifyContent: 'center',
						background:
							pathname === 'register'
								? 'linear-gradient(270deg, rgba(14, 112, 212, 0.3) 50%, rgba(40, 207, 228, 0.3) 100%)'
								: '#fff'
					}}
					onClick={() => handleRouter('register')}
				>
					<Typography variant="subtitle1" color="primary.main">
						ثبت نام
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default AuthCardMobileHeader;
