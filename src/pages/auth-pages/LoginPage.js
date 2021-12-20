import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import LoginCard from 'components/auth-components/login-components/LoginCard';
import LoginCardMobile from 'components/auth-components/login-components/LoginCardMobile';
import Grid from '@mui/material/Grid';

import SideBaner from 'components/auth-components/SideBaner';

const LoginPage = () => {
	return (
		<Fragment>
			<Grid container spacing={{ xs: 0, md: 4 }} justifyContent="space-between" alignItems="center">
				<Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<LoginCard />
					</Box>
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
						<LoginCardMobile />
					</Box>
				</Grid>
				<Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
					<SideBaner />
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default LoginPage;
