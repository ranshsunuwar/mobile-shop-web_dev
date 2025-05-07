import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">📱 MobileBazaar</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Deals</li>
        <li>Login</li>
        <li>Cart 🛒</li>
      </ul>
    </nav>
  )
}

export default Navbar
