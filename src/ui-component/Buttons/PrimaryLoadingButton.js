import { Fragment } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
export default function LoadingButtons({ handleClick, loading, children, ...otherProps }) {
	return (
		<Fragment>
			<LoadingButton
				loading={loading}
				variant="contained"
				onClick={handleClick}
				sx={{ color: '#fff', px: 6, background: 'linear-gradient(270deg, #0E70D4 50%, #28CFE4 100%)' }}
				loadingIndicator={
					<Typography variant="caption" color="#fff" sx={{ fontSize: 11 }}>
						درحال ارسال...
					</Typography>
				}
				{...otherProps}
			>
				{children}
			</LoadingButton>
		</Fragment>
	);
}
