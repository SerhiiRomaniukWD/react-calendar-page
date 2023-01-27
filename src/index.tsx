import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Context } from './components/DateContext/Context';
import './style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
    
  </React.StrictMode>
);
