import React, { useState, useEffect } from 'react';
import { LevelProps } from '../../types';
import { ACROSTIC_PARAGRAPH } from '../../constants';

const CORRECT_KEY = "JYOTHSNA";

const Level5: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (isWrong) setIsWrong(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.toUpperCase() === CORRECT_KEY) {
            setIsCorrect(true);
            setTimeout(onComplete, 2000); // Wait for animation
        } else {
            setIsWrong(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <div className="w-full max-w-2xl bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-2">Level 5: The Final Key</h2>
                <p className="mb-6 text-slate-300">Read this paragraph carefully to find the key.</p>

                <div className="text-left space-y-3 bg-black/30 p-4 rounded-lg text-slate-300">
                    {ACROSTIC_PARAGRAPH.slice().reverse().map((item, index) => (
                        <p key={index}>
                            <span className={`font-bold text-lg transition-colors duration-500 ${isCorrect ? 'text-fuchsia-400' : 'text-slate-100'}`} style={{ transitionDelay: isCorrect ? `${index * 100}ms` : '0ms' }}>
                                {item.letter}
                            </span>
                            {item.sentence.substring(1)}
                        </p>
                    ))}
                     <p className="pt-4 text-fuchsia-400 font-semibold">Use the first letter of each sentence, in reverse order, to unlock the final level.</p>
                </div>
                
                {!isCorrect && (
                    <form onSubmit={handleSubmit} className="mt-6">
                        <label htmlFor="key-input" className="block mb-2 font-semibold">Enter the key:</label>
                        <input
                            id="key-input"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className={`w-full max-w-xs p-3 text-center text-lg bg-white/20 rounded-lg border-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 placeholder:text-slate-400 ${
                                isWrong ? 'border-rose-500 animate-shake' : 'border-transparent'
                            }`}
                            placeholder="Type the key here"
                        />
                        <button type="submit" className="mt-4 px-8 py-3 text-lg font-bold text-indigo-800 bg-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                            Unlock
                        </button>
                    </form>
                )}

                {isCorrect && (
                    <div className="mt-6">
                        <p className="text-2xl font-bold text-fuchsia-400">You've unlocked it! Get ready...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Level5;