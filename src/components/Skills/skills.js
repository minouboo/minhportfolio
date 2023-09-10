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
import animationAppear from '../Animations/animationAppear';
import AnimationImage from '../Animations/animationImage';
import france from './../../assets/france.png';
import england from './../../assets/united-kingdom.png';
import spain from './../../assets/spain.png';
import vietnam from './../../assets/vietnam.png';
import thai from './../../assets/thailand.png';


const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: false} );
  const mainControls = useAnimation();
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, {once: false} );
  const mainControls1 = useAnimation();
  useEffect(()=>{
    if(isInView1){
      mainControls1.start("visible")
    }
  },[isInView1]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {once: false} );
  const mainControls2 = useAnimation();
  useEffect(()=>{
    if(isInView2){
      mainControls2.start("visible")
    }
  },[isInView2]);

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
              <AnimationImage
                image={businessNegotiation}
                text="International Business"/>
              <AnimationImage
                image={supplier}
                text="Supplier"/>
              <AnimationImage
                image={marketing}
                text="Marketing"/>            
            </div>
          </div>          
        </div>
      </motion.div>

      <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {mainControls1}
      transition={{duration:0.5, delay:0.5}}
      className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle' ref={ref1}>IT Project Management</h2>
            <div className='descriptionSkill'>
              <AnimationImage
                image={agile}
                text="Clients Needs"/>
              <AnimationImage
                image={prototype}
                text="Prototype"/>
              <AnimationImage
                image={clientsNeeds}
                text="Agile Method"/>           
            </div>
          </div>          
        </div>
      </motion.div>

      <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {mainControls2}
      transition={{duration:0.5, delay:0.5}}
      className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle' ref={ref2}>Web Development</h2>
            <div className='descriptionSkill'>
              <AnimationImage
                image={react}
                text="React/React-Native"/>
              <AnimationImage
                image={java}
                text="Java Springboot"/>
              <AnimationImage
                image={htmlImg}
                text="HTML/CSS/Javascript"/> 
            </div>
            <div className='descriptionSkill'>
              <AnimationImage
                image={mySql}
                text="MySQL"/>
              <AnimationImage
                image={postGre}
                text="PostgreSQL"/>          
            </div>
          </div>          
        </div>
      </motion.div>

      <motion.div 
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden"
      animate= {mainControls2}
      transition={{duration:0.5, delay:0.5}}
      className='skillBars'>
        <div className='skillBar'>
          <div className='descriptionContainer'>
            <h2 className='descriptionTitle' ref={ref2}>Language</h2>
            <div className='descriptionSkill'>
              <AnimationImage
                image={france}
                text="French (native)"/>
              <AnimationImage
                image={england}
                text="English (fluent)"/>
              <AnimationImage
                image={spain}
                text="Spanish (Intermediate)"/> 
            </div>
            <div className='descriptionSkill'>
              <AnimationImage
                image={vietnam}
                text="Vietnamese (Spoken)"/>
              <AnimationImage
                image={thai}
                text="Thai (Elementary)"/>          
            </div>
          </div>          
        </div>
      </motion.div>

      
    </section>
  )
}

export default Skills