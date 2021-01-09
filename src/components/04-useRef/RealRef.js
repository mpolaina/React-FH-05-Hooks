import React, { useState } from 'react'
import logo from '../../logo.svg'
import { MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

export const RealRef = () => {
  
  const [show, setShow] = useState(false)
  
  return (
    <div className="p-5">
      <h2 className="fw-bold">
        <img src={ logo } alt="" className="logo"/>
        Real Example useRef
      </h2>
      
      <button
        className="btn btn-primary mt-3"
        onClick={ () => setShow( !show ) }
      >Show/Hide
      </button>
      
      { show && <MultipleCustomHooks/> }
      
      
    </div>
  )
}
