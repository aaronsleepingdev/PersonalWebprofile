export type NavItem = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Project = {
  id: string
  title: string
  category: 'Game Development' | 'Web Development' | 'Mobile Applications' | 'Other Projects'
  description: string
  technologies: string[]
  image: string
  coverClass: string
  repositoryUrl?: string
  demoUrl?: string
  features: string[]
  overview: string
  problem: string
  objective: string
  challenge: string
  solution: string
}

export const profile = {
  name: 'Ebon Aaron Atan',
  title: "I'm an IT student and aspiring software developer",
  email: 'hello@ebonaaron.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
  intro:
    'I enjoy turning ideas into functional, user-friendly experiences through programming, creative problem-solving, and continuous learning.',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['C#', 'Java', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Game Development',
    items: ['Unity', 'C# Scripting', 'Unity UI', 'Gameplay Systems', 'Game Mechanics', 'Performance Optimization'],
  },
  {
    title: 'Mobile Development',
    items: ['Flutter', 'Android Development', 'Firebase', 'Local Data Storage', 'Responsive UI', 'App Architecture'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'Visual Studio Code', 'Visual Studio', 'Android Studio', 'Unity Editor', 'Firebase'],
  },
]

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'Instagram', href: profile.instagram, icon: 'instagram' },
]

