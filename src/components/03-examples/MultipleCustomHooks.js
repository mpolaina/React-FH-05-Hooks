import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {
  
  // custom Hooks
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  const { author, quote } = !!data && data[0] // si existe data, extrae la posición [0]
  
  
  
  return (
    <div className="p-5">
      
        <h2>BreakinBad Quotes <small className="text-info">Custom Hooks</small></h2>
        
        { 
          loading
          ? 
            (
              <div className="alert alert-info text-center">Loading...</div>
            )
          :
            (
              <div className="card bg-light w-50 my-4">
                <div className="card-body">
                  <blockquote className="blockquote">
                    <p className="mb-4"> { quote } </p>
                    <footer className="blockquote-footer">{ author }</footer>
                  </blockquote>
                </div>
              </div>
            )
        }
        
        <button 
            className="btn btn-warning"
            onClick={ increment }
        >Quote me!</button>
        
        
        
        
    </div>
  )
}
