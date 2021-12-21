import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box } from '@mui/material';
import MetaTags from 'ui-component/MetaTags';
import LatestMovieSection from 'components/home-components/LatestMovieSection';
import UpcomingMoviesSection from 'components/home-components/UpcomingMoviesSection';

const HomePage = () => {
	return (
		<Box>
			<MetaTags title="Home Page" />
			<LatestMovieSection />
			<UpcomingMoviesSection />
			<h1>Home</h1>
			<Typography variant="h4" color="primary">
				Home Screen
			</Typography>
			<Link to="/auth/login">View Login Page</Link>
		</Box>
	);
};

export default HomePage;
