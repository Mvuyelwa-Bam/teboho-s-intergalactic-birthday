
import React from 'react';
import { Title } from './shared/Title';

const crypticSymbols = ['⏃', '⎕', '⍜', '⍟', '⍰', '⏁', '⍠', '⏦', '⍳', '⍼', '⌬', '⍗'];
const logEntries = [
    "LOG_ID::7B0H0. CYCLE_INITIATED.",
    "TIMESTAMP::[Stardate 98150.3]",
    "SOURCE::Quantum Entanglement Beacon (QEB-MVUYELWA)",
    "SIGNAL_STATUS::HARMONIC RESONANCE ACHIEVED",
    "DECRYPTION_KEY::FRIENDSHIP_CHRONON_PARTICLES",
    "PAYLOAD_STATUS::AWAITING USER ACKNOWLEDGEMENT",
    "MESSAGE_FRAGMENT::Rm9yIFRlYm9obzogTWF5IHlvdXIgZnV0dXJlIGJlIHdyaXR0ZW4gaW4gdGhlIHN0YXJzLg==",
    "TRANSMISSION_END::[Looping echo detected...]"
];

const generateGlyphs = (count: number) => {
    return Array.from({ length: count }, () => crypticSymbols[Math.floor(Math.random() * crypticSymbols.length)]);
};

const CrypticDataStream: React.FC = () => {
    const glyphs = generateGlyphs(100);

    return (
        <section>
            <Title>Encrypted Data Fragments</Title>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono">
                {/* Column 1: Data Log */}
                <div className="md:col-span-2 p-6 bg-gray-900/50 border border-cyan-400/30 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <h4 className="text-cyan-400 text-base mb-4">// INCOMING TRANSMISSION LOG_</h4>
                    {logEntries.map((entry, index) => (
                        <p 
                            key={index} 
                            className="text-gray-400 whitespace-pre-wrap animate-text-focus-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                           <span className="text-fuchsia-500 mr-2">&gt;</span>{entry}
                        </p>
                    ))}
                     <p className="text-gray-600 mt-4 text-xs">// Hint: Base64 detected in payload.</p>
                </div>

                {/* Column 2: Glyph Wall */}
                <div className="p-4 bg-gray-900/50 border border-fuchsia-500/30 rounded-lg flex flex-wrap gap-x-2 gap-y-1 justify-center items-center">
                   {glyphs.map((glyph, index) => (
                       <span 
                            key={index} 
                            className="text-fuchsia-500 animate-flicker" 
                            style={{ 
                                animationDuration: `${Math.random() * 2 + 1}s`,
                                animationDelay: `${Math.random() * 2}s`,
                                opacity: Math.random() * 0.5 + 0.5
                            }}
                        >
                           {glyph}
                       </span>
                   ))}
                   <h4 className="w-full text-center text-gray-700 mt-4 text-xs">[SYMBOL MATRIX CORRUPTED]</h4>
                </div>
            </div>
        </section>
    );
};

export default CrypticDataStream;
