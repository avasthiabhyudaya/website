import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import SkillsSection from './Components/SkillsSection';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
    </>
  );
}

export default App;
