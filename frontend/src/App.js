import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import About from './components/About';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* Single Page Application with All Sections */}
      <div className="scroll-smooth">
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen">
          <About />
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen">
          <Education />
        </section>
      </div>
    </div>
  );
}

export default App;