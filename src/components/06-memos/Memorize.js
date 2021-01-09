import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import logo from '../../logo.svg'

export const Memorize = () => {
  
  const { counter, increment } = useCounter( 10 )
  const [show, setShow] = useState(true)
  
  
  return (
    <div className="p-5">
      <h2 className="fw-bold">
        <img src={ logo } alt="" className="logo"/>
        Memorize
      </h2>
      
      <h3 className="fw-light">
        Counter: <Small value={ counter }/>
      </h3>
      <p className="w-75">El componente <b>Small</b> usa la función memo, que evita el renderizado del mismo si no cambia su valor, cuando se detecta un cambio.</p>
      
      <button 
        className="btn btn-dark btn-sm px-3"
        onClick={ increment }
      >
        +1
      </button>
      
      <button 
        className="btn btn-outline-dark btn-sm ms-2"
        onClick={ () => {setShow( !show )} }
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
       
    </div>
  )
}
