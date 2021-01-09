import React from 'react'

export const Small = React.memo( ({ value }) => {
  
  console.log('Me he llamado')
  
  return (
    <small>
      { value }
    </small>
  )
})