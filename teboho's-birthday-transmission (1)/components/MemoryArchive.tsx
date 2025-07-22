
import React from 'react';
import { Title } from './shared/Title';

const memories = [
    { id: 1, src: "https://picsum.photos/seed/teboho1/400/500", caption: "Stardate 2021.45" },
    { id: 2, src: "https://picsum.photos/seed/teboho2/400/500", caption: "Nebula Cafe Trip" },
    { id: 3, src: "https://picsum.photos/seed/teboho3/400/500", caption: "First Contact" },
    { id: 4, src: "https://picsum.photos/seed/teboho4/400/500", caption: "Galactic Concert" },
    { id: 5, src: "https://picsum.photos/seed/teboho5/400/500", caption: "Quantum Laughs" },
    { id: 6, src: "https://picsum.photos/seed/teboho6/400/500", caption: "Simulation Glitch" },
];

const MemoryArchive: React.FC = () => {
    return (
        <section>
            <Title>Memory Archive</Title>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {memories.map((memory, index) => (
                    <div 
                        key={memory.id} 
                        className="group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-fuchsia-500/80 transition-all duration-300"
                        style={{ animation: `text-focus-in 1s ${index * 0.15}s backwards` }}
                    >
                        <img 
                            src={memory.src} 
                            alt={memory.caption} 
                            className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p className="text-white text-xl font-bold tracking-wider text-center">{memory.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MemoryArchive;
