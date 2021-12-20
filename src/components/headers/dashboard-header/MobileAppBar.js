import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import { motion, AnimatePresence } from 'framer-motion';

import { BsBell, BsGear } from 'react-icons/bs';

import dash from 'assets/icons/dash.png';

import {
	toggleMobileMenuDrawer,
	toggleMobileSettingDrawer,
	toggleMobileNotifyDrawer
} from 'redux/actions/customizeAction';

import styles from 'styles/components/headers/dashboard-header/MobileAppBar.module.scss';
import DrawerMenuMobile from './DrawerMenuMobile';
import DrawerSettingMobile from './DrawerSettingMobile';
import DrawerNotifyMobile from './DrawerNotifyMobile';

export default function BottomAppBar() {
	const dispatch = useDispatch();
	const { hideMobileMenuDrawer, hideMobileSettingDrawer, hideMobileNotifyDrawer } = useSelector(
		(state) => state.customize
	);

	const handleShowDashboardMenu = () => {
		dispatch(toggleMobileMenuDrawer());
	};

	const handleShowDashboardSetting = () => {
		dispatch(toggleMobileSettingDrawer());
	};
	const handleShowDashboardNotify = () => {
		dispatch(toggleMobileNotifyDrawer());
	};
	return (
		<React.Fragment>
			<AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }} className={styles.appBar}>
				<Toolbar sx={{ position: 'relative' }}>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
						<IconButton color="primary" aria-label="open drawer" onClick={handleShowDashboardNotify}>
							<Badge badgeContent={4} color="error">
								<BsBell />
							</Badge>
						</IconButton>
						<IconButton color="primary" onClick={handleShowDashboardMenu}>
							<img src={dash} alt="داشبورد" />
						</IconButton>
						<IconButton color="primary" onClick={handleShowDashboardSetting}>
							<BsGear />
						</IconButton>
					</Box>
					<AnimatePresence>
						{!hideMobileMenuDrawer && (
							<Fragment>
								<Box
									sx={{
										position: 'absolute',
										top: 0,
										left: 0,
										height: '100%',
										width: '100%'
									}}
									onClick={handleShowDashboardMenu}
								/>
								<Box
									sx={{ position: 'absolute', width: '100%', bottom: '100%', left: 0 }}
									onClick={handleShowDashboardMenu}
								>
									<motion.div
										key="current"
										initial={{ y: '100%' }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: '100%', opacity: 0 }}
									>
										<DrawerMenuMobile />
									</motion.div>
								</Box>
							</Fragment>
						)}

						{!hideMobileSettingDrawer && (
							<Fragment>
								<Box
									sx={{
										position: 'absolute',
										top: 0,
										left: 0,
										height: '100%',
										width: '100%'
									}}
									onClick={handleShowDashboardSetting}
								/>
								<Box
									sx={{ position: 'absolute', width: '100%', bottom: '100%', left: 0 }}
									onClick={handleShowDashboardSetting}
								>
									<motion.div
										key="current"
										initial={{ y: '100%' }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: '100%', opacity: 0 }}
									>
										<DrawerSettingMobile />
									</motion.div>
								</Box>
							</Fragment>
						)}
						{!hideMobileNotifyDrawer && (
							<Fragment>
								<Box
									sx={{
										position: 'absolute',
										top: 0,
										left: 0,
										height: '100%',
										width: '100%'
									}}
									onClick={handleShowDashboardNotify}
								/>
								<Box sx={{ position: 'absolute', width: '100%', bottom: '100%', left: 0 }}>
									<motion.div
										key="current"
										initial={{ y: '100%' }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: '100%', opacity: 0 }}
									>
										<DrawerNotifyMobile />
									</motion.div>
								</Box>
							</Fragment>
						)}
					</AnimatePresence>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
