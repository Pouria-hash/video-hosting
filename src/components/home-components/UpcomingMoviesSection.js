import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';
import HomeSlider from 'ui-component/sliders/HomeSlider';

const items = [
	{
		id: 'adcasdaxz2',

		title: 'Dark Knight Rises',
		image:
			'https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		duration: '2h 30m',
		age: '+6'
	},
	{
		id: 'adcxsadvz2',

		title: 'Dark Knight Rises',
		image:
			'https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		duration: '2h 30m',
		age: '+6'
	},
	{
		id: 'adcdaxz2',

		title: 'Dark Knight Rises',
		image:
			'https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		duration: '2h 30m',
		age: '+6'
	},
	{
		id: 'adcxz2',
		title: 'Dark Knight Rises',
		image:
			'https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		duration: '2h 30m',
		age: '+6'
	},
	{
		id: 'asdsad',
		title: 'Dark Knight Rises',
		image:
			'https://images.unsplash.com/photo-1639972584775-e23e861f1595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		duration: '2h 30m',
		age: '+6'
	}
];

const UpcomingMoviesSection = () => {
	return (
		<Box sx={{ my: 6 }} component="section">
			<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
				<Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
					Upcoming Movies
				</Typography>
				<Link to="/upcoming_movies">
					<Typography variant="subtitle1" color="text.secondary">
						View All
					</Typography>
				</Link>
			</Stack>
			<Box my={3}>
				<HomeSlider items={items} size="small" />
			</Box>
		</Box>
	);
};

export default UpcomingMoviesSection;
