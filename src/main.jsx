import React from 'react';
import ReactDOM from 'react-dom/client';

import { CryptoContextProvider } from './context/CryptoContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContextProvider>
      <App />
    </CryptoContextProvider>
  </React.StrictMode>
);
