import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import menuItems from 'menu-items/dashboardMenu';

import DashboardLinerProgress from 'ui-component/loader/DashboardLinerProgress';

const drawerWidth = 280;

//style main content of dashboard pages
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	flexGrow: 1,
	padding: 0,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	})
}));

//style menu items
const DrawerListItemButton = styled(ListItemButton)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	textAlign: 'center',
	fontSize: '16px',
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

//style drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar
}));

export default function MenuDrawer({ children }) {
	const navigate = useNavigate();

	//hide and show drawet after click on header button
	const { hideMenuDrawer } = useSelector((state) => state.customize);

	//collaps for nested menu items
	const [ collapseOpen, setCollapseOpen ] = useState(false);

	// handle ckick for menu items
	const handleClick = ({ action, pathName }) => {
		if (action === 'link') {
			navigate(pathName);
		} else if (action === 'nestedList') {
			setCollapseOpen(!collapseOpen);
		} else {
			return;
		}
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						p: 3,
						display: 'flex'
					}
				}}
				variant="persistent"
				anchor="left"
				open={hideMenuDrawer}
			>
				<DrawerHeader />
				<List>
					{menuItems.map((item) => (
						<Fragment key={item.title}>
							<Box sx={{ borderBottom: item.divider && '1px solid', borderColor: 'secondary.main' }}>
								<DrawerListItemButton
									selected={false}
									onClick={() => handleClick({ action: item.action, pathName: item.pathName })}
								>
									<Typography
										sx={{
											fontSize: '22px',
											display: 'flex'
										}}
									>
										{item.icon}
									</Typography>
									<Typography
										sx={{
											fontSize: '13px',
											ml: 3
										}}
									>
										{item.title}
									</Typography>
								</DrawerListItemButton>

								{item.nestedList ? (
									<Collapse in={collapseOpen} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{item.subList.map((subItem) => (
												<DrawerListItemButton
													selected={false}
													onClick={() => navigate(subItem.pathName)}
													sx={{
														py: '5px',
														pl: 3
													}}
													key={subItem.title}
												>
													<Typography
														sx={{
															fontSize: '16px',
															display: 'flex'
														}}
													>
														{subItem.icon}
													</Typography>
													<ListItemText
														primary={
															<Typography variant="body2" component="span">
																{subItem.title}
															</Typography>
														}
													/>
												</DrawerListItemButton>
											))}
										</List>
									</Collapse>
								) : (
									''
								)}
							</Box>
						</Fragment>
					))}
				</List>

				{/**----------------- progerss Box --------------------- */}
				<Box
					sx={{ mt: 'auto', border: '1px solid', borderColor: 'secondary.main', borderRadius: '10px', p: 2 }}
				>
					<DashboardLinerProgress value={3} maxValue={20} title="سایت" />
					<DashboardLinerProgress value={15} maxValue={30} title="سکه" />
				</Box>
			</Drawer>
			<Main open={hideMenuDrawer}>{children}</Main>
		</Box>
	);
}
