import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

/**
 * Navbar Component
 * 
 * A responsive navigation bar with the following features:
 * - Smooth scroll to sections
 * - Background blur effect on scroll
 * - Mobile hamburger menu
 * - Active link highlighting
 * - Smooth transitions for all interactions
 * 
 * The navbar becomes semi-transparent with backdrop blur when scrolling,
 * creating a modern glass morphism effect.
 */
const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  
  // State for navbar background on scroll
  const [scrolled, setScrolled] = useState(false);
  
  // State for active section
  const [activeSection, setActiveSection] = useState('home');

  /**
   * Handle scroll event to add background blur to navbar
   * Updates scrolled state when user scrolls past 50px
   */
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Navigation menu items
   * Each item has a label and corresponding section ID for smooth scrolling
   */
  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Contact', href: 'contact' },
  ];

  /**
   * Handle smooth scroll to section
   * @param {string} sectionId - ID of the target section
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-lg shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Innovative Developer
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 animated-underline ${
                    activeSection === item.href
                      ? 'text-accent-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cobalt to-accent-cyan"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-lg border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                activeSection === item.href
                  ? 'text-accent-cyan bg-dark-700'
                  : 'text-gray-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
