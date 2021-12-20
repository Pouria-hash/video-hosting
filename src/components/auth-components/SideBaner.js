import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Fram from 'assets/images/Fram.png';
import FrameMobile from 'assets/images/FrameMobile.png';
import TwoNabsh from 'assets/icons/TwoNabsh.png';
import nene from 'assets/icons/nene.png';
import TopForoush from 'assets/icons/TopForoush.png';
import Nartab from 'assets/icons/Nartab.png';
import Otaghak from 'assets/icons/Otaghak.png';

import styles from 'styles/components/auth-components/SideBaner.module.scss';

const AuthLayoutSidePicture = () => {
	return (
		<Fragment>
			<Box className={styles.imgContainer}>
				<Box sx={{ background: { xs: `url(${FrameMobile})`, md: `url(${Fram})` } }} className={styles.img} />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'block' } }}>
				<Typography variant="body2" color="primary.main" mb={2}>
					برند هایی که به ما اعتماد کرده اند:
				</Typography>
				<Stack direction="row" spacing={2} alignItems="center" justifyContent="space-evenly">
					<Box>
						<img src={TwoNabsh} alt="دو نبش" />
					</Box>
					<Box>
						<img src={nene} alt="نی نی فیل" />
					</Box>
					<Box>
						<img src={TopForoush} alt="تاپ فروش" />
					</Box>
					<Box>
						<img src={Nartab} alt="نرتاب" />
					</Box>
					<Box>
						<img src={Otaghak} alt="اتاقک" />
					</Box>
				</Stack>
			</Box>
		</Fragment>
	);
};

export default AuthLayoutSidePicture;
