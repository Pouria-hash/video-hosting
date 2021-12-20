import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

import menuItems from 'menu-items/dashboardMenu';

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

const DrawerMenuMobile = () => {
	const location = useLocation();

	return (
		<Box
			sx={{
				p: 1,
				height: '70vh',
				bgcolor: 'white.main',
				boxShadow: '0 -5px 10px 1px rgba(0,0,0,0.1)',
				borderRadius: '20px 20px 0 0px'
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					rowGap: 1,
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{menuItems.map((item, index) => (
					<Fragment key={item.title}>
						<Link to={`${item.pathName}`}>
							<Box sx={{ textAlign: 'center' }}>
								<DrawerListItemButton
									color="primary"
									selected={location.pathname === item.pathName ? true : false}
									aria-label={item.title}
									sx={{ p: 3 }}
								>
									<Stack justifyContent="center" alignItems="center">
										{item.icon}
										<Typography variant="caption">{item.title}</Typography>
									</Stack>
								</DrawerListItemButton>
							</Box>
						</Link>
					</Fragment>
				))}
			</Box>
		</Box>
	);
};

export default DrawerMenuMobile;
