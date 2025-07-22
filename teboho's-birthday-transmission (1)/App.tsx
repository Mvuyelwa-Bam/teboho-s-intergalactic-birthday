
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import WishGenerator from './components/WishGenerator';
import CrypticDataStream from './components/CrypticDataStream';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // 4 second loading screen

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20" style={{
                 backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                 backgroundSize: '20px 20px',
            }}></div>
            <div className="relative z-10">
                <Hero />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 md:space-y-32">
                    <MessageSection />
                    <WishGenerator />
                    <CrypticDataStream />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
