import React from 'react';
import { motion } from 'framer-motion';
import './animationImage.css';

const AnimationImage = ({image, text}) => {

  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className='imageContainer'>
      <img src={image} alt="Animated GIF" className='gif'/>
      <p className='skillText'>{text}</p>
    </motion.div>
  )
}

export default AnimationImage