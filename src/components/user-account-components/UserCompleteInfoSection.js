import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserCompleteInfoSection = () => {
	const navigation = useNavigate();

	return (
		<Fragment>
			<Grid container alignItems="center">
				<Grid item xs={12} md={2}>
					<Typography
						variant="subtitle1"
						color="primary.main"
						sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 3 }}
					>
						تکمیل پروفایل
					</Typography>
				</Grid>
				<Grid item xs={12} md={9} sx={{ p: 2, mt: 1 }}>
					<Box
						sx={{
							display: { xs: 'block', md: 'flex' },
							justifyContent: 'space-between',
							alignItems: 'center',
							px: { xs: 3, md: 0 }
						}}
					>
						<Typography variant="body1" color="primary.main">
							با تکمیل این فرم شما میزان{' '}
							<Typography variant="span" color="success.main">
								50 سکه رایگان
							</Typography>{' '}
							دریافت خواهید کرد.
						</Typography>

						<Box sx={{ textAlign: 'end' }}>
							<Button
								variant="contained"
								color="secondary"
								sx={{ color: 'white.main' }}
								onClick={() => navigation('/dashboard/user')}
							>
								تکمیل فرم
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default UserCompleteInfoSection;
