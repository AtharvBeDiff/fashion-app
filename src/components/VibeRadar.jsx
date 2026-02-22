import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { userProfile } from '../data/mockDb';

const VibeRadar = () => {
    return (
        <div className="w-full aspect-square hud-panel rounded-2xl p-4 relative flex items-center justify-center">

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-chrome/50"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-chrome/50"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-chrome/50"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-chrome/50"></div>

            <div className="absolute top-4 left-4 z-10">
                <h3 className="font-display text-sm tracking-widest text-chrome-light uppercase">Vibe Radar</h3>
                <p className="font-sans text-[10px] text-chrome">Aesthetic composition analysis</p>
            </div>

            <ResponsiveContainer width="100%" height="90%" className="mt-8">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={userProfile.radarData}>
                    <PolarGrid
                        stroke="#6C7A9C"
                        strokeOpacity={0.4}
                        gridType="polygon"
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: '#E2E8F0', fontSize: 10, fontFamily: 'Space Grotesk' }}
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 150]}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        name="Aesthetic"
                        dataKey="A"
                        stroke="#B266FF"
                        strokeWidth={2}
                        fill="#8A2BE2"
                        fillOpacity={0.4}
                        isAnimationActive={true}
                    />
                </RadarChart>
            </ResponsiveContainer>

            {/* Center glowing element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
                <div className="w-2 h-2 bg-chrome-light rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
            </div>
        </div>
    );
};

export default VibeRadar;
