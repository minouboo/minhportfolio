import React from 'react';
import { motion } from "framer-motion";
import './animationImage.css';

const AnimationImage = ({image, text}) => {

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
    initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    className='imageContainer'>
      <motion.img
      variants={cardVariants}
       src={image} alt="Animated GIF" className='icon'/>
      <p className='skillText'>{text}</p>
    </motion.div>
  )
}

export default AnimationImage