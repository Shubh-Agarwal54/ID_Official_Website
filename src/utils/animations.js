/**
 * Animation Utilities
 * 
 * Helper functions for common GSAP animations
 * These can be imported and reused across components
 */

import { gsap } from 'gsap';

/**
 * Fade In Animation
 * @param {Element} element - DOM element to animate
 * @param {Object} options - Animation options
 */
export const fadeIn = (element, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

/**
 * Slide In Animation
 * @param {Element} element - DOM element to animate
 * @param {string} direction - 'left', 'right', 'up', 'down'
 * @param {Object} options - Animation options
 */
export const slideIn = (element, direction = 'up', options = {}) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return gsap.from(element, {
    ...directions[direction],
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

/**
 * Scale In Animation
 * @param {Element} element - DOM element to animate
 * @param {Object} options - Animation options
 */
export const scaleIn = (element, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    ...options,
  });
};

/**
 * Stagger Children Animation
 * @param {Element} parent - Parent container
 * @param {string} childSelector - CSS selector for children
 * @param {Object} options - Animation options
 */
export const staggerChildren = (parent, childSelector, options = {}) => {
  const children = parent.querySelectorAll(childSelector);
  
  return gsap.from(children, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    ...options,
  });
};

/**
 * Rotate In Animation
 * @param {Element} element - DOM element to animate
 * @param {Object} options - Animation options
 */
export const rotateIn = (element, options = {}) => {
  return gsap.from(element, {
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    ...options,
  });
};

/**
 * Bounce Animation
 * @param {Element} element - DOM element to animate
 */
export const bounce = (element) => {
  return gsap.to(element, {
    y: -20,
    duration: 0.5,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
  });
};

/**
 * Pulse Animation
 * @param {Element} element - DOM element to animate
 */
export const pulse = (element) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 0.8,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
  });
};

/**
 * Create ScrollTrigger Animation
 * @param {Element} element - DOM element to animate
 * @param {Object} animationProps - GSAP animation properties
 * @param {Object} scrollTriggerProps - ScrollTrigger properties
 */
export const createScrollAnimation = (element, animationProps = {}, scrollTriggerProps = {}) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
      ...scrollTriggerProps,
    },
    ...animationProps,
  });
};

export default {
  fadeIn,
  slideIn,
  scaleIn,
  staggerChildren,
  rotateIn,
  bounce,
  pulse,
  createScrollAnimation,
};
