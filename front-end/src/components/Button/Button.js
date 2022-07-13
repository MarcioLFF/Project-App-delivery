import React from 'react'
import './styles.css';

const Button = ({ children, variant = 'container', onClick }) => {
  return (
    <div  onClick={onClick} className={ variant === 'container' ? 'buttonContainer' : 'buttonOutline' }>{children}</div>
  )
}

export default Button