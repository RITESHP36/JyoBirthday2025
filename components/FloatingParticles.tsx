
import React from 'react';

const FloatingParticles: React.FC = () => {
    const particles = Array.from({ length: 25 });

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {particles.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                };
                return (
                    <div
                        key={i}
                        className="absolute bg-white/50 rounded-full animate-float"
                        style={style}
                    />
                );
            })}
        </div>
    );
};

export default FloatingParticles;
