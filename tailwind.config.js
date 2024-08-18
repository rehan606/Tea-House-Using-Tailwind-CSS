
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'customBlue': '#10356d',
            'bgColor' : '#051d40',
        },
        extend: {
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

