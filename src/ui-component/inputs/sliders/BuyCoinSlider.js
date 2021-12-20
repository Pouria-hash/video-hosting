import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const marks = [
	{
		value: 10,
		label: '10'
	},
	{
		value: 1000,
		label: '1000'
	}
];

const PrettoSlider = styled(Slider)(({ theme }) => ({
	color: '#3880ff',
	height: 8,
	margin: 0,
	'& .MuiSlider-track': {
		border: 'none'
	},
	'& .MuiSlider-thumb': {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '4px solid currentColor',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit'
		},
		'&:before': {
			display: 'none'
		}
	},
	'& .MuiSlider-valueLabel': {
		fontSize: 12,
		fontWeight: 'bold',
		top: -4,
		backgroundColor: 'unset',
		color: theme.palette.secondary.main,
		'&:before': {
			display: 'none'
		},
		'& *': {
			background: 'transparent',
			color: theme.palette.secondary.main
		}
	},

	'& .MuiSlider-mark': {
		backgroundColor: 'transparent',
		fontSize: 22,
		height: 52,
		width: 20,
		'&.MuiSlider-markActive': {
			opacity: 1,
			backgroundColor: 'transparent'
		}
	}
}));

export default function BuyCoinSlider({ value, handleChange }) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
			<PrettoSlider
				valueLabelDisplay="on"
				max={1000}
				min={10}
				aria-label="pretto slider"
				defaultValue={350}
				value={value}
				onChange={handleChange}
				marks={marks}
			/>
			<TextField
				value={value}
				size="small"
				onChange={handleChange}
				inputProps={{
					step: 10,
					min: 10,
					max: 1000,
					type: 'number',
					'aria-labelledby': 'input-slider'
				}}
				sx={{
					'& .MuiOutlinedInput-input': {
						p: 0,
						textAlign: 'center'
					}
				}}
			/>
		</Box>
	);
}
