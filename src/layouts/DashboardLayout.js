import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MetaTags from 'ui-component/MetaTags';

import Box from '@mui/material/Box';

import Header from 'components/headers/dashboard-header/Header';
import MenuDrawer from 'components/headers/dashboard-header/MenuDrawer';

import MobileAppBar from 'components/headers/dashboard-header/MobileAppBar';

const DashboardLayout = ({ title = 'داشبورد' }) => {
	return (
		<Fragment>
			<MetaTags title={title} />
			<Box sx={{ minWidth: '320px', minHeight: '100vh' }}>
				<Header />
				<MenuDrawer>
					<Outlet />
				</MenuDrawer>
				<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
					<MobileAppBar />
				</Box>
			</Box>
		</Fragment>
	);
};

export default DashboardLayout;
