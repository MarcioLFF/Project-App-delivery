import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextLogin = createContext({});

const ContextLoginProvider = ({ children }) => {
  const [error, setError] = useState('');

  const value = {
    error,
    setError,
  };

  return (
    <ContextLogin.Provider value={ value }>
      {children}
    </ContextLogin.Provider>
  );
};

ContextLoginProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContextLoginProvider;
