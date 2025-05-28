'use client';

import React, { FC } from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const Toggle: FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  const trackWidth = 96;
  const knobSize = 48;
  const knobTranslateX = trackWidth - knobSize - 4;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={darkMode}
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      onClick={toggleTheme}
      className={`
        w-full h-[158px] rounded-2xl
        flex items-center justify-center
        cursor-pointer select-none
         relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)]
        ${darkMode ? 'bg-[#191934]' : 'bg-[#f5f5fa]'}
        shadow-lg
       `}
    >
      <div
        className={`
          relative w-24 h-14 rounded-full p-1
          bg-gradient-to-r ${darkMode 
            ? 'from-gray-800 via-gray-700 to-gray-800'
            : 'from-gray-200 via-gray-300 to-gray-200'}
          transition-colors duration-300
          shadow-inner
        `}
      >
        <motion.div
          layout
          initial={false}
          animate={{ x: darkMode ? knobTranslateX : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`
            relative z-10 w-12 h-12 rounded-full bg-white
            flex items-center justify-center
            text-indigo-600 shadow-xl
            hover:scale-105 transition-transform duration-200
            before:absolute before:inset-0 before:rounded-full
            before:bg-gradient-to-br before:from-white before:to-gray-100
            before:opacity-50 before:animate-pulse
          `}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          tabIndex={-1}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>
    </div>
  );
};

export default Toggle;
