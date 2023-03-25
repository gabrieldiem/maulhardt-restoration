import React from 'react';
import { Navigate } from 'react-router-dom';

const Redir = ({ dest }) => {
  window.history.replaceState(null, null, `${dest}`);
  return <Navigate to={dest} />;
};

export default Redir;
