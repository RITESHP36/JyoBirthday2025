import React, { useState } from 'react';

const BirthdayLetter: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const surpriseMessage = "I survived your puzzle maze and I'm ready for my surprise! 🎁";
    
    const handleCopy = () => {
        navigator.clipboard.writeText(surpriseMessage);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const reasons = [
        "Your laugh that makes my heart feel full and everyone around us smile too",
        "How you light up whenever chocolate is around—it's your happy place and no one's allowed to touch it!",
        "Your endless love for Suriya and all the ways you sneak him into our conversations, memes, and dreams",
        "Your fierce loyalty and the way you love your friends so deeply",
        "How you're never afraid to be completely, wonderfully yourself",
        "Your natural beauty and the confidence that radiates from within",
        "The way you walk into a room and somehow make everything feel brighter",
        "Your passion that lights up your eyes when you talk about what you love",
        "The pure happiness in your voice whenever you're planning a food trip or fangirling over a Suriya release",
        "Your strength that inspires me every single day, especially when life gets hard",
        "How you always seem to know exactly what I need to hear",
        "Your amazing ability to find songs that perfectly match every mood and moment",
        "The way you see potential and goodness in people, even when they can't see it themselves",
        "Your determination and how you never give up on your dreams or your people",
        "Your loyalty is unbreakable — you would stand by your friends through absolutely anything",
        "How you bring so much fun and laughter by cracking foodie jokes or movie references, making the simplest days unforgettable",
        "Your gentle heart that cares so much it sometimes hurts, but you never stop caring",
        "The way you will instantly recognize a tune from any Tamil movie and start dancing, making our friendship a never-ending celebration",
        "Your beautiful soul that shines through in everything you do",
        "Your dreams that are as big and bright as you are, and your courage to chase them",
        "Simply for being you - messy, magical, strong, silly, gorgeous, and absolutely irreplaceable."
    ];


    const photos = [
        { src: './images/gallery/gallery1.jpg', caption: "" },
        { src: './images/gallery/gallery2.jpg', caption: "" },
        { src: './images/gallery/gallery3.jpg', caption: "" },
        { src: './images/gallery/gallery4.jpg', caption: "" },
        { src: './images/gallery/gallery5.jpg', caption: "" },
        { src: './images/gallery/gallery6.jpg', caption: "" },
    ];
    
    return (
        <div className="w-full bg-gray-900 text-slate-300 py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
                
                {/* Section 1: 21 Things */}
                <section>
                    <h2 className="text-4xl font-bold text-center text-fuchsia-400 mb-8" style={{ textShadow: '0 2px 10px rgba(217, 70, 239, 0.4)'}}>21 Reasons You're the Best</h2>
                    <ol className="list-decimal list-inside text-lg space-y-3 columns-1 md:columns-2 gap-x-8">
                        {reasons.map((reason, i) => <li key={i}>{reason}</li>)}
                    </ol>
                </section>

                {/* Section 2: Photo Gallery */}
                <section>
                    <h2 className="text-4xl font-bold text-center text-violet-400 mb-8" style={{ textShadow: '0 2px 10px rgba(139, 92, 246, 0.4)'}}>The Birthday Girl</h2>
                    <div className="columns-2 md:columns-3 gap-4">
                        {photos.map((photo, i) => (
                            <div key={i} className="mb-4 break-inside-avoid">
                                <img src={photo.src} alt={photo.caption} className="rounded-lg shadow-lg w-full" />
                                <p className="text-center text-sm mt-2 text-slate-400">{photo.caption}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Birthday Wishes */}
                <section className="text-center">
                    <h2 className="text-4xl font-bold text-sky-400 mb-8" style={{ textShadow: '0 2px 10px rgba(56, 189, 248, 0.4)'}}>Wishing You…</h2>
                    <div className="text-xl leading-relaxed space-y-4">
                        <p>May this new year fill your life with joy, growth, opportunities as exciting as your biggest dreams, and laughter bright enough to light every day.</p>
                        <p>Here to more unforgettable moments, simple joys, and memories that make you smile for years to come. Happy 21st! You truly deserve every happiness in the world.</p>
                    </div>
                </section>

                {/* Section 4: Final Interactive Prompt */}
                <section>
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
                        <p className="text-lg mb-4 text-slate-200">One last thing… to unlock your real-world surprise, send me this exact message:</p>
                        <div className="relative bg-gray-900 p-4 rounded-lg">
                            <p className="text-xl font-mono text-fuchsia-400">{surpriseMessage}</p>
                            <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600 transition">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-slate-400 pt-8 border-t border-slate-700">
                    <p className="text-lg">Happy Birthday, Jyo. You deserve the world. 💜</p>
                </footer>
            </div>
        </div>
    );
};

export default BirthdayLetter;