import React from 'react';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const OptionLoginCard = ({ icon, text }) => {
	return (
		<Paper
			variant="outlined"
			sx={{
				p: { xs: 2, md: 1 },
				'&:hover': {
					boxShadow: 3,
					cursor: 'pointer'
				}
			}}
		>
			<Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
				{text && (
					<Typography variant="caption" color="primary.main">
						{text}
					</Typography>
				)}
				<img src={icon} alt={text} />
			</Stack>
		</Paper>
	);
};

export default OptionLoginCard;
