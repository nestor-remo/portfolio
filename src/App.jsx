import ParticlesComponent from './components/particles.jsx'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import Project from './components/project.jsx';
import Experience from './components/experience.jsx';
import Contact from './components/contact.jsx';
import Hero from './components/hero.jsx';


import './App.css'

function App() {
  
  return (
    <div className='App'>
      <ParticlesComponent id='particles'/>
      <NavBar />
      
      <div className='content'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
