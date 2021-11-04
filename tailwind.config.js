module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage:{
                'header-img': "url('/src/assets/images/pattern-bg.png'), linear-gradient(to right, rgba(43, 43, 43, 1), rgba(150, 150, 150, 0.1))"
            },
            padding: {
                '11px': '11px',
                '10px': '10px'
            },
            fontSize:{
                'xs': '.55rem'
            },
            letterSpacing:{
                widest: '.25em'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
