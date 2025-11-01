
export enum GameState {
  Landing,
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Finale,
  Letter,
}

export interface LevelProps {
  onComplete: () => void;
  isLocked: boolean;
}

export interface Song {
    id: number;
    title: string;
    artist: string;
    isCorrect: boolean;
}

export interface Photo {
    id: number;
    src: string;
    caption: string;
    correctOrder: number;
}