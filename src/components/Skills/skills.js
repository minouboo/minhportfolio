import React,{useEffect, useRef} from 'react';
import './skills.css';
import businessNegotiation from './../../assets/businessNegotation.svg';
import marketing from './../../assets/marketing.svg';
import supplier from './../../assets/supplier.svg';
import clientsNeeds from './../../assets/clientsNeeds.svg';
import agile from './../../assets/agile.svg';
import prototype from './../../assets/prototype.svg';
import java from './../../assets/java.png';
import htmlImg from './../../assets/html.svg';
import react from './../../assets/react.svg';
import mySql from './../../assets/mysql.png';
import postGre from './../../assets/postgre.png';
import { motion, useInView, useAnimation } from 'framer-motion';


const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true} );
  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);

  


  return (
    <section id='skills' >
      <span className='skillsTitle'>My Skills</span>
      <span className='skillDescription'>Equipped with a diverse skill set and a passion for technology, I am seeking opportunities to contribute my expertise in driving business growth and delivering innovative web solutions.</span>
      
      <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {mainControls}
      transition={{duration:0.5, delay:0.5}}
      className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle' ref={ref}>Business Development</h2>
            <div className='descriptionSkill'>
              <div className='imageContainer'>
                <img src={businessNegotiation} alt="Animated GIF" className='gif'/>
                <p className='skillText'>International Business</p>
              </div>
              <div className='imageContainer'>
                <img src={supplier} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Supplier</p>
              </div>
              <div className='imageContainer'>
                <img src={marketing} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Marketing</p>
              </div>              
            </div>
          </div>          
        </div>
      </motion.div>

      <div className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle'>IT Project Management</h2>
            <div className='descriptionSkill'>
              <div className='imageContainer'>
                <img src={agile} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Clients Needs</p>
              </div>
              <div className='imageContainer'>
                <img src={prototype} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Prototype</p>
              </div>
              <div className='imageContainer'>
                <img src={clientsNeeds} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Agile Method</p>
              </div>              
            </div>
          </div>          
        </div>
      </div>

      <div className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle'>Web Development</h2>
            <div className='descriptionSkill'>
              <div className='imageContainer'>
                <img src={react} alt="Animated GIF" className='gif'/>
                <p className='skillText'>React/React-Native</p>
              </div>
              <div className='imageContainer'>
                <img src={java} alt="Animated GIF" className='gif'/>
                <p className='skillText'>Java Springboot</p>
              </div>
              <div className='imageContainer'>
                <img src={htmlImg} alt="Animated GIF" className='gif'/>
                <p className='skillText'>HTML/CSS/Javascript</p>
              </div>        
            </div>
            <div className='descriptionSkill'>
              <div className='imageContainer'>
                <img src={mySql} alt="Animated GIF" className='gif'/>
                <p className='skillText'>MySQL</p>
              </div>  
              <div className='imageContainer'>
                <img src={postGre} alt="Animated GIF" className='gif'/>
                <p className='skillText'>PostgreSQL</p>
              </div>           
            </div>
          </div>          
        </div>
      </div>

      
    </section>
  )
}

export default Skills