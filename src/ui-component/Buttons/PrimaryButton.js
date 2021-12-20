import React, { Fragment } from 'react';

import Button from '@mui/material/Button';

const PrimaryButton = ({ handleClick, children, ...otherProps }) => {
	return (
		<Fragment>
			<Button
				variant="contained"
				onClick={handleClick}
				sx={{ color: '#fff', px: 5, background: 'linear-gradient(270deg, #0E70D4 50%, #28CFE4 100%)' }}
				{...otherProps}
			>
				{children}
			</Button>
		</Fragment>
	);
};

export default PrimaryButton;
