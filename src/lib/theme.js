import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fece00'
		},
		secondary: {
			main: '#1f2023'
		},
		black: {
			light: '#1f2023',
			main: '#141414',
			dark: '#181818'
		},
		grey: {
			light: grey.A100,
			main: grey[400],
			dark: grey.A700
		},
		white: {
			main: '#fff',
			dark: 'rgb(209 , 213,219)'
		},
		blue: {
			main: 'rgb(75,85,99)',
			dark: 'rgb(55,65,81)'
		},
		info: {
			main: '#2b2c42'
		},
		success: {
			main: '#75b566'
		},
		danger: {
			main: '#f2a52e'
		},

		error: {
			main: '#f44336'
		}
	},
	typography: {
		fontFamily: [ 'Roboto', 'sans-serif' ].join(',')
	}
});

export default theme;
