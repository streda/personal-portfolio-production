import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-gray-100"
    >
      {/* Left Text Block */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span role="img" aria-label="waving hand">👋</span> Hey, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Samuel Reda
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          Software Engineer with 3 years' experience building full-stack systems using{' '}
          <span className="font-medium text-blue-600">Java Spring Boot</span>,{' '}
          <span className="font-medium text-blue-600">React.js</span>,{' '}
          <span className="font-medium text-blue-600">PostgreSQL</span>,{' '}
          <span className="font-medium text-blue-600">AWS</span>, and modern AI frameworks.
          Recently, I engineered an{' '}
          <span className="font-semibold text-purple-600">agentic AI workflow</span> using{' '}
          <span className="font-semibold text-blue-600">Pydantic-AI</span> and{' '}
          <span className="font-semibold text-blue-600">Python</span> to automate order fulfillment using autonomous agents.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
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

        {/* Animated Role Tagline */}
        <div className="px-1 w-fit mx-auto md:mx-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="bg-white rounded-2xl px-6 py-4">
            <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-blue-500 animate-shine bg-[length:200%_auto]">
              Full Stack Engineer | Java, React, Spring Boot, PostgreSQL, Cloud & AI Enthusiast
            </p>
          </div>
        </div>
      </div>

      {/* Right Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 p-[3px]">
            <img
              src="/images/Sam-Pic.png"
              alt="Samuel Reda"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;