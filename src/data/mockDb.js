// Realistic mock JSON data for the app

export const mockFeed = [
    {
        id: "f1",
        imageUrl: "https://images.unsplash.com/photo-1542289457-3dd9413697e0?auto=format&fit=crop&q=80&w=800",
        niche: "Opium",
        author: "@lxrd_vamp",
        engagementCount: "4.2k",
        items: [
            { id: "i1", name: "Leather Trench", category: "outerwear", isOwned: false },
            { id: "i2", name: "Distressed Denim", category: "bottoms", isOwned: true },
            { id: "i3", name: "Chunky Boots", category: "shoes", isOwned: true }
        ],
        tryOnCallouts: [
            { top: "20%", left: "10%", text: "Proportion Hack: Oversized shoulders create angular silhouette." },
            { top: "80%", left: "50%", text: "Stacking: Let the denim pool over the boots." }
        ]
    },
    {
        id: "f2",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        niche: "Y2K Goth",
        author: "@cyber_tearz",
        engagementCount: "1.4k",
        items: [
            { id: "i4", name: "Silver Chain Top", category: "tops", isOwned: false },
            { id: "i5", name: "Mini Skirt", category: "bottoms", isOwned: true },
            { id: "i6", name: "Platform Sneakers", category: "shoes", isOwned: false },
            { id: "i7", name: "Chrome Choker", category: "accessories", isOwned: true }
        ],
        tryOnCallouts: [
            { top: "30%", left: "60%", text: "Hardware focus: Mix silver metals freely." }
        ]
    },
    {
        id: "f3",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0c5000642f58?auto=format&fit=crop&q=80&w=800",
        niche: "Opium",
        author: "@void_construct",
        engagementCount: "8.9k",
        items: [
            { id: "i8", name: "Cropped Bomber", category: "outerwear", isOwned: true },
            { id: "i9", name: "Flared Trousers", category: "bottoms", isOwned: false },
            { id: "i10", name: "Derby Shoes", category: "shoes", isOwned: true }
        ],
        tryOnCallouts: [
            { top: "50%", left: "15%", text: "Crop to flare ratio emphasizes height." }
        ]
    }
];

export const mockCloset = [
    { id: "i2", name: "Distressed Denim", category: "bottoms", imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400" },
    { id: "i3", name: "Chunky Boots", category: "shoes", imageUrl: "https://images.unsplash.com/photo-1608667508764-cae449a0b6da?auto=format&fit=crop&q=80&w=400" },
    { id: "i5", name: "Mini Skirt", category: "bottoms", imageUrl: "https://images.unsplash.com/photo-1583292650898-7c22dc4c1b92?auto=format&fit=crop&q=80&w=400" },
    { id: "i7", name: "Chrome Choker", category: "accessories", imageUrl: "https://images.unsplash.com/photo-1599643478524-fb524b056158?auto=format&fit=crop&q=80&w=400" },
    { id: "i8", name: "Cropped Bomber", category: "outerwear", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" },
    { id: "i10", name: "Derby Shoes", category: "shoes", imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400" }
];

export const userProfile = {
    username: "user_1337",
    radarData: [
        { subject: 'Opium', A: 120, fullMark: 150 },
        { subject: 'Y2K Goth', A: 98, fullMark: 150 },
        { subject: 'Brutalist', A: 86, fullMark: 150 },
        { subject: 'Archive', A: 99, fullMark: 150 },
        { subject: 'Cyber', A: 85, fullMark: 150 },
        { subject: 'Avant-Garde', A: 65, fullMark: 150 },
    ]
};
