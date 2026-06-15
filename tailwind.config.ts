import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-poppins)"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                aero: {
                    sky: "hsl(var(--aero-sky-from))",
                    aqua: "hsl(var(--aero-aqua))",
                    glass: "hsl(var(--aero-glass))",
                    silver: "hsl(var(--aero-silver))",
                    green: "hsl(var(--aero-green))",
                    frost: "hsl(var(--aero-frost))",
                    water: "hsl(var(--aero-water))",
                },
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.25rem",
                "4xl": "1.5rem",
            },
            boxShadow: {
                "glass": "0 4px 30px rgba(0, 0, 0, 0.08)",
                "glass-lg": "0 8px 40px rgba(0, 0, 0, 0.1)",
                "glass-xl": "0 12px 50px rgba(0, 0, 0, 0.12)",
                "aero": "0 8px 32px rgba(0, 120, 200, 0.1)",
                "aero-lg": "0 12px 48px rgba(0, 120, 200, 0.15)",
                "glossy": "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(0,0,0,0.12)",
            },
        },
    },
    plugins: [],
};
export default config;
