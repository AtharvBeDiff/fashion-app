import React from 'react';
import { Home, Shirt, Sparkles, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navigation = () => {
    const { activeTab, setActiveTab } = useAppContext();

    const navItems = [
        { id: 'home', icon: Home, label: 'Feed' },
        { id: 'closet', icon: Shirt, label: 'Closet' },
        { id: 'try-on', icon: Sparkles, label: 'Try-On' },
        { id: 'profile', icon: User, label: 'Profile' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-obsidian-light/90 backdrop-blur-md border-t border-chrome-dark/30 flex items-center justify-around px-4 pb-safe z-50">
            {navItems.map(({ id, icon: Icon, label }) => {
                const isActive = activeTab === id;

                return (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className="group relative flex flex-col items-center justify-center w-16 h-14"
                    >
                        {isActive && (
                            <div className="absolute inset-0 bg-ultraviolet/20 rounded-xl filter blur-md transition-opacity duration-300"></div>
                        )}

                        <div className={`relative p-2 rounded-xl transition-all duration-300 flex flex-col items-center ${isActive ? 'text-ultraviolet-light shadow-[0_0_15px_rgba(178,102,255,0.4)]' : 'text-chrome'}`}>
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-[0_0_8px_rgba(178,102,255,0.8)]' : ''} />

                            <span className={`text-[10px] mt-1 font-sans tracking-wide transition-all duration-300 ${isActive ? 'opacity-100 font-semibold' : 'opacity-0 translate-y-2'}`}>
                                {label}
                            </span>
                        </div>

                        {isActive && (
                            <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-ultraviolet-light shadow-[0_0_8px_rgba(178,102,255,1)]"></div>
                        )}
                    </button>
                );
            })}
        </nav>
    );
};

export default Navigation;
