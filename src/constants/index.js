/**
 * Application Constants
 * 
 * Centralized configuration for easy customization
 * Modify these values to personalize your website
 */

// Company Information
export const COMPANY_INFO = {
  name: 'Innovative Developer',
  tagline: 'Building Digital Brilliance',
  description: 'Transform your business with cutting-edge web development, powerful digital marketing strategies, and innovative mobile applications.',
  founded: 2016,
  email: {
    info: 'info@innovativedeveloper.com',
    support: 'support@innovativedeveloper.com',
  },
  phone: '+1 (555) 123-4567',
  businessHours: 'Mon-Fri: 9AM - 6PM EST',
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/innovativedeveloper',
  twitter: 'https://twitter.com/innovativedev',
  linkedin: 'https://linkedin.com/company/innovative-developer',
  instagram: 'https://instagram.com/innovativedeveloper',
  github: 'https://github.com/innovativedeveloper',
};

// Statistics for About Section
export const STATS = {
  projects: 250,
  clients: 180,
  experience: 8,
  awards: 45,
};

// Services Configuration
export const SERVICES = {
  web: {
    title: 'Web Development',
    description: 'Create stunning, responsive websites that captivate your audience and drive results.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration',
    ],
  },
  marketing: {
    title: 'Digital Marketing',
    description: 'Amplify your brand presence with data-driven marketing strategies that convert.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Reporting',
    ],
  },
  app: {
    title: 'App Development',
    description: 'Build powerful mobile applications that engage users across all platforms.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
    ],
  },
};

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'About', href: 'about' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Contact', href: 'contact' },
];

// Portfolio Projects
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Modern online shopping experience with seamless checkout',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    image: null, // Add image URL here
  },
  {
    id: 2,
    title: 'Brand Campaign 2024',
    category: 'marketing',
    description: 'Multi-channel digital marketing campaign with 300% ROI',
    technologies: ['SEO', 'Social Media', 'Analytics', 'Content'],
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    image: null,
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'app',
    description: 'iOS & Android app for personalized workout tracking',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    gradient: 'from-green-600 via-teal-500 to-cyan-500',
    image: null,
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    category: 'web',
    description: 'Complete digital transformation for Fortune 500 company',
    technologies: ['Next.js', 'Tailwind', 'GraphQL', 'Vercel'],
    gradient: 'from-indigo-600 via-purple-500 to-pink-500',
    image: null,
  },
  {
    id: 5,
    title: 'Social Media Growth',
    category: 'marketing',
    description: 'Increased followers by 500% in 6 months',
    technologies: ['Instagram', 'TikTok', 'YouTube', 'Influencer'],
    gradient: 'from-orange-600 via-red-500 to-pink-500',
    image: null,
  },
  {
    id: 6,
    title: 'Real Estate Mobile App',
    category: 'app',
    description: 'Property search and virtual tours on mobile',
    technologies: ['Flutter', 'Dart', 'Google Maps', 'AR'],
    gradient: 'from-teal-600 via-green-500 to-lime-500',
    image: null,
  },
];

// Technologies/Skills
export const TECHNOLOGIES = [
  'React',
  'Node.js',
  'Python',
  'AWS',
  'MongoDB',
  'Docker',
  'GraphQL',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Redis',
  'Kubernetes',
];

// Core Values
export const CORE_VALUES = [
  'Innovation-driven approach',
  'Client-centric solutions',
  'Transparency & communication',
  'Quality over quantity',
  'Continuous learning & growth',
];

// Animation Timings (in seconds)
export const ANIMATION_TIMINGS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export default {
  COMPANY_INFO,
  SOCIAL_LINKS,
  STATS,
  SERVICES,
  NAV_ITEMS,
  PROJECTS,
  TECHNOLOGIES,
  CORE_VALUES,
  ANIMATION_TIMINGS,
  BREAKPOINTS,
};
