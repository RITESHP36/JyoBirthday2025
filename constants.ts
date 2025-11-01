import { Song, Photo } from './types';

export const CORRECT_EMOJI_ORDER: string[] = ['🏫', '🚗', '🚫🍽️', '🍕', '🚗', '🏬', '🚗', '🛕', '🚗', '🏫'];
export const INITIAL_EMOJI_ORDER: string[] = ['🍕', '🏫', '🚗', '🛕', '🏬', '🚗', '🚫🍽️', '🚗', '🏫', '🚗'].slice(0, CORRECT_EMOJI_ORDER.length); // Ensure same length


export const SONGS: Song[] = [
    {
        id: 1,
        title: 'முன்பே வா (Munbe Vaa)',
        artist: 'Sillunu Oru Kadhal',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2738910815189254b1a4538804c',
        audioSrc: 'https://storage.googleapis.com/codescreens/vision/Munbe-Vaa.mp3',
        isCorrect: true
    },
    {
        id: 2,
        title: 'கண்ணாடி பூவே (Kannadi Poove)',
        artist: 'Retro',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2730e8c4602e3428c47f52504c1',
        audioSrc: '',
        isCorrect: false
    },
    {
        id: 3,
        title: 'கனிமா (Kanimaa)',
        artist: 'Retro',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273a555cdaa192376906236371f',
        audioSrc: '',
        isCorrect: false
    },
    {
        id: 4,
        title: 'அன்பே பெரும்பே (Anbae Peranbae)',
        artist: 'NGK',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273e9791b8a5433221941603957',
        audioSrc: '',
        isCorrect: false
    },
    {
        id: 5,
        title: 'ஆகாசம் (Aagasam)',
        artist: 'Soorarai Pottru',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273b4263339127813a83335e390',
        audioSrc: '',
        isCorrect: false
    }
];

export const PHOTOS: Photo[] = [
    { id: 1, src: './images/level4/first.jpg', caption: "Vibrant Smile", correctOrder: 0 },
    { id: 2, src: './images/level4/second.jpg', caption: "Formal show off", correctOrder: 1 },
    { id: 3, src: './images/level4/third.jpg', caption: "Tight bonds", correctOrder: 2 },
    { id: 4, src: './images/level4/fourth.jpg', caption: "Beach day", correctOrder: 3 },
    { id: 5, src: './images/level4/fifth.jpg', caption: "Our outing", correctOrder: 4 }
];

export const ACROSTIC_PARAGRAPH = [
    { letter: 'A', sentence: "Absolutely stunning inside and out, you light up every room you enter." },
    { letter: 'N', sentence: "Nothing can break your spirit - your strength inspires everyone around you." },
    { letter: 'S', sentence: "So brave in facing challenges, you tackle everything with grace and determination." },
    { letter: 'H', sentence: "How do you manage to be both fierce and gentle at the same time?" },
    { letter: 'T', sentence: "True beauty radiates from your kind heart and caring soul." },
    { letter: 'O', sentence: "Outstanding friend who always puts others before herself without hesitation." },
    { letter: 'Y', sentence: "Your courage in difficult times shows just how incredible you truly are." },
    { letter: 'J', sentence: "Just thinking about your friendship fills my heart with so much gratitude." }
];