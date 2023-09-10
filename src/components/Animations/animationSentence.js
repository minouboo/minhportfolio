import React,{useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimationSentence = ({title, projectDescription, sentences, picture, description}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: false} );
  const mainControls = useAnimation();
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:0.5,
        delayChildren: 1,
        staggerChildren: 0.5
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (  

    <motion.div 
    variants={container}
    initial="hidden"
    animate={mainControls}
    className='experienceContainer'>
      <div className='imageContainer'>
        <img src={picture} alt="Animated GIF" className='gif'/>
      </div>
      <div className='description'>
        <div className='companyTitle' ref={ref}>
          <span className='companyName'>{title}</span>
          <span className='companyTitleDescription'>{description}</span>
        </div>
        <motion.ul>
          <p className='descriptionCompany'>{projectDescription}</p>
          <p className='subtitle'>What I have done:</p>
          {sentences.map((sentence, index) => (
            <motion.li key={index} className="descriptionCompany" variants={item}>
              {sentence}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>

  )
}

export default AnimationSentence
