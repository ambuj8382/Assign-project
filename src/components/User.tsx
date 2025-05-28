'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useCountUp } from '@/hooks/useCountUp';

export const User = () => {
  const { darkMode } = useTheme();
  const targetCount = 20;
  const count = useCountUp(targetCount, 2000);

  return (
    <div className={`w-full h-[220px] rounded-3xl flex items-center justify-center p-4 hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)] relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03]
      ${darkMode ? 'bg-[#191934]' : 'bg-[#f3f3fd]'} shadow-xl`}>

      <div className={`w-full h-full rounded-3xl flex flex-col items-center justify-between p-6
        ${darkMode ? 'bg-[#191934]' : 'bg-white'}`}>

        <div className="text-center">
          <h1 className="text-[62px] font-bold leading-none bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">
            {count}
          </h1>
          <p className={`mt-1 text-lg font-medium ${darkMode ? 'text-[#ACA0E4]' : 'text-[#6b5bb6]'}`}>
            Top Users
          </p>
        </div>
        <div className="flex items-center justify-center -space-x-5">
          <div className="w-16 rounded-full border-2 border-[#1b1c31] bg-[#F4A261] overflow-hidden z-0">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-16 h-16 rounded-full border-2 border-[#1b1c31] bg-gradient-to-b from-[#ffeede] to-[#fff7f2] flex items-center justify-center z-1">
            <div className="w-4 h-4 bg-[#f96b3b] rotate-45 rounded-sm"></div>
          </div>

          <div className="w-16 h-16 rounded-full border-2 border-[#1b1c31] bg-[#a78bfa] overflow-hidden z-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
