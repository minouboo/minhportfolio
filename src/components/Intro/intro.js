import React from 'react';
import './intro.css';
import Profile from '../../assets/Profile.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
    
      

      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Minh</span><br/>Full Stack Web Developper</span>
        <p className='introPara'>Results-driven IT professional in web development and business strategy. Adept at driving innovation, optimising user experiences, and skill fully managing cross-functional teams.</p>
        <Link><button className='button'>Hire me!</button></Link>
      </div>

      <div className='picContainer'>
        <img src={Profile} alt='' className='profilePic'/>
      </div>
      

    </section>
  )
}

export default Intro