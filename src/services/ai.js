import { GoogleGenAI } from '@google/genai';

// 1. Get the API key from your .env file
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// 2. Initialize the Gemini AI client
export const ai = new GoogleGenAI({ apiKey: apiKey });

// 3. Create a helper function you can use anywhere in your app to generate text
export async function askGemini(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error talking to Gemini:", error);
        return "Sorry, I couldn't process that.";
    }
}
