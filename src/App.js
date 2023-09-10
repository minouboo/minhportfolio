import './globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/NavBar/navbar';
import Home from "./Pages/home";
import ItExperiencePage from "./Pages/itExperiencePage";
import BusinessPage from './Pages/businessPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Routes> 
            <Route path="minhportfolio/" element={<Home />} /> 
            <Route path="/IT" element={<ItExperiencePage />} /> 
            <Route path="/business" element={<BusinessPage />} /> 
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
