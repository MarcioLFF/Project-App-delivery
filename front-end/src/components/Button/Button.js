import React from 'react'
import './styles.css';

const Button = ({ children, variant = 'container', onClick }) => {
  return (
    <div
      data-testid={ variant === 'container' ? "common_login__button-login" : "common_login__button-register"}
      onClick={onClick}
      className={ variant === 'container' ? 'buttonContainer' : 'buttonOutline' }
    >
      {children}
    </div>
  )
}

export default Button