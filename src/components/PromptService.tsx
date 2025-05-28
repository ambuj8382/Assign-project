'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  CameraIcon,
  UsersIcon,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const floatRotateVariants: Variants = {
  initial: { opacity: 0, y: 30, rotate: 0 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  whileHover: {
    scale: 1.15,
    rotate: 0,
    y: -5,
    boxShadow: '0 15px 30px rgba(124, 96, 209, 0.85), 0 0 15px 6px rgba(124, 96, 209, 0.7)',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};


const PromptService = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative w-full h-[412px] rounded-2xl p-5  flex flex-col overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] ${darkMode ? 'bg-[#191934] text-white' : 'bg-white text-gray-900'
        } hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)]`}
    >
      <div className='w-full h-[80px] items-center'>
        <h3 className="text-xl font-semibold mb-1">Prompt Service</h3>
        <p className={`text-sm mb-auto ${darkMode ? 'text-[#a0a0b2]' : 'text-gray-600'}`}>
          Use pre-made templates to jumpstart creativity.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 items-end w-[220px] h-[280px]">
        {/* Rewrite Tag */}
        <motion.div
          variants={floatRotateVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md
            text-white font-semibold shadow-lg cursor-pointer
            ring-1 ring-purple-500/70 hover:ring-purple-600"
          aria-label="Rewrite"
        >
          <span className="w-4 h-4 rounded-full bg-[#C792FF] shadow-[0_0_10px_#C792FF] animate-pulse" />
          <span className="text-white/95 tracking-wide drop-shadow-md">Rewrite</span>
        </motion.div>

        {/* Users Icon Circle */}
        <motion.div
          variants={floatRotateVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          className="p-6 rounded-full bg-gradient-to-tr from-[#FFA35C] to-[#FF5489]
            shadow-[0_0_15px_rgba(255,163,92,0.9),0_0_25px_rgba(255,84,137,0.8)]
            cursor-pointer"
          aria-label="Users"
        >
          <UsersIcon size={24} className="text-white drop-shadow-lg" />
        </motion.div>

        {/* File types block */}
        <motion.div
          variants={floatRotateVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          className="flex flex-col items-center gap-3 px-4 py-5 rounded-full bg-white/20 backdrop-blur-md
            text-xs font-semibold text-white shadow-lg ring-1 ring-white/30 cursor-pointer"
          aria-label="File types"
        >
          {[
            { color: '#00D2FF', label: 'PDF' },
            { color: '#FFC864', label: 'PNG' },
            { color: '#C792FF', label: 'JPG' },
          ].map(({ color, label }) => (
            <span key={label} className="flex items-center gap-3 tracking-wide drop-shadow-md">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
              />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Camera Icon Circle */}
        <motion.div
          variants={floatRotateVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          className="p-6 rounded-full bg-gradient-to-tr from-[#7C4DFF] to-[#40C4FF]
            shadow-[0_0_15px_rgba(124,77,255,0.9),0_0_25px_rgba(64,196,255,0.8)]
            cursor-pointer"
          aria-label="Camera"
        >
          <CameraIcon size={24} className="text-white drop-shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default PromptService;
