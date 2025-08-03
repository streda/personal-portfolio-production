import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center px-6 py-14 bg-white"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="max-w-5xl w-full bg-gray-50 border border-blue-300 rounded-2xl shadow-xl px-6 md:px-16 py-12 text-center"
      >
        {/* Profile Picture with Gradient Border */}
<div className="flex justify-center mb-8">
  <div className="relative w-32 h-32 md:w-40 md:h-40">
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 p-[3px] animate-shine">
      <img
        src="/images/Sam-Pic.png"
        alt="Samuel Reda"
        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>
  </div>
</div>

        {/* About Text */}
<h2 className="text-4xl font-semibold mb-6 text-gray-900">About Me</h2>
<p className="text-lg text-gray-700 leading-relaxed">
  I’m a Junior Software Development Engineer with hands-on experience in building secure, scalable applications using Java Spring Boot, JavaScript, React.js, PostgreSQL, and AWS. 
  I specialize in RESTful API development, secure authentication (JWT, OAuth2), and Dockerized cloud deployments. 
  <br /><br />
  Recently, I’ve expanded into <span className="font-semibold text-blue-600">Agentic AI</span> development by building a multi-agent workflow system using Python and Pydantic-AI. This system simulated real-world order fulfillment through autonomous agents with dynamic inventory management and decision-making. 
  <br /><br />
  I’m passionate about scalable architecture, AI-driven automation, and contributing to impactful product development within a team that values clean, maintainable software.
</p>
      </motion.div>
    </section>
  );
};

export default About;