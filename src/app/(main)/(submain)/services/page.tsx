'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaCogs, FaPaintBrush } from 'react-icons/fa';
import { SparkleHeading } from '../../_components/Sparklejeading';

function Services() {
  const iconClass = "text-slate-500 text-6xl p-2 border-[2px] border-cyan-600/40 rounded-md";
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building modern, responsive, and visually appealing user interfaces using React, Next.js, and more.',
      icon: <FaLaptopCode className={iconClass} />,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side logic and APIs using Node.js, Express, and databases like PostgreSQL.',
      icon: <FaServer className={iconClass} />,
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Creating end-to-end web applications that combine seamless frontend and powerful backend functionalities.',
      icon: <FaCogs className={iconClass} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces and experiences to enhance usability and engagement.',
      icon: <FaPaintBrush className={iconClass} />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <motion.div
        className="max-w-screen-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SparkleHeading title="Services"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border-[3px] shadow-md border-slate-900/60 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div>{service.icon}</div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p >{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
