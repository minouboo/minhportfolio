import './globalStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from "./Pages/home";
import ItExperiencePage from "./Pages/itExperiencePage";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/IT" element={<ItExperiencePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
