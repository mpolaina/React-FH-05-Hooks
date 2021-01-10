import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'

// fn init retorna el initialstate
const init = () => {
   
    return JSON.parse(localStorage.getItem('todos')) || []
    
}

export const TodoApp = () => {
  
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)
  
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
  
  const handleAddTodo = ( newTodo ) => {
      
      dispatch({
        type: 'add',
        payload: newTodo
      })
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
          
          <AddTodo handleAddTodo={ handleAddTodo }/>
          
        </div>
      </div>
      
    </div>
  )
}
