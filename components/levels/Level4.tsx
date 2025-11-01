import React, { useState, useRef } from 'react';
import { LevelProps, Photo } from '../../types';
import { PHOTOS } from '../../constants';

// Simple shuffle for the initial render
const shufflePhotos = (array: Photo[]) => array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

const Level4: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [photos, setPhotos] = useState<Photo[]>(() => shufflePhotos([...PHOTOS]));
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
            const newPhotos = [...photos];
            const draggedItemContent = newPhotos.splice(dragItem.current, 1)[0];
            newPhotos.splice(dragOverItem.current, 0, draggedItemContent);
            setPhotos(newPhotos);
        }
        dragItem.current = null;
        dragOverItem.current = null;
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
            <div className="w-full max-w-4xl bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-2">Level 4: Timeline of Us</h2>
                <p className="mb-6 text-slate-300">Drag the photos to arrange them from earliest to latest.</p>

                <div className={`flex flex-col md:flex-row items-center justify-center gap-4 p-4 rounded-lg transition-all duration-500 ${isWrong ? 'animate-shake' : ''}`}>
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            draggable={!isSolved}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => e.preventDefault()}
                            className={`relative group rounded-lg overflow-hidden shadow-lg cursor-grab transition-transform duration-500 ${isSolved ? 'transform-none' : 'hover:scale-105'}`}
                            style={{ transitionDelay: isSolved ? `${index * 100}ms` : '0ms' }}
                        >
                            <img src={photo.src} alt={photo.caption} className="w-48 h-72 object-cover" />
                            <div className="absolute bottom-0 left-0 w-full p-2 bg-black/60 text-white text-xs text-center transition-opacity opacity-0 group-hover:opacity-100">
                                {photo.caption}
                            </div>
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