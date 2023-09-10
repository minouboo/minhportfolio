import React from 'react';
import './itExperience.css';
import MyICard from './../../assets/LogoMyECard.png';
import Graduation from './../../assets/graduation.svg';
import Mobile from './../../assets/mobile.svg';
import Computer from './../../assets/computer.svg';
import TaskManagement from './../../assets/taskManagement.svg'
import AnimationSentence from '../Animations/animationSentence';

const ItExperience = () => {

  

  return (
    <section id='IT'>
      <span className='skillsTitle'>Education</span>
      <img src={Graduation} alt="Animated GIF" className='gif'/>
      <span>Bachelor of Full Stack Web Developer Specialise Java</span>
      
      <span className='skillsTitle'>IT Working Experience</span>
      
      <AnimationSentence
      picture={MyICard}
      title='My ICard'
      description='Digital Business Card Application'
      projectDescription= 'My ICard is a mobile application that will replace your paper business card. Share your business card with a Qr Code and update in real time your informations in order to never loose your contact. Managed your contacts in your own way in order to never forget your contact'
      sentences={[
        "Design a Figma prototype, optimising the user experience and interface for the mobile application.",
        "Code the front-end using React-Native, base on the Figma prototype.",
        "Integrate the mobile application with backend services by utilising Java SpringBoot APIs."
      ]}
      />

      <AnimationSentence
      picture={Mobile}
      title='CashAPP'
      description='Payment Platform'
      projectDescription= 'Mobile Application to easily transfer money between friends'
      sentences={[
        "Design a Figma prototype, optimising the user experience and interface for the mobile application.",
        "Code the front-end using React-Native, base on the Figma prototype.",
        "Integrated Firebase Authentication into the front-end architecture."
      ]}
      />

      <span className='skillsTitle'> IT Project</span>

      <AnimationSentence
      picture={Computer}
      title='Real Estate Property Management'
      projectDescription= 'Developed a sophisticated Real Estate Web application utilising the SpringBoot framework, integrating both back-end and front-end functionalities'
      sentences={[
        "Implemented the back-end of the application using Java SpringBoot.",
        "Elaborated a Figma prototype to create a solid base for developing the app.",
        "Implemented user authentication through SpringBoot Security.",
        "Established a database using PostgreSQL, optimising data storage, retrieval, and management within the Real Estate Web application.",
        "Enriched the application with features including user registration, an integrated chat messenger, streamlined rental payment processes, and automated lease contract validation.",
        "Deployed the Real Estate Web application using Docker."
      ]}
      />

      <AnimationSentence
      picture={TaskManagement}
      title='Project Management'
      projectDescription= 'Olympic Games Ticket Booking Project Management using KanBan Method and Trello'
      sentences={[
        "Elaborated a comprehensive task list, ensuring the clear tracking and execution of project sprint, using Trello as project management tool.",
        "Formulated Functional Test Plan, evaluating the application's performance and ensuring the delivery of a high-quality product.",
        "Conducted a analysis of potential project risks."
      ]}
      />

      <AnimationSentence
      picture={Computer}
      title='WordPress Project'
      projectDescription= 'Booking appointment app for Covid Vaccine using WordPress:'
      sentences={[
        "Designed and implemented a registration form.",
        "Deployed the Booking Appointment application on Planet Hoster server."
      ]}
      />

    </section>


  )
}

export default ItExperience