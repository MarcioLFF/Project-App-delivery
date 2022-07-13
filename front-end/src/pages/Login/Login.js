import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './styles.css';

import LogoApp from '../../components/LogoApp/LogoApp';

const Login = () => (
  <div className="loginContainer">
    <LogoApp />
    <FormLogin />
  </div>
);

export default Login;
