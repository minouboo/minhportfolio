import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills";
import ItExperience from "./components/ItExperience/itExperience";
import './globalStyles.css'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <ItExperience/>
    </div>
  );
}

export default App;
