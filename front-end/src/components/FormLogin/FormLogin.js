import React, { useContext, useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { ContextLogin } from '../../context/ContextLoginProvider';
import api from '../../services/api';

const error400 = 400;

const FormLogin = () => {
  const navigate = useNavigate();
  const { setError } = useContext(ContextLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const passwordLength = 6;
  const regex = /\S+@\S+.\S+[\w-]{2,4}$/;

  useEffect(() => {
    if ((regex.test(email)) && (password.length >= passwordLength)) {
      setDisabled(false);
    } else setDisabled(true);
  }, [email, password, regex]);

  function handleSubmit(e) {
    e.preventDefault();
    if ((regex.test(email)) && (password.length >= passwordLength)) {
      api
        .post('/api/user/login', {
          email, password,
        }).then(({ data }) => {
          localStorage.setItem('user', JSON.stringify({ ...data }));
          console.log(data);
          navigate(`/${data.role}`);
        }).catch(({ response: { status } }) => {
          console.log(status);
          switch (status) {
          case error400:
            setError('Email ou senha incorretos');
            break;
          default:
            setError('Erro ao conectar ao banco de dados');
          }
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
        <p>Senha</p>
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
        onClick={ (e) => handleSubmit(e) }
        dataTestid="common_login__button-login"
        variant="container"
        disabled={ disabled }
      >
        LOGIN
      </Button>

      <Button
        variant="outline"
        dataTestid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default FormLogin;
