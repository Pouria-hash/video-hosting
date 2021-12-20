import Box from '@mui/material/Box';

import Chart from 'react-apexcharts';

const chartData = {
	type: 'line',
	height: '85%',
	width: '100%',

	options: {
		chart: {
			id: 'area-chart',
			fontFamily: 'IranSans, sans-serif',
			toolbar: {
				show: false
			},
			type: 'line',
			stacked: false
		},

		colors: [ '#10ABE2' ],

		dataLabels: {
			enabled: false
		},

		stroke: {
			curve: 'smooth',
			width: 2
		},
		markers: {
			size: 3,
			colors: [ '#063468' ],
			strokeColors: '#fff',
			strokeWidth: 2,
			strokeOpacity: 0.9,
			strokeDashArray: 0,
			fillOpacity: 1,
			shape: 'circle',
			radius: 2,
			showNullDataPoints: true
		},
		grid: {
			borderColor: 'rgba(0,0,0,0.2)',
			strokeDashArray: 5,
			show: true,
			position: 'front',
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			}
		},

		yaxis: {
			labels: {
				formatter: function(value) {
					return value;
				},
				style: {
					fontSize: '13px',
					fontWeight: 400,
					cssClass: 'apexcharts-yaxis-label'
				},
				show: true,
				align: 'center',
				minWidth: 0,
				maxWidth: 160,
				offsetX: 0,
				offsetY: 0,
				rotate: 0
			},
			axisBorder: {
				show: true,
				color: 'rgba(0,0,0,0.3)'
			}
		},

		xaxis: {
			type: 'category',
			tickAmount: undefined,
			tickPlacement: 'on',
			position: 'bottom',
			labels: {
				show: true,
				hideOverlappingLabels: true,
				showDuplicates: false,
				trim: true,
				style: {
					fontSize: '13px',
					fontFamily: 'IranSans',
					fontWeight: 400,
					cssClass: 'apexcharts-xaxis-label'
				},
				datetimeUTC: true,
				datetimeFormatter: {
					year: 'yyyy',
					month: "MMM 'yy",
					day: 'dd MMM',
					hour: 'HH:mm'
				}
			},
			axisBorder: {
				show: true,
				color: 'rgba(0,0,0,0.3)',
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: 0
			}
		},
		tooltip: {
			enabled: true,
			fillSeriesColor: true,
			style: {
				fontSize: '12px',
				fontFamily: 'IranSans'
			},
			onDatasetHover: {
				highlightDataSeries: true
			},
			x: {
				show: false,
				formatter: undefined
			},
			y: {
				formatter: undefined,
				title: {
					formatter: (seriesName) => ''
				}
			}
		}
	}
};

export default function LineChart({ data, title = 'نمودار پیشرفت' }) {
	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<Chart
				{...chartData}
				series={[
					{
						name: title,
						data: data
					}
				]}
			/>
		</Box>
	);
}
