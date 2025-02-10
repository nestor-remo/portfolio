import ParticlesComponent from './components/particles.jsx'
import NavBar from './components/navbar.jsx';
import Project from './components/project.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import Hero from './components/hero.jsx';


import './App.css'

function App() {
  
  return (
    <div className='App'>
      <ParticlesComponent id='particles'/>
      <NavBar />
      
      <div className='content'>
        <section id='hero'>
          <Hero />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='projects'>
          <Project />
        </section>
        <section id='skills'>
          <Skills />
        </section>
      </div>
    </div>
  )
}

export default App;
