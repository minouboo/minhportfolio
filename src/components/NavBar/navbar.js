import React from 'react';
import './navbar.css';
import contact from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'>
          <Link className='menuListItem'>Home</Link>
          <Link className='menuListItem'>IT</Link>
          <Link className='menuListItem'>Business</Link>
          <Link className='menuListItem'>About</Link>
        </div>
        <button className='menuButton'>
          <img src={contact} alt="" className='menuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar