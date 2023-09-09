import './globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from "./Pages/home";
import ItExperiencePage from "./Pages/itExperiencePage";
import Navbar from './components/NavBar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Routes> 
            <Route path="minhportfolio/" element={<Home />} /> 
            <Route path="/IT" element={<ItExperiencePage />} /> 
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
