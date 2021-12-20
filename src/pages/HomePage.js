import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box } from '@mui/material';
import MetaTags from 'ui-component/MetaTags';

const HomePage = () => {
	return (
		<Box>
			<MetaTags title="Home Page" />
			<h1>Home</h1>
			<Typography variant="h5" color="primary">
				Home Screen
			</Typography>
			<Link to="/auth/login">View Login Page</Link>
		</Box>
	);
};

export default HomePage;
