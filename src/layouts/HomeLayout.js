import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MetaTags from 'ui-component/MetaTags';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from 'components/hero-components/Hero';

import Header from 'components/headers/home-header/Header';

const AuthLayout = ({ title = 'Home' }) => {
	return (
		<Fragment>
			<MetaTags title={title} />
			<Box sx={{ minHeight: '100vh', minWidth: '364px', display: 'flex', flexDirection: 'column' }}>
				<Header />
				<Hero />
				<Container maxWidth="lg" sx={{ my: 'auto' }}>
					<Outlet />
				</Container>
			</Box>
		</Fragment>
	);
};

export default AuthLayout;
