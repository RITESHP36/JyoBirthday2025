import React, { useState, useRef } from 'react';
import { LevelProps, Song } from '../../types';
import { SONGS } from '../../constants';
import Confetti from '../Confetti';

const Level3: React.FC<LevelProps> = ({ onComplete, isLocked }) => {
    const [selectedSongId, setSelectedSongId] = useState<number | null>(null);
    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleSongSelect = (song: Song) => {
        if (isCorrect) return;

        setSelectedSongId(song.id);
        if (song.isCorrect) {
            setIsCorrect(true);
            if (audioRef.current) {
                audioRef.current.src = song.audioSrc;
                audioRef.current.play().catch(e => console.error("Audio play failed", e));
            }
        } else {
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false);
                setSelectedSongId(null);
            }, 1000);
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {isCorrect && <Confetti />}
            <div className="w-full max-w-3xl bg-slate-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/30 z-10">
                <h2 className="text-3xl font-bold mb-2">Level 3: Guess the Song from Emojis</h2>
                <div className="my-6 text-5xl md:text-6xl space-x-2">
                    <span>🌙</span><span>🌊</span><span>💫</span><span>✨</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SONGS.map(song => (
                        <div
                            key={song.id}
                            onClick={() => handleSongSelect(song)}
                            className={`p-4 rounded-lg flex items-center space-x-4 cursor-pointer transition-all duration-300 ${
                                selectedSongId === song.id 
                                    ? (isCorrect ? 'bg-teal-500/80 ring-4 ring-teal-300' : 'bg-rose-500/80 animate-shake')
                                    : 'bg-white/10 hover:bg-white/20'
                            }`}
                        >
                            <img src={song.albumArt} alt={song.title} className="w-16 h-16 rounded-md object-cover"/>
                            <div>
                                <h3 className="font-bold text-lg text-left text-white">{song.title}</h3>
                                <p className="text-sm text-slate-300 text-left">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {isCorrect ? (
                    <div className="text-center mt-6">
                        <p className="text-2xl font-bold text-teal-400 mb-4">You got it!</p>
                        <button onClick={onComplete} className="px-8 py-3 text-lg font-bold text-white bg-fuchsia-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-fuchsia-600">
                            Next Level
                        </button>
                    </div>
                ) : (
                    isWrong && <p className="mt-4 text-rose-400">Try again, think romantic!</p>
                )}
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default Level3;