import React, { useState } from 'react';
import './styles.css';
import Button from '../Button/Button';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="formLoginContainer">
      <div className="formEmail">
        <p>Login</p>
        <input
          type="email"
          id="email"
          value={ email }
          placeholder="email@trybeer.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="formPassword">
        <p>Login</p>
        <input
          type="password"
          id="password"
          value={ password }
          placeholder="********"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>

      <Button
      >
        LOGIN
      </Button>

      <Button variant='outline'
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default FormLogin;
