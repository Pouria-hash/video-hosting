import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import { BsFileEarmarkPerson, BsGear, BsBoxArrowLeft } from 'react-icons/bs';

import { toggleUserAccountDropDown } from 'redux/actions/customizeAction';

const UserDropDown = () => {
	const dispatch = useDispatch();

	const handleShowUserDropDown = (status) => {
		dispatch(toggleUserAccountDropDown(status));
	};
	return (
		<Box sx={{ position: 'absolute', width: '200px', top: '70%', right: 50 }}>
			<Box sx={{ bgcolor: 'background.paper', borderRadius: '10px', boxShadow: 5 }}>
				<Box
					component="ul"
					sx={{ listStyleType: 'none', color: 'text.primary', p: 1, textAlign: 'start' }}
					onClick={() => handleShowUserDropDown(true)}
				>
					<Link to="/user">
						<Box component="li" sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
							<Box component="span" sx={{ display: 'flex', mr: 1, color: 'primary.main' }}>
								<BsFileEarmarkPerson />
							</Box>{' '}
							<Box component="span">Manage Profile</Box>
						</Box>
					</Link>
					<Box
						component="div"
						sx={{
							width: '100%',
							height: '1px',
							background: 'linear-gradient(to right, #fff 50%, rgba(0,0,0,0) 100%)'
						}}
					/>
					<Link to="/user/setting">
						<Box component="li" sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
							<Box component="span" sx={{ display: 'flex', mr: 1, color: 'primary.main' }}>
								<BsGear />
							</Box>{' '}
							<Box component="span">Setting</Box>
						</Box>
					</Link>

					<Box
						component="div"
						sx={{
							width: '100%',
							height: '1px',
							background: 'linear-gradient(to right, #fff 50%, rgba(0,0,0,0) 100%)'
						}}
					/>
					<Link to="/pricing_plan">
						<Box component="li" sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
							<Box component="span" sx={{ display: 'flex', mr: 1, color: 'primary.main' }}>
								<BsGear />
							</Box>{' '}
							<Box component="span">Pricing Plan</Box>
						</Box>
					</Link>

					<Box
						component="div"
						sx={{
							width: '100%',
							height: '1px',
							background: 'linear-gradient(to right, #fff 50%, rgba(0,0,0,0) 100%)'
						}}
					/>
					<Box component="li" sx={{ p: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
						<Box component="span" sx={{ display: 'flex', mr: 1, color: 'primary.main' }}>
							<BsBoxArrowLeft />
						</Box>{' '}
						<Box component="span">Logout</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default UserDropDown;
