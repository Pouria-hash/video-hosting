import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FilledInput from '@mui/material/FilledInput';

import { styled } from '@mui/material/styles';

const DashboardInput = styled(FilledInput)(({ theme }) => ({
	transition: theme.transitions.create([ 'border-color', 'background-color', 'box-shadow' ]),
	backgroundColor: theme.palette.mode === 'light' ? '#F2F5F7' : '#2b2b2b',
	overflow: 'hidden',
	'&.Mui-focused': {
		backgroundColor: '#e5eaee'
	},
	'& .MuiFilledInput-input': {
		fontSize: 16,
		padding: '13px 12px'
	}
}));

const FillTextField = ({
	name,
	value,
	label,
	handleChange,
	id,
	endAdornment,
	defaultValue,
	helperText,
	type,
	...otherProps
}) => (
	<Box mb={2}>
		<Box component="label" htmlFor={id} sx={{ mb: 1, fontSize: 15, color: 'primary.main' }}>
			{label}
		</Box>

		<FormControl sx={{ mt: 1, width: '100%' }}>
			<DashboardInput
				id={id}
				endAdornment={endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
				aria-label={name}
				name={name}
				value={value}
				onChange={handleChange}
				defaultValue={defaultValue}
				type={type}
				sx={{
					'&:hover': {
						bgcolor: '#e5eaee'
					},

					borderRadius: '5px'
				}}
				hiddenLabel
				disableUnderline
				fullWidth
				{...otherProps}
			/>
			<FormHelperText id={helperText}>{helperText}</FormHelperText>
		</FormControl>
	</Box>
);

export default FillTextField;
