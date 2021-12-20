import React from 'react';
import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// mui themes
import theme from 'lib/theme';

import Routes from 'routes/index';

import ScrollToTop from 'lib/ScrollToTop';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTop />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
