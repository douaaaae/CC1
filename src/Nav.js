import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';
export default function Nav() {
  return (
    <nav>
   <Link to='/' className='nav-link'>Composant 1</Link>
   <Link to='/Composant2' className='nav-link' >Composant 2</Link>
   <Link to='/Composant3' className='nav-link' >Composant 3</Link>
   </nav>
  )
}
