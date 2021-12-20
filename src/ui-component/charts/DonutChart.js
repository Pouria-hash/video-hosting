import Box from '@mui/material/Box';

import Chart from 'react-apexcharts';

const chartData = {
	type: 'radialBar',
	width: '100%',

	series: [ 70 ],
	options: {
		chart: {
			id: 'donut-chart',
			fontFamily: 'IranSans, sans-serif',
			toolbar: {
				show: false
			}
		}
	}
};

export default function RadialBarChart({ data }) {
	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<Chart {...chartData} />
		</Box>
	);
}
