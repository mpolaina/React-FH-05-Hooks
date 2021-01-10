import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
  
  const { user, setUser } = useContext(UserContext)
  const { id, name } = user
  
  const handleClick = () => {
    setUser({})
  }
  
  return (
    <div className="p-3">
      <h3 className="fw-bold">
        <i className="fi fi-react text-info me-1"></i>
          AboutScreen
      </h3>
      <h4> 
        {name} <small>{id}</small>
      </h4>
      <button 
        className="btn btn-warning btn-sm mb-3"
        onClick={ handleClick}
      >
        Logout
      </button>
      
      <pre>
        { JSON.stringify( user, null, 3) }
      </pre>
    </div>
  )
}
