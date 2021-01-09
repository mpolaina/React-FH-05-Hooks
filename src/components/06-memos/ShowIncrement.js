import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
  
  console.log('Me volví a ejecutar')
  
  return (
  
      <button 
        className="btn btn-dark"
        onClick={ () => {
          increment( 5 )
        }}
      >
        Incrementar
     </button>
    
  )
})
