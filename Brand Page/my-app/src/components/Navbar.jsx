import React from 'react';
import '../App.css';
function Navbar() {
  return (
    <>
    <nav className='container'>
    <div className='logo'>
        <img src="/images/brand_logo.png" alt="logo" />
    </div>
    <ul className='nav-list'>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <button className='nav-login'>Login</button>
    </nav>
    </>
  )
}

export default Navbar;
