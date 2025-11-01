import React, { useState, useEffect, useRef } from 'react';
import { GameState } from './types';
import ProgressBar from './components/ProgressBar';
import LandingScreen from './components/levels/LandingScreen';
import Level1 from './components/levels/Level1';
import Level2 from './components/levels/Level2';
import Level3 from './components/levels/Level3';
import Level4 from './components/levels/Level4';
import Level5 from './components/levels/Level5';
import FinaleAnimation from './components/finale/FinaleAnimation';
import BirthdayLetter from './components/finale/BirthdayLetter';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Landing);
  const [completedLevels, setCompletedLevels] = useState<number>(0);
  const levelRefs = {
    level1: useRef<HTMLDivElement>(null),
    level2: useRef<HTMLDivElement>(null),
    level3: useRef<HTMLDivElement>(null),
    level4: useRef<HTMLDivElement>(null),
    level5: useRef<HTMLDivElement>(null),
    letter: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Request audio permissions at the start of the app
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            console.log('Microphone permission granted.');
            // Stop the tracks to release the microphone immediately
            stream.getTracks().forEach(track => track.stop());
        })
        .catch(err => {
            console.error('Microphone permission denied.', err);
            // Handle cases where the user denies permission, if necessary.
            // For now, the app can proceed without it.
        });
  }, []); // Empty dependency array ensures this runs only once on mount


  const handleLevelComplete = (level: number) => {
    if (completedLevels < level) {
      setCompletedLevels(level);
    }
  };
  
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.Landing:
        return <LandingScreen onBegin={() => setGameState(GameState.Level1)} />;
      case GameState.Level1:
      case GameState.Level2:
      case GameState.Level3:
      case GameState.Level4:
      case GameState.Level5:
      case GameState.Finale:
      case GameState.Letter:
        return (
          <div className="w-full">
            <div ref={levelRefs.level1}>
              <Level1 onComplete={() => { handleLevelComplete(1); scrollToRef(levelRefs.level2); }} isLocked={completedLevels < 0} />
            </div>
            {completedLevels >= 1 && <div ref={levelRefs.level2}><Level2 onComplete={() => { handleLevelComplete(2); scrollToRef(levelRefs.level3); }} isLocked={completedLevels < 1} /></div>}
            {completedLevels >= 2 && <div ref={levelRefs.level3}><Level3 onComplete={() => { handleLevelComplete(3); scrollToRef(levelRefs.level4); }} isLocked={completedLevels < 2} /></div>}
            {completedLevels >= 3 && <div ref={levelRefs.level4}><Level4 onComplete={() => { handleLevelComplete(4); scrollToRef(levelRefs.level5); }} isLocked={completedLevels < 3} /></div>}
            {completedLevels >= 4 && <div ref={levelRefs.level5}><Level5 onComplete={() => { handleLevelComplete(5); setGameState(GameState.Finale); }} isLocked={completedLevels < 4} /></div>}
            {gameState === GameState.Finale && <FinaleAnimation onComplete={() => { setGameState(GameState.Letter); setTimeout(() => scrollToRef(levelRefs.letter), 100); }} />}
            {gameState === GameState.Letter && <div ref={levelRefs.letter}><BirthdayLetter /></div>}
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-fuchsia-300 via-purple-400 to-indigo-500 text-slate-100 overflow-x-hidden">
      {gameState !== GameState.Landing && (
        <ProgressBar completedLevels={completedLevels} />
      )}
      <main className="flex flex-col items-center justify-center w-full">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;