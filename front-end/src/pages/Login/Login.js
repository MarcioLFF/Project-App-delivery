import React, { useContext } from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './styles.css';

import LogoApp from '../../components/LogoApp/LogoApp';
import { ContextLogin } from '../../context/ContextLoginProvider';

const Login = () => {
  const { error } = useContext(ContextLogin);
  console.log(context);
  return (
    <div className="loginContainer">
      <LogoApp />
      <FormLogin />
      {error && (
        <div>
          {error }
        </div>
      )}
    </div>
  );
};

export default Login;
