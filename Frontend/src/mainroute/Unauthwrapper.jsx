import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Unauthwrapper = (props) => {
     const { user } = useSelector((state) => state.userReducer);
  return (
    <div>
      {!user ? props.children : <Navigate to="/" />}
    </div>
  )
}

export default Unauthwrapper
