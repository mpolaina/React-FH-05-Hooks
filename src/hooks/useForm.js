import { useState } from "react"

export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState(initialState)
   
  const reset = () => {
    setValues( initialState )
  }
    
  // desestructuramos el target del event
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name] : target.value
    })
  }
  
  return [ values, handleInputChange, reset ]
  
}

/*
    Custom Hook que recibe un objeto - initialState
    con la fn hInputChange para leer el valor del input
*/