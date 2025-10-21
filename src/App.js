import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/**
 * Main App Component
 * 
 * This is the root component that orchestrates all sections of the website.
 * It uses a single-page application structure with smooth scrolling navigation.
 * 
 * Structure:
 * - Navbar: Fixed navigation bar with smooth scroll links
 * - Hero: Animated landing section with CTA
 * - Services: Three core service offerings with interactive cards
 * - About: Company information with animated statistics
 * - Portfolio: Project showcase with image effects
 * - Contact: Form with validation and animations
 * - Footer: Social links and company info
 */
function App() {
  return (
    <div className="App">
      {/* Fixed Navigation Bar */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - First impression with animations */}
        <Hero />
        
        {/* Services Section - Core offerings */}
        <Services />
        
        {/* About Section - Company story and stats */}
        <About />
        
        {/* Portfolio Section - Work showcase */}
        <Portfolio />
        
        {/* Contact Section - Get in touch form */}
        <Contact />
      </main>
      
      {/* Footer - Social and legal info */}
      <Footer />
    </div>
  );
}

export default App;
