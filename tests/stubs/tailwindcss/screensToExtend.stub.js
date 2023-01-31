/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                hotPink: '#FF269E',
            },
            screens: {
                test: '555px',
                'test-max': { 'max': '666px' },
                'test-range': { 'min': '777px', 'max': '888px' },
                'test-raw': { 'raw': '(min-height: 999px)' },
            },
        },
    },
    plugins: [],
}
