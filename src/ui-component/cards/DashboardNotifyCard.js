import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const DashboardNotifyCard = ({ icon, title, number, bgcolor }) => {
	return (
		<Stack
			direction="row"
			spacing={1}
			justifyContent="space-evenly"
			alignItems="center"
			sx={{
				bgcolor: 'background.paper',
				p: 1,
				borderRadius: '5px',
				height: '100px',
				my: 'auto'
			}}
		>
			<Box
				sx={{
					p: 2,
					background: bgcolor,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '10px'
				}}
			>
				<img src={icon} alt={title} />
			</Box>

			<Typography variant="h6" sx={{ fontSize: { xs: 10 } }}>
				{title}
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: 18, md: 24 } }}>
				{number}
			</Typography>
		</Stack>
	);
};

export default DashboardNotifyCard;
