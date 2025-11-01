
import React from 'react';

const Confetti: React.FC = () => {
    const particles = Array.from({ length: 100 });
    const colors = ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400'];

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-50">
            {particles.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                };
                const size = Math.random() * 8 + 4;
                const color = colors[Math.floor(Math.random() * colors.length)];

                return (
                    <div
                        key={i}
                        className={`absolute top-0 w-2 h-4 ${color} confetti`}
                        style={{ ...style, width: `${size}px`, height: `${size * 2}px` }}
                    />
                );
            })}
        </div>
    );
};

export default Confetti;
