import React from "react";

const Resume: React.FC = () => {
  const links = {
    linkedin: "https://linkedin.com/in/samuel-t-r",
    github: "https://github.com/streda",
    portfolio: "https://stredaweb.dev", 
    resumePdf: "/Resume.pdf", 
    leetcode: "https://leetcode.com/u/MyLeetCodePage/",
    portfolioRepo: "https://github.com/streda/personal-portfolio-production",
    portfolioLive: "https://stredaweb.dev/",
    taskAppRepo: "https://github.com/streda/to-do-list",
    taskAppLive: "https://mytodolistapps.com/",
    restaurantRepo: "https://github.com/streda/restaurant-app-production",
    restaurantLive: "https://truefood.rest/",
  };

  return (
    <div className="resume-container bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">

        {/* Header Section */}
        <header className="bg-gray-800 text-white p-6 sm:p-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Samuel Reda</h1>
            <p className="text-gray-300 text-sm sm:text-base mt-1">San Diego, CA</p>
          </div>
          <div className="text-center text-sm sm:text-base space-y-1 text-gray-300 mb-4">
            <p>
              <a href="tel:+15104344294" className="hover:text-blue-300">(510) 434 - 4294</a> |{" "}
              <a href="mailto:samuelreda2018@gmail.com" className="hover:text-blue-300">samuelreda2018@gmail.com</a>
            </p>
            <p>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a> |{" "}
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">GitHub</a> |{" "}
              <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Portfolio</a> |{" "}
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LeetCode</a>
            </p>
          </div>
          <div className="text-center mt-5">
            <a
              href={links.resumePdf}
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 inline-block text-sm sm:text-base"
            >
              Download PDF Resume
            </a>
          </div>
        </header>

        <div className="p-6 sm:p-8">

          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Computer Engineering graduate with practical full-stack development experience using HTML, CSS, JavaScript, React, and Node.js. Skilled in designing and optimizing responsive applications with RESTful APIs and third-party integrations. Proven ability to improve performance by up to 45% in personal projects. Committed to learning modern web tooling and design systems while thriving in collaborative team dynamics. Eager to contribute to innovative software solutions as an entry-level Associate Full-Stack Engineer.
            </p>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
            <div className="text-gray-700">
              <h3 className="text-lg font-semibold">University of California, San Diego (UCSD)</h3>
              <p className="italic text-gray-600">La Jolla, CA — Jun 2022</p>
              <p className="mt-1">Bachelor of Science, Computer Engineering</p>
              <p className="text-sm mt-2">Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Analytics, Web Development, Object-Oriented Programming, Operating Systems, Computer Networks, Computer Security.</p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Projects</h2>
            <div className="space-y-6 text-gray-700">

              {/* Portfolio Project */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Personal Portfolio Website</h3>
                <p className="text-sm text-gray-500 mb-1">Technologies: React, TypeScript, Node.js, Socket.IO, Nodemailer</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Built a portfolio site visited by 300+ unique users monthly, with 2+ minute avg. session time.</li>
                  <li>Implemented real-time messaging via Socket.IO, achieving &lt; 100ms latency.</li>
                  <li>Automated deployment using AWS Amplify CI/CD, reducing update time to under 1 minute.</li>
                </ul>
                <div className="mt-2 text-sm">
                  <a href={links.portfolioLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.portfolioRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>

              {/* Task App Project */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Task Management Application (PERN Stack)</h3>
                <p className="text-sm text-gray-500 mb-1">Technologies: PostgreSQL, Express, React, Node.js, AWS EC2, Nginx, CI/CD</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Built a full-stack CRUD app with auth, supporting 100+ daily tasks across 15+ test accounts.</li>
                  <li>Reduced frontend-backend response time by 35% via optimized RESTful APIs.</li>
                  <li>Configured AWS EC2 + Nginx to handle 100+ concurrent users with minimal latency.</li>
                  <li>Automated delivery using GitHub Actions & AWS CI/CD, improving feature rollout by 80%.</li>
                </ul>
                <div className="mt-2 text-sm">
                  <a href={links.taskAppLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.taskAppRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>

              {/* Restaurant Project */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Restaurant Ordering System</h3>
                <p className="text-sm text-gray-500 mb-1">Technologies: JavaScript, Node.js, Express, MongoDB, Stripe API, JWT, OAuth</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Handled 30+ daily transactions with 99.99% Stripe payment success rate.</li>
                  <li>Secured user accounts using JWT & OAuth; no auth breaches in testing.</li>
                  <li>Reduced spam/abuse by 90% via rate limiting and input validation.</li>
                </ul>
                <div className="mt-2 text-sm">
                  <a href={links.restaurantLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.restaurantRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>

            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Technical Skills</h2>
            <dl className="space-y-3 text-gray-700">
              <div><dt className="font-semibold">Languages:</dt><dd className="ml-4">Java, JavaScript, TypeScript, C++, HTML, CSS</dd></div>
              <div><dt className="font-semibold">Frontend:</dt><dd className="ml-4">React, Hooks, Context API, Tailwind CSS, Bootstrap</dd></div>
              <div><dt className="font-semibold">Backend:</dt><dd className="ml-4">Node.js, Express.js, RESTful API Design</dd></div>
              <div><dt className="font-semibold">Databases:</dt><dd className="ml-4">PostgreSQL, MongoDB, SQL Server, Sequelize, Mongoose</dd></div>
              <div><dt className="font-semibold">Cloud & DevOps:</dt><dd className="ml-4">AWS (EC2, S3, RDS, Lambda, Amplify), Docker, Nginx, CI/CD</dd></div>
              <div><dt className="font-semibold">Testing & Debugging:</dt><dd className="ml-4">Jest, DevTools, Postman</dd></div>
              <div><dt className="font-semibold">Tools & Platforms:</dt><dd className="ml-4">Git, GitHub, GitLab, VS Code, Linux, Figma, Webpack, Agile</dd></div>
            </dl>
          </section>

          {/* Footer */}
          <footer className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Samuel Reda. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-1">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">LinkedIn</a> |
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">GitHub</a> |
              <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">Portfolio</a> |
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">LeetCode</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
