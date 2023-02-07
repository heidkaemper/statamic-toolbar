const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        colors: {
            hotPink: '#FF269E',
        },
        screens: {
            test: '777px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
