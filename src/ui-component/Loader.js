import React from 'react';

// material-ui
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

//-----------------------|| Loader ||-----------------------//

const Loader = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 1301,
				width: '100%',
				'& > * + *': {
					marginTop: '0px'
				}
			}}
		>
			<LinearProgress color="primary" />
		</Box>
	);
};

export default Loader;
