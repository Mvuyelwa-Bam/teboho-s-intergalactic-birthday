
import React, { useState, useCallback } from 'react';
import { generateBirthdayWish } from '../services/geminiService';
import { Title } from './shared/Title';

const WishGenerator: React.FC = () => {
    const [wish, setWish] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerateWish = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setWish('');
        try {
            const generatedWish = await generateBirthdayWish('Teboho', 'Mvuyelwa');
            setWish(generatedWish);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <section className="text-center">
            <Title>Cosmic Oracle</Title>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                The universe has a unique message for you. Tap into the cosmic ether to receive your personalized birthday prophecy.
            </p>
            <div className="mt-8">
                <button
                    onClick={handleGenerateWish}
                    disabled={isLoading}
                    className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_20px_theme('colors.cyan.400')] disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105"
                >
                    {isLoading ? 'Connecting to Singularity...' : 'Reveal Cosmic Wish'}
                </button>
            </div>

            {isLoading && (
                 <div className="mt-8 text-cyan-300 animate-pulse">Analyzing Starlight Patterns...</div>
            )}
            
            {error && <div className="mt-8 text-red-500 p-4 bg-red-900/50 border border-red-500 rounded-lg">{error}</div>}

            {wish && (
                <div className="mt-10 max-w-3xl mx-auto p-6 bg-purple-900/30 border border-fuchsia-500/50 rounded-lg backdrop-blur-sm animate-text-focus-in shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                    <p className="text-xl md:text-2xl italic leading-relaxed text-white" style={{textShadow: "0 0 8px rgba(255, 255, 255, 0.3)"}}>
                        "{wish}"
                    </p>
                </div>
            )}
        </section>
    );
};

export default WishGenerator;
