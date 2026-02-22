import React from 'react';
import { useAppContext } from '../context/AppContext';
import FeedCard from '../components/FeedCard';

const HomeFeed = () => {
    const { feed } = useAppContext();

    return (
        <div className="px-4 py-6 w-full max-w-xl mx-auto">
            {/* Header section for feed */}
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-display font-bold text-chrome-light tracking-tight mb-1">VIBE SCAN</h2>
                    <p className="text-xs text-chrome font-sans uppercase tracking-widest">Stop blindly copying.</p>
                </div>
                <div className="text-xs text-ultraviolet-light font-sans bg-ultraviolet/10 px-2 py-1 rounded border border-ultraviolet/30 animate-pulse">
                    LIVE
                </div>
            </div>

            {/* Masonry-style Grid (CSS Columns approach for simple masonry) */}
            <div className="columns-1 gap-4 space-y-4">
                {feed.map(post => (
                    <div key={post.id} className="break-inside-avoid">
                        <FeedCard post={post} />
                    </div>
                ))}
            </div>

            {/* End of content spacing */}
            <div className="h-6 w-full flex justify-center items-center opacity-30 mt-8 mb-4">
                <div className="w-1 h-1 rounded-full bg-chrome mx-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-chrome mx-1"></div>
                <div className="w-1 h-1 rounded-full bg-chrome mx-1"></div>
            </div>
        </div>
    );
};

export default HomeFeed;
