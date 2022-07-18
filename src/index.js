import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import CssBaseline from '@mui/material/CssBaseline';
// import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      {/* <StyledEngineProvider injectFirst> */}
      <App />
      {/* </StyledEngineProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
