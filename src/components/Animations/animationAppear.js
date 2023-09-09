import React, { Children } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const animationAppear = ( animate, className) => {


  return (
    <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {animate}
      transition={{duration:0.5, delay:0.5}}
      className={className}>
        
      </motion.div>
  )
}

export default animationAppear