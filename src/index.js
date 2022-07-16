import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import CssBaseline from '@mui/material/CssBaseline';

// import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <StyledEngineProvider injectFirst> */}
    <App />
    {/* </StyledEngineProvider> */}
  </React.StrictMode>,
);
