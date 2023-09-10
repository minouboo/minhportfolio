import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Intro from '../components/Intro/intro';
import Skills from '../components/Skills/skills';


const Home = () => {
  return (
    <div className="App">
      <Intro/>
      <Skills/>
    </div>
  )
}

export default Home