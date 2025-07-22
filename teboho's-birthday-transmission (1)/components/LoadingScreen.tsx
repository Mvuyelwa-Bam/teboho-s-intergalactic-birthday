import React, { useState, useEffect } from 'react';

const loadingTexts = [
    "INITIALIZING BIRTHDAY PROTOCOL...",
    "SYNCING WITH CHRONO-SATELLITES...",
    "CALIBRATING JOY VECTORS...",
    "DECRYPTING DATA FRAGMENTS...",
    "TRANSMISSION FOR TEBOHO INCOMING...",
];

const LoadingScreen: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < loadingTexts.length) {
            const timer = setInterval(() => {
                setTextIndex(prev => prev + 1);
            }, 700);
            return () => clearInterval(timer);
        }
    }, [textIndex]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-cyan-400">
            <div className="w-full max-w-lg text-left p-4 font-mono">
                {loadingTexts.slice(0, textIndex).map((text, index) => (
                    <p key={index} className="animate-text-focus-in">{`> ${text}`}</p>
                ))}
            </div>
            <div className="mt-8 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 animate-pulse transition-all duration-700 ease-linear" style={{ width: `${(textIndex / loadingTexts.length) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default LoadingScreen;