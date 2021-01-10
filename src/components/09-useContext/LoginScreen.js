import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";

import { UserContext } from './UserContext'

export const LoginScreen = () => {
  
  const { setUser } = useContext(UserContext)
  let history = useHistory()
  
  const usuario = {
    id: 1234,
    name: 'Manuel'
  }
  
  return (
    <div className="p-3">
      <h3 className="fw-bold">
        <i className="fi fi-react text-info me-1"></i>
          LoginScreen
      </h3>
      <button 
          className="btn btn-info btn-sm"
          onClick={ () => {
            setUser(usuario)
            history.push('/')
          }}
      >Login</button>
    </div>
  )
}
