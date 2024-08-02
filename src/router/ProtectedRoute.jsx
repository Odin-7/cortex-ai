import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') || true;

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
