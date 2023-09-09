import React, { Children } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const animationAppear = (Children,mainControls) => {


  return (
    <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {mainControls}
      transition={{duration:0.5, delay:0.5}}>
        {Children}
      </motion.div>
  )
}

export default animationAppear