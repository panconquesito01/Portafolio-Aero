"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button className="relative p-2 rounded-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 w-9 h-9" />
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-2 rounded-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 text-foreground/60 hover:text-foreground hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-200"
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-2 left-2 h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
}
