import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import ContextLoginProvider from './context/ContextLoginProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextLoginProvider>
        <App />
      </ContextLoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
