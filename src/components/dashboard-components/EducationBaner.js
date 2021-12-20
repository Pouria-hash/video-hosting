import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Course from 'assets/images/Course.png';
import Superhero from 'assets/images/Superhero.png';

const EducationBaner = () => {
	return (
		<Link to="/">
			<Paper
				variant="outlined"
				sx={{
					p: 2,
					position: 'relative',
					'&:hover': {
						boxShadow: 5,
						cursor: 'pointer'
					}
				}}
			>
				<Grid container alignItems="center" sx={{ mb: 2 }}>
					<Grid item xs={6}>
						<Box>
							<img src={Course} alt="دوره اموزش سئو" />
						</Box>
						<Typography variant="caption" color="text.primary">
							20٪ تخفیف ویژه
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Box sx={{ position: 'absolute', top: -35, right: 0 }}>
							<img src={Superhero} alt="دوره آموزش سئو" />
						</Box>
					</Grid>
				</Grid>
				<Typography variant="caption" color="text.secondary">
					برای مشاهده و خرید این دوره کلیک کنید. &#10095;
				</Typography>
			</Paper>
		</Link>
	);
};

export default EducationBaner;
