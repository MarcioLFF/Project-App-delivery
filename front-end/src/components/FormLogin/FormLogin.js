import React, { useContext, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { ContextLogin } from '../../context/ContextLoginProvider';

const FormLogin = () => {
  const navigate = useNavigate();
  const { setError } = useContext(ContextLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regex.test(email) || !email) {
      setError('Email na formatação errada');
    }
    if (password.trim() === '') {
      setError('Senha não pode estar vazia');
    }
    if (regex.test(email) || email || password) {
      axios
        .post('localhost:3001/login', {
          email, password,
        }).then(({ data }) => {
          localStorage.setItem(...data);
        }).catch(({ message }) => {
          setError(message);
        });
    }

    const magicNumber = 10000;
    setTimeout(() => setError(''), magicNumber);
  }

  return (
    <div className="formLoginContainer">
      <div className="formEmail">
        <p>Login</p>
        <input
          type="email"
          data-testid="common_login__input-email"
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
          data-testid="common_login__input-password"
          id="password"
          value={ password }
          placeholder="********"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>

      <Button
        onClick={ () => handleSubmit() }
      >
        LOGIN
      </Button>

      <Button
        variant="outline"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default FormLogin;
