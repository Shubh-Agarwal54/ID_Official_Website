import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment, FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with validation
 * - Animated form fields on focus
 * - Email validation using regex
 * - Phone number validation
 * - Animated submit button with loading state
 * - Success message animation
 * - GSAP scroll-triggered animations
 * - Contact information display
 * 
 * Form Fields:
 * - Full Name (required)
 * - Email (required, validated)
 * - Phone (optional, validated if provided)
 * - Message (required, min 10 characters)
 */
const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Email validation regex
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Phone validation regex (optional field)
   */
  const phoneRegex = '';

  /**
   * Validate form fields
   * Returns object with error messages
   */
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional, but validate if provided)
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Shake animation for errors
      gsap.to(formRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: 'power1.inOut',
      });
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // Animate button
    gsap.to('.submit-button', {
      scale: 0.95,
      duration: 0.2,
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Animate success message
      gsap.from(successRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        gsap.to(successRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          onComplete: () => setIsSubmitted(false),
        });
      }, 5000);
    }, 2000);
  };

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

    // Animate form
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cobalt/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how we can help bring your digital vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-700/50 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaEnvelope className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-700/50 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaPhone className="inline mr-2" />
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-700/50 border ${
                    errors.phone ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaComment className="inline mr-2" />
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-dark-700/50 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-none`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button w-full neon-button inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="relative z-10 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <FaPaperPlane className="relative z-10" />
                  </>
                )}
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div
                ref={successRef}
                className="mt-6 glass-card p-6 bg-green-500/10 border-green-500/30"
              >
                <div className="flex items-center gap-3 text-green-400">
                  <FaCheckCircle className="text-2xl" />
                  <div>
                    <p className="font-semibold text-lg">Message Sent Successfully!</p>
                    <p className="text-sm text-gray-300">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cobalt to-accent-cyan flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">innovativedeveloper@pm.me</p>
                    <p className="text-gray-400">innovativedeveloperzone@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+91 8449365017</p>
                    <p className="text-gray-400">Mon-Sun: 10AM - 10PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-accent-cobalt/10 to-accent-cyan/10">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you have a project in mind or just want to explore possibilities, 
                we're here to help. Our team typically responds within 24 hours.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-accent-cyan mr-3" />
                  Free initial consultation
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-accent-cyan mr-3" />
                  No-obligation quote
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-accent-cyan mr-3" />
                  Expert guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


