import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaCode, FaBullhorn, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Services Section Component
 * 
 * Displays three core services with interactive cards:
 * - Web Development
 * - Digital Marketing
 * - App Development
 * 
 * Features:
 * - GSAP scroll-triggered animations (cards reveal on scroll)
 * - Hover effects with scale and glow
 * - Interactive SVG icons with rotation on hover
 * - Stagger animation for cards appearing sequentially
 * 
 * Each service card includes:
 * - Animated icon
 * - Service title
 * - Brief description
 * - Feature list
 * - Learn more link
 */
const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  /**
   * Service data configuration
   * Icons from react-icons, features list for each service
   */
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      description: 'Create stunning, responsive websites that captivate your audience and drive results.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Integration',
      ],
    },
    {
      id: 2,
      title: 'Digital Marketing',
      icon: FaBullhorn,
      color: 'from-purple-500 to-pink-500',
      description: 'Amplify your brand presence with data-driven marketing strategies that convert.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'Analytics & Reporting',
      ],
    },
    {
      id: 3,
      title: 'App Development',
      icon: FaMobileAlt,
      color: 'from-green-500 to-teal-500',
      description: 'Build powerful mobile applications that engage users across all platforms.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
      ],
    },
  ];

  /**
   * GSAP ScrollTrigger Animation
   * Cards animate in when scrolling into view
   */
  useGSAP(() => {
    // Animate section title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Animate service cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 80,
          rotationY: -15,
          duration: 0.8,
          delay: index * 0.2, // Stagger delay
          ease: 'power3.out',
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-container bg-dark-900 relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-accent-cobalt/5 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.id}
                ref={el => cardsRef.current[index] = el}
                className="group glass-card p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Card Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <IconComponent className="text-4xl text-white group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm group-hover:text-white transition-colors duration-300"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-150 transition-transform duration-300`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center text-accent-cyan group-hover:text-accent-aqua transition-colors duration-300 cursor-pointer">
                  <span className="font-semibold mr-2">Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Ready to elevate your digital presence?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button inline-flex items-center gap-2"
          >
            <span className="relative z-10">Get Started Today</span>
            <FaArrowRight className="relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
