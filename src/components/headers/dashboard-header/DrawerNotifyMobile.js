import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { BsEyeSlash, BsEye } from 'react-icons/bs';

const notifications = [
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.'
];

const DrawerNotifyMobile = () => {
	const [ showNotifications, setShowNotifications ] = useState(false);

	const handleShowNotifications = () => {
		setShowNotifications((prev) => !prev);
	};
	return (
		<Box
			sx={{
				p: 2,
				height: '70vh',
				bgcolor: 'white.main',
				boxShadow: '0 -5px 10px 1px rgba(0,0,0,0.1)',
				borderRadius: '20px 20px 0 0px',
				display: 'flex',
				flexDirection: 'column',
				zIndex: 2000
			}}
		>
			{notifications.map((item, index) => (
				<Box key={index} mb={2}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="body1">{item}</Typography>
						<IconButton color="primary" aria-label="show" onClick={handleShowNotifications}>
							{showNotifications ? <BsEye /> : <BsEyeSlash />}
						</IconButton>
					</Stack>
				</Box>
			))}
		</Box>
	);
};

export default DrawerNotifyMobile;
