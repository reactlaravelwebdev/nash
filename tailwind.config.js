/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html'
    ],
    theme: {
        maxWidth: {
            container: '1180px',
            sm: '840px',
            lg: '1268px',
        },
        colors: {
            primary: '#08323c',
            secondary: '#d4fe00',
            green: '#105614',
            white: '#ffffff',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            serif: ['Inter', 'sans-serif'],
        },
        extend: {}
    },
    plugins: [],
}