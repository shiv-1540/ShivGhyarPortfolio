import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import "./tailwind.css";


function App() {
  return (
    <div className="App bg-gray-900 text-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <Home />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Shivshankar Ghyar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;