import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Background />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;