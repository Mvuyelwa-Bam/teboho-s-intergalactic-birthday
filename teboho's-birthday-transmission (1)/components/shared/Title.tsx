
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <h3 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 animate-flicker tracking-widest uppercase">
            {children}
        </h3>
    );
};
