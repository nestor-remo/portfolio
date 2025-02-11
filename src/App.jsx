import { Element } from 'react-scroll';
import ParticlesComponent from './components/particles.jsx'
import NavBar from './components/navbar.jsx';
import Project from './components/project.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import About from './components/about.jsx';


import './App.css'

function App() {
  
  return (
    <div className='App'>
      <ParticlesComponent id='particles'/>
      <NavBar />
      
      <div className='content'>
        <Element name='about' className='section first'>
          <About />
        </Element>
        <Element name='experience' className='section'>
          <Experience />
        </Element>
        <Element name='projects' className='section'>
          <Project />
        </Element>
        <Element name='skills' className='section'>
          <Skills />
        </Element>
      </div>
    </div>
  )
}

export default App;
