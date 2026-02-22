# VibeCheck ⛓️

A hyper-niche, culturally attuned mobile fashion application for iOS and Android, targeted specifically at Gen Z subcultures. The core purpose is to help users translate hyper-specific influencer aesthetics into their own outfits using clothes they already own.

**"Dress to show your personality, not just copy."**

## Core Features 
- **Vibe Scan Feed**: A masonry grid feed of high-curation influencer outfits, overlaid with a futuristic metallic HUD panel displaying ownership stats and item breakdown.
- **Neural Translation (Try-On)**: AI-powered split-screen view comparing the user's generated fit with the reference, featuring styling hack callouts.
- **Closet Inventory**: A Tinder-like gamified stack UI to sort through clothes.
- **Vibe Radar**: A dynamic data visualization charting aesthetic leanings.

## Project Setup (Local Development)

This app is built using **Vite + React + TailwindCSS**. 

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Adding API Keys (AI Integration)

The application currently mocks the AI responses. However, when you're ready to integrate a real AI vision model (like Google Gemini API or OpenAI GPT-4 Vision) to handle the translation:

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
2. Add your API keys to this file. Vite requires the `VITE_` prefix:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_key_here
   VITE_OPENAI_API_KEY=your_openai_key_here
   ```
3. Use the keys in your logic (e.g., inside a new `src/services/ai.js`):
   ```javascript
   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
   // Initialize Gemini client...
   ```

## Setting up the Backend

Presently, the app relies on internal mock data located at `src/data/mockDb.js`. 

To set up a real backend (e.g., Firebase, Supabase, or a custom Node.js/FastAPI server):
1. **Database Integration**: Replace the `useState` hooks inside `src/context/AppContext.jsx` with real fetch calls. For example:
   ```javascript
   useEffect(() => {
     fetch('https://your-api.com/feed')
       .then(res => res.json())
       .then(data => setFeed(data));
   }, []);
   ```
2. **User Authentication**: Implement JWT or session-based auth in a wrapper component above `AppProvider`.

## Deployment Guide

Deploying this Vite application is incredibly straightforward. Since it builds to static files, you can host it easily on Vercel or Netlify.

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New > Project** and import your repository.
4. **Vercel will auto-detect Vite.**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. ***Important:*** Add your Environment Variables (e.g., `VITE_GEMINI_API_KEY`) in the Vercel dashboard under the Project Settings before clicking Deploy.
6. Click **Deploy**.

### Deploying to Netlify
1. Push your code to a Git repository.
2. Log in to [Netlify](https://netlify.com) and click **Add new site > Import an existing project**.
3. Select your repository.
4. Set the Build Command to `npm run build` and Publish directory to `dist`.
5. Add your Environment variables under **Advanced build settings**.
6. Click **Deploy site**.
