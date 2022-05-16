import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext';

const PrivateRoute = () => {
  const {  token } = useAuth();
  const location = useLocation();
    return (
      token? <Outlet /> : <Navigate to="/login" state={{from:location}} replace/>
  )
}

export  {PrivateRoute}