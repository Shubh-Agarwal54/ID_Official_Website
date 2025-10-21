import { useEffect } from 'react';

/**
 * Custom Hook: useScrollAnimation
 * 
 * Adds a CSS class to elements when they come into viewport
 * Useful for triggering CSS animations on scroll
 * 
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationClass - Class to add when element is visible
 * @param {number} threshold - Percentage of element that must be visible (0-1)
 */
export const useScrollAnimation = (selector, animationClass = 'animate-in', threshold = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, animationClass, threshold]);
};

/**
 * Custom Hook: useScrollDirection
 * 
 * Detects scroll direction (up/down)
 * Useful for hiding/showing navbar on scroll
 * 
 * @returns {string} - 'up', 'down', or null
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return scrollDirection;
};

/**
 * Custom Hook: useMediaQuery
 * 
 * Detects if a media query matches
 * Useful for responsive behavior in JavaScript
 * 
 * @param {string} query - Media query string
 * @returns {boolean} - Whether the query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default useScrollAnimation;
