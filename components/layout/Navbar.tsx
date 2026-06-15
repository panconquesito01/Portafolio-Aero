"use client";

import * as React from "react";
import { Menu, X, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Experiencia", href: "/#experiencia" },
    { name: "Habilidades", href: "/#tecnologias" },
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Personal", href: "/#personal" },
    { name: "Contacto", href: "/#contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState("Inicio");

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll-Spy to dynamically highlight active homepage section
    React.useEffect(() => {
        const handleScrollSpy = () => {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
                const sections = ["inicio", "experiencia", "tecnologias", "proyectos", "personal", "contacto"];
                const scrollPosition = window.scrollY + 220; // offset for navbar height
                
                for (const section of sections) {
                    const el = document.getElementById(section);
                    if (el) {
                        const top = el.offsetTop;
                        const height = el.offsetHeight;
                        if (scrollPosition >= top && scrollPosition < top + height) {
                            const navItem = navigation.find(n => n.href === `/#${section}`);
                            if (navItem) {
                                setActiveItem(navItem.name);
                            }
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScrollSpy, { passive: true });
        handleScrollSpy();
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

    // Set active link based on current path on mount (for sub-pages)
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            if (path.includes("projects")) setActiveItem("Proyectos");
            else if (path.includes("about")) setActiveItem("Experiencia");
            else if (path.includes("contact")) setActiveItem("Contacto");
        }
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-2" : "py-4"
            )}
        >
            <Container className="overflow-visible">
                {/* Segmented Top NavBar for Desktop */}
                <div className="flex items-center justify-between gap-4 overflow-visible">
                    
                    {/* Left Segment: Logo and Name */}
                    <a
                        href="/"
                        className="glass-panel glass-intensity-medium rounded-full px-5 py-2 flex items-center gap-2.5 hover:opacity-90 transition-all shadow-md border border-white/40 dark:border-white/10 shrink-0"
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 text-white text-xs font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] border border-white/20">
                            DR
                        </span>
                        <span className="text-xs font-extrabold tracking-tight text-foreground uppercase">
                            David Rivera
                        </span>
                    </a>

                    {/* Center Segment: Navigation Links (hidden on mobile) */}
                    <nav className="hidden md:flex glass-panel glass-intensity-medium rounded-full px-5 py-1.5 items-center gap-1 shadow-md border border-white/40 dark:border-white/10">
                        {navigation.map((item) => {
                            const isActive = activeItem === item.name;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveItem(item.name)}
                                    className={cn(
                                        "relative px-4 py-1.5 text-xs font-bold rounded-full transition-colors duration-300 z-10",
                                        isActive ? "text-white" : "text-foreground/75 hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNavBackground"
                                            className="absolute inset-0 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_8px_rgba(2,132,199,0.35)] border border-blue-500/20"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {item.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Right Segment: Theme & CV download (hidden on mobile) */}
                    <div className="hidden md:flex glass-panel glass-intensity-medium rounded-full px-4 py-1.5 items-center gap-3 shadow-md border border-white/40 dark:border-white/10 shrink-0">
                        <ThemeToggle />
                        <a
                            href="/cv.pdf"
                            className="inline-flex items-center gap-2 h-8 px-4 text-xs font-bold rounded-full bg-gradient-to-b from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 dark:from-white/5 dark:to-white/0 dark:hover:bg-white/10 text-foreground border border-white/30 dark:border-white/15 shadow-sm transition-all duration-200"
                        >
                            Descargar CV
                            <Download className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Mobile menu controls (visible on mobile) */}
                    <div className="md:hidden flex items-center gap-2 shrink-0">
                        <div className="glass-panel glass-intensity-medium rounded-full p-1.5 border border-white/40 dark:border-white/10">
                            <ThemeToggle />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="glass-panel glass-intensity-medium rounded-full p-2 border border-white/40 dark:border-white/10 text-foreground/80 hover:text-foreground transition-all w-9 h-9 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-3 rounded-2xl glass-panel glass-intensity-strong border border-white/40 dark:border-white/10 shadow-glass-lg p-4"
                        >
                            <div className="flex flex-col gap-1.5">
                                {navigation.map((item) => {
                                    const isActive = activeItem === item.name;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setActiveItem(item.name);
                                                setIsOpen(false);
                                            }}
                                            className={cn(
                                                "relative px-4 py-2 text-sm font-bold rounded-xl transition-colors duration-200 z-10 block",
                                                isActive ? "text-white" : "text-foreground/75 hover:text-foreground"
                                            )}
                                        >
                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeMobileNavBackground"
                                                    className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl -z-10"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                            {item.name}
                                        </a>
                                    );
                                })}
                                <div className="mt-2 pt-2 border-t border-white/20 dark:border-white/10">
                                    <a
                                        href="/cv.pdf"
                                        className="inline-flex items-center justify-center gap-2 w-full h-10 text-xs font-bold rounded-xl bg-gradient-to-b from-sky-400 to-blue-500 text-white shadow-md border border-blue-500/20"
                                    >
                                        Descargar CV
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
