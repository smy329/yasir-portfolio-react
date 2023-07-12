import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import ParticlesAnimation from './components/ParticlesAnimation';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  const introduceRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  // const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative h-screen container mx-auto p-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Sidebar />
        </div>

        <div className="col-span-8 pl-0 lg:pl-16">
          <div ref={introduceRef}>
            <Introduction />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={experiencesRef}>
            <Experience />
          </div>{' '}
          {/* <div ref={educationRef}>
            <Education />
          </div> */}
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Navbar
            scrollToIntroduce={() => scrollToSection(introduceRef)}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToSkills={() => scrollToSection(skillsRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToExperiences={() => scrollToSection(experiencesRef)}
            // scrollToEducation={() => scrollToSection(educationRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />
        </div>
      </div>
      <div className="z-10">
        <ParticlesAnimation />
      </div>
    </div>
  );
}

export default App;
