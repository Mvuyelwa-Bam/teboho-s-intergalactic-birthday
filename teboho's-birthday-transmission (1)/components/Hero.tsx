import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div 
                className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 animate-background-pan opacity-60"
            ></div>
            <div className="absolute inset-0 z-10 bg-black/30"></div>
            
            <div className="relative z-20 flex flex-col items-center justify-center p-4">
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-widest text-white uppercase animate-text-focus-in" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}>
                    TEBOHO
                </h1>
                <h2 className="mt-4 text-2xl md:text-4xl font-bold text-cyan-400 animate-flicker" style={{animationDelay: '1s'}}>
                    STELLAR ALIGNMENT
                </h2>
                <p className="mt-8 text-lg text-gray-300 animate-text-focus-in" style={{animationDelay: '1.5s'}}>
                    A special transmission from Mvuyelwa
                </p>
            </div>

            <div className="absolute top-1/4 left-0 w-1/2 h-px bg-cyan-400/50 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-fuchsia-500/50 animate-pulse"></div>
        </div>
    );
};

export default Hero;