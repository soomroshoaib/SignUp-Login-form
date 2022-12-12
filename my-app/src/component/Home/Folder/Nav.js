import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../../App.css"

const Nav = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/About"> About</NavLink></li>
        <li> <NavLink to="/Contact"> Contact</NavLink></li>
        <li><NavLink to="/Signup">Signup</NavLink></li>
        <li> <NavLink to="/Login"> Login</NavLink> </li>
      </ul>
        
        
        
    </div>
  )
}

export default Nav