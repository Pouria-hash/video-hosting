import Box from '@mui/material/Box';

import Chart from 'react-apexcharts';

const chartData = {
	type: 'line',
	height: 150,
	width: '100%',

	options: {
		chart: {
			id: 'area-chart',
			fontFamily: 'IranSans, sans-serif',
			toolbar: {
				show: false
			}
		},
		fill: {
			type: 'solid'
		},

		colors: [ '#fff' ],

		dataLabels: {
			enabled: false
		},

		stroke: {
			curve: 'smooth',
			width: 2
		},

		grid: {
			show: false
		},

		yaxis: {
			labels: {
				show: false,
				formatter: function(value) {
					return value;
				},
				style: {
					fontSize: '13px',
					fontWeight: 400,
					cssClass: 'apexcharts-yaxis-label'
				}
			},
			axisBorder: {
				show: true,
				color: '#fff',

				width: 2,
				offsetX: 0,
				offsetY: 0
			}
		},

		xaxis: {
			type: 'category',
			tickAmount: undefined,
			tickPlacement: 'on',
			position: 'bottom',
			labels: {
				show: false,
				hideOverlappingLabels: false,
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
				color: '#fff',
				height: 2,
				width: '100%',
				offsetX: 0,
				offsetY: 0
			},

			crosshairs: {
				show: false
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
					formatter: (seriesName) => 'بازدید '
				}
			},

			marker: {
				show: false
			},
			items: {
				display: 'flex'
			}
		}
	}
};

export default function ViewSiteChart({ data }) {
	return (
		<Box sx={{ width: '100%' }}>
			<Chart {...chartData} series={[ { name: 'بازدیدها', data: data } ]} />
		</Box>
	);
}
