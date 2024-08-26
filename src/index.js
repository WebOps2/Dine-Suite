import React from 'react';
import ReactDOM from 'react-dom/client';
import BusinessList from './businessList.js';
import './index.css';
import Search from './Search.js';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <Search />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BusinessList/>
);



