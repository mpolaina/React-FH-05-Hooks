import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
  
  const [user, setUser] = useState({})
  
  return (
    <div className="p-4">
      <UserContext.Provider value={{
          user,
          setUser
      }}>
          <AppRouter/>
      </UserContext.Provider>
    </div>
  )
}
