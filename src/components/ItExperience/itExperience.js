import React from 'react';
import './itExperience.css';
import MyICard from './../../assets/LogoMyECard.png';



const ItExperience = () => {

  /* const {ref: myRef, inView: visible, entry} = useInView(); */

  

  return (
    <section id='IT'>
      <h2>Education</h2>
      <span>Bachelor of Full Stack Web Developer Specialise Java</span>
      <span>Studi Digital Education</span>
      <span className='skillsTitle'>IT experience</span>
      <span className='skillDescription'>Results-driven IT professional in web development and business strategy. Adept at driving innovation, optimising user experiences, and skill fully managing cross-functional teams. Seeking an IT Project Manager role to harness technical expertise and business acumen for driving growth and delivering exceptional digital solutions.</span>
      
      <div className='experienceContainer'>
        <div className='imageContainer'>
          <img src={MyICard} alt="Animated GIF" className='gif'/>
        </div>
        <div className='description'>
          <div className='companyTitle'>
            <span className='companyName'>My ICard</span>
            <span className='companyTitleDescription'>Digital Business Card Application</span>
          </div>
          <div>
            <p className='descriptionCompany'>My ICard is a mobile application that will replace your paper business card. Share your business card with a Qr Code and update in real time your informations in order to never loose your contact. Managed your contacts in your own way in order to never forget your contact</p>
            <p /* ref={myRef} */ className='descriptionCompany'>What I have done:</p>
            <p className= 'descriptionCompany'>Design a Figma prototype, optimising the user experience and interface for the mobile application.</p>
            <p className= 'descriptionCompany'>Code the front-end using React-Native, base on the Figma prototype.</p>
            <p className= 'descriptionCompany'>Integrate the mobile application with backend services by utilising Java SpringBoot APIs.</p>
           {/*  <div>
              {visible ? (
              <div>
                <p className= {`${'descriptionCompany'} ${visible ? 'animatedDescriptionComapny' : ''}`}>Design a Figma prototype, optimising the user experience and interface for the mobile application.</p>
                <p className= {`${'descriptionCompany'} ${visible ? 'animatedDescriptionComapny' : ''}`}>Code the front-end using React-Native, base on the Figma prototype.</p>
                <p className= {`${'descriptionCompany'} ${visible ? 'animatedDescriptionComapny' : ''}`}>Integrate the mobile application with backend services by utilising Java SpringBoot APIs.</p>
              </div>): 'no'}
              
            </div> */}
            
          </div>
          
        </div>
        
      </div>

    </section>


  )
}

export default ItExperience