/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        transitionDuration: {
            '400': '400ms',
            '600': '600ms',
        },
        transitionTimingFunction: {
            'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        backgroundImage: {
            'gradient-pink-orange': 'linear-gradient(135deg, #fce7f3 0%, #fed7aa 100%)',
            'gradient-purple-blue': 'linear-gradient(135deg, #f3e8ff 0%, #dbeafe 100%)',
            'gradient-orange-yellow': 'linear-gradient(135deg, #ffedd5 0%, #fef3c7 100%)',
        },
        animation: {
            'fade-in': 'fadeIn 0.6s ease-in-out',
            'slide-up': 'slideUp 0.6s ease-in-out',
        },
        keyframes: {
            fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
            },
            slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
            },
        },
        },
    },
    plugins: [],
}
