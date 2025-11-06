import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/**
 * Portfolio Section Component
 * 
 * Features:
 * - Grid/carousel display of projects
 * - Image hover effects (scale, fade, overlay)
 * - GSAP scroll animations
 * - Category filtering
 * - Modal/lightbox for project details
 * - Smooth transitions and animations
 * 
 * Each project card includes:
 * - Project thumbnail with hover overlay
 * - Project title and category
 * - Technologies used
 * - View project link
 */
const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const projectRefs = useRef([]);

  const [activeFilter, setActiveFilter] = useState('all');

  /**
   * Portfolio projects data
   * Using placeholder color gradients instead of actual images
   */
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern online shopping experience with seamless checkout',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Brand Campaign 2024',
      category: 'marketing',
      description: 'Multi-channel digital marketing campaign with 300% ROI',
      technologies: ['SEO', 'Social Media', 'Analytics', 'Content'],
      gradient: 'from-purple-600 via-pink-500 to-red-500',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'app',
      description: 'iOS & Android app for personalized workout tracking',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      gradient: 'from-green-600 via-teal-500 to-cyan-500',
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'web',
      description: 'Complete digital transformation for Fortune 500 company',
      technologies: ['Next.js', 'Tailwind', 'GraphQL', 'Vercel'],
      gradient: 'from-indigo-600 via-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Social Media Growth',
      category: 'marketing',
      description: 'Increased followers by 500% in 6 months',
      technologies: ['Instagram', 'TikTok', 'YouTube', 'Influencer'],
      gradient: 'from-orange-600 via-red-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Real Estate Mobile App',
      category: 'app',
      description: 'Property search and virtual tours on mobile',
      technologies: ['Flutter', 'Dart', 'Google Maps', 'AR'],
      gradient: 'from-teal-600 via-green-500 to-lime-500',
    },
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'app', label: 'App Development' },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  /**
   * GSAP Scroll Animations
   */
  useGSAP(() => {
    // Animate title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Animate project cards
    projectRefs.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
          delay: (index % 3) * 0.1, // Stagger by row
          ease: 'power2.out',
        });
      }
    });
  }, { scope: sectionRef, dependencies: [filteredProjects] });

  /**
   * Handle filter change with animation
   */
  const handleFilterChange = (filterId) => {
    if (filterId !== activeFilter) {
      // Fade out current projects
      gsap.to(gridRef.current.children, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          setActiveFilter(filterId);
          // Fade in new projects
          gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }
          );
        },
      });
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-container bg-dark-900 relative"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of our finest work across web, mobile, and digital marketing
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-cobalt to-accent-cyan text-white scale-105 shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group glass-card overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image/Gradient with Hover Overlay */}
              <div className="relative h-64 overflow-hidden">
                {/* Gradient Background as placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-700`}></div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaExternalLinkAlt className="text-4xl text-accent-cyan mx-auto mb-4" />
                    <p className="text-white font-semibold text-lg">View Project</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-dark-900/80 backdrop-blur-sm border border-white/20">
                  <span className="text-accent-cyan text-sm font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10 group-hover:border-accent-cyan/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Accent - Animated on Hover */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Want to see your project here?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button inline-flex items-center gap-2"
          >
            <span className="relative z-10">Start Your Project</span>
            <FaExternalLinkAlt className="relative z-10" />
          </button>
        </div>

        {/* Project Count Display */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
