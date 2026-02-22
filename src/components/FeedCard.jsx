import React from 'react';
import { Shirt, Accessibility, CheckCircle2, XCircle, Heart, Share2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FeedCard = ({ post }) => {
    const { navigateToTryOn } = useAppContext();

    const ownedCount = post.items.filter(item => item.isOwned).length;
    const totalCount = post.items.length;
    const ownershipPercentage = Math.round((ownedCount / totalCount) * 100);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden brutalist-border mb-6 touch-manipulation group bg-obsidian-light">
            {/* Main Image */}
            <img
                src={post.imageUrl}
                alt={`Outfit by ${post.author}`}
                className="w-full h-auto object-cover max-h-[70vh]"
                loading="lazy"
            />

            {/* Social Overlay (Top Right) */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="p-2 glassmorphism rounded-full text-chrome hover:text-ultraviolet-light transition-colors">
                    <Heart size={20} />
                </button>
                <button className="p-2 glassmorphism rounded-full text-chrome hover:text-ultraviolet-light transition-colors">
                    <Share2 size={20} />
                </button>
            </div>

            {/* Vibe Scan HUD Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent">
                <div className="hud-panel p-3 rounded-xl mb-3">

                    {/* Author & Niche Badge */}
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-sans font-bold text-chrome-light text-sm tracking-wide">{post.author}</span>
                        <span className="text-[10px] uppercase font-display px-2 py-1 bg-chrome/10 text-ultraviolet-light border border-ultraviolet/30 rounded">
                            {post.niche}
                        </span>
                    </div>

                    {/* Ownership Stats */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-chrome font-display tracking-widest mb-1">Inventory Link</span>
                            <span className="font-sans font-bold text-chrome-light text-xs">
                                {ownedCount}/{totalCount} ITEMS OWNED
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-1/2 h-1.5 bg-obsidian-dark rounded-full overflow-hidden border border-chrome-dark/30">
                            <div
                                className="h-full bg-ultraviolet drop-shadow-[0_0_5px_rgba(138,43,226,0.6)] transition-all duration-1000"
                                style={{ width: `${ownershipPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Item Icons Breakdown */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.items.map(item => (
                            <div
                                key={item.id}
                                className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-sans transition-all
                  ${item.isOwned
                                        ? 'bg-chrome/10 text-chrome border border-chrome/30'
                                        : 'bg-obsidian text-text-muted/50 border border-chrome-dark/10 opacity-60'
                                    }`}
                            >
                                {item.category === 'outerwear' || item.category === 'tops' ? <Shirt size={12} /> : <Accessibility size={12} />}
                                <span className="truncate max-w-[80px]">{item.name}</span>
                                {item.isOwned ? <CheckCircle2 size={10} className="text-chrome-light" /> : <XCircle size={10} />}
                            </div>
                        ))}
                    </div>

                    {/* Action CTA & Stats */}
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={() => navigateToTryOn(post)}
                            className="chrome-btn flex-1 py-3 text-sm tracking-wider uppercase flex items-center justify-center gap-2 group-hover:glow-ultraviolet"
                        >
                            <Sparkles size={16} className="text-obsidian-dark" />
                            Translate Vibe
                        </button>
                        <div className="bg-obsidian-dark px-3 py-2 rounded-lg border border-chrome-dark/20 text-center min-w-[60px]">
                            <span className="block text-chrome-light text-xs font-bold font-sans">{post.engagementCount}</span>
                            <span className="block text-[8px] text-chrome font-display uppercase tracking-wider">Syncs</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Fix missing icon import
import { Sparkles } from 'lucide-react';

export default FeedCard;
