import React from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import PrimaryButton from 'ui-component/Buttons/PrimaryButton';

import Verify from 'assets/icons/Verify.png';

const VerifyAccountPage = () => {
	const navigate = useNavigate();

	return (
		<Box>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item xs={12} sm={8} md={6}>
					<Typography variant="body1" color="text.primary" sx={{ textAlign: 'justify' }}>
						خیلی خوش حالیم که به جامعه زانکو اضافه شدین. برای شروع استفاده از امکانات ترکر، ایمیل تون رو چک
						کرده و روی لینک تایید ثبت نام کلیک کنید. اگر هم دیدید ایمیلیاز طرف ما نیومده، مجدد درخواست بدین.
						(کامپیوتر ها ممکنه اشتباه کرده باشن.)
					</Typography>

					<Grid item xs={12} container spacing={2} mt={5}>
						<Grid item xs={12}>
							<Stack
								direction={{ xs: 'column', sm: 'row' }}
								spacing={3}
								alignItems="center"
								justifyContent="space-between"
							>
								<PrimaryButton onClick={() => navigate('/auth/register')}>
									ارسال مجدد ایمیل
								</PrimaryButton>

								<Typography
									variant="body2"
									color="primary.main"
									sx={{ textDecoration: 'underline', textUnderlineOffset: '5px' }}
								>
									خروج از حساب کاربری
								</Typography>
							</Stack>
						</Grid>
					</Grid>

					<Grid item xs={12} sx={{ mt: 15 }}>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<img src={Verify} alt="verify" />
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default VerifyAccountPage;
