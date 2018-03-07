import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import App from './app';
import './assets/sass/style.scss';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter >
);

ReactDOM.render(app, document.getElementById('root'));
