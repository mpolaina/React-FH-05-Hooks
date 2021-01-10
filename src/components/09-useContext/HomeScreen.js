import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
  
  const { user } = useContext(UserContext)
  console.log(user)
  
  return (
    <div className="p-3">
      <h3 className="fw-bold">
        <i className="fi fi-react text-info me-1"></i>
          HomeScreen
      </h3>
      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>
    </div>
  )
}
