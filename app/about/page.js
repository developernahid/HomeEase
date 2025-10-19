'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col md:flex-row bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full mx-4"
      >
        {/* Left Image or Info Card */}
        <div className="md:w-1/2 bg-indigo-600 text-white flex flex-col justify-center items-center p-10">
          <Image src=""
            alt="Team"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-2">About Our Team</h2>
          <p className="text-indigo-100 text-center">
            We are a passionate group of developers, designers, and innovators
            working together to build modern, user-friendly web applications.
          </p>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Who We Are</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to create seamless digital experiences that make
            technology simple and enjoyable. We believe in clean design, modern
            functionality, and long-lasting impact.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With a focus on innovation and creativity, we’ve developed multiple
            software and web-based solutions for clients across different
            industries — always striving for excellence and user satisfaction.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Values
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>💡 Innovation with purpose</li>
              <li>🤝 Teamwork and collaboration</li>
              <li>⚙️ Quality and reliability</li>
              <li>🌍 User-first design</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
