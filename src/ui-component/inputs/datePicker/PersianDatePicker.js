import { Fragment } from 'react';

import AdapterJalali from '@date-io/date-fns-jalali';

import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function LocalizedDatePicker({ name, value, handleChange, label, type, id }) {
	return (
		<Box mb={2}>
			<Box component="label" htmlFor={id} sx={{ fontSize: 15 }}>
				{label}
			</Box>
			<Box mt={1}>
				<LocalizationProvider dateAdapter={AdapterJalali}>
					<DatePicker
						mask="____/__/__"
						name={name}
						value={value.toString()}
						onChange={(newValue) => handleChange(newValue)}
						renderInput={(params) => (
							<Fragment>
								<TextField
									{...params}
									fullWidth
									variant="filled"
									type="date"
									InputProps={{ disableUnderline: true }}
									sx={{
										'&:hover': {
											bgcolor: '#fff',
											outline: 'none',
											border: 'none'
										},
										'& .MuiTextField-root': {
											border: 'none'
										},
										'& .MuiFilledInput-root': {
											backgroundColor: '#fff',
											outline: 'none'
										},
										borderRadius: '5px',
										boxShadow: '0 5px 10px 1px rgba(0,0,0 , 0.2)',
										overflow: 'hidden',
										'&.Mui-focused': {
											backgroundColor: '#fff'
										},
										'& .MuiFilledInput-input': {
											fontSize: 16,
											padding: '13px 12px'
										}
									}}
								/>
							</Fragment>
						)}
					/>
				</LocalizationProvider>
			</Box>
		</Box>
	);
}
