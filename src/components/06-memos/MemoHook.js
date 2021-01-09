import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import logo from '../../logo.svg'

export const MemoHook = () => {
  
  const { counter, increment } = useCounter( 5000 )
  const [show, setShow] = useState(true)
  
  const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])
  
  return (
    <div className="p-5">
      <h3 className="fw-bold">
        <img src={ logo } alt="" className="logo"/>
        Memo Hook
      </h3>
      
      <p>{ memoProcesoPesado }</p>
     
      
      <h3 className="fw-light">
        Counter: { counter }
      </h3>
      <p className="w-75">useMemo <b>devuelve un valor memorizado</b> y tiene como parámetros una <b>función</b> que se ejecuta durante el renderizado y un arreglo de <b>dependencias</b>, que cuando cambian, se vuelve a calcular el valor memorizado.</p>
      <code> const valorMemorizado = useMemo( () => funcion(parametro), [parametro] )</code>
      <br/><br/>
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
