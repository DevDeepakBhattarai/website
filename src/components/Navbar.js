import React from 'react'
import {Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <nav>
     <h1 className="logo">Deepak</h1>
      <ul>
         <li><Link  className='nav-btn' to="/">Home</Link></li>
         <li><Link  className='nav-btn' to='/contact'>Contact</Link> </li>
         <li><Link  className='nav-btn' to="/content">Content</Link></li>
      </ul>
   </nav>

  )
}
