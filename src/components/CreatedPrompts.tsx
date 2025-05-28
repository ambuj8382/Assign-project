import { useTheme } from '@/context/ThemeContext';
import { useCountUp } from '@/hooks/useCountUp';
import React, { useState } from 'react';

const CreatedPrompts = () => {
    const { darkMode } = useTheme();
    const targetCount = 25;
    const count = useCountUp(targetCount, 2000);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            alert(`You entered: ${inputValue}`);
            setInputValue('');
        }
    };

    return (
        <div
            className={`group flex justify-center items-center w-full h-[211px] rounded-[20px] p-5 relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.03] ${
                darkMode
                    ? 'bg-[#1B1A30] text-white'
                    : 'bg-white text-gray-900 shadow-md'
            } hover:shadow-[0_0_20px_2px_rgba(124,96,209,0.5)]`}
        >
            <div className="text-center">
                <h1 className="text-[62px] font-bold leading-none bg-gradient-to-r from-[#B388F3] via-[#9376E0] to-[#7C60D1] text-transparent bg-clip-text transition-all duration-300 group-hover:scale-105">
                    {count}M
                </h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="created prompts"
                    className={`mt-3 px-4 py-2 rounded-full border border-[#7C60D1] text-sm tracking-wide outline-none text-center w-full max-w-xs transition-all duration-300 ${
                        darkMode
                            ? 'text-[#ACA0E4] bg-[rgba(255,255,255,0.05)]'
                            : 'text-[#6b5bb6] bg-[rgba(0,0,0,0.03)]'
                    } group-hover:border-[#B388F3]`}
                />
            </div>
        </div>
    );
};

export default CreatedPrompts;
