
import { useState, useEffect, useRef  } from 'react';

export const useFetch = ( url ) => {

  const isMounted = useRef(true)
  
  const [state, setState] = useState({ data: null, loading: true, error: null })
  
  useEffect(() => {
    return () => {
      isMounted.current = false
      // cuando se desomanta el useFetch obtenemos la ref es false
    }
  }, [])
  
  useEffect( () => {
  
    setState({ data: null, loading: true, error: null})
    
    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
          
            // si el componente está montado se hace el setState
            if ( isMounted.current ){
              setState({ data, loading: false, error: null})
            } else {
              // si isMounted.current === false
              // console.log('setState no se llamó')
            }
          
      })
  }, [url])
  
  return state
  
}
