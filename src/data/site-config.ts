import avatar from '../assets/images/about.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: 'https://josuemayoral-cell.github.io',

  avatar: {
    src: avatar,
    alt: 'Josué Mayoral'
  },

  title: 'Josué Mayoral Torres',

  subtitle: 'Marketing & Data Analyst',

  description:
    'Portfolio of Josué Mayoral, Marketing & Data Analyst focused on data analysis, experimentation, customer behavior and business growth.',

  image: {
    src: '/portfolio-preview.jpg',
    alt: 'Josué Mayoral — Marketing & Data Analyst'
  },

  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/josuemayoral-cell'
    }
  ],

  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/josuemayoral-cell'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/josue-mayoral-torres/'
    }
  ],

  socialLinks: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/josue-mayoral-torres/'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/josuemayoral-cell'
    }
  ],

  hero: {
    title: 'Marketing, data and experimentation — connected to business decisions.',

    text: "I'm **Josué Mayoral**, a Marketing & Data Analyst focused on turning data into actionable growth opportunities.\n\nI combine **data analysis, experimentation and marketing strategy** to understand user behavior, identify conversion opportunities and support better business decisions.\n\nMy work sits at the intersection of **marketing and analytics**: I don't just look at what happened — I dig into **why it happened, what it means for the business, and what we should do next**.",

    image: {
      src: hero,
      alt: 'Josué Mayoral — Marketing & Data Analyst'
    },

    actions: [
      {
        text: 'Explore My Work',
        href: '/projects'
      },
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/josue-mayoral-torres/'
      }
    ]
  },

  subscribe: {
    enabled: false,
    title: '',
    text: '',
    form: {
      action: '#'
    }
  },

  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;