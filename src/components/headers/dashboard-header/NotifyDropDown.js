import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import { BsEyeSlash, BsEye } from 'react-icons/bs';

const notifications = [
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.',
	'فایل ربات شما آماده است.'
];

const NotifyDropDown = ({ anchorNotifyDropDown, isNotifyMenuOpen, handleNotifyMenuClose }) => {
	const [ showNotifications, setShowNotifications ] = useState(false);

	const handleShowNotifications = () => {
		setShowNotifications((prev) => !prev);
	};
	return (
		<Menu
			anchorEl={anchorNotifyDropDown}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			id="settign-drop-down"
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={isNotifyMenuOpen}
			onClose={handleNotifyMenuClose}
		>
			<Box
				sx={{
					p: 2,
					bgcolor: 'white.main',
					minHeight: '250px',
					display: 'flex',
					flexDirection: 'column',
					zIndex: 2000,
					width: '300px'
				}}
			>
				{notifications.map((item, index) => (
					<Box key={index} mb={1}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Typography variant="body1">{item}</Typography>
							<IconButton color="primary" aria-label="show" onClick={handleShowNotifications}>
								{showNotifications ? <BsEye /> : <BsEyeSlash />}
							</IconButton>
						</Stack>
					</Box>
				))}
			</Box>
		</Menu>
	);
};

export default NotifyDropDown;
