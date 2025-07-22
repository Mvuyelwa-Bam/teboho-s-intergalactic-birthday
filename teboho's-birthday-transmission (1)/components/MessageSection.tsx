
import React from 'react';
import { Title } from './shared/Title';

const MessageSection: React.FC = () => {
    return (
        <section>
            <Title>Log Entry: Mvuyelwa</Title>
            <div className="mt-8 p-6 md:p-8 bg-gray-900/50 border border-cyan-400/30 rounded-lg backdrop-blur-sm relative shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                <div className="absolute top-2 right-2 text-cyan-400 text-xs">// Secure Channel</div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    Hey Teboho,
                </p>
                <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-300">
                    Happy orbit completion day! It feels like just yesterday we were navigating the early quadrants of our friendship, and now look at us - traversing whole new galaxies of experiences. You're one of the most brilliant stars in my personal cosmos, always shining bright with kindness, humor, and incredible strength.
                </p>
                <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-300">
                    I hope this next rotation around the sun brings you nothing but successful missions, amazing discoveries, and all the joy the universe can contain. Can't wait for our next adventure!
                </p>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-cyan-400 font-bold">
                    - Mvuyelwa
                </p>
            </div>
        </section>
    );
};

export default MessageSection;
