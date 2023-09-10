import React,{useRef, useEffect} from 'react';
import './intro.css';
import Profile from '../../assets/Profile.jpg';
import { Link } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';

const Intro = () => {

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
        
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Minh</span><br/>Full Stack Web Developper<br/>Business Developper</span>
          <p className='introPara'>Results-driven and skilled professional with experience in both business and web development.</p>
          
        
      </motion.div>
      
      <div className='picContainer'>
        <img src={Profile} alt='' className='profilePic'/>
      </div>  

    </section>
  )
}

export default Intro