import React, { useState, Fragment } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 0;

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

function SwipeableEdgeDrawer({ children }) {
	const [ open, setOpen ] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<Fragment>
			<Global
				styles={{
					'.MuiDrawer-root > .MuiPaper-root': {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: 'visible'
					}
				}}
			/>
			<Box sx={{ textAlign: 'center' }}>
				<Button onClick={toggleDrawer(true)}>Open</Button>
			</Box>
			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true
				}}
				sx={{ zIndex: 1000 }}
			>
				<StyledBox
					sx={{
						position: 'absolute',
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: 'visible',
						height: '85%',
						right: 0,
						left: 0
					}}
				>
					{children}
				</StyledBox>
			</SwipeableDrawer>
		</Fragment>
	);
}

export default SwipeableEdgeDrawer;
