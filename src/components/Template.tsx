'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Template = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-between items-center">
      <div
        className={`
          rounded-2xl flex flex-col justify-between items-center
           h-[300px] sm:h-[396px] w-full p-6 relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] src/components/Template.tsx
          ${darkMode ? 'bg-[#191934]' : 'bg-white'}
        `}
      >
        <h2 className={`
          text-[24px] sm:text-[32px] font-bold leading-tight 
          bg-gradient-to-tr text-transparent bg-clip-text 
          ${darkMode ? 'from-white to-[#AA9CFC]' : 'from-[#191934] to-[#AA9CFC]'}
        `}>
          Create<br />your own<br />template
        </h2>

        <div className="mt-6">
          <p className={`text-sm font-semibold ${darkMode ? 'text-[#E6E3FF]' : 'text-[#5a4dc9]'}`}>
            14 days trial
          </p>
          <p className={`text-sm ${darkMode ? 'text-[#ACA0E4]' : 'text-[#7f74c2]'}`}>
            after – $5/month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template;
