/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                hotPink: '#FF269E',
            },
        },
        screens: {
            test: '123px',
            'test-max': { 'max': '456px' },
        },
    },
    plugins: [],
}
