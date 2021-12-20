import { Box } from '@mui/material';
import React from 'react';
import HeroSlider from 'ui-component/sliders/HeroSlider';

const items = [
	{
		id: 'sadad2',
		title: 'Dark Knight',
		subtitle: 'Batman Dark Knight',
		image:
			'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
	},

	{
		id: 'daad23d',
		title: 'Wall-E',
		subtitle: 'A space oddesay',
		image:
			'https://images.unsplash.com/photo-1508175800969-525c72a047dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80'
	}
];

const Hero = () => {
	return (
		<Box sx={{ height: '70vh' }}>
			<HeroSlider items={items} />
		</Box>
	);
};

export default Hero;
