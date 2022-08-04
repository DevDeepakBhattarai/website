import React from 'react'
import { NavLink} from 'react-router-dom'
export default function Navbar() {
  let activeStyle={
     color:'blue', 
     backgroundColor:'gray'
  }
  return ( 
   <nav>
     <h1 className="logo">Deepak</h1>
      <ul>
         <li><NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          className='nav-btn' to="/">Home</NavLink></li>
         <li><NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className='nav-btn' to='/contact'>Contact</NavLink> </li>
         <li><NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className='nav-btn' to="/content">Content</NavLink></li>
         <li><NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className='nav-btn' to="/news">News</NavLink></li>
      </ul>
   </nav>

  )
}
