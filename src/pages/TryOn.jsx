import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, ArrowLeft, RefreshCw, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { askGemini } from '../services/ai';

const TryOn = () => {
    const { tryOnReference, setActiveTab } = useAppContext();
    const [isProcessing, setIsProcessing] = useState(false);
    const [resultReady, setResultReady] = useState(false);
    const [aiTips, setAiTips] = useState("");

    // Use Gemini AI for styling translation
    useEffect(() => {
        let isMounted = true;

        if (tryOnReference) {
            setIsProcessing(true);

            async function getStylingAdvice() {
                const prompt = `Give me 2 short, edgy styling tips for a Gen Z "${tryOnReference?.niche || 'streetwear'}" aesthetic using basic wardrobe staples. Keep it extremely brief, under 20 words total.`;

                const result = await askGemini(prompt);

                if (isMounted) {
                    setAiTips(result);
                    setIsProcessing(false);
                    setResultReady(true);
                }
            }

            getStylingAdvice();
        }

        return () => {
            isMounted = false;
        };
    }, [tryOnReference]);

    if (!tryOnReference) {
        return (
            <div className="px-4 py-8 flex flex-col items-center justify-center min-h-[70vh] text-center">
                <div className="w-20 h-20 rounded-full chrome-btn flex items-center justify-center mb-6">
                    <Upload size={32} className="text-obsidian-dark" />
                </div>
                <h2 className="text-xl font-display font-bold text-chrome-light mb-2">UPLOAD REFERENCE</h2>
                <p className="text-sm font-sans text-chrome max-w-xs mb-8">
                    Upload a fit you want to translate, or scan one from your feed.
                </p>
                <button
                    onClick={() => setActiveTab('home')}
                    className="px-6 py-3 border border-chrome/30 rounded-full text-chrome-light text-sm font-sans flex items-center gap-2 hover:bg-chrome/10 transition-colors"
                >
                    <ArrowLeft size={16} /> Browse Feed
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto pb-6">
            <div className="px-4 py-4 flex items-center justify-between border-b border-chrome-dark/20 bg-obsidian/50 backdrop-blur sticky top-16 z-30">
                <button
                    onClick={() => setActiveTab('home')}
                    className="text-chrome hover:text-chrome-light flex items-center gap-1"
                >
                    <ArrowLeft size={18} /> <span className="text-xs uppercase font-display">Back</span>
                </button>
                <h2 className="text-sm font-display font-bold text-ultraviolet-light tracking-widest uppercase">
                    Neural Translation
                </h2>
                <button className="text-chrome hover:text-ultraviolet-light">
                    <RefreshCw size={18} />
                </button>
            </div>

            <div className="flex flex-col md:flex-row w-full h-[60vh] md:h-[70vh] bg-obsidian-dark">
                {/* Subculture Reference (Top/Left) */}
                <div className="flex-1 relative border-b md:border-b-0 md:border-r border-chrome-dark/30 overflow-hidden group">
                    <img
                        src={tryOnReference.imageUrl}
                        alt="Reference"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-3 left-3 bg-obsidian/80 backdrop-blur-sm border border-chrome/30 px-3 py-1 rounded text-xs font-display text-chrome-light tracking-wide">
                        SOURCE: {tryOnReference.niche}
                    </div>

                    {/* Styling Hacks Overlays */}
                    {resultReady && tryOnReference.tryOnCallouts?.map((callout, idx) => (
                        <div
                            key={idx}
                            className="absolute hud-panel p-2 rounded max-w-[140px] text-[10px] font-sans text-chrome-light border-l-2 border-l-ultraviolet-light z-10 animate-fade-in"
                            style={{ top: callout.top, left: callout.left }}
                        >
                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-ultraviolet-light shadow-[0_0_8px_rgba(178,102,255,1)]"></div>
                            {callout.text}
                        </div>
                    ))}
                </div>

                {/* Translation Output (Bottom/Right) */}
                <div className="flex-1 relative overflow-hidden bg-obsidian flex shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
                    {isProcessing ? (
                        <div className="flex flex-col items-center justify-center w-full text-center">
                            <div className="relative w-16 h-16 mb-4">
                                <div className="absolute inset-0 border-t-2 border-ultraviolet-light rounded-full animate-spin"></div>
                                <div className="absolute inset-2 border-r-2 border-chrome rounded-full animate-spin reverse"></div>
                                <Sparkles size={24} className="absolute inset-0 m-auto text-ultraviolet-light animate-pulse" />
                            </div>
                            <p className="text-xs font-display text-chrome uppercase tracking-widest break-words w-48 mx-auto leading-relaxed">
                                <span className="text-ultraviolet-light">Synthesizing inventory...</span><br />
                                Mapping proportions
                            </p>
                        </div>
                    ) : resultReady ? (
                        <div className="w-full h-full relative">
                            {/* Mock AI Output Image (Using a different image to represent the user) */}
                            <img
                                src="https://images.unsplash.com/photo-1550614000-4b95d4edfa31?auto=format&fit=crop&q=80&w=800"
                                alt="Your Translation"
                                className="w-full h-full object-cover filter contrast-125 saturate-50"
                            />

                            {/* AI Text Display */}
                            <div className="absolute top-4 left-4 right-4 bg-obsidian-dark/90 p-3 rounded-lg border border-ultraviolet-light/50 shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-20 animate-fade-in">
                                <p className="text-sm font-sans text-chrome-light italic leading-relaxed">
                                    <span className="text-ultraviolet-light font-bold not-italic">AI Stylist: </span>
                                    {aiTips}
                                </p>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 hud-panel p-4 rounded-xl flex justify-between items-center group">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-chrome-light uppercase tracking-wide">Translation Complete</h3>
                                    <p className="text-[10px] text-chrome font-sans">Using 3 items from your inventory</p>
                                </div>
                                <button className="chrome-btn w-10 h-10 flex items-center justify-center group-hover:glow-ultraviolet">
                                    <Check size={18} className="text-obsidian-dark" />
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default TryOn;
