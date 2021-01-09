import React, { useState, useCallback } from 'react'
import logo from '../../logo.svg'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState( 10 )
  
  // const increment = () => {
  //   setCounter( counter + 1)
  // }
  
  const increment = useCallback(
    ( num ) => {
      setCounter( c => c + num)
    },
    [ setCounter ],
  )
  
  return (
  
  <div className="p-5">
    <h3 className="fw-bold">
      <img src={ logo } alt="" className="logo"/>
      Callback Hook
    </h3>
    <h4 className="fw-light"> Counter: { counter }</h4>
    <ShowIncrement increment={ increment }/>
    </div>
  )
}
