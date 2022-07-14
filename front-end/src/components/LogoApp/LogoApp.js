import React from 'react';
import logo from '../../images/logo-delivery-app.svg';
import './styles.css';

const LogoApp = () => (
  <div className="logoContainer">
    <object className="logo" type="image/svg+xml" data={ logo }>
      App de delivery
    </object>
    <p>App de delivery</p>
  </div>
);

export default LogoApp;
