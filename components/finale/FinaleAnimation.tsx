import React, { useState, useEffect } from 'react';
import Confetti from '../Confetti';

interface FinaleAnimationProps {
    onComplete: () => void;
}

const FinaleAnimation: React.FC<FinaleAnimationProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setStep(1), 500),    // Descend
            setTimeout(() => setStep(2), 2000),   // Split
            setTimeout(() => setStep(3), 4500),   // Merge
            setTimeout(() => setStep(4), 6000),   // Explode
            setTimeout(() => setStep(5), 6500),   // Show Text
            setTimeout(() => setStep(6), 9000),   // Show Scroll Prompt
            setTimeout(onComplete, 11000),      // Finish
        ];
        return () => timeouts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const barBaseStyle = "h-8 w-80 bg-teal-500 rounded-full transition-all duration-1000 ease-in-out";

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-300 via-purple-400 to-indigo-500 z-50 overflow-hidden">
            {step >= 4 && <Confetti />}

            <div className={`flex flex-col items-center justify-center space-y-4 transition-all duration-1000 ${step >= 3 ? 'opacity-0 scale-150' : 'opacity-100'}`}>
                <div className={`${barBaseStyle} ${step >= 2 ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}></div>
                <div className={`${barBaseStyle} ${step >= 0 ? 'transform ' + (step === 2 ? 'scale-y-100' : step > 2 ? 'scale-y-100' : 'scale-y-0') : 'scale-y-0'}`}></div>
                <div className={`${barBaseStyle} ${step >= 2 ? 'opacity-100' : 'opacity-0 translate-y-8'}`}></div>
            </div>

            {step >= 4 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h1 className={`text-5xl md:text-7xl font-extrabold text-white transition-all duration-1000 ease-in-out ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`} style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
                        Happy 21st Birthday Jyothsna 🎉
                    </h1>
                     <div className={`mt-20 flex flex-col items-center transition-opacity duration-1000 text-white ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-lg">Scroll to read your surprise</p>
                        <svg className="w-8 h-8 mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinaleAnimation;