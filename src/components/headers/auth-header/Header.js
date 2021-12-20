import React, { useState } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';

// material ui components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PrimaryButton from 'ui-component/Buttons/PrimaryButton.js';

import { BsList } from 'react-icons/bs';

import dash from 'assets/icons/dash.png';
import Play from 'assets/icons/Play.png';
import Dimond from 'assets/icons/Dimond.png';
import work from 'assets/icons/work.png';

// import styles from 'styles/conponents/auth-components/Header.module.scss';

import AuthDrawer from './Drawer';

const Header = () => {
	const [ openDrawer, setOpenDrawer ] = useState({
		left: false
	});

	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname.split('/')[2];

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setOpenDrawer({ ...openDrawer, [anchor]: open });
	};

	return (
		<Box sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 1, md: 1 }, px: { xs: 3, md: 0 } }}>
			<Box
				sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer' }}
				onClick={toggleDrawer('left', !openDrawer.left)}
			>
				<Typography variant="h4" color="primary.main">
					<BsList />
				</Typography>
			</Box>
			<Container
				maxWidth="lg"
				sx={{ justifyContent: 'space-between', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
			>
				<Box>
					<Stack direction="row" spacing={3}>
						<Link to="/#">
							<Typography
								variant="body2"
								color="primary.main"
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<Box sx={{ mr: 1, display: 'flex' }} component="span">
									<img src={dash} alt="امکانات ترکر" />
								</Box>
								امکانات ترکر{' '}
							</Typography>
						</Link>
						<Link to="/#">
							{' '}
							<Typography
								variant="body2"
								color="primary.main"
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<Box sx={{ mr: 1, display: 'flex' }} component="span">
									<img src={Play} alt=" ویدئو آموزشی" />
								</Box>
								ویدئو آموزشی{' '}
							</Typography>
						</Link>
						<Link to="/#">
							{' '}
							<Typography
								variant="body2"
								color="primary.main"
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<Box sx={{ mr: 1, display: 'flex' }} component="span">
									<img src={Dimond} alt="اشتراک ماهانه" />
								</Box>
								قیمت اشتراک ماهانه{' '}
							</Typography>
						</Link>
						<Link to="/#">
							{' '}
							<Typography
								variant="body2"
								color="primary.main"
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<Box sx={{ mr: 1, display: 'flex' }} component="span">
									<img src={work} alt="همکاری با تیم ترکر" />
								</Box>
								همکاری با تیم ترکر{' '}
							</Typography>
						</Link>
					</Stack>
				</Box>

				<Box>
					<PrimaryButton handleClick={() => navigate(`/auth/${pathname === 'login' ? 'register' : 'login'}`)}>
						{pathname === 'login' ? 'ثبت نام' : 'ورود'}
					</PrimaryButton>
				</Box>
			</Container>
			{/**---------- Drawer -------------- */}
			<AuthDrawer state={openDrawer} toggleDrawer={(anchor, open) => toggleDrawer(anchor, open)} />
		</Box>
	);
};

export default Header;
