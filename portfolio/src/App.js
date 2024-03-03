import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/services';
import Contact from './Components/Contact';
import Skills from './Components/skills';
import GoToTop from './Components/GoToTop';
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <GoToTop/>
    </Router>
   
  );
}

export default App;
