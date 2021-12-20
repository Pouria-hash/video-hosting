import { forwardRef, useState, useEffect } from 'react';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastAlert = ({ severity, message, toast }) => {
	const [ state, setState ] = useState({
		open: false,
		vertical: 'top',
		horizontal: 'center'
	});

	const { vertical, horizontal, open } = state;

	useEffect(
		() => {
			if (toast) {
				setState({ ...state, open: true });
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ toast ]
	);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setState({ ...state, open: false });
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			key={vertical + horizontal}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

ToastAlert.defaultProps = {
	severity: 'error',
	messsage: 'خطایی اتفاق افتاده است!'
};

export default ToastAlert;
