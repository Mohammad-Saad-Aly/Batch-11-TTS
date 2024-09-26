import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >

    <ul style={{display:'flex', width:'100%', justifyContent:"space-around"}}>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/products'>Products</Link>
    </ul>


    </div>
  )
}
