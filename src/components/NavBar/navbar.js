import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import addressEmail from '../../assets/email.png';
import phone from '../../assets/phone.png';
import whatsapp from '../../assets/whatsapp.png';
import menu from '../../assets/menu.png';



const Navbar = () => {

  const [showMenu, setShowMenu] = useState (false);

  const email = 'buuvinhminh@gmail.com';
  const phoneNumber = '+66647386757';
  const whatsappNumber = '+33673953557';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappUrl;
  };

  


  return (
    <nav className='navbar'>
        <div className='menu'>
          <Link to="minhportfolio/" className='menuListItem'>About Me</Link>
          <Link to="/IT" className='menuListItem'>IT</Link>
          <Link to="/business" className='menuListItem'>Business</Link>
        </div>

        <div className='menuListContact'>
          <Button
          image={addressEmail}
          buttonText={email}
          buttonAction={handleEmailClick}
          />
          <a href={`tel:${phoneNumber}`}>
            <Button
            image={phone}
            buttonText='+66(0)647386757'
            />
          </a>
          
          <Button
          image={whatsapp}
          buttonText='+33(0)673953557'
          buttonAction={handleWhatsAppClick}
          />
        </div>

        <img src={menu} alt='menu' className='menuIcon' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='mobNav' style={{display:showMenu? 'flex':'none'}}>
          <Button
          image={addressEmail}
          buttonText={email}
          buttonAction={handleEmailClick}
          />
          <a href={`tel:${phoneNumber}`}>
            <Button
            image={phone}
            buttonText='+66(0)647386757'
            />
          </a>
          <Button
          image={whatsapp}
          buttonText='+33(0)673953557'
          buttonAction={handleWhatsAppClick}
          />
        </div>
        
    </nav>
  )
}

export default Navbar