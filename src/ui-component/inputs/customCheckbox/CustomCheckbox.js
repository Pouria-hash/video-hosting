import { Fragment } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
	color: theme.palette.secondary.main
}));

const CustomCheckbox = ({ label, handleCheck, name }) => {
	return (
		<Fragment>
			<FormGroup>
				<CustomFormControlLabel
					control={
						<Checkbox
							onChange={handleCheck}
							name={name}
							size="small"
							sx={{
								color: 'secondary.main',
								'&.Mui-checked': {
									color: 'secondary.main'
								}
							}}
						/>
					}
					label={`${label} :`}
				/>
			</FormGroup>
		</Fragment>
	);
};

export default CustomCheckbox;
