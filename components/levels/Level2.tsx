import React, { useState, useRef } from 'react';
import { LevelProps } from '../../types';
import { CORRECT_EMOJI_ORDER, INITIAL_EMOJI_ORDER } from '../../constants';

const Level2: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [emojis, setEmojis] = useState<string[]>(INITIAL_EMOJI_ORDER);
    const [isWrong, setIsWrong] = useState(false);
    const [isSolved, setIsSolved] = useState(false);
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        dragItem.current = index;
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        dragOverItem.current = index;
    };

    const handleDragEnd = () => {
        if (dragItem.current !== null && dragOverItem.current !== null) {
            const newEmojis = [...emojis];
            const draggedItemContent = newEmojis.splice(dragItem.current, 1)[0];
            newEmojis.splice(dragOverItem.current, 0, draggedItemContent);
            setEmojis(newEmojis);
        }
        dragItem.current = null;
        dragOverItem.current = null;
    };

    const checkOrder = () => {
        if (JSON.stringify(emojis) === JSON.stringify(CORRECT_EMOJI_ORDER)) {
            setIsSolved(true);
        } else {
            setIsWrong(true);
            setTimeout(() => setIsWrong(false), 500);
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <div className="w-full max-w-3xl bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-2">Level 2: Retrace Our Day Out</h2>
                <p className="mb-6 text-slate-300">Drag the emojis in the order of our epic day together!</p>

                <div className={`flex flex-wrap justify-center items-center gap-2 p-4 min-h-[80px] rounded-lg bg-black/30 transition-all duration-300 ${isWrong ? 'animate-shake border-2 border-rose-500' : ''} ${isSolved ? 'border-2 border-fuchsia-400' : ''}`}>
                    {emojis.map((emoji, index) => (
                        <div
                            key={index}
                            draggable={!isSolved}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => e.preventDefault()}
                            className={`text-4xl md:text-5xl p-2 rounded-lg cursor-grab transition-all duration-300 ${ isSolved ? 'animate-pulse' : 'hover:bg-white/20'}`}
                            style={{ animationDelay: isSolved ? `${index * 100}ms` : '0ms' }}
                        >
                            {emoji}
                        </div>
                    ))}
                </div>

                {isWrong && <p className="text-rose-400 mt-4">Not quite! Think about where we went after the closed restaurant!</p>}

                {isSolved ? (
                    <div className="text-center mt-6">
                        <p className="text-2xl font-bold text-fuchsia-400 mb-4">You got it! What a day that was.</p>
                        <button onClick={onComplete} className="px-8 py-3 text-lg font-bold text-white bg-fuchsia-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-fuchsia-600">
                            Next Level
                        </button>
                    </div>
                ) : (
                    <button onClick={checkOrder} className="mt-6 px-8 py-3 text-lg font-bold text-indigo-800 bg-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                        Check Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default Level2;