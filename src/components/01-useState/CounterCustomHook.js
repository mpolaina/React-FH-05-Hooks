import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterCustomHook = () => {
  
  const { counter, increment, decrement, reset } = useCounter( 100 )
  
  return (
    
    <div className="p-5">
       <h1>Counter Custom Hook</h1> 
       <h1 className="my-3">
         Count <span className="badge bg-dark">{ counter }</span>
       </h1>
       
       <button className="btn btn-warning me-2" onClick={ decrement }>-1</button>
       <button className="btn btn-danger me-2" onClick={ reset } >Reset</button>
       <button className="btn btn-primary" onClick={ increment } >+1</button>
       
    </div>
  )
}
