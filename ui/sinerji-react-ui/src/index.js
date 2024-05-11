import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from './context/SettingsContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SettingsProvider>


);

