import React from 'react'

export const TodoListItem = ( {todo, index, handleToggle, handleDelete} ) => {
  return (
    <li
      key={ todo.id }
      className="list-group-item d-flex align-items-center justify-content-between"
    >
        <p 
          className={`${ todo.done && 'complete'}`}
          onClick={ () => handleToggle(todo.id) }
        > 
          { index + 1 }. { todo.desc } 
        </p>
        <button 
          className="btn btn-outline-danger ms-2"
          onClick={ () => handleDelete( todo.id ) }
        >
          <i className="fi fi-trash"></i>
        </button>
    </li>
  )
}
