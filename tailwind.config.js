/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 13 column grid
                13: "repeat(13, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
