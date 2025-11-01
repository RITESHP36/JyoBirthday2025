import React, { useState } from 'react';
import { LevelProps, Photo } from '../../types';
import { PHOTOS } from '../../constants';

// Simple shuffle for the initial render
const shufflePhotos = (array: Photo[]) => array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

const ArrowLeftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
    </svg>
);

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const Level4: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [photos, setPhotos] = useState<Photo[]>(() => shufflePhotos([...PHOTOS]));
    const [isWrong, setIsWrong] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const handleShift = (index: number, direction: 'left' | 'right') => {
        if (isSolved) return;
        const newPhotos = [...photos];
        if (direction === 'left' && index > 0) {
            [newPhotos[index], newPhotos[index - 1]] = [newPhotos[index - 1], newPhotos[index]];
        } else if (direction === 'right' && index < newPhotos.length - 1) {
            [newPhotos[index], newPhotos[index + 1]] = [newPhotos[index + 1], newPhotos[index]];
        }
        setPhotos(newPhotos);
    };

    const confirmOrder = () => {
        const isCorrect = photos.every((photo, index) => photo.correctOrder === index);
        if (isCorrect) {
            setIsSolved(true);
        } else {
            setIsWrong(true);
            setTimeout(() => setIsWrong(false), 1000);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <div className="w-full max-w-5xl bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-2">Level 4: Timeline of Us</h2>
                <p className="mb-6 text-slate-300">Use the arrow buttons to arrange the photos from earliest to latest.</p>

                <div className={`flex flex-wrap items-start justify-center gap-4 p-4 rounded-lg transition-all duration-500 ${isWrong ? 'animate-shake' : ''}`}>
                    {photos.map((photo, index) => (
                        <div key={photo.id} className="flex flex-col items-center gap-2">
                             <div
                                className={`relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ${isSolved ? 'transform-none' : ''}`}
                                style={{ transitionDelay: isSolved ? `${index * 100}ms` : '0ms' }}
                            >
                                <img src={photo.src} alt={photo.caption} className="w-48 h-72 object-cover" />
                                <div className="absolute bottom-0 left-0 w-full p-2 bg-black/60 text-white text-xs text-center">
                                    {photo.caption}
                                </div>
                            </div>
                            
                            {!isSolved && (
                                <div className="flex justify-center items-center gap-4 bg-black/20 p-1.5 rounded-full">
                                    <button
                                        onClick={() => handleShift(index, 'left')}
                                        disabled={index === 0}
                                        className="p-2 rounded-full text-white transition-colors duration-200 enabled:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label={`Move ${photo.caption} left`}
                                    >
                                        <ArrowLeftIcon />
                                    </button>
                                    <button
                                        onClick={() => handleShift(index, 'right')}
                                        disabled={index === photos.length - 1}
                                        className="p-2 rounded-full text-white transition-colors duration-200 enabled:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label={`Move ${photo.caption} right`}
                                    >
                                        <ArrowRightIcon />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                {isWrong && <p className="text-rose-400 mt-4">Not quite right. Check the dates more carefully!</p>}

                {isSolved ? (
                    <div className="text-center mt-6">
                        <p className="text-2xl font-bold text-teal-400 mb-4">Perfect! A journey through time.</p>
                        <button onClick={onComplete} className="px-8 py-3 text-lg font-bold text-white bg-fuchsia-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-fuchsia-600">
                            Next Level
                        </button>
                    </div>
                ) : (
                     <button onClick={confirmOrder} className="mt-6 px-8 py-3 text-lg font-bold text-indigo-800 bg-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                        Confirm Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default Level4;