import { Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import dash from 'assets/icons/dash.png';
import Play from 'assets/icons/Play.png';
import Dimond from 'assets/icons/Dimond.png';
import work from 'assets/icons/work.png';

import PrimaryButton from 'ui-component/Buttons/PrimaryButton';

export default function AuthDrawer({ toggleDrawer, state }) {
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = location.pathname.split('/')[2];

	const list = (anchor) => (
		<Box
			sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[ 'facilites', 'videos', 'subscript', 'assist' ].map((text, index) => (
					<Fragment key={text}>
						<Link to={`/${text}`}>
							<ListItem button>
								<ListItemIcon>
									{text === 'facilites' ? (
										<img src={dash} alt="امکانات ترکر" />
									) : text === 'videos' ? (
										<img src={Play} alt="ویدئو آموزشی" />
									) : text === 'subscript' ? (
										<img src={Dimond} alt="اشتراک ماهانه" />
									) : text === 'assist' ? (
										<img src={work} alt="همکاری با ترکر" />
									) : (
										''
									)}
								</ListItemIcon>
								<ListItemText
									primary={
										text === 'facilites' ? (
											'امکانات ترکر'
										) : text === 'videos' ? (
											'ویدئو آموزشی'
										) : text === 'subscript' ? (
											'قیمت اشتراک ماهانه'
										) : text === 'assist' ? (
											'همکاری با تیم ترکر'
										) : (
											''
										)
									}
								/>
							</ListItem>
						</Link>
					</Fragment>
				))}
			</List>
			<List sx={{ my: 'auto' }}>
				<Divider />
				{pathname === 'login' ? (
					<Box sx={{ textAlign: 'center', p: 2 }}>
						<PrimaryButton onClick={() => navigate('/auth/register')}>ثبت نام</PrimaryButton>
					</Box>
				) : (
					<Box sx={{ textAlign: 'center', p: 2 }}>
						<PrimaryButton onClick={() => navigate('/auth/login')}>ورود</PrimaryButton>
					</Box>
				)}
			</List>
		</Box>
	);

	return (
		<div>
			{[ 'left' ].map((anchor) => (
				<Fragment key={anchor}>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						<Typography variant="subtitle1" color="primary.main" sx={{ textAlign: 'center', my: 2 }}>
							ترکر
						</Typography>

						{list(anchor)}
					</SwipeableDrawer>
				</Fragment>
			))}
		</div>
	);
}
