import React from 'react';
import './navbar.css';
import contact from '../../assets/contact.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'>
          <Link to="minhportfolio/" className='menuListItem'>About Me</Link>
          <Link to="/IT" className='menuListItem'>IT</Link>
          <Link to="/business" className='menuListItem'>Business</Link>
        </div>
        <button className='menuButton'>
          <img src={contact} alt="" className='menuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar