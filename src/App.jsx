import React from 'react';
import { useAppContext } from './context/AppContext';
import Navigation from './components/Navigation';

// Placeholder pages
import HomeFeed from './pages/HomeFeed';
import Closet from './pages/Closet';
import TryOn from './pages/TryOn';
import Profile from './pages/Profile';

function App() {
  const { activeTab } = useAppContext();

  return (
    <div className="min-h-screen bg-obsidian text-text-main font-sans pb-24 selection:bg-ultraviolet/50">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-obsidian-light/80 backdrop-blur-lg border-b border-chrome-dark/20 px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-display font-bold tracking-tight text-chrome-light text-glow-ultraviolet">
          VIBE<span className="text-ultraviolet-light">CHECK</span>
        </h1>
        <div className="h-2 w-2 rounded-full bg-chrome-light animate-pulse shadow-[0_0_8px_rgba(176,186,204,0.8)]"></div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-2xl mx-auto min-h-[calc(100vh-140px)]">
        {activeTab === 'home' && <HomeFeed />}
        {activeTab === 'closet' && <Closet />}
        {activeTab === 'try-on' && <TryOn />}
        {activeTab === 'profile' && <Profile />}
      </main>

      <Navigation />
    </div>
  );
}

export default App;
