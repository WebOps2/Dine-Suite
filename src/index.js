import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

const update = ReactDOM.createRoot(document.getElementById('update'));
update.render(
  <h1>Wow</h1>
)
