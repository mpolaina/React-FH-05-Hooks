import React, { useEffect, useState } from 'react'

export const Message = () => {
  
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords
  
  useEffect(() => {
    
    const move = (event) => {
      const coords = { x: event.x, y: event.y}
      setCoords(coords)
    }
    
    window.addEventListener('mousemove', move)
    
    return () => {
      // CleanUp
      window.removeEventListener('mousemove', move)
    };
  }, [])
  
  return (
    <div>
      <h3>Eres un artista!</h3>
      <p>
        x: { x } y: { y }
      </p>
    </div>
  )
}
