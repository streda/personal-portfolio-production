import React from 'react';

const projects = [
  {
  id: 1,
  title: 'Genetic AI Multi-Agent Order Fulfillment System',
  description:
    'An agentic AI system of 4 autonomous agents plus an orchestrator agent to manage quotes, inventory, and delivery. Built for realistic job flows with SQLite backend.',
  technologies: ['Python 3.13', 'Pydantic-AI', 'SQLite', 'SQLAlchemy', 'Pandas', 'Mermaid', 'Git'],
  githubLink: 'https://github.com/streda/genetic-ai-multi-agent-system.git',
},
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'My personal portfolio website showcasing my skills and projects.',
    technologies: ['React', 'TypeScript', 'Websocket', 'Tailwind CSS', 'Digital Ocean'],
    githubLink: 'https://github.com/streda/personal-portfolio-production.git',
    liveDemo: 'https://stredaweb.dev/'
  },
  {
    id: 3,
    title: 'Restaurant App',
    description:
      'A full-stack restaurant app for managing menus, orders, and customers.',
    technologies: [
      'Vanilla JavaScript',
      'Node.js',
      'MongoDB',
      'Heroku',
      'Stripe'
    ],
    githubLink: 'https://github.com/streda/RestaurantAppImprovement1.git',
    liveDemo: 'https://truefood.world'
  },

  {
    id: 4,
    title: 'To-do List App',
    description:
      'A digital tool that allows users to create and manage lists of tasks they need to complete, such as marking items as finished and active.',
    technologies: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/streda/to-do-list.git',
    liveDemo: 'https://mytodolistapps.com'
  },

  {
  id: 5,
  title: 'E-Commerce Platform (Spring Boot & React)',
  description:
    'Full-stack platform supporting authenticated user registration, cart, and orders with role-based access, high test coverage, and performance-tuned APIs.',
  technologies: ['Spring Boot', 'React', 'PostgreSQL', 'MyBatis', 'JWT', 'JUnit', 'Selenium'],
  githubLink: 'https://github.com/streda/E-Commerce-Project.git'
},

{
  id: 6,
  title: 'Bullet Journal Productivity App',
  description:
    'Team project focused on UX design and QA testing, improving task completion, stability, and user satisfaction through rigorous testing and user feedback.',
  technologies: ['JavaScript', 'React', 'Figma', 'HTML/CSS', 'Jest'],
  githubLink: 'https://github.com/cse110-sp21-group11/cse110-sp21-group11?tab=readme-ov-file'
}
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
  <div
    key={project.id}
    className="bg-white border border-blue-300 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
  >
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">
      {project.title}
    </h2>
    <p className="text-gray-700 mb-4">{project.description}</p>
    <div className="mb-4">
      <span className="text-sm font-semibold text-gray-600">
        Technologies:
      </span>
      <ul className="flex flex-wrap gap-2 mt-2">
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-between items-center">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        GitHub Link
      </a>
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Live Demo
      </a>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default Projects;
