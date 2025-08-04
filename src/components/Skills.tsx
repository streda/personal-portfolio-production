import React from 'react';

const skills = {
  Languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++'],
  Frontend: ['React', 'Tailwind CSS', 'Material UI', 'Context API'],
  Backend: ['Spring Boot', 'Node.js', 'Express', 'Spring Security'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL'],
  DevOps: ['Docker', 'AWS', 'Nginx', 'CI/CD', 'Jenkins', 'Kubernetes'],
  Tools: ['Git', 'Jest', 'Mockito', 'Figma', 'Webpack', 'IntelliJ', 'VSCode'],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-blue-50 border border-blue-300 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-white text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;