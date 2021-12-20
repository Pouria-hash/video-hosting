import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import { FaAlignRight, FaAngleRight, FaAngleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BsSearch, BsBell, BsEnvelope, BsGear } from 'react-icons/bs';

import TrackerLogo from 'assets/icons/TrackerLogo.png';

import { toggleMenuDrawer } from 'redux/actions/customizeAction';
import SettingDropDown from './SettingDropDown';
import NotifyDropDown from './NotifyDropDown';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '20px',
	backgroundColor: theme.palette.grey.light,
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.black, 0.1)
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto'
	}
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	color: theme.palette.primary.main,
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',

	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	}
}));

export default function Header() {
	const dispatch = useDispatch();

	const [ anchorSettingDropDown, setAnchorSettingDropDown ] = useState(null);
	const [ anchorNotifyDropDown, setAnchorNotifyDropDown ] = useState(null);

	const isSettingMenuOpen = Boolean(anchorSettingDropDown);
	const isNotifyMenuOpen = Boolean(anchorNotifyDropDown);

	const handleSettingMenuOpen = (event) => {
		setAnchorSettingDropDown(event.currentTarget);
	};
	const handleSettingMenuClose = () => {
		setAnchorSettingDropDown(null);
	};

	const handleNotifyMenuOpen = (event) => {
		setAnchorNotifyDropDown(event.currentTarget);
	};
	const handleNotifyMenuClose = () => {
		setAnchorNotifyDropDown(null);
	};

	const handleToggleDrawer = () => {
		dispatch(toggleMenuDrawer());
	};

	return (
		<Box>
			<AppBar position="sticky" color="white" sx={{ zIndex: 1201 }}>
				<Toolbar>
					<Grid container columnSpacing={2} alignItems="center" justifyContent="space-between">
						<Grid item xs={10} md={8}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Stack direction="row" spacing={1} alignItems="center">
									<IconButton
										edge="start"
										color="primary"
										aria-label="open drawer"
										sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
										onClick={handleToggleDrawer}
									>
										<FaAlignRight />
									</IconButton>
									<Stack direction="row" spacing={1} alignItems="center">
										<img src={TrackerLogo} alt="logo" />
										<Typography
											variant="subtitle1"
											noWrap
											component="div"
											color="primary.main"
											sx={{ display: { xs: 'none', sm: 'block' } }}
										>
											ترکر Tracker
										</Typography>
									</Stack>
								</Stack>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-evenly',
										flexGrow: 1,
										ml: 2
									}}
								>
									<Stack
										direction="row"
										spacing={1}
										alignItems="center"
										sx={{ display: { xs: 'none', md: 'flex' } }}
									>
										<IconButton color="primary" size="small" aria-label="arrow">
											<FaAngleDoubleRight />
										</IconButton>
										<IconButton color="primary" size="small" aria-label="arrow">
											<FaAngleRight />
										</IconButton>
										<IconButton color="primary" size="small" aria-label="arrow">
											<FaAngleLeft />
										</IconButton>
									</Stack>
									<Search sx={{ flexGrow: 1 }}>
										<SearchIconWrapper>
											<BsSearch />
										</SearchIconWrapper>
										<StyledInputBase
											placeholder="جست و جو"
											inputProps={{ 'aria-label': 'search' }}
										/>
									</Search>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={2} md={4} sx={{ display: 'flex' }}>
							<Box sx={{ flexGrow: 1 }} />
							<Stack direction="row" spacing={1} alignItems="center">
								<Avatar alt="usernaem" src="">
									H
								</Avatar>
								<Stack spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
									<Typography variant="body2" color="primary.main">
										علیرضا صدوقی زاده
									</Typography>
									<Typography variant="caption" color="primary.main">
										طراح گرافیک
									</Typography>
								</Stack>
							</Stack>
							<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
								<IconButton size="large" aria-label="show 4 new mails" color="primary">
									<Badge badgeContent={4} color="error">
										<BsEnvelope />
									</Badge>
								</IconButton>
								<IconButton
									size="large"
									onClick={handleNotifyMenuOpen}
									aria-label="show 17 new notifications"
									color="primary"
								>
									<Badge badgeContent={17} color="error">
										<BsBell />
									</Badge>
								</IconButton>
								<IconButton
									size="large"
									edge="end"
									aria-label="setting menu"
									aria-controls="setting-menu-dropdown"
									aria-haspopup="true"
									onClick={handleSettingMenuOpen}
									color="secondary"
								>
									<BsGear />
								</IconButton>
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<SettingDropDown
				handleSettingMenuClose={handleSettingMenuClose}
				isSettingMenuOpen={isSettingMenuOpen}
				anchorSettingDropDown={anchorSettingDropDown}
			/>
			<NotifyDropDown
				handleNotifyMenuClose={handleNotifyMenuClose}
				isNotifyMenuOpen={isNotifyMenuOpen}
				anchorNotifyDropDown={anchorNotifyDropDown}
			/>
		</Box>
	);
}
