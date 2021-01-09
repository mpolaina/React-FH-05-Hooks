import React, { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
      name: '',
      email: ''
  })
  
  const { name, email } = formState
  
  useEffect( () => {
    // console.log('Hey')
  }, [])
  
  useEffect( () => {
    // console.log('Email cambió')
  }, [email])
  
  // desestructuramos el target del event
  const handleInputChange = ({ target }) => {
      setFormState({
        ...formState,
        [target.name] : target.value
      })
  }
  
  return (
    
    <div className="p-5">
       <h1>useEffect</h1>
       <div className="form-group">
           <label>Nombre</label>
           <input 
              autoComplete="off"
              className="form-control"
              name="name" 
              placeholder="Tu nombre" 
              type="text"
              value={ name }
              onChange={ handleInputChange }
           />
       </div>
       <div className="form-group mt-3 mb-3">
           <label>Email</label>
           <input 
              autoComplete="off"
              className="form-control"
              name="email" 
              placeholder="email@email.com" 
              type="email"
              value={ email }
              onChange={ handleInputChange }
           />
       </div>
       
       { ( name === 'Manuel' ) && <Message/>}
       
    </div>
  )
}
