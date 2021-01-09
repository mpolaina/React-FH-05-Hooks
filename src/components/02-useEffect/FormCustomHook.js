import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

export const FormCustomHook = () => {
  
  // Custom Hook - useForm
  const [ formValues, handleInputChange, handleSubmit, alerta ] = useForm({
      name: '',
      email: '',
      password: ''
  })
  
  const { name, email, password } = formValues
  
  useEffect( () => {
    console.log('Cambió el email')
  }, [email])
  
  return (
    
    <form onSubmit={ handleSubmit } className="p-5">
       <h1>Form Custom Hook</h1>
       
       { alerta && <div className="alert alert-primary" role="alert"> Enviado </div> }
       
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
       
       <div className="form-group mt-3 mb-3">
           <label>Password</label>
           <input 
              className="form-control"
              name="password" 
              placeholder="******" 
              type="password"
              value={ password }
              onChange={ handleInputChange }
           />
       </div>
       
       <button type="submit" className="btn btn-dark">Enviar</button>
       
    </form>
  )
}
