/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/main/java/**/*.{js,jsx,ts,tsx}",
        "./frontend/src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')]
}
