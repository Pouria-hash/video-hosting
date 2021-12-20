import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import site from 'assets/icons/site.png';
import letters from 'assets/icons/letters.png';
import downChart from 'assets/icons/downChart.png';
import upChart from 'assets/icons/upChart.png';

import DashboardNotifyCard from 'ui-component/cards/DashboardNotifyCard';

const DashboardPageHeader = () => {
	return (
		<Box>
			<Grid container spacing={3} alignItems="center" justifyContent="space-between">
				<Grid item xs={6} lg={3}>
					<DashboardNotifyCard
						icon={site}
						title="تعداد سایت ها:"
						number={2}
						bgcolor="linear-gradient(180deg, #FFB13C 50%, #F9D45F 100%)"
					/>
				</Grid>
				<Grid item xs={6} lg={3}>
					<DashboardNotifyCard
						icon={letters}
						title="تعداد واژه ها:"
						number={2}
						bgcolor="linear-gradient(180deg, #4B51FE 50%, #7B50FE 100%)"
					/>
				</Grid>
				<Grid item xs={6} lg={3}>
					<DashboardNotifyCard
						icon={upChart}
						title="تعداد واژه ها با رشد مثبت:"
						number={5}
						bgcolor="linear-gradient(180deg, #32CE75 50%, #55CCBB 100%)"
					/>
				</Grid>
				<Grid item xs={6} lg={3}>
					<DashboardNotifyCard
						icon={downChart}
						title="تعداد واژه ها با رشد منفی:"
						number={2}
						bgcolor="linear-gradient(180deg, #F46773 50%, #FCA090 100%)"
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashboardPageHeader;
