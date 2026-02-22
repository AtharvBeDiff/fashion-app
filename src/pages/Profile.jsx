import React from 'react';
import VibeRadar from '../components/VibeRadar';
import { userProfile } from '../data/mockDb';
import { Settings, LogOut, Award } from 'lucide-react';

const Profile = () => {
    return (
        <div className="px-4 py-6 w-full max-w-xl mx-auto space-y-6">

            {/* Header element */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full glassmorphism border-[2px] border-chrome flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                            alt="Profile avatar"
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-display font-bold text-chrome-light tracking-tight">@{userProfile.username}</h2>
                        <p className="text-xs text-ultraviolet-light font-display uppercase tracking-widest flex items-center gap-1 mt-1">
                            <Award size={12} /> Elite Tier
                        </p>
                    </div>
                </div>

                <button className="w-10 h-10 rounded-full bg-obsidian border border-chrome-dark/30 flex justify-center items-center text-chrome hover:text-chrome-light transition-colors">
                    <Settings size={20} />
                </button>
            </div>

            <VibeRadar />

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="hud-panel p-4 rounded-xl flex flex-col items-center justify-center">
                    <span className="font-display text-2xl text-chrome-light font-bold">142</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-chrome mt-1">Items Scanned</span>
                </div>
                <div className="hud-panel p-4 rounded-xl flex flex-col items-center justify-center">
                    <span className="font-display text-2xl text-ultraviolet-light font-bold">89%</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-chrome mt-1">Translation Rate</span>
                </div>
            </div>

            <div className="pt-8 flex justify-center">
                <button className="text-chrome flex items-center gap-2 text-xs font-sans uppercase tracking-widest hover:text-red-400 transition-colors">
                    <LogOut size={16} /> Terminate Link
                </button>
            </div>
        </div>
    );
};

export default Profile;
