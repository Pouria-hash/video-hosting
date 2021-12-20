import * as React from 'react';
import PropTypes from 'prop-types';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 3,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		background: ' linear-gradient(270deg, #0E70D4 30%, #28CFE4 100%)'
	}
}));

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minWidth: '100%' }}>
				<Typography variant="caption" color="text.primary">
					{props.title}
				</Typography>
				<Typography variant="caption" color="text.primary" sx={{ textAlign: 'end' }}>{`${Math.round(
					props.value
				)} / ${props.maxValue}`}</Typography>
			</Stack>
			<Box sx={{ width: '100%', mb: 0.5 }}>
				<BorderLinearProgress variant="determinate" value={props.value * 100 / props.maxValue} />
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired
};

export default function DashboardLinerProgress({ value, maxValue, title }) {
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgressWithLabel value={value} maxValue={maxValue} title={title} />
		</Box>
	);
}
