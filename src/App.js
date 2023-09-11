import './globalStyles.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/NavBar/navbar';
import Home from "./Pages/home";
import ItExperiencePage from "./Pages/itExperiencePage";
import BusinessPage from './Pages/businessPage';
import React from 'react';
import Footer from './components/Footer/footer';


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <ScrollToTop /> {/* Include the ScrollToTop component */}
        <div>
          <Routes> 
            <Route path="minhportfolio/" element={<Home />} /> 
            <Route path="/IT" element={<ItExperiencePage />} /> 
            <Route path="/business" element={<BusinessPage />} /> 
          </Routes>
        </div>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
