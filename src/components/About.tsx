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
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/Sam-Pic.png"
            alt="Samuel Reda"
            className="w-32 h-32 rounded-full shadow-md object-cover"
          />
        </div>

        {/* About Text */}
        <h2 className="text-4xl font-semibold mb-6 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a Junior Software Development Engineer with experience in writing secure, scalable
          applications using Java Spring Boot, JavaScript, React.js, PostgreSQL, and AWS. Proven
          ability in developing and deploying secure, scalable full-stack solutions to enhance
          efficiency and user experience. Expertise in RESTful API development, secure authentication
          (JWT, OAuth2), and Dockerized AWS deployments. Actively seeking an entry-level
          challenging opportunity to contribute to impactful product development and collaborate
          within a team valuing clean, scalable software.
        </p>
      </motion.div>
    </section>
  );
};

export default About;