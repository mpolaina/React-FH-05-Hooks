import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
      setCounter( counter + 1)
    }
    
    const decrement = () => {
      setCounter( counter - 1)
    }
    
    const reset = () => {
      setCounter(initialState)
    }
    
    return {
      counter,
      increment,
      decrement,
      reset
    }
}

// con el factor definimos el multiplo para aumentar en el parámetro de la función  aumentar 

// const aumentar = ( factor = 1 ) => {
//   setState( state + factor)
// }

// se llamaría así a la función --> () => disminuir( 2 ) -- disminuye de 2 en 2