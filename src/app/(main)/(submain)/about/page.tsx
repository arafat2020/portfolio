"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      <div style={{
        background:"url('./pc.jpg')"
      }}
      className='absolute w-full h-full top-0 bottom-0 blur-md bg-center bg-cover bg-no-repeat' 
      />
      <motion.div
        className="flex flex-col items-center max-w-screen-md z-10 bg-black/30 p-3 rounded-md shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Profile Image */}
        <motion.img
          src="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/330287676_220977707127287_1111664057085946405_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEnCV3UbYAEvHXPirGxGjDzDw4hCDLqoUcPDiEIMuqhR03TApu7MPLyx2usnoif5SZ8Me1ubzWCrZOVDzWsY-XN&_nc_ohc=9QIsRQiledMQ7kNvgH_qaYh&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=Ak97bOLrlqG6yqCuqwtKrU-&oh=00_AYAo6zecA7XlCc98TiebWA8ni8m1f2XVyvvvzbSfrSG07g&oe=6769FECF"
          alt="Your Name"
          className="h-20 w-20 xsm:w-40 xsm:h-40 rounded-full shadow-lg mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* About Description */}
        <motion.h1
          className="text-2xl xsm:text-3xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hi, I&apos;m Arafat Mannan
        </motion.h1>
        <motion.p
          className="text-center text-[1rem] xsm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
                    I am a passionate web developer skilled in creating modern, responsive, and user-friendly web solutions. With expertise in frontend and backend development, I deliver complete, scalable, and efficient applications. I thrive on solving challenges and staying updated with emerging technologies. Let’s build something amazing together!

        </motion.p>

        {/* Contact Information */}
        <motion.div
          className="flex mt-6 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/arafat2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-slate-500 text-2xl"
          >
            <FaGithub />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arafat-mannan-8661a3288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-2xl"
          >
            <FaLinkedin />
          </a>
          {/* Email */}
          <a
            href="mailto:arafatmannan2019@gmail.com"
            className="text-gray-600 hover:text-red-500 text-2xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
