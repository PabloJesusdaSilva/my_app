import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { deepPurple, red  } from '@mui/material/colors'

import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900]
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
