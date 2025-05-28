'use client';

import { useTheme } from '@/context/ThemeContext';
import { CrosshairIcon } from 'lucide-react';

const AiJourney = () => {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? 'bg-[#1b1c31]' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const subTextColor = darkMode ? 'text-gray-400' : 'text-gray-500';
  const iconBorder = darkMode ? 'border-[#1b1c31]' : 'border-white';

  return (
    <div
      className={`relative ${bgColor} ${textColor} rounded-[24px] cursor-pointer flex items-end  relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)] sm:w-[264] h-[350px] w-[160px] sm:h-[412px] px-3 py-3`}
    >
      <div className="absolute top-4 right-4">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path
            d="M50 0 V40 H30 V60"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="0" r="3" fill="#a78bfa" />
          <circle cx="30" cy="60" r="3" fill="#a78bfa" />
        </svg>
      </div>

      <div>
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-tr from-[#9f71ff] to-[#6a4cd4] flex items-center justify-center shadow-[0_0_25px_rgba(167,139,250,0.4)] border-[3px] ${iconBorder} pulseGlow`}
        >
          <CrosshairIcon size={18} className={textColor} />
        </div>

        <h3 className="text-base font-semibold mb-1">Ai journey</h3>
        <p className={`text-sm leading-tight ${subTextColor}`}>
          Boost your prompt precision with keywords.
        </p>
      </div>
    </div>
  );
};

export default AiJourney;
