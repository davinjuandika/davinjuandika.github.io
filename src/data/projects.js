export const projectCategories = ['All', 'Web & Mobile', 'Game Dev', 'AI / Research']

export const projects = [
  {
    id: 'chimatcha',
    code: 'MSN-01',
    title: 'ChiMatcha',
    subtitle: 'Mobile Cafe Ordering App',
    category: 'Web & Mobile',
    accent: 'cyan',
    bannerTheme: 'matcha',
    year: 'Feb 2026 – Jul 2026',
    summary:
      'A cozy, cafe-inspired mobile app for ordering artisanal matcha, featuring drink customization, best-seller highlights, and a store locator.',
    highlights: [
      'Built multi-screen native Android navigation with custom drink personalization options.',
      'Designed a warm cafe-themed menu interface showcasing best-seller drinks and real-time cart summaries.',
      'Implemented a store locator view to help users find nearby ChiMatcha outlets.'
    ],
    tech: ['Java', 'Android Studio', 'XML UI'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/davinjuandika/ChiMatcha' }
    ]
  },
  {
    id: 'spojedy',
    code: 'MSN-02',
    title: 'Spojedy',
    subtitle: 'Music & Video Streaming Web App',
    category: 'Web & Mobile',
    accent: 'purple',
    bannerTheme: 'music',
    year: 'Feb 2026 – Jul 2026',
    summary:
      'A modern music streaming web app built with Vue.js, featuring seamless audio playback, music video integration, and personalized song discovery.',
    highlights: [
      'Engineered persistent audio player controls with smooth track switching and queue management in Vue.js.',
      'Integrated music video playback alongside standard audio streaming within a single interface.',
      'Created responsive song discovery and playlist browsing views using modular components.'
    ],
    tech: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/NotReichmann/MultiMedia-SpoJedy' }
    ]
  },
  {
    id: 'picverse',
    code: 'MSN-03',
    title: 'Picverse',
    subtitle: 'Artwork Discovery & Social Hub',
    category: 'Web & Mobile',
    accent: 'cyan',
    bannerTheme: 'gallery',
    year: 'Feb 2024 – Jul 2025',
    summary:
      'An artwork discovery and social networking website that unifies multi-platform social media features into one creative hub.',
    highlights: [
      'Developed responsive artwork gallery feeds and category browsing with semantic HTML, CSS, and JavaScript.',
      'Combined social networking interactions—such as creator profiles and community engagement—into one hub.',
      'Built interactive client-side filtering and artwork preview layouts.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/davinjuandika/Picverse' }
    ]
  },
  {
    id: 'lazulite',
    code: 'MSN-04',
    title: 'Lazulite',
    subtitle: '2D Turn-Based Tactical RPG',
    category: 'Game Dev',
    accent: 'gold',
    bannerTheme: 'rpg',
    year: 'Sep 2026 – Present',
    summary:
      'A tactical 2D turn-based RPG developed in Unity using C#. It blends classic turn-based strategy and item management with real-time quick-time event (QTE) dodge mechanics across challenging boss encounters.',
    highlights: [
      'Architected side-view turn-based battle flow managing ally parties, boss phases, and real-time QTE dodge timing.',
      'Implemented diagonal tactical battle menus, dynamic HP/SP HUD cards, and modular combat scripts.',
      'Built an in-battle item inventory system for strategic resource and buff management.'
    ],
    tech: ['Unity', 'C#', '2D Combat System', 'Game UI'],
    links: []
  },
  {
    id: 'ue5-rl-il-research',
    code: 'MSN-05',
    title: 'Comparison of Self-Learning Agents Using Reinforcement Learning and Imitation Learning in Unreal Engine 5',
    subtitle: 'Machine Learning & Game AI Research Paper',
    category: 'AI / Research',
    accent: 'purple',
    bannerTheme: 'research',
    year: 'Feb 2026 – Jul 2026',
    summary:
      'A comparative study evaluating autonomous self-learning game agents trained via Reinforcement Learning (RL) against Imitation Learning (IL) within an Unreal Engine 5 simulation environment.',
    highlights: [
      'Configured autonomous agent training setups in Unreal Engine 5 to compare reward-based RL against demonstration-based IL.',
      'Evaluated agent adaptability, learning behavior, and task execution consistency across game scenarios.',
      'Analyzed practical trade-offs between RL reward design complexity and IL demonstration data requirements.'
    ],
    tech: ['Unreal Engine 5', 'Reinforcement Learning', 'Imitation Learning', 'Game AI'],
    links: []
  }
]