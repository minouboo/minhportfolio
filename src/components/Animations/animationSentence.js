import React,{useEffect, useRef, useState} from 'react';
import './animationSentence.css'
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhotoGalleryModal from '../Modal/PhotoGalleryModal';
import LogoFigma from './../../assets/figma.png';
import LogoGitHub from './../../assets/github.png';


const AnimationSentence = ({title, projectDescription, sentences, picture, description, date, linkGitHub, linkFigma, linkPic}) => {

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

  const [modal, setModal] = useState(false);
  const [photos, setPhotos] = useState([]);

  const openPicGallery =()=>{
    setModal(true);
    setPhotos(linkPic);
    console.log(photos)
  };

  const closePicGallery = () => {
    setModal(false);
  };

  return (  

    <motion.div 
    variants={container}
    initial="hidden"
    animate={mainControls}
    className='experienceContainer'>
      <div className='ContainerSentence'>
        <div className='imageContainer'>
          <img src={picture} alt='no pics' className='imageCompany'/>
        </div>
        <div className='description'>
          <div className='companyTitle' ref={ref}>
            <span className='companyName'>{title}</span>
            <span className='companyTitleDescription'>{description}</span>
          </div>
          {linkGitHub && <Link to={linkGitHub} className='link'>Click here for the GitHub</Link>}
          {linkFigma && <Link to={linkFigma} className='link'>Click here for the Figma</Link>}
          {linkPic && (
              <a onClick={openPicGallery} className='link'>
                Click here for pictures
              </a>
            )}
          <motion.ul>
            <p className='descriptionCompany'>{projectDescription}</p>
            <p className='companyTitleDescription'>{date}</p>
            <p className='subtitle'>What I have done:</p>
            {sentences.map((sentence, index) => (
              <motion.li key={index} className="descriptionCompany" variants={item}>
                {sentence}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <PhotoGalleryModal isOpen={modal} close={closePicGallery} photos={photos} />
    </motion.div>

  )
}

export default AnimationSentence
