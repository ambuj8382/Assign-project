'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  UsersIcon,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const getRandomAngle = () => Math.floor(Math.random() * 10 - 5);

const rotateAnim = {
  animate: {
    rotate: [0, getRandomAngle(), -getRandomAngle(), 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  whileHover: { scale: 1.05 },
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

      <div className=" left-4 flex flex-wrap gap-3 items-end w-[206px] h-[260]">
        <motion.div
          {...rotateAnim}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white"
        >
          <span className="w-2 h-2 rounded-full bg-[#C792FF]"></span>
          <span className="text-white/90">Rewrite</span>
        </motion.div>

        <motion.div
          {...rotateAnim}
          className="p-4 rounded-full bg-gradient-to-tr from-[#FFA35C] to-[#FF5489] shadow-md"
        >
          <UsersIcon size={18} className="text-white" />
        </motion.div>

        <motion.div
          {...rotateAnim}
          className="flex flex-col items-center gap-1 px-2 py-3 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-medium text-white"
        >
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]"></span>
            PDF
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FFC864]"></span>
            PNG
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#C792FF]"></span>
            JPG
          </span>
        </motion.div>

        <motion.div
          {...rotateAnim}
          className="p-4 rounded-full bg-gradient-to-tr from-[#7C4DFF] to-[#40C4FF] shadow-md"
        >
          <CameraIcon size={18} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default PromptService;
