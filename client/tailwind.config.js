/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
        screens: {
            sm: '320px',
            md: '768px',
            mlg: '1024px',
            lg: '1025px',
        },
    },
    plugins: [require('flowbite/plugin')],
}
