import React from 'react'
import './styles.css';

const Button = ({ children, variant = 'container' }) => {
  return (
    <div className={ variant === 'container' ? 'buttonContainer' : 'buttonOutline' }>{children}</div>
  )
}

export default Button