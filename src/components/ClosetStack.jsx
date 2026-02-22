import React, { useState } from 'react';
import { Check, X, Palette, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ClosetStack = () => {
    const { closet } = useAppContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null); // 'left' | 'right' | 'up' | 'down' | null

    if (currentIndex >= closet.length) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <h3 className="font-display text-xl text-chrome-light mb-2 uppercase">Stack Empty</h3>
                <p className="text-chrome text-sm font-sans mb-6">You've sorted through all your recent items.</p>
                <button
                    onClick={() => setCurrentIndex(0)}
                    className="chrome-btn px-6 py-2 text-xs"
                >
                    Reset Stack
                </button>
            </div>
        );
    }

    const currentItem = closet[currentIndex];

    const handleAction = (direction) => {
        setSlideDirection(direction);
        setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
            setSlideDirection(null);
        }, 400); // Wait for transition
    };

    return (
        <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center min-h-[70vh]">

            {/* The Stack Area */}
            <div className="relative w-full aspect-[3/4] mb-8">

                {/* Next Card (Background) */}
                {currentIndex + 1 < closet.length && (
                    <div className="absolute inset-0 bg-obsidian-light rounded-2xl brutalist-border scale-95 translate-y-4 opacity-50 z-0 flex flex-col overflow-hidden">
                        <img
                            src={closet[currentIndex + 1].imageUrl}
                            alt="Next item"
                            className="w-full h-full object-cover grayscale opacity-30"
                        />
                    </div>
                )}

                {/* Current Card */}
                <div
                    className={`absolute inset-0 bg-obsidian-light rounded-2xl brutalist-border overflow-hidden z-10 transition-transform duration-300 ease-out flex flex-col
            ${slideDirection === 'right' ? 'translate-x-[150%] rotate-12 opacity-0' : ''}
            ${slideDirection === 'left' ? '-translate-x-[150%] -rotate-12 opacity-0' : ''}
            ${slideDirection === 'up' ? '-translate-y-[150%] opacity-0' : ''}
            ${slideDirection === 'down' ? 'translate-y-[150%] opacity-0' : ''}
          `}
                >
                    {/* Item Image */}
                    <div className="flex-1 relative">
                        <img
                            src={currentItem.imageUrl}
                            alt={currentItem.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient bottom overlay */}
                        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-obsidian to-transparent"></div>
                    </div>

                    {/* Card Info */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                        <h3 className="font-display text-2xl font-bold text-chrome-light mb-1">{currentItem.name}</h3>
                        <span className="font-sans text-xs uppercase tracking-widest text-chrome px-3 py-1 bg-obsidian-dark/50 rounded-full border border-chrome-dark/30">
                            {currentItem.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Silver Disk Quick Actions */}
            <div className="flex justify-center items-center gap-4 w-full px-4">

                {/* Don't Own */}
                <button
                    onClick={() => handleAction('left')}
                    className="w-14 h-14 rounded-full bg-obsidian flex justify-center items-center border-[2px] border-chrome-dark/30 text-chrome hover:bg-chrome/10 hover:border-chrome transition-all"
                >
                    <X size={24} />
                </button>

                {/* Color Select */}
                <button
                    onClick={() => handleAction('up')}
                    className="w-12 h-12 rounded-full bg-obsidian flex justify-center items-center border-[2px] border-chrome-dark/30 text-chrome hover:bg-chrome/10 hover:border-chrome transition-all"
                >
                    <Palette size={20} />
                </button>

                {/* Owned (Main) */}
                <button
                    onClick={() => handleAction('right')}
                    className="w-20 h-20 rounded-full chrome-btn flex justify-center items-center hover:glow-ultraviolet"
                >
                    <Check size={36} className="text-obsidian-dark" />
                </button>

                {/* Add Later */}
                <button
                    onClick={() => handleAction('down')}
                    className="w-14 h-14 rounded-full bg-obsidian flex justify-center items-center border-[2px] border-chrome-dark/30 text-chrome hover:bg-chrome/10 hover:border-chrome transition-all"
                >
                    <Clock size={24} />
                </button>

            </div>
        </div>
    );
};

export default ClosetStack;
