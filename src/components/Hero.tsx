import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-gray-100"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Hey, I'm <span className="text-blue-600">Samuel Reda</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
  Software Engineer with 3 years' experience building full-stack systems using Java Spring Boot, React.js, PostgreSQL, AWS, and modern AI frameworks.
  And most recently, I engineered an <span className="font-semibold text-blue-600">agentic AI workflow</span> with Pydantic-AI and Python to simulate intelligent order fulfillment with autonomous agents and real-time inventory tracking.
  I specialize in scalable architecture, secure cloud deployment, and performance-optimized APIs.
</p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="/Resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

      {/* Animation Box */}
<div className="mt-10 px-1 w-fit mx-auto rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
  <div className="bg-white rounded-2xl px-6 py-4">
    <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-blue-500 animate-shine bg-[length:200%_auto]">
      Full Stack Engineer | React, Node.js, Java, Spring Boot, PostgreSQL & Cloud Enthusiast
    </p>
  </div>
</div>
    </section>
  );
};

export default Hero;
