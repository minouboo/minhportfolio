import React,{useRef, useEffect} from 'react';
import './../Intro/intro.css';
import './../ItExperience/introIT.css';
import Profile from '../../assets/Profile.jpg';
import { Link } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';
import animationDev from './../../assets/animationDev.gif';
import PicProfilePro from './../../assets/PicProfilePro.jpg';


const IntroBusiness = () => {

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
        
          
          <span className='introName'>International Business Development</span>
          <span className='introName'>&</span>
          <span className='introName'>Project Management</span>
          <p className='introPara'>Experienced professional with a blend of business acumen and web development expertise. Passionate about leveraging technology to drive international business growth and innovation.</p>
          
        
      </motion.div>
      
      <div className='picContainer'>
        <img src={PicProfilePro} alt='' className='gifIT'/>
      </div>  

    </section>
  )
}

export default IntroBusiness