export const projects: Project[] = [
  {
    id: 'farmpreneur',
    title: 'Farmpreneur',
    category: 'Game Development',
    description:
      'A farming simulation game focused on crop cultivation, harvesting, inventory management, in-game currency, and quest-based progression.',
    technologies: ['Unity', 'C#', 'Firebase'],
    image: '',
    coverClass: 'farmpreneur',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Crop planting and harvesting',
      'Inventory and item management',
      'Farming progression',
      'Quest and reward systems',
      'Interactive user interface',
    ],
    overview:
      'Farmpreneur is a prototype farming simulation game designed to make everyday farm management feel engaging, rewarding, and approachable.',
    problem:
      'Many training or educational game concepts focus on mechanics without a clear progression loop, making the experience feel shallow or repetitive.',
    objective:
      'Create a fun and approachable game where players can cultivate crops, manage inventory, earn currency, and complete quests as they build a small farm enterprise.',
    challenge:
      'Balancing progression, resource management, and gameplay clarity while keeping controls intuitive for casual players.',
    solution:
      'I used modular Unity systems for crop growth, inventory flow, economy tracking, and quest logic, then paired them with a clean interface that makes progression easy to understand.',
  },
  {
    id: 'coffee-leaf-disease-detector',
    title: 'Coffee Leaf Disease Detection App',
    category: 'Mobile Applications',
    description:
      'An Android app built to identify potential coffee leaf diseases using an on-device machine learning model and provide relevant recommendations.',
    technologies: ['Java', 'Android Studio', 'TensorFlow Lite', 'SQLite'],
    image: '',
    coverClass: 'coffee-app',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Camera and gallery image input',
      'Machine learning predictions',
      'Disease information and recommendations',
      'Prediction history',
      'Local data management',
    ],
    overview:
      'This mobile project explores how AI can support practical agricultural decision-making by bringing fast disease detection to farmers in the field.',
    problem:
      'Farmers often need quick, accessible guidance to recognize plant issues before they spread, but expert diagnosis can be difficult to access in remote areas.',
    objective:
      'Design a lightweight mobile app that allows a user to capture or upload a leaf image, run a prediction locally, and review useful disease guidance.',
    challenge:
      'Keeping the model lightweight enough for mobile use while still producing useful classification results and maintaining a clear user experience.',
    solution:
      'I combined TensorFlow Lite inference with local storage for prediction history and designed a simple diagnostic flow that makes the experience practical and easy to repeat.',
  },
  {
    id: 'sample-budget-buddy',
    title: 'Sample: Budget Buddy',
    category: 'Mobile Applications',
    description:
      'A sample finance app concept for recording expenses, reviewing spending summaries, and organizing personal budgets.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    image: '',
    coverClass: 'sample-budget',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Expense and income entry',
      'Category-based spending summaries',
      'Monthly budget tracking',
      'Transaction history',
    ],
    overview:
      'This is a sample portfolio entry, not a claim of a completed project. Replace it with details from a real finance app if you have one to showcase.',
    problem: 'People can find it difficult to keep everyday spending organized and understand where their money goes.',
    objective: 'Explore a simple mobile experience for recording transactions and reviewing budget progress.',
    challenge: 'Presenting financial information clearly without overwhelming the user with charts or extra steps.',
    solution: 'The sample concept groups transactions by category and provides an at-a-glance monthly summary.',
  },
  {
    id: 'sample-study-planner',
    title: 'Sample: Study Planner',
    category: 'Web Development',
    description:
      'A sample web app concept for planning study sessions, organizing tasks, and keeping track of deadlines.',
    technologies: ['React', 'TypeScript', 'CSS'],
    image: '',
    coverClass: 'sample-planner',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Create and organize study tasks',
      'Track due dates and progress',
      'Group tasks by subject',
      'Responsive dashboard layout',
    ],
    overview:
      'This is a sample portfolio entry, not a claim of a completed project. Use it as a placeholder until you add a real web project.',
    problem: 'School tasks and deadlines can become difficult to manage when they are spread across multiple places.',
    objective: 'Sketch a focused planner that helps students keep their upcoming work visible and organized.',
    challenge: 'Keeping the planner useful on small screens while making deadlines and task progress easy to scan.',
    solution: 'The sample concept organizes tasks into a responsive dashboard with clear subject and due-date groupings.',
  },
  {
    id: 'sample-pixel-quest',
    title: 'Sample: Pixel Quest',
    category: 'Game Development',
    description:
      'A sample 2D game concept about exploring compact levels, collecting items, and solving environmental puzzles.',
    technologies: ['Unity', 'C#', 'Unity UI'],
    image: '',
    coverClass: 'sample-quest',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Player movement and interaction',
      'Collectible items',
      'Small puzzle-focused levels',
      'Basic level progression',
    ],
    overview:
      'This is a sample portfolio entry, not a claim of a completed game. Replace it with a real game project when you are ready to showcase one.',
    problem: 'A small game prototype needs a clear core loop to make exploration feel rewarding.',
    objective: 'Explore simple movement, item collection, and environmental interactions in a compact 2D game concept.',
    challenge: 'Making controls feel responsive and ensuring each level communicates its puzzle clearly.',
    solution: 'The sample concept centers each level around one interaction and uses visual cues to guide the player.',
  },
  {
    id: 'sample-developer-toolkit',
    title: 'Sample: Developer Toolkit',
    category: 'Other Projects',
    description:
      'A sample collection of small command-line utilities that automate repetitive development tasks.',
    technologies: ['JavaScript', 'Node.js', 'CLI'],
    image: '',
    coverClass: 'sample-toolkit',
    repositoryUrl: '',
    demoUrl: '',
    features: [
      'Command-line task shortcuts',
      'Project template setup',
      'Simple configuration support',
      'Clear terminal output',
    ],
    overview:
      'This is a sample portfolio entry, not a claim of a completed project. Replace it with a real tool or coursework project when available.',
    problem: 'Repeated setup and maintenance tasks can take time away from development work.',
    objective: 'Explore a small toolkit that makes common project tasks easier to run consistently.',
    challenge: 'Keeping each utility predictable, easy to configure, and helpful when something goes wrong.',
    solution: 'The sample concept uses focused commands, sensible defaults, and clear terminal messages.',
  },
]

export const projectFilters = [
  'All Projects',
  'Game Development',
  'Web Development',
  'Mobile Applications',
  'Other Projects',
] as const

export type ProjectFilter = (typeof projectFilters)[number]
