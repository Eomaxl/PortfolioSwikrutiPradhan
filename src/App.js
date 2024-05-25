import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from './components/Pages/Homepage/Homepage';
import Design from './components/Pages/Design/Design';
import Research from './components/Pages/Research/Research';
import Consultation from './components/Pages/Consult/Consult';
import Academia from './components/Pages/Academia/Academia';
import Project from './components/Pages/Projects/Project';
import Awards from './components/Pages/Awards/Awards';
import Feature from './components/Pages/Features/Feature';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Journal from "./components/Pages/Journal/Journal";

function App() {
  return (
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Design" element={<Design/>}/>
            <Route path="/Research" element={<Research/>}/>
            <Route path="/Consultation" element={<Consultation/>}/>
            <Route path="/Academia" element={<Academia/>}/>
            <Route path="/Projects" element={<Project/>}/>
            <Route path="/Awards" element={<Awards/>}/>
            <Route path="/Features" element={<Feature/>}/>
            <Route path="/Journal" element={<Journal/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
