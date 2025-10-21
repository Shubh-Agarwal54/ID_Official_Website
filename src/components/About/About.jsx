import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaRocket, FaUsers, FaTrophy, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/**
 * About Section Component
 * 
 * Features:
 * - Company introduction with mission statement
 * - Animated statistics counters (triggered on scroll)
 * - GSAP ScrollTrigger for reveal animations
 * - Counter animation from 0 to target value
 * - Icon animations on scroll
 * 
 * Statistics displayed:
 * - Projects completed
 * - Happy clients
 * - Years of experience
 * - Team members
 */
const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);

  // State for animated counters
  const [countersTriggered, setCountersTriggered] = useState(false);

  /**
   * Statistics configuration
   * Each stat has a target value, label, icon, and color
   */
  const stats = [
    {
      id: 1,
      icon: FaRocket,
      value: 250,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: FaUsers,
      value: 180,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: FaClock,
      value: 8,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 4,
      icon: FaTrophy,
      value: 45,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  /**
   * Counter Component
   * Animates number from 0 to target value
   */
  const AnimatedCounter = ({ target, suffix, triggered }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (triggered) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [triggered, target]);

    return (
      <span className="text-5xl sm:text-6xl font-bold gradient-text">
        {count}{suffix}
      </span>
    );
  };

  /**
   * GSAP Scroll Animations
   * Trigger counter animations and reveal content on scroll
   */
  useGSAP(() => {
    // Animate title
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

    // Animate content
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Animate stats cards
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              // Trigger counters only once
              if (!countersTriggered) {
                setCountersTriggered(true);
              }
            },
          },
          opacity: 0,
          y: 60,
          scale: 0.8,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cobalt/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering digital innovation with passion and expertise
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Company Info */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building Digital Brilliance Since 2016
            </h3>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              At <span className="text-accent-cyan font-semibold">Innovative Developer</span>, 
              we're more than just a digital agency – we're your partners in digital transformation. 
              Our team of passionate developers, designers, and marketers work tirelessly to bring 
              your vision to life.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We combine cutting-edge technology with creative excellence to deliver solutions 
              that don't just meet expectations – they exceed them. From startups to enterprises, 
              we've helped businesses across industries establish powerful digital presences.
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Our Core Values:</h4>
              <ul className="space-y-3">
                {[
                  'Innovation-driven approach',
                  'Client-centric solutions',
                  'Transparency & communication',
                  'Quality over quantity',
                  'Continuous learning & growth',
                ].map((value, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-cobalt to-accent-cyan mr-4"></div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="relative">
            <div className="glass-card p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cobalt to-accent-cyan flex items-center justify-center">
                    <FaRocket className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Our Mission</h4>
                    <p className="text-gray-400">Empowering businesses through technology</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  To deliver innovative digital solutions that transform businesses, 
                  enhance user experiences, and drive measurable growth in the digital landscape.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies We Master:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker', 'GraphQL', 'Next.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-white/5 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={stat.id}
                ref={el => statsRef.current[index] = el}
                className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                    <IconComponent className="text-2xl sm:text-3xl text-white" />
                  </div>
                </div>

                {/* Animated Counter */}
                <div className="mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    triggered={countersTriggered}
                  />
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
