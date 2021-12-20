import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';

import { styled } from '@mui/material/styles';

const DashboardInput = styled(FilledInput)(({ theme }) => ({
	transition: theme.transitions.create([ 'border-color', 'background-color', 'box-shadow' ]),
	backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',

	'&.Mui-focused': {
		backgroundColor: '#fff'
	},
	'& .MuiFilledInput-input': {
		fontSize: 16,
		padding: '13px 12px'
	}
}));

const AuthTextField = ({
	name,
	value,
	label,
	handleChange,
	id,
	endAdornment,
	defaultValue,
	helperText,
	type,
	required,
	error,
	...otherProps
}) => (
	<Box>
		<Box component="label" htmlFor={id} sx={{ mb: 1 }}>
			<Typography variant="subtitle1" color="primary.main">
				{label}
			</Typography>
		</Box>

		<FormControl
			sx={{ mt: 1, width: '100%' }}
			required={required}
			error={error}
			variant="outlined"
			color="secondary"
		>
			<DashboardInput
				id={id}
				endAdornment={endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
				aria-label={name}
				name={name}
				value={value}
				onChange={handleChange}
				defaultValue={defaultValue}
				type={type}
				inputProps={{
					'aria-label': { name }
				}}
				sx={{
					'&:hover': {
						bgcolor: '#fff'
					},
					border: '1px solid',
					borderColor: 'secondary.main',
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

export default AuthTextField;
