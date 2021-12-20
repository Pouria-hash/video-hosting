import React, { Fragment, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Typography, Container, IconButton, Badge, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import { BsSearch, BsBell } from 'react-icons/bs';
import UserDropDown from './UserDropDown';
import { toggleUserAccountDropDown } from 'redux/actions/customizeAction';

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const Header = (props) => {
	const dispatch = useDispatch();
	const { hideUserAccountDropDown } = useSelector((state) => state.customize);

	const userDropDownContainer = useRef();
	useEffect(
		() => {
			const checkIfClickedOutside = (e) => {
				if (
					!hideUserAccountDropDown &&
					userDropDownContainer.current &&
					!userDropDownContainer.current.contains(e.target)
				) {
					dispatch(toggleUserAccountDropDown(true));
				}
			};
			document.addEventListener('mousedown', checkIfClickedOutside);

			return () => {
				// Cleanup the event listener
				document.removeEventListener('mousedown', checkIfClickedOutside);
			};
		},
		[ dispatch, hideUserAccountDropDown ]
	);

	const handleShowUserDropDown = (click) => {
		dispatch(toggleUserAccountDropDown(click));
	};
	return (
		<Fragment>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar sx={{ position: 'relative' }}>
						<Container maxWidth="xl">
							<Box
								sx={{
									py: 1,
									px: 3,
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}
							>
								<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
									<Typography
										variant="h4"
										color="white.main"
										sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
									>
										Nextflix
									</Typography>
									<Box sx={{ pl: 6, display: 'flex', justifyContent: 'flex', alignItems: 'center' }}>
										<Link to="/">
											<Typography variant="body2" color="white.main" sx={{ px: 2 }}>
												Home
											</Typography>
										</Link>
										<Link to="/List">
											<Typography variant="body2" color="white.main" sx={{ px: 2 }}>
												My List
											</Typography>
										</Link>
									</Box>
								</Box>
								<Box>
									<Box sx={{ display: 'flex' }}>
										<Box sx={{ mx: 4 }}>
											<IconButton sx={{ mx: 1 }}>
												<BsSearch />
											</IconButton>

											<IconButton sx={{ mx: 1 }}>
												<Badge color="primary" variant="dot">
													<BsBell />
												</Badge>
											</IconButton>
										</Box>
										<Box sx={{ display: 'flex' }}>
											{props.user ? (
												<Button variant="contained" color="primary">
													Login
												</Button>
											) : (
												<Box ref={userDropDownContainer}>
													<Avatar
														sx={{ mx: 1, cursor: 'pointer' }}
														onClick={() => handleShowUserDropDown(false)}
													>
														P
													</Avatar>
													{!props.user && !hideUserAccountDropDown && <UserDropDown />}
												</Box>
											)}
										</Box>
									</Box>
								</Box>
							</Box>
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</Fragment>
	);
};

export default Header;

// <Box sx={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'secondary.main' }}>
// 	<Container maxWidth="xl">
// 		<Box sx={{ py: 1, px: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// 			<Typography variant="h4" color="white.main" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
// 				Nextflix
// 			</Typography>

// 			<Box>
// 				<Button variant="contained" color="primary">
// 					Login
// 				</Button>
// 			</Box>
// 		</Box>
// 	</Container>
// </Box>
