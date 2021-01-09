import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

export const LayoutEffect = () => {
  
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  const { quote } = !!data && data[0] 
  
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({})
  
  useLayoutEffect(() => {  
    setBoxSize( pRef.current.getBoundingClientRect() )
  }, [quote])
  
  return (
    <div className="p-5">
      
        <h2>Layout Effect <small className="text-info">Hooks</small></h2>
          
        <blockquote className="blockquote">
            <p 
               className="mb-4"
               ref= { pRef }
            > 
              { quote }
            </p>
        </blockquote>
            
        <pre>
            { JSON.stringify( boxSize, null, 3 )}
        </pre>
        
        <button 
            className="btn btn-warning"
            onClick={ increment }
        >Quote me!
        </button>
        
        
        
        
    </div>
  )
}
