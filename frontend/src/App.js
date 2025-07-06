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
      
      {/* Single Page Application with Seamless Sections */}
      <div className="scroll-smooth">
        {/* Home Section */}
        <section id="home" className="section-content">
          <div className="content-container">
            <Home />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-content">
          <div className="content-container">
            <Projects />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-content">
          <div className="content-container">
            <Certifications />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-content">
          <div className="content-container">
            <About />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-content">
          <div className="content-container">
            <Education />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;