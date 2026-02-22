import React, { createContext, useContext, useState } from 'react';
import { mockFeed, mockCloset, userProfile } from '../data/mockDb';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [feed, setFeed] = useState(mockFeed);
    const [closet, setCloset] = useState(mockCloset);
    const [profile, setProfile] = useState(userProfile);
    const [tryOnReference, setTryOnReference] = useState(null);

    const navigateToTryOn = (feedItem) => {
        setTryOnReference(feedItem);
        setActiveTab('try-on');
    };

    return (
        <AppContext.Provider
            value={{
                activeTab,
                setActiveTab,
                feed,
                closet,
                profile,
                tryOnReference,
                navigateToTryOn
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
