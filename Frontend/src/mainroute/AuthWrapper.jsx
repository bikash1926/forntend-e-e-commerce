import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthWrapper = (props) => {
      const { user } = useSelector((state) => state.userReducer);
  return (
    <div>
      {user ? props.children : <Navigate to="/login" />}
    </div>
  )
}

export default AuthWrapper
