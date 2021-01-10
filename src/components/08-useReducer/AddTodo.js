import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTodo = ({ handleAddTodo }) => {
  
  const [ { description }, handleInputChange, reset ] = useForm({ description: '' })
  
  const handleSubmit = (e) => {
     
      e.preventDefault();
      if ( description.trim().length <= 1) { return }
      
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
      }
      
      handleAddTodo( newTodo )
      reset()
  }
  
  return (
    <>
      <h4>Agregar Todo</h4>
          
          <form
            onSubmit={ handleSubmit }  
            className="d-grid"
          >
              <input 
                autoComplete="off"
                className="form-control mt-2"
                name="description"
                onChange={ handleInputChange }
                placeholder="Aprender..."
                type="text"
                value={ description }
              />
              <button 
                type="submit"
                className="btn btn-outline-info mt-2"
              >
                Agregar
              </button>
          
          </form>
    </>
  )
}
