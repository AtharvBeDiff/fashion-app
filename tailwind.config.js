/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: {
                    light: '#121212',
                    DEFAULT: '#050505',
                    dark: '#000000',
                },
                chrome: {
                    light: '#F0F4F8',
                    DEFAULT: '#B0BACC',
                    dark: '#6C7A9C',
                },
                ultraviolet: {
                    light: '#B266FF',
                    DEFAULT: '#8A2BE2',
                    dark: '#4B0082',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
