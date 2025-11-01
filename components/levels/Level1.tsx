import React, { useState, useEffect, useCallback } from 'react';
import { LevelProps } from '../../types';

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;
const CORRECT_ORDER = Array.from({ length: TILE_COUNT }, (_, i) => i);
const IMAGE_URL = '../../images/level1/puzzle.jpg';

const shuffle = (array: number[]) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const Level1: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [tiles, setTiles] = useState(() => shuffle([...CORRECT_ORDER]));
    const [selected, setSelected] = useState<number | null>(null);
    const [isSolved, setIsSolved] = useState(false);

    useEffect(() => {
        if (JSON.stringify(tiles) === JSON.stringify(CORRECT_ORDER)) {
            setIsSolved(true);
        }
    }, [tiles]);

    const handleTileClick = (index: number) => {
        if (isSolved) return;
        if (selected === null) {
            setSelected(index);
        } else {
            const newTiles = [...tiles];
            [newTiles[selected], newTiles[index]] = [newTiles[index], newTiles[selected]];
            setTiles(newTiles);
            setSelected(null);
        }
    };

    const handleShuffle = useCallback(() => {
        setIsSolved(false);
        setTiles(shuffle([...CORRECT_ORDER]));
    }, []);

    const getTileStyle = (tileIndex: number) => ({
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
        backgroundPosition: `${(tileIndex % GRID_SIZE) * (100 / (GRID_SIZE - 1))}% ${(Math.floor(tileIndex / GRID_SIZE)) * (100 / (GRID_SIZE - 1))}%`,
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
             <div className="w-full max-w-lg bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-2">Level 1: Piece Together the Memory</h2>
                <div
                    className="relative grid gap-1 mx-auto my-4 transition-all duration-500 rounded-lg"
                    style={{ 
                        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                        width: 'clamp(280px, 90vw, 400px)',
                        boxShadow: isSolved ? '0 0 20px 5px rgba(45, 212, 191, 0.7)' : 'none',
                    }}
                >
                    {tiles.map((tile, index) => (
                        <div
                            key={index}
                            onClick={() => handleTileClick(index)}
                            className={`aspect-square bg-cover bg-center cursor-pointer transition-all duration-300 rounded-md border-2 ${
                                selected === index ? 'border-fuchsia-400 scale-105' : 'border-transparent'
                            } ${isSolved ? 'border-teal-500/50' : 'hover:opacity-80'}`}
                            style={getTileStyle(tile)}
                        />
                    ))}
                </div>
                {isSolved ? (
                    <div className="text-center">
                        <p className="text-2xl font-bold text-teal-400 mb-4">Level Complete!</p>
                        <button onClick={onComplete} className="px-8 py-3 text-lg font-bold text-white bg-fuchsia-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-fuchsia-600">
                            Next Level
                        </button>
                    </div>
                ) : (
                    <button onClick={handleShuffle} className="px-6 py-2 bg-white/20 rounded-full hover:bg-white/30 transition text-white">
                        Shuffle Again
                    </button>
                )}
            </div>
        </div>
    );
};

export default Level1;