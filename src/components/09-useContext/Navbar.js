import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container-fluid">
          
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
              <NavLink exact to="about" className="nav-link">About</NavLink>
              <NavLink exact to="login" className="nav-link">Login</NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

