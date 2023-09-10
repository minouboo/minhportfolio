import React,{useRef, useEffect} from 'react';
import './../Intro/intro.css';
import './introIT.css';
import Profile from '../../assets/Profile.jpg';
import { Link } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';
import animationDev from './../../assets/animationDev.gif'


const IntroIT = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true} );
  const mainControls = useAnimation();
  

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);

  return (
    <section id='intro' ref={ref}>
      
      <motion.div
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0},
        }}
        initial="hidden"
        animate= {mainControls}
        transition={{duration:0.5, delay:0.5}}
        className='introContent'
        >
        
          
          <span className='introName'>Full Stack Web Developper</span>
          <p className='introPara'>Professional in web development and business strategy. Adept at driving innovation, optimising user experiences, and skill fully managing cross-functional teams.</p>
          
        
      </motion.div>
      
      <div className='picContainer'>
        <img src={animationDev} alt='' className='gifIT'/>
      </div>  

    </section>
  )
}

export default IntroIT