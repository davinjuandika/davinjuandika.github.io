export const projectCategories = ['All', 'Web & Mobile', 'Game & AR', 'UI/UX']

export const projects = [
  {
    id: 'lazulite',
    code: 'MSN-01',
    title: 'Lazulite',
    subtitle: '2D Turn-Based RPG in Unity',
    category: 'Game & AR',
    accent: 'gold',
    bannerTheme: 'rpg',
    year: '2026',
    summary:
      'A 2D turn-based RPG featuring modular unit stats, tactical item usage mechanics, dynamic health/mana UI sliders, and state-driven combat encounters.',
    highlights: [
      'Engineered turn order state machine and unit stat scaling in Unity C#.',
      'Built responsive combat HUD with animated HP/MP sliders and inventory item triggers.',
      'Collaborated via GitHub with structured milestone releases.'
    ],
    tech: ['Unity', 'C#', '2D Combat System', 'GitHub'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/Y-Eivan/Lazulite' }
    ]
  },
  {
    id: 'talk-and-conquer',
    code: 'MSN-02',
    title: 'Talk and Conquer',
    subtitle: 'Gamified Language Learning Adventure',
    category: 'Game & AR',
    accent: 'cyan',
    bannerTheme: 'adventure',
    year: '2026',
    summary:
      'An interactive multimedia game combining world-map exploration, NPC dialogue practice, quest progression, and boss battles to make language learning engaging.',
    highlights: [
      'Designed multi-region world map navigation with progressive quest unlocks.',
      'Implemented interactive NPC conversation challenges tied directly to boss battle mechanics.',
      'Created cohesive game UI and learner onboarding setup flow.'
    ],
    tech: ['Unity', 'C#', 'Game Design', 'Interactive UI'],
    links: [
      { label: 'Project Overview', url: '#' }
    ]
  },
  {
    id: 'mobile-canteen',
    code: 'MSN-03',
    title: 'Campus Canteen Order App',
    subtitle: 'Multi-Role Web Ordering System',
    category: 'Web & Mobile',
    accent: 'cyan',
    bannerTheme: 'canteen',
    year: '2026',
    summary:
      'A mobile-first canteen food ordering web application built with Vue.js and Laravel featuring separate panels for Customers, Vendors, and Admins.',
    highlights: [
      'Translated Figma wireframes into responsive Vue.js customer flows (Home, Map, Checkout, Activity).',
      'Integrated QRIS and Virtual Account payment simulation screens alongside order status tracking.',
      'Structured role-based dashboards for stall vendors and canteen administrators in Laravel.'
    ],
    tech: ['Vue.js', 'Laravel', 'Tailwind CSS', 'Figma'],
    links: [
      { label: 'Source Code', url: '#' }
    ]
  },
  {
    id: 'spojedy',
    code: 'MSN-04',
    title: 'SpoJeDy',
    subtitle: 'Web Audio & Video Streaming Platform',
    category: 'Web & Mobile',
    accent: 'purple',
    bannerTheme: 'music',
    year: '2026',
    summary:
      'A sleek media streaming web platform built with Vue.js supporting seamless audio playback, playlist browsing, and integrated video streaming.',
    highlights: [
      'Built persistent media player controls with queue management and responsive layout.',
      'Combined audio and video playback modes within a unified single-page interface.'
    ],
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'Media API'],
    links: [
      { label: 'GitHub Repo', url: '#' }
    ]
  },
  {
    id: 'chi-matcha',
    code: 'MSN-05',
    title: 'Chi Matcha',
    subtitle: 'Android Cafe Ordering Application',
    category: 'Web & Mobile',
    accent: 'cyan',
    bannerTheme: 'matcha',
    year: '2026',
    summary:
      'Native Android application developed in Java using Android Studio for browsing cafe-style matcha beverages, customizing orders, and managing cart checkout.',
    highlights: [
      'Implemented multi-screen Android Activities/Fragments with custom drink customization.',
      'Designed clean card-based menu browsing and real-time order summary calculation.'
    ],
    tech: ['Java', 'Android Studio', 'XML UI', 'Mobile Dev'],
    links: [
      { label: 'GitHub Repo', url: '#' }
    ]
  },
  {
    id: 'gameconnect',
    code: 'MSN-06',
    title: 'GameConnect',
    subtitle: 'Lightweight Game Launcher & Voice Hub UI',
    category: 'UI/UX',
    accent: 'purple',
    bannerTheme: 'desktop',
    year: '2026',
    summary:
      'Desktop application concept designed to unify fragmented game libraries with low-memory social voice channels in a single clean interface.',
    highlights: [
      'Researched RAM overhead pain points when running multiple game launchers alongside voice apps.',
      'Designed unified library grid, quick-join voice overlay, and friend activity sidebar.'
    ],
    tech: ['Figma', 'UI/UX Design', 'Desktop Prototype'],
    links: [
      { label: 'Figma Prototype', url: '#' }
    ]
  },
  {
    id: 'stationery-redesign',
    code: 'MSN-07',
    title: 'Mobile Stationery Shop Redesign',
    subtitle: 'End-to-End Annotated UI/UX Case Study',
    category: 'UI/UX',
    accent: 'gold',
    bannerTheme: 'shop',
    year: '2026',
    summary:
      'Complete UX audit and interface redesign of a mobile stationery e-commerce app, progressing from sitemap and task flows to annotated high-fidelity Figma screens.',
    highlights: [
      'Mapped user task flows and restructured product discovery categories for faster checkout.',
      'Delivered both low-fidelity wireframes and developer-ready annotated high-fidelity mockups.'
    ],
    tech: ['Figma', 'Wireframing', 'Task Flows', 'Usability'],
    links: [
      { label: 'Figma File', url: '#' }
    ]
  }
]
