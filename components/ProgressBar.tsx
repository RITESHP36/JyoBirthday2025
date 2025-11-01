import React from 'react';

interface ProgressBarProps {
  completedLevels: number;
}

const CheckmarkIcon: React.FC = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path className="checkmark-path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);


const ProgressBar: React.FC<ProgressBarProps> = ({ completedLevels }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-indigo-950/30 backdrop-blur-md p-4 shadow-lg">
      <div className="flex justify-around items-center max-w-2xl mx-auto">
        {[...Array(5)].map((_, i) => {
          const level = i + 1;
          const isCompleted = completedLevels >= level;
          const isCurrent = completedLevels + 1 === level;
          
          return (
            <React.Fragment key={level}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-500 ${
                    isCompleted ? 'bg-teal-500 border-teal-300' : isCurrent ? 'bg-fuchsia-500 border-fuchsia-300 animate-pulse' : 'bg-slate-700/50 border-slate-500/80'
                  }`}
                >
                  {isCompleted ? <CheckmarkIcon /> : <span className="text-lg font-bold text-white">{level}</span>}
                </div>
                <span className="text-xs md:text-sm mt-2 font-semibold tracking-wide text-slate-200">Level {level}</span>
              </div>
              {level < 5 && (
                <div className="flex-1 h-1 bg-slate-700/50 mx-2 md:mx-4 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all duration-1000" style={{ width: isCompleted ? '100%' : '0%' }}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;