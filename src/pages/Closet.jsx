import React from 'react';
import ClosetStack from '../components/ClosetStack';

const Closet = () => {
    return (
        <div className="px-4 py-6 w-full max-w-xl mx-auto">
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-display font-bold text-chrome-light tracking-tight mb-1">INVENTORY</h2>
                    <p className="text-xs text-chrome font-sans uppercase tracking-widest">Audit your archives.</p>
                </div>
            </div>

            <ClosetStack />
        </div>
    );
};

export default Closet;
