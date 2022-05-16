import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import { Navigate } from 'react-router-dom';
const AuthRoute = () => {
  const { token }= useAuth();
  return (
    token?<Navigate to="/"/>:<Outlet/>
  )
}

export {AuthRoute}