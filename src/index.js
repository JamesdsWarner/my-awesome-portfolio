import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';

import App from './App';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();