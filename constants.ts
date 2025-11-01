import { Song, Photo } from './types';

export const CORRECT_EMOJI_ORDER: string[] = ['🏫', '🚗', '🚫🍽️', '🍕', '🚗', '🏬', '🚗', '🛕', '🚗', '🏫'];
export const INITIAL_EMOJI_ORDER: string[] = ['🍕', '🏫', '🚗', '🛕', '🏬', '🚗', '🚫🍽️', '🚗', '🏫', '🚗'].slice(0, CORRECT_EMOJI_ORDER.length); // Ensure same length


export const SONGS: Song[] = [
    {
        id: 1,
        title: 'முன்பே வா (Munbe Vaa)',
        artist: 'Sillunu Oru Kadhal',
        isCorrect: true
    },
    {
        id: 2,
        title: 'கண்ணாடி பூவே (Kannadi Poove)',
        artist: 'Retro',
        isCorrect: false
    },
    {
        id: 3,
        title: 'கனிமா (Kanimaa)',
        artist: 'Retro',
        isCorrect: false
    },
    {
        id: 4,
        title: 'அன்பே பெரும்பே (Anbae Peranbae)',
        artist: 'NGK',
        isCorrect: false
    },
    {
        id: 5,
        title: 'ஆகாசம் (Aagasam)',
        artist: 'Soorarai Pottru',
        isCorrect: false
    }
];

export const PHOTOS: Photo[] = [
    { id: 1, src: 'https://i.ibb.co/MxcVkkwr/first.jpg', caption: "Vibrant Smile", correctOrder: 0 },
    { id: 2, src: 'https://i.ibb.co/ZzX0WXNs/second.jpg', caption: "Formal show off", correctOrder: 1 },
    { id: 3, src: 'https://i.ibb.co/prJHFtZm/third.jpg', caption: "Tight bonds", correctOrder: 2 },
    { id: 4, src: 'https://i.ibb.co/TMtsGG31/fourth.jpg', caption: "Beach day", correctOrder: 3 },
    { id: 5, src: 'https://i.ibb.co/HfmBLrqt/fifth.jpg', caption: "Our outing", correctOrder: 4 }
];

export const ACROSTIC_PARAGRAPH = [
    { letter: 'J', sentence: "Just thinking about your friendship fills my heart with so much gratitude." },
    { letter: 'Y', sentence: "Your courage in difficult times shows just how incredible you truly are." },
    { letter: 'O', sentence: "Outstanding friend who always puts others before herself without hesitation." },
    { letter: 'T', sentence: "True beauty radiates from your kind heart and caring soul." },
    { letter: 'H', sentence: "How do you manage to be both fierce and gentle at the same time?" },
    { letter: 'S', sentence: "So brave in facing challenges, you tackle everything with grace and determination." },
    { letter: 'N', sentence: "Nothing can break your spirit - your strength inspires everyone around you." },
    { letter: 'A', sentence: "Absolutely stunning inside and out, you light up every room you enter." }
];