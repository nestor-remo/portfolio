import { Element } from 'react-scroll';
import ParticlesComponent from './components/particles.jsx';
import NavBar from './components/navbar.jsx';
import Project from './components/project.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import About from './components/about.jsx';

function App() {
  return (
    <div className="text-white mx-auto flex flex-col justify-center px-4 max-w-3xl">
      <ParticlesComponent id="particles" className="absolute -z-10 w-full h-full" />
      <NavBar />
      
      <div className="space-y-12">
        <Element name="about" className="min-h-screen flex flex-col justify-center items-center mt-[-100px]">
          <About />
        </Element>
        <Element name="experience" className="min-h-screen flex flex-col justify-center items-center">
          <Experience />
        </Element>
        <Element name="projects" className="min-h-screen flex flex-col justify-center items-center">
          <Project />
        </Element>
        <Element name="skills" className="min-h-screen flex flex-col justify-center items-center">
          <Skills />
        </Element>
      </div>
    </div>
  );
}

export default App;

