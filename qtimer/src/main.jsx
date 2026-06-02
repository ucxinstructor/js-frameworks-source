import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client' part
import App from './App.jsx';
import './index.css';

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#38BDF8', // Your futuristic blue
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);