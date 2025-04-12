import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="resume-container bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Samuel Reda</h1>
          <p className="text-gray-600">
            Full Stack Engineer | React | Node.js | AWS | Microservices | CI/CD
          </p>
          <p className="text-gray-600">
            Phone: <span className="text-blue-500">(510) 434-4294</span> |{" "}
            Email: <span className="text-blue-500">samuelreda2018@gmail.com</span>
          </p>
          <p className="text-gray-600">Location: San Diego, CA</p>

          {/* Download Resume Button */}
          <a
            href="/Resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300 inline-block"
          >
            📄 Download Resume
          </a>
        </header>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
	    <li><strong>Programmming Languages:</strong> Java, JavaScript, TypeScript, C++, HTML, CSS </li>
	    <li><strong>Frontend:</strong> React, Tailwind CSS, Bootstrap</li>
	    <li><strong>Backend:</strong> Node.js, Express, RESTful APIs</li>
	    <li><strong>Databases:</strong> SQL Server, PostgreSQL, MongoDB (NoSQL)</li>
	    <li><strong>Cloud & DevOps</strong> AWS (EC2, S3, RDS, Lambda, Amplify), CI/CD</li>
	    <li><strong>Software Configuration Management:</strong> Git, GitHub, GitLab, Docker, Kubernetes</li>
	    <li><strong>Testing & Debugging:</strong> Unit Testing (Jest), Debugging Tools</li>
	    <li><strong>Tools & Platforms:</strong> Figma, Webpack, Postman, VS Code, Linux/Ubuntu</li>            
            <li>Agile Methodology</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Experience
          </h2>
          <div className="text-gray-700 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Full Stack Developer</h3>
              <p className="text-sm text-gray-600">Academic Courses | Jan 2021 - Present</p>
              <ul className="list-disc list-inside">
                <li>Built scalable web applications using <strong>React, Node.js, and Express.js</strong>.</li>
                <li>Developed and deployed RESTful APIs.</li>
                <li>Integrated <strong>CI/CD pipelines</strong>.</li>
                <li>Managed <strong>AWS cloud services (EC2, S3, RDS, Lambda)</strong> for deployment.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Notable Projects
          </h2>
          <div className="text-gray-700 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Personal Portfolio Website</h3>
              <ul className="list-disc list-inside">
                <li>Developed a <strong>React & TypeScript</strong> portfolio integrated with a <strong>Node.js backend</strong>.</li>
                <li>Implemented <strong>real-time messaging via Socket.IO</strong>.</li>
                <li>Deployed on <strong>DigitalOcean using Nginx & PM2 for server management</strong>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Task Management App</h3>
              <ul className="list-disc list-inside">
                <li>Designed a <strong>full-stack PERN (PostgreSQL, Express, React, Node.js) app</strong>.</li>
                <li>Hosted backend on <strong>AWS EC2, using Nginx as a reverse proxy</strong>.</li>
                <li>Used <strong>AWS S3 for file storage and RDS (PostgreSQL) for structured data storage</strong>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Restaurant Ordering System</h3>
              <ul className="list-disc list-inside">
                <li>Built a <strong>real-time restaurant ordering system</strong> using Vanilla JavaScript & Express.js.</li>
                <li>Implemented <strong>authentication with JWT and OAuth</strong>.</li>
                <li>Integrated <strong>Stripe API for secure payments</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Education
          </h2>
          <p className="text-gray-700">
            <strong>Bachelor’s in Computer Engineering, UCSD (2022)</strong>
          </p>
          <p className="text-gray-600 text-sm">
            Key Courses: Data Structures & Algorithms, Software Engineering, Web Development, Operating Systems, Computer Networks, Computer Security.
          </p>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Courses & Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Full Stack Web Development - FreeCodeCamp</strong></li>
            <li><strong>Advanced JavaScript & TypeScript - Codecademy </strong></li>
            <li><strong>Cloud Computing & DevOps (AWS, CI/CD Pipelines) - Aws</strong></li>
          </ul>
        </section>

        {/* Contact Section */}
        <footer className="text-center mt-8">
          <p className="text-gray-700">
            <span className="text-blue-500">samuelreda2018@gmail.com</span> |{" "}
            <a href="https://github.com/streda" className="text-blue-500">
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
