/** @type {import('tailwindcss').Config} */

module.exports = {
    plugins: [require('flowbite/plugin')],
    content: ['./src/pages/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
    theme: {
        
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'orange': '#FF5300',
                'orange-soft': '#FFF7F4',
                'black-soft': '#373737',
                'dark-strong': '#18191A',
                'dark-mid': '#242526',
                'dark-soft': '#3A3B3C',
                'gray': '#7B7B7B',
            }
        },
    },
    plugins: [],
};
