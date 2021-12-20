import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

import { IoExitOutline } from 'react-icons/io5';

import settingMenu from 'menu-items/settingMenu';

const DrawerListItemButton = styled(ListItemButton)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '10px',
	overflow: 'hidden',
	textAlign: 'center',
	fontSize: '22px',
	color: theme.palette.primary.main,
	padding: '11px 0px',
	'&.Mui-selected': {
		backgroundColor: 'transparent',
		color: theme.palette.secondary.main
	},
	'&.Mui-selected:hover': {
		backgroundColor: 'transparent',
		color: theme.palette.secondary.main
	},
	'&:hover': {
		backgroundColor: 'transparent',
		color: theme.palette.secondary.main
	}
}));

const SettingDropDown = ({ anchorSettingDropDown, isSettingMenuOpen, handleSettingMenuClose }) => {
	const location = useLocation();

	return (
		<Menu
			anchorEl={anchorSettingDropDown}
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
			open={isSettingMenuOpen}
			onClose={handleSettingMenuClose}
		>
			<Box
				sx={{
					py: 1,
					pr: 4,
					pl: 1,
					minHeight: 380,
					bgcolor: 'white.main',
					display: 'flex',
					flexDirection: 'column'
				}}
				onClick={handleSettingMenuClose}
			>
				{settingMenu.map((item, index) => (
					<Box key={item.title} sx={{}}>
						<DrawerListItemButton
							color="primary"
							selected={location.pathname === item.pathname ? true : false}
							aria-label={item.title}
							sx={{ p: 1.5, justifyContent: 'flex-start' }}
						>
							<Stack direction="row" justifyContent="flex-start" alignItems="">
								{item.icon}
								<Typography variant="body1" sx={{ ml: 2 }}>
									{item.title}
								</Typography>
							</Stack>
						</DrawerListItemButton>
					</Box>
				))}

				<Box sx={{ mt: 'auto' }}>
					<DrawerListItemButton
						color="primary"
						aria-label="log-out"
						sx={{ py: 1.5, justifyContent: 'flex-start' }}
					>
						<Stack direction="row" justifyContent="flex-start" alignItems="center">
							<Typography variant="h5" color="error.main" sx={{ display: 'flex' }}>
								<IoExitOutline />
							</Typography>
							<Typography variant="body1" sx={{ ml: 2 }}>
								خروج از حساب کاربری
							</Typography>
						</Stack>
					</DrawerListItemButton>
				</Box>
			</Box>
		</Menu>
	);
};

export default SettingDropDown;
