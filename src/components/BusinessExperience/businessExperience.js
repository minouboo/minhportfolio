import React from 'react';
import './../ItExperience/itExperience.css';
import Graduation from './../../assets/graduation.svg';
import AnimationSentence from '../Animations/animationSentence';
import LogoBLinked from './../../assets/LogoAloneBLinkedSolution.png';
import EnergaiaLogo from './../../assets/LogoEnergaiasmall2017.jpg';
import EGreenLogo from './../../assets/eGreen.webp';
import PayByPhoneLogo from './../../assets/PayByPhone.png';
import FrenchTech from './../../assets/FrenchTech.png';
import BLinked1 from './../../assets/BLinked1.JPG';
import BLinked2 from './../../assets/BLinked2.JPG';
import BLinked3 from './../../assets/BLinked3.JPG';
import EnerBis1 from './../../assets/EnerBis1.JPG';
import EnerBis2 from './../../assets/EnerBis2.jpg';
import EnerBis3 from './../../assets/EnerBis3.jpg';
import EnerBis4 from './../../assets/EnerBis4.JPG';
import EnerProd1 from './../../assets/EnerProd1.JPG';
import EnerProd2 from './../../assets/EnerProd2.JPG';
import EnerProd3 from './../../assets/EnerProd3.jpg';
import EnerProd4 from './../../assets/EnerProd4.jpg';



const businessExperience = () => {
  return (
    <section id='IT'>
      <span className='skillsTitle'>Education</span>
      <img src={Graduation} alt="Animated GIF" className='gif'/>
      <span>Master of Commercial Strategy and Business Development</span>

      <span className='skillsTitle'>Business Working Experience</span>
      
      <AnimationSentence
      title='B-LINKED SOLUTIONS'
      picture={LogoBLinked}
      description='Trading and Consulting , (HK)'
      link='http://www.b-linkedsolutions.com/'
      linkPic={[BLinked1, BLinked2, BLinked3]}
      projectDescription= 'Founder-CEO '
      date='(March 2019 - January 2021)'
      sentences={[
        "Established company in Hong-Kong.",
        "Developed business ventures around recycled plastic.",
        "Managed purchasing operations which involved factory visits, price negotiations, and logistical coordination.",
        "Provided comprehensive CSR marketing consultancy to FairAgora Thailand (IT food industry), focusing on fair labor practices, sustainable development, and engagement with local farmers.",
        "Managed the company's administrative responsibilities including paperwork and invoicing."
      ]}
      />

      <AnimationSentence
      title='Energaia'
      picture={EnergaiaLogo}
      description='Food ingredient and technology company specialised in Micro-algae (Bangkok Thailand)'
      linkPic={[EnerBis1, EnerBis2, EnerBis3, EnerBis4]}
      projectDescription= 'Business Development Director'
      date='(June 2014 - June 2018)'
      sentences={[
        "Collaborated closely with the CEO to identify, cultivate, and secure new clients, strategic partners, and investors, contributing to the company's growth and market expansion.",
        "Established and managed Key accounts for micro-algae-based food products across Thailand and Vietnam, resulting in a substantial 40% increase in sales.",
        "Negotiated and finalised long-term licensing agreements with multiple partners in France and Singapore, showcasing adept contract negotiation and partnership development skills.",
        "Led the end-to-end development of new micro-algae-based food products, covering conception, nutritional analysis, packaging design, labelling compliance, supplier selection, market assessment, and feasibility studies.",
        "Orchestrated the setup and management of exhibition booths at industry events and food markets, effectively promoting company products and driving customer acquisition.",
        "Oversaw and facilitated sponsorship initiatives with relevant partners and organisations.",
        "Distinguished participation in prominent funding challenges, securing AUD 500k through the Blue Economy Challenge and achieving the 2nd position in the ASEAN Impact Challenge."
      ]}
      />
      <AnimationSentence
      title='Energaia'
      picture={EnergaiaLogo}
      description='Food ingredient and technology company specialised in Micro-algae (Bangkok Thailand)'
      linkPic={[EnerProd1, EnerProd2, EnerProd3, EnerProd4]}
      projectDescription= 'Operation Manager'
      date='(June 2014 - June 2018)'
      sentences={[
        "Directed the coordination of order processing, personnel training, and the implementation of a new production site, contributing to enhanced operational efficiency.",
        "Scaled up production operations to meet escalating demand, achieving a 50% increase in production capacity.",
        "Streamlined the shipment of production systems to international licensing agreement contractors across diverse locations (France, Singapore, India, Bangladesh, Thailand) through process optimisation.",
        "Smoothed collaboration between the R&D and production teams (Thai and expats), resulting in heightened productivity and the implementation of user-friendly tools for streamlined production monitoring.",
        "Trained staff from licensing agreement contractors on the adept utilisation of the production system, ensuring effective knowledge transfer and operational excellence.",
        "Established production systems at various contractor sites in France, Singapore, Thailand  and Vietnam demonstrating adaptability and precision in complex operational environments"
      ]}
      />
      <AnimationSentence
      title='E-GREEN'
      picture={EGreenLogo}
      description='Energy reducing services (Paris, France)'
      projectDescription= 'Business Consultant'
      date='(September 2012 - February 2013)'
      sentences={[
        "Implemented ZOHO CRM system, resulting in a significant enhancement of client prospecting efficiency within the sales team.",
        "Conducted training sessions for the company team, equipping them with the necessary skills to leverage the CRM effectively within the prospecting strategy."
      ]}
      />
      <AnimationSentence
      title='PAYBYPHONE'
      picture={PayByPhoneLogo}
      description='Mobile payment services (Paris, France)'
      projectDescription= 'Assistant Sales Manager'
      date='(April 2011 - July 2011)'
      sentences={[
        "Implemented ZOHO CRM system to enhance client prospecting efficiency.",
        "Conducted training sessions for the company team, equipping them with the necessary skills to leverage the CRM effectively within the prospecting strategy.",
        "Orchestrated preparation of exhibitions, encompassing display design, procurement of promotional items, and booth setup.",
        "Developed a targeted marketing presentation tailored to public organisations.",
      ]}
      />

      <span className='skillsTitle'>Extra Professional</span>

      <AnimationSentence
      title='French Tech Bangkok'
      picture={FrenchTech}
      description='French Incubator (Bangkok Thailand)'
      sentences={[
        "Participated in incubator project by benchmark and visit coworking space to install potential French IT start-up that wants to set-up business in South East Asia."
      ]}
      />
      

    </section>
  )
}

export default businessExperience