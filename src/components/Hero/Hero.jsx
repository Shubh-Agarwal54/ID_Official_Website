import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaArrowRight } from 'react-icons/fa';

/**
 * Hero Section Component
 * 
 * The landing section with powerful animations using GSAP:
 * - Animated company name with stagger effect
 * - Fade-in tagline and description
 * - Parallax background effect on mouse move
 * - Pulsing CTA button
 * - Floating geometric shapes for visual interest
 * 
 * GSAP Timeline:
 * 1. Company name letters appear with stagger (0.5s delay)
 * 2. Tagline fades in from bottom (0.8s delay)
 * 3. Description and CTA appear (1.2s delay)
 * 4. Background shapes float continuously
 */
const Hero = () => {
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const shapesRef = useRef([]);

  /**
   * GSAP Animation Hook
   * Handles all entrance animations for hero elements
   */
  useGSAP(() => {
    // Create a timeline for sequential animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split title into characters for stagger animation
    const titleText = titleRef.current;
    if (titleText) {
      const chars = titleText.textContent.split('');
      titleText.innerHTML = chars.map(char => 
        char === ' ' ? '<span>&nbsp;</span>' : `<span class="inline-block">${char}</span>`
      ).join('');
      
      // Animate each character
      tl.from(titleText.children, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.05,
        duration: 0.8,
      });
    }

    // Animate tagline
    tl.from(taglineRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    }, '-=0.4'); // Start slightly before title finishes

    // Animate description
    tl.from(descriptionRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3');

    // Animate CTA button
    tl.from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
    }, '-=0.2');

    // Continuous floating animation for background shapes
    shapesRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.to(shape, {
          y: '+=30',
          x: '+=20',
          rotation: 360,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });
  }, { scope: heroRef });

  /**
   * Parallax effect on mouse move
   * Creates depth by moving elements at different speeds
   */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to('.parallax-element', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /**
   * Scroll to services section
   */
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {/* Radial gradients for accent colors */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cobalt/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shape 1 - Circle */}
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-cyan/30 rounded-full"
        ></div>
        
        {/* Shape 2 - Square */}
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute top-40 right-20 w-16 h-16 border-2 border-accent-cobalt/30"
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        
        {/* Shape 3 - Circle */}
        <div
          ref={el => shapesRef.current[2] = el}
          className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-accent-aqua/30 rounded-full"
        ></div>
        
        {/* Shape 4 - Triangle */}
        <div
          ref={el => shapesRef.current[3] = el}
          className="absolute bottom-20 right-1/3 w-0 h-0"
          style={{
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '26px solid rgba(0, 217, 255, 0.3)',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Company Name - Animated with GSAP */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 parallax-element"
        >
          <span className="gradient-text">Innovative Developer</span>
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 parallax-element"
        >
          Building Digital Brilliance
        </p>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 parallax-element"
        >
          Transform your business with cutting-edge web development, powerful digital marketing strategies, 
          and innovative mobile applications. We bring your vision to life.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="parallax-element">
          <button
            onClick={scrollToServices}
            className="neon-button group inline-flex items-center gap-3 text-lg"
          >
            <span className="relative z-10">Explore Our Services</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-cyan/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>
    </section>
  );
};

export default Hero;
