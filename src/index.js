import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomizationProvider } from './Context/Customization';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomizationProvider>
    <App />
    </CustomizationProvider>
  </React.StrictMode>
);
