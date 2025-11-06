import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaHeart, FaArrowUp } from 'react-icons/fa';

/**
 * Footer Component
 * 
 * Features:
 * - Social media links with hover animations
 * - Quick navigation links
 * - Newsletter subscription
 * - Copyright information
 * - Scroll to top button
 * - Smooth transitions and hover effects
 * 
 * Sections:
 * - Company info and tagline
 * - Quick links (navigation)
 * - Services list
 * - Social media icons
 * - Legal links
 */
const Footer = () => {
  /**
   * Scroll to top function
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Scroll to section
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Social media links
   */
  const socialLinks = [
    { icon: FaFacebook, url: '#', color: 'hover:text-blue-500', label: 'Facebook' },
    { icon: FaTwitter, url: '#', color: 'hover:text-sky-500', label: 'Twitter' },
    { icon: FaLinkedin, url: '#', color: 'hover:text-blue-600', label: 'LinkedIn' },
    { icon: FaInstagram, url: '#', color: 'hover:text-pink-500', label: 'Instagram' },
    { icon: FaGithub, url: '#', color: 'hover:text-gray-400', label: 'GitHub' },
  ];

  /**
   * Quick links
   */
  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Contact', href: 'contact' },
  ];

  /**
   * Services
   */
  const services = [
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'UI/UX Design',
    'Cloud Solutions',
    'Consulting',
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Innovative Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Digital Brilliance through cutting-edge technology and creative excellence.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current hover:bg-white/10`}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 animated-underline inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get the latest updates and insights.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-accent-cobalt to-accent-cyan rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Innovative Developer. All rights reserved. Made with{' '}
              <FaHeart className="inline text-red-500 animate-pulse" /> by our team.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <button onClick={() => {}} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0">
                Privacy Policy
              </button>
              <button onClick={() => {}} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0">
                Terms of Service
              </button>
              <button onClick={() => {}} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-accent-cobalt to-accent-cyan text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-40 group hover:shadow-accent-cyan/50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
