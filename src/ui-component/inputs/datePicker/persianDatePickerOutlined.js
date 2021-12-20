import { Fragment } from 'react';

import AdapterJalali from '@date-io/date-fns-jalali';

import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const OutlinedDatePicker = styled(TextField)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
	'& .MuiTextField-root': {
		border: 'none'
	},

	'& .MuiOutlinedInput-input': {
		fontSize: 16,
		padding: '13px 12px'
	},

	'& .MuiInput-underline:after': {},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: '1px solid',
			borderColor: theme.palette.grey.A400,
			borderRadius: '5px'
		},
		'&:hover fieldset': {
			borderColor: theme.palette.grey.A700
		},
		'&.Mui-focused fieldset': {
			borderColor: theme.palette.dsSecondary.main
		}
	}
}));

export default function PersianDatePickerOutlined({
	name,
	value,
	handleChange,
	label,
	required,
	error,
	helperText,
	...otherProps
}) {
	return (
		<FormControl required={required} sx={{ width: '100%' }} error={error} variant="outlined" color="dsSecondary">
			<LocalizationProvider dateAdapter={AdapterJalali}>
				<DatePicker
					mask="____/__/__"
					name={name}
					label={label}
					value={value.toString()}
					onChange={(newValue) => handleChange(newValue)}
					renderInput={(params) => (
						<Fragment>
							<OutlinedDatePicker {...params} fullWidth variant="outlined" type="date" sx={{}} />
						</Fragment>
					)}
					{...otherProps}
				/>
			</LocalizationProvider>
			<FormHelperText id={helperText}>{helperText}</FormHelperText>
		</FormControl>
	);
}
