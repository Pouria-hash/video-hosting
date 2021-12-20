import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DashboardPageHeader from './DashboardPageHeader';
import DashboardTable from 'ui-component/tables/DashboaedTable';

const DashboardContent = () => {
	return (
		<Box>
			<DashboardPageHeader />
			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							10 واژه بحرانی
						</Typography>
						<DashboardTable position="جایگاه" />
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							10 واژه صفحه نخست گوگل
						</Typography>
						<DashboardTable position="جایگاه" />
					</Box>
				</Grid>
			</Grid>
			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, height: '100%', borderRadius: '5px', bgcolor: 'white.main' }}>
						<Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
							<Typography
								variant="h6"
								color="primary.main"
								sx={{ px: 3, borderLeft: '3px solid', borderColor: 'secondary.main' }}
							>
								نمودار پیشرفت
							</Typography>
						</Stack>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							کلمات کلیدی
						</Typography>

						<DashboardTable position="جایگاه" />
					</Box>
				</Grid>
			</Grid>
			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, height: '100%', borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							وضعیت عملکرد
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							پرسرعت ترین صفحات
						</Typography>

						<DashboardTable position="عملکرد اجرایی" title="صفحه" />
					</Box>
				</Grid>
			</Grid>

			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, height: '100%', borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							آمار بازدید
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							پربازدید ترین صفحات
						</Typography>

						<DashboardTable position="تعداد بازدید" title="صفحه" />
					</Box>
				</Grid>
			</Grid>
			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, height: '100%', borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							آمار فروش
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							پردرآمد ترین صفحات
						</Typography>

						<DashboardTable position="تعداد سفارش" title="صفحه" />
					</Box>
				</Grid>
			</Grid>
			<Grid container columnSpacing={0} rowSpacing={2} my={2}>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							مهم ترین صفحات
						</Typography>
						<DashboardTable title="صفحه" position="تعداد بک لینک" />
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ py: 1, borderRadius: '5px', bgcolor: 'white.main' }}>
						<Typography
							variant="h6"
							color="primary.main"
							sx={{ px: 3, mb: 2, borderLeft: '3px solid', borderColor: 'secondary.main' }}
						>
							صفحات یتیم
						</Typography>

						<DashboardTable title="صفحه" />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashboardContent;
