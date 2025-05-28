'use client';

import { useTheme } from '@/context/ThemeContext';
import React from 'react';

const TemplateAi = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative w-full h-[400px] rounded-[30px] text-white overflow-visible pt-10 pb-[120px] hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)]
        ${darkMode 
          ? 'bg-gradient-to-br from-[#a374ff] to-[#5f40b1] shadow-purple-900' 
          : 'bg-gradient-to-br from-[#BBA5F4] to-[#653AD8] text-gray-900 shadow-gray-400'
        }`}
    >
      <div className="flex flex-col items-center">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Template Ai
        </h2>
      </div>

      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] z-10 shadow-none rounded-full flex items-center justify-center
          ${darkMode 
            ? 'bg-black border-[20px] border-black shadow-[0_0_30px_#9c6bff]' 
            : 'bg-white border border-gray-300 shadow-[0_0_20px_#b0a8e7]'
          }`}
      >
        {/* GIF */}
        <img
          src="/gifs/Rotating_Sphere.gif"
          alt="Rotating Sphere Animation"
          className={`w-[140px] h-[140px] rounded-full object-cover
            ${darkMode
              ? 'shadow-[0_0_30px_#9c6bff] border-4 border-[#1d1b37]'
              : 'shadow-md border-2 border-gray-300'
            }`}
        />

        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="binaryGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BBA5F4" />
              <stop offset="100%" stopColor="#653AD8" />
            </linearGradient>
            <path
              id="circlePath"
              d="
                M 80, 80
                m -70, 0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>
          <text fill="url(#binaryGradient)" fontSize="10" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0" method="align" spacing="auto">
              0100110 1000111 10110110 010 001 1011 0100110 1000111 10110110 010 001 1011
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TemplateAi;
