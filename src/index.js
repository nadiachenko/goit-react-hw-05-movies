import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </StrictMode>
);
