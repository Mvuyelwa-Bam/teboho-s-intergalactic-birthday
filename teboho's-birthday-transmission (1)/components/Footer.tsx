
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full text-center p-8 border-t border-gray-800 mt-24">
            <p className="text-gray-500">
                Design Signal Transmitted by <span className="text-cyan-400 animate-flicker">Mvuyelwa</span>
            </p>
            <p className="text-xs text-gray-600 mt-2">
                [End of Transmission]
            </p>
        </footer>
    );
};

export default Footer;
