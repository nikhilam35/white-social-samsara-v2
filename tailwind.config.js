/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#0C0E10', // Charcoal Black
                white: '#FFFFFF',
                'brand-red': '#A64B2A', // Earth Red / Oxide
                'warm-stone': '#E6D5C3',
                'forest-green': '#2E4F4F',
                'electric-cyan': '#7DF9FF',
                'deep-violet': '#8A2BE2',
                'metallic-gold': '#D4AF37',
                gray: {
                    900: '#0C0E10',
                    800: '#1F2225',
                    50: '#F9FAFB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
