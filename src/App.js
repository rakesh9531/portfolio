// src/App.js
import React, { Suspense, lazy } from 'react';
import './index.css';

// Import Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SocialIcons from './components/SocialIcons';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const Services = lazy(() => import('./sections/Services'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Skills = lazy(() => import('./sections/Skills'));
const ContactForm = lazy(() => import('./components/ContactForm'));

const Section = ({ title, children, id }) => (
  <section id={id} className="content-section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <main className="main-content">
          <Hero />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Section title="GET IN TOUCH" id="contact">
            <ContactForm />
          </Section>
        </main>
      </Suspense>
      <footer className="footer">
        <SocialIcons />
        <p>© {new Date().getFullYear()} Rakesh Kumar Sharma. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
}