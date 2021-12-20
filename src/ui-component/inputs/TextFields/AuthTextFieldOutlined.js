import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

const DashboardInput = styled(TextField)(({ theme }) => ({
	transition: theme.transitions.create([ 'border-color', 'background-color', 'box-shadow' ]),
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#2b2b2b',

	'& .MuiOutlinedInput-input': {
		fontSize: 16,
		'&::placeholder': {
			textAlign: 'center'
		}
	},

	'& .Mui-disabled': {
		backgroundColor: theme.palette.grey.light
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: '2px solid',
			borderColor: theme.palette.secondary.main,
			borderRadius: '3px'
		},
		'&:hover fieldset': {
			borderColor: theme.palette.secondary.main
		},
		'&.Mui-focused fieldset': {
			borderColor: theme.palette.secondary.main
		}
	}
}));

const DashboardSellerTextFieldOutlined = ({
	name,
	value,
	handleChange,
	id,
	helperText,
	type,
	required,
	error,
	placeholder,
	...otherProps
}) => (
	<FormControl required={required} sx={{ width: '100%' }} error={error} variant="outlined" color="secondary">
		<DashboardInput
			id={id}
			name={name}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			type={type}
			size="small"
			color="secondary"
			variant="outlined"
			fullWidth
			{...otherProps}
		/>
		<FormHelperText id={helperText}>{helperText}</FormHelperText>
	</FormControl>
);

export default DashboardSellerTextFieldOutlined;
