import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'container', onClick }) => (
  <div
    data-testid={
      variant === 'container'
        ? 'common_login__button-login'
        : 'common_login__button-register'
    }
    onClick={ onClick }
    role="button"
    className={ variant === 'container' ? 'buttonContainer' : 'buttonOutline' }
    aria-hidden="true"
  >
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
