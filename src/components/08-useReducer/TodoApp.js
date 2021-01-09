import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'

// fn init retorna el initialstate
const init = () => {
   
    return JSON.parse(localStorage.getItem('todos')) || []
    // return [{
    //   id: new Date().getTime(),
    //   desc: 'De nuevo con React',
    //   done: false
    // }] 
}

export const TodoApp = () => {
  
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)
  const [ { description }, handleInputChange, reset ] = useForm({ description: '' })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const handleDelete = ( todoId ) => {
      
      const borrarTodo = {
        type: 'delete',
        payload: todoId
      }
      dispatch( borrarTodo )
  }
  
  const handleToggle = (todoId) => {
      
      dispatch({
        type: 'toggle',
        payload: todoId
      })
  }
  
  const handleSubmit = ( e ) => {
      
      e.preventDefault();
      if ( description.trim().length <= 1) { return }
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
      }
      const agregarTodo = {
        type: 'add',
        payload: newTodo
      }
      dispatch( agregarTodo )
      reset()
  }
  
  return (
    <div className="p-4">
      <h3 className="fw-bold d-flex justify-content-between align-items-center">
        <div>
        <i className="fi fi-react text-info me-1"></i>
          Todo<i className="bi bi-check2-square"></i>App
        </div>
        {/* <span className="badge bg-info align-content-end">{ todos.length }</span> */}
        <button type="button" className="btn btn-outline-info">
          Todos <span className="badge bg-info ms-2">{ todos.length}</span>
        </button>
      </h3>
      
      <div className="row">
        
        <div className="col-md-7 my-3">
          
            <TodoList 
                todos={ todos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
            
        </div>
        
        <div className="col-md-5 mt-3">
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
        </div>
      </div>
      
    </div>
  )
}
