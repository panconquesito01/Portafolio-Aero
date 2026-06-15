"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { motion, AnimatePresence } from "framer-motion";
import { Disc, Film, Tv, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PersonalItem {
    title: string;
    subtitle: string;
    image: string;
    type: "music" | "movie" | "series";
}

const albums: PersonalItem[] = [
    { title: "Hybrid Theory", subtitle: "Linkin Park", image: "/media/albums/Hybrid Theory - Linkin Park.jfif", type: "music" },
    { title: "Paranoid", subtitle: "Black Sabbath", image: "/media/albums/Paranoid - Black Sabbath.jfif", type: "music" },
    { title: "Black Sabbath", subtitle: "Black Sabbath", image: "/media/albums/Black Sabbath - Black Sabbath.jfif", type: "music" },
    { title: "MM..FOOD", subtitle: "MF DOOM", image: "/media/albums/MM..FOOD - MF DOOM.jfif", type: "music" },
    { title: "The Wall", subtitle: "Pink Floyd", image: "/media/albums/The Wall - Pink Floyd.jfif", type: "music" },
    { title: "Around The Fur", subtitle: "Deftones", image: "/media/albums/Around The Fur - Deftones.jfif", type: "music" },
    { title: "The Doors", subtitle: "The Doors", image: "/media/albums/The Doors - The Doors.jfif", type: "music" },
    { title: "Californication", subtitle: "Red Hot Chili Peppers", image: "/media/albums/Californication - Red Hot Chili Peppers.jfif", type: "music" },
    { title: "Discovery", subtitle: "Daft Punk", image: "/media/albums/Discovery - Daft Punk.jfif", type: "music" },
    { title: "OK Computer", subtitle: "Radiohead", image: "/media/albums/OK Computer - Radiohead.jfif", type: "music" },
    { title: "Korn", subtitle: "Korn", image: "/media/albums/Korn - Korn.jfif", type: "music" },
    { title: "Follow The Leader", subtitle: "Korn", image: "/media/albums/Follow The Leader - Korn.jfif", type: "music" },
];

const movies: PersonalItem[] = [
    { title: "Fantastic Mr. Fox", subtitle: "Wes Anderson", image: "/media/peliculas/Fantastic Mr. Fox.jpg", type: "movie" },
    { title: "Hoppers: Operación Castor", subtitle: "Disney / Pixar", image: "/media/peliculas/Hoppers - Operacion Castor.jpg", type: "movie" },
    { title: "Toy Story", subtitle: "Pixar (1995)", image: "/media/peliculas/Toy Story.jpg", type: "movie" },
    { title: "Kill Bill Vol 1", subtitle: "Quentin Tarantino", image: "/media/peliculas/Kill Bill Vol 1.jpg", type: "movie" },
    { title: "Kill Bill Vol 2", subtitle: "Quentin Tarantino", image: "/media/peliculas/Kill Bill Vol 2.jpg", type: "movie" },
    { title: "Pulp Fiction", subtitle: "Quentin Tarantino", image: "/media/peliculas/Pulp Fiction.jpg", type: "movie" },
    { title: "Lluvia de Hamburguesas", subtitle: "Sony Pictures", image: "/media/peliculas/Lluvia de Hamburguesas.jpg", type: "movie" },
    { title: "Scary Movie", subtitle: "Keenen Ivory Wayans", image: "/media/peliculas/Scary Movie.webp", type: "movie" },
    { title: "The Mitchells vs The Machines", subtitle: "Sony Pictures", image: "/media/peliculas/The Mitchells vs The Machines.jpg", type: "movie" },
    { title: "Spider-Man 2", subtitle: "Sam Raimi", image: "/media/peliculas/Spider-Man 2.webp", type: "movie" },
];

const series: PersonalItem[] = [
    { title: "Dr. HOUSE", subtitle: "David Shore", image: "/media/series/Dr. HOUSE.webp", type: "series" },
    { title: "One Piece", subtitle: "Eiichiro Oda", image: "/media/series/One Piece.jpeg", type: "series" },
    { title: "Los Simpson", subtitle: "Matt Groening", image: "/media/series/Los Simpson.webp", type: "series" },
    { title: "Futurama", subtitle: "Matt Groening", image: "/media/series/Futurama.jpg", type: "series" },
    { title: "Naruto", subtitle: "Masashi Kishimoto", image: "/media/series/Naruto.jpg", type: "series" },
    { title: "Rick and Morty", subtitle: "Justin Roiland & Dan Harmon", image: "/media/series/Rick and Morty.jpg", type: "series" },
    { title: "Breaking Bad", subtitle: "Vince Gilligan", image: "/media/series/Breaking Bad.jpg", type: "series" },
    { title: "The X Files", subtitle: "Chris Carter", image: "/media/series/The X Files.jpg", type: "series" },
];

const tabs = [
    { id: "music", name: "Álbumes", icon: Disc, data: albums, gridClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", aspect: "aspect-square" },
    { id: "movie", name: "Películas", icon: Film, data: movies, gridClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", aspect: "aspect-[2/3]" },
    { id: "series", name: "Series", icon: Tv, data: series, gridClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4", aspect: "aspect-[2/3]" },
];

export function HomePersonal() {
    const [activeTab, setActiveTab] = React.useState<"music" | "movie" | "series">("music");
    const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

    return (
        <section id="personal" className="relative py-12 overflow-visible">
            {/* Visual Aero Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/15 blur-3xl pointer-events-none -z-10" />

            <Container>
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-wider mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Intereses & Ocio</span>
                        </div>
                        <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
                            Mi Espacio Personal
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                            Una recopilación de los álbumes, películas y series favoritas que inspiran mi creatividad y llenan mis horas de descanso.
                        </p>
                    </div>

                    {/* Frutiger Aero Glossy Tab Buttons */}
                    <div className="flex glass-panel glass-intensity-light rounded-full p-1 border border-white/40 dark:border-white/10 self-start shadow-inner">
                        {tabs.map((tab) => {
                            const TabIcon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={cn(
                                        "relative flex items-center gap-2 px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-300 z-10",
                                        isActive ? "text-white" : "text-foreground/75 hover:text-foreground hover:bg-white/10"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activePersonalTab"
                                            className="absolute inset-0 bg-gradient-to-b from-sky-400/90 via-sky-500/95 to-blue-600 rounded-full -z-10 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.45),0_3px_8px_rgba(2,132,199,0.4)] border border-sky-400/20"
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}
                                    <TabIcon className={cn("w-3.5 h-3.5", isActive ? "animate-spin-slow" : "")} />
                                    {tab.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Cards Grid */}
                <motion.div
                    layout
                    className={cn("grid gap-4 sm:gap-6", currentTab.gridClass)}
                >
                    <AnimatePresence mode="popLayout">
                        {currentTab.data.map((item, idx) => (
                            <motion.div
                                key={item.title + activeTab}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 24,
                                    delay: idx * 0.03
                                }}
                                whileHover={{ 
                                    scale: 1.06, 
                                    y: -8, 
                                    rotateZ: idx % 2 === 0 ? 1 : -1,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="group relative"
                            >
                                <GlassPanel 
                                    className="p-2.5 h-full rounded-2xl flex flex-col hover:shadow-glass-lg transition-shadow duration-300 overflow-hidden cursor-default border border-white/40 dark:border-white/10"
                                    intensity="medium"
                                >
                                    {/* Cover Image Wrapper with Reflection Glare */}
                                    <div className={cn("relative w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-white/20 dark:border-white/5 shadow-sm mb-3", currentTab.aspect)}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        
                                        {/* Realistic Frutiger Aero Glossy Reflection Glare Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/25 opacity-100 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                                        
                                        {/* Glossy diagonal highlight stripe */}
                                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-35 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
                                    </div>

                                    {/* Text Info */}
                                    <div className="px-1 flex-1 flex flex-col justify-end">
                                        <h3 className="text-xs font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] text-muted-foreground/80 truncate mt-0.5 font-medium">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </GlassPanel>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
