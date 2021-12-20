import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MetaTags from 'ui-component/MetaTags';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from 'components/headers/auth-header/Header';

const AuthLayout = ({ title = 'ورود' }) => {
	return (
		<Fragment>
			<MetaTags title={title} />
			<Box sx={{ minHeight: '100vh', minWidth: '364px', display: 'flex', flexDirection: 'column' }}>
				<Header />
				<Container maxWidth="lg" sx={{ my: 'auto' }}>
					<Outlet />
				</Container>
			</Box>
		</Fragment>
	);
};

export default AuthLayout;
