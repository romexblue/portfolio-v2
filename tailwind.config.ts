import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
        },
        extend: {
            colors: {
                primary: {
                    50: "#f2f4ff",
                    100: "#e7e9ff",
                    200: "#d2d6ff",
                    300: "#aeb2ff",
                    400: "#8082ff",
                    500: "#544cff",
                    600: "#3c28ff",
                    700: "#2e16eb",
                    800: "#2712c5",
                    900: "#1e0f91",
                    950: "#0f076e",
                },
            },
        },
    },
    plugins: [],
};
export default config;
