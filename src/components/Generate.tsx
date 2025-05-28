'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import camImg from '../assets/image/camImage.png';

const Generate = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
    flex justify-center items-center rounded-3xl
    w-full h-[140px] sm:w-[260px] sm:h-[160px] md:w-[280px] md:h-[164px]
    transform transition-transform duration-300 ease-in-out hover:scale-105
    ${darkMode ? 'bg-[#191934]' : 'bg-[#f5f5fa]'}
  hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)]`}
    >
      <button
        className={`
      flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg font-semibold text-sm sm:text-base relative
      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl
      ${darkMode
            ? 'bg-gradient-to-r from-[#8a4fff] to-[#7f5fff] text-white'
            : 'bg-gradient-to-r from-[#7f5fff] to-[#8a4fff] text-white'}
    `}
      >
        <span
          className={`
        flex items-center justify-center rounded-full w-6 h-6 sm:w-7 sm:h-7
        ${darkMode ? 'bg-white/10' : 'bg-black/10'}
      `}
        >
          <Image src={camImg} height={20} width={20} alt="img" />
        </span>
        <span className="hidden sm:flex">Generate</span>
      </button>
    </div>

  );
};

export default Generate;
