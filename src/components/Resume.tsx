import React from "react";

const Resume: React.FC = () => {
  const links = {
    linkedin: "https://linkedin.com/in/samuel-t-r",
    github: "https://github.com/streda",
    portfolio: "https://stredaweb.dev", 
    resumePdf: "/Resume-cv.pdf", 
    portfolioRepo: "https://github.com/streda/personal-portfolio-production",
    portfolioLive: "https://stredaweb.dev/",
    taskAppRepo: "https://github.com/streda/to-do-list",
    taskAppLive: "https://mytodolistapps.com/",
    restaurantRepo: "https://github.com/streda/restaurant-app-production",
    restaurantLive: "https://truefood.rest/",
  };

  return (
    <div className="resume-container bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"> {/* responsive padding */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden"> {/* Enhanced shadow and rounded */}

        {/* Header Section */}
        <header className="bg-gray-800 text-white p-6 sm:p-8"> {/* Header with background */}
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Samuel Reda</h1>
            <p className="text-gray-300 text-sm sm:text-base mt-1">San Diego, CA</p>
          </div>
          <div className="text-center text-sm sm:text-base space-y-1 text-gray-300 mb-4">
             
            <p>
              <a href={`tel:${'(510) 434 - 4294'}`} className="hover:text-blue-300">(510) 434 - 4294</a> |{' '}
              <a href={`mailto:${'samuelreda2018@gmail.com'}`} className="hover:text-blue-300">samuelreda2018@gmail.com</a>
            </p>
            <p>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a> |{' '}
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">GitHub</a> |{' '}
              <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Portfolio</a>
            </p>
          </div>
           {/* Download Button */}
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
                Results-oriented Computer Engineering graduate (UCSD, 2022) with hands-on experience designing, developing, and deploying full-stack web applications. Proficient in JavaScript, TypeScript, React, Node.js, and AWS cloud services (EC2, S3, Lambda, Amplify, CI/CD). Proven ability to implement RESTful APIs, integrate third-party services, and optimize application performance. Seeking an entry-level Software Development Engineer or Frontend Engineer role where I can contribute to building robust and user-friendly solutions.
             </p>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
              Technical Skills
            </h2>
    
            <dl className="space-y-3 text-gray-700">
              <div>
                <dt className="font-semibold">Programming Languages:</dt>
                <dd className="ml-4">Java, JavaScript, TypeScript, C++, HTML, CSS</dd>
              </div>
              <div>
                <dt className="font-semibold">Frontend:</dt>
                <dd className="ml-4">React, Hooks, Context API, Tailwind CSS, Bootstrap, HTML5, CSS3</dd>
              </div>
              <div>
                <dt className="font-semibold">Backend:</dt>
                <dd className="ml-4">Node.js, Express.js, RESTful API Design</dd>
              </div>
              <div>
                <dt className="font-semibold">Databases:</dt>
                <dd className="ml-4">PostgreSQL, MongoDB (NoSQL), SQL Server, Database Design, ORM/ODM (Sequelize, Mongoose)</dd>
              </div>
              <div>
                <dt className="font-semibold">Cloud & DevOps:</dt>
                <dd className="ml-4">AWS (EC2, S3, RDS, Lambda, Amplify), CI/CD Pipelines (AWS CodePipeline), Docker, Nginx, Serverless Architecture</dd> {/* Adjusted based on final PDF */}
              </div>
              <div>
                <dt className="font-semibold">Testing & Debugging:</dt>
            
                <dd className="ml-4">Unit Testing (Jest), Debugging Tools (Browser DevTools, Postman)</dd>
              </div>
              <div>
                <dt className="font-semibold">Tools & Platforms:</dt>
                <dd className="ml-4">Git, GitHub, GitLab, VS Code, Linux/Ubuntu, Figma, Webpack, Agile Methodologies</dd>
              </div>
            </dl>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
              Projects
            </h2>
            <div className="space-y-6 text-gray-700">
              {/* Project 1 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Personal Portfolio Website</h3>
                <p className="text-sm text-gray-500 mb-1">Technologies: React, TypeScript, Node.js, Socket.IO, Nodemailer, AWS Amplify, CI/CD</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Engineered a responsive personal portfolio site using React and TypeScript for the frontend and Node.js for the backend API.</li>
                  <li>Implemented real-time messaging capabilities via Socket.IO and integrated Nodemailer for reliable contact form submissions.</li>
                  <li>Configured and automated deployment using AWS Amplify, establishing a CI/CD pipeline for seamless updates.</li>
                </ul>
                <div className="mt-2 text-sm">
                  <a href={links.portfolioLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.portfolioRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Task Management Application (PERN Stack)</h3>
                 <p className="text-sm text-gray-500 mb-1">Technologies: PostgreSQL, Express, React, Node.js, AWS EC2, Nginx, CI/CD</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Developed a full-stack task management system featuring user authentication, task creation, and status tracking.</li>
                  <li>Designed and implemented RESTful APIs with Express.js for efficient data handling between frontend and backend.</li>
                  <li>Deployed the Node.js backend service on AWS EC2, configuring Nginx as a reverse proxy to optimize request handling and enable potential scaling.</li>
                  <li>Established CI/CD pipelines for automated testing and deployment, reducing manual overhead.</li>
                </ul>
                 <div className="mt-2 text-sm">
                  <a href={links.taskAppLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.taskAppRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>

              {/* Project 3 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Restaurant Ordering System</h3>
                 <p className="text-sm text-gray-500 mb-1">Technologies: Vanilla JavaScript, Node.js, Express, MongoDB, Stripe API, JWT, OAuth</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                   <li>Developed a real-time restaurant ordering application supporting menu browsing, dynamic cart management, and secure checkout.</li>
                  <li>Secured user accounts and authenticated sessions using JWT (JSON Web Tokens) and OAuth protocols.</li>
                  <li>Integrated the Stripe API to process payments securely and efficiently.</li>
                  <li>Utilized MongoDB for flexible data storage of orders and user information; implemented backend rate limiting to protect against abuse and ensure performance.</li>
                </ul>
                 <div className="mt-2 text-sm">
                  <a href={links.restaurantLive} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium mr-4">Live Demo</a>
                  <a href={links.restaurantRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">GitHub Repo</a>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
              Education
            </h2>
            <div className="text-gray-700">
               <h3 className="text-lg font-semibold">University of California, San Diego (UCSD)</h3>
               <p className="italic text-gray-600">La Jolla, CA</p>
               <p className="mt-1">Bachelor of Science in Computer Engineering | Graduated: June 2022</p>
               <p className="mt-2 text-sm font-medium text-gray-800">Relevant Coursework:</p>
               <p className="text-sm text-gray-600">
                  Data Structures & Algorithms, Software Engineering, Database Analytics, Web Development, Object-Oriented Programming, Operating Systems, Computer Networks, Computer Security.
               </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Samuel Reda. All rights reserved.
            </p>
             
             <p className="text-sm text-gray-500 mt-1">
               <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">LinkedIn</a> |
               <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">GitHub</a> |
               <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">Portfolio</a>
             </p> 
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
