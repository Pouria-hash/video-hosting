import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import UserInfoSection from './UserInfoSection';
import UserSecuritySection from './UserSecuritySection';
import UserCoinSection from './UserCoinSection';
import UserCompleteInfoSection from './UserCompleteInfoSection';

const UserAccountMain = () => {
	return (
		<Box>
			<Typography
				variant="subtitle1"
				color="primary.main"
				sx={{ borderLeft: '3px solid', borderColor: 'secondary.main', pl: 2 }}
			>
				حساب کاربری شما
			</Typography>
			<Box sx={{ my: 3 }}>
				<UserInfoSection />
			</Box>
			<Divider />
			<Box sx={{ my: 3 }}>
				<UserSecuritySection />
			</Box>
			<Divider />
			<Box sx={{ my: 3 }}>
				<UserCoinSection />
			</Box>
			<Divider />
			<Box sx={{ my: 3 }}>
				<UserCompleteInfoSection />
			</Box>
		</Box>
	);
};

export default UserAccountMain;
