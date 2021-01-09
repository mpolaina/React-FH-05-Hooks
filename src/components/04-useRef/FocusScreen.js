import React, { useRef } from 'react'
import logo from '../../logo.svg'

export const FocusScreen = () => {
  
  const inputRef = useRef()
  console.log(inputRef)
  
  const handleClick = () => {
    inputRef.current.select()
  }
  
  return (
    
    <div className="p-5">
      <h2 className="fw-bold"> <img src={ logo } alt="" className="logo"/>Focus Screen</h2>
      <div className="form-group">
          <label className="form-label fw-bold">Nombre</label>
          <input
            ref={ inputRef } 
            className="form-control w-50"
            placeholder="Su nombre"
            type="text"
          />
      </div>
      <button 
        className="btn btn-outline-primary mt-3"
        onClick={ handleClick }
      >Focus</button>
    </div>
  )
}
