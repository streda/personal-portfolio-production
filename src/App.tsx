import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      {/* Navbar*/}
      <header className="fixed top-0 w-full z-50 shadow-md bg-white">
        <Navbar />
      </header>

      {/* Content */}
      <main className="mt-20 flex-grow space-y-24">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;