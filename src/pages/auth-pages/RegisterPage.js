import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import RegisterCard from 'components/auth-components/register-components/RegisterCard';
import RegisterCardMobile from 'components/auth-components/register-components/RegisterCardMobile';
import Grid from '@mui/material/Grid';

import SideBaner from 'components/auth-components/SideBaner';

const RegisterPage = () => {
	return (
		<Fragment>
			<Grid container spacing={{ xs: 0, md: 2 }} justifyContent="space-between" alignItems="center">
				<Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<RegisterCard />
					</Box>
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
						<RegisterCardMobile />
					</Box>
				</Grid>
				<Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
					<SideBaner />
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default RegisterPage;
