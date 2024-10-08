import React from 'react';
import profilepic from "../assets/PHOTO.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: delay },
  },
});

const textVariant = (delay) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-8 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={textVariant(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Oudra Brahim
            </motion.h1>
            <motion.span
              variants={textVariant(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={textVariant(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={textVariant(1.5)}
              initial="hidden"
              animate="visible"
              href='#contact'
              className='mt-4 px-6 py-2 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-l focus:outline-none'>
              Contact Me
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:items-center p-8'>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            src={profilepic}
            alt='Profile picture of Oudra Brahim, Full Stack Developer'
            className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
