import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'container',
  onClick,
  dataTestid,
  disabled = false,
}) => (
  <button
    type="submit"
    data-testid={ dataTestid }
    onClick={ onClick }
    className={ !disabled && variant === 'container'
      ? 'buttonContainer' : 'buttonOutline' }
    disabled={ disabled }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dataTestid: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
