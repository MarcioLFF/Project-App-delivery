import React, { useContext } from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './styles.css';

import LogoApp from '../../components/LogoApp/LogoApp';
import { ContextLogin } from '../../context/ContextLoginProvider';

const Login = () => {
  const { error } = useContext(ContextLogin);
  return (
    <div className="loginContainer">
      <LogoApp />
      <FormLogin />
      {error && (
        <div
          data-testid="common_login__element-invalid-email"
          style={ { color: 'red', marginTop: '10px' } }
        >
          { error }
        </div>
      )}
    </div>
  );
};

export default Login;
