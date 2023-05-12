/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                'intro': '72vh',
            }
        },
        colors: {
            'black': '#000',
            'secondary': '#1f2937',
            'tertiary': '#f8b831',
            'primary': '#b8b9be',
            'gray-dark': '#333b48',
            'gray': '#b7b8bd',
            'gray-light': '#d3dce6',
            'white': '#ffffff',
        },
    },
    plugins: [],
}