import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserCoinSection = () => {
	const navigation = useNavigate();

	return (
		<Fragment>
			<Grid container alignItems="center">
				<Grid item xs={12} md={2}>
					<Typography
						variant="subtitle1"
						color="primary.main"
						sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2 }}
					>
						تعداد سکه ها
					</Typography>
				</Grid>
				<Grid item container alignItems="center" xs={12} md={9} sx={{ p: 2 }}>
					<Grid item xs={12} md={6}>
						<Stack direction="row" spacing={1} alignItems="center">
							<Typography variant="subtitle1" color="primary.main">
								تعداد سکه های فعلی شما:
							</Typography>
							<Box>
								<Typography
									component="span"
									variant="subtitle1"
									color="success.main"
									sx={{ fontSize: 18 }}
								>
									1500
								</Typography>
								<Typography component="span" color="primary.main" variant="subtitle1" sx={{ ml: 1 }}>
									سکه
								</Typography>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack
							direction="row"
							spacing={2}
							alignItems="center"
							justifyContent="space-between"
							sx={{ px: { xs: 3, md: 0 } }}
						>
							<Link to="/dashboard/buy_coins_history">
								<Typography
									variant="body1"
									color="secondary.main"
									sx={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}
								>
									تاریخچه خرید
								</Typography>
							</Link>

							<Button
								variant="contained"
								color="secondary"
								sx={{ color: 'white.main' }}
								onClick={() => navigation('/dashboard/buy_coins')}
							>
								خرید سکه
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default UserCoinSection;
