import React, { useState } from 'react'

export const CounterApp = () => {
  
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  })
  
  const { counter1, counter2 } = state
  
  return (
    <div className="p-5">
     <h1>Counter1: { counter1 }</h1> 
     <h1>Counter2: { counter2 }</h1> 
     <hr/>
     <button 
        className="btn btn-primary btn-sm"
        onClick={ () => {
          setState({
            ...state,
            counter1: counter1 + 1, 
          })
        }}
     >Aumentar</button>
    </div>
  )
}
