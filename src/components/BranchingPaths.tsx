'use client';

import { useTheme } from '@/context/ThemeContext';
import { GitBranchIcon } from 'lucide-react';

const BranchingPaths = () => {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? 'bg-[#1b1c31]' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const subTextColor = darkMode ? 'text-gray-400' : 'text-gray-500';
  const iconBorder = darkMode ? 'border-[#1b1c31]' : 'border-white';

  return (
    <div
      className={`relative ${bgColor} ${textColor} rounded-[24px] cursor-pointer flex items-end  relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)] sm:w-[264] h-[350px] w-[160px]  sm:h-[412px] px-3 py-3`}
    >
      <div className="absolute top-4 left-4">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path
            d="M10 0 V40 H30 V60"
            stroke="#ffaa55"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="0" r="3" fill="#ffaa55" />
          <circle cx="30" cy="60" r="3" fill="#ffaa55" />
        </svg>
      </div>

      <div>
        <div className="mb-2">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-tr from-[#f96b3b] to-[#ffa94d] flex items-center justify-center shadow-[0_0_25px_rgba(255,167,104,0.4)] border-[3px] ${iconBorder}`}
          >
            <GitBranchIcon size={18} className={textColor} />
          </div>
        </div>

        <h3 className="text-base font-semibold mb-1">Branching paths</h3>
        <p className={`text-sm leading-tight ${subTextColor}`}>
          Explore multiple prompt directions with branching.
        </p>
      </div>
    </div>
  );
};

export default BranchingPaths;
