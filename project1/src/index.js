import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// bootstrap css
// npm install --save  react-popper @popperjs/core bootstrap@latest jquery
import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import Popper from '@popperjs/core';
/* eslint-enable no-unused-vars */
import 'bootstrap/dist/js/bootstrap.bundle.min';

// custom css
import './normalize.css';
import './fonts.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
