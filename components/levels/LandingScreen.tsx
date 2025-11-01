import React from 'react';
import FloatingParticles from '../FloatingParticles';

interface LandingScreenProps {
  onBegin: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onBegin }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4">
      <FloatingParticles />
      <div className="relative z-10 space-y-6 bg-slate-900/30 p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white animate-float" style={{ textShadow: '0 3px 6px rgba(0,0,0,0.4)', animationDelay: '0.2s' }}>
          Welcome, Girl of the Hour ✨
        </h1>
        <p className="text-lg md:text-2xl text-slate-200/90 animate-float" style={{ animationDelay: '0.4s' }}>
          Here's a small surprise for your birthday
        </p>
        <p className="max-w-xl text-md md:text-lg text-slate-300/80 animate-float" style={{ animationDelay: '0.6s' }}>
          But first... a little adventure awaits! Complete the next 5 levels to unlock a special message I prepared just for you.
        </p>
        <button
          onClick={onBegin}
          className="mt-8 px-10 py-4 text-xl font-bold text-white bg-fuchsia-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-fuchsia-600 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/50 animate-glow"
        >
          Let's Begin 🎂
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;