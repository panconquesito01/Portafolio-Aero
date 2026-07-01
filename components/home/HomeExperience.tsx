"use client";

import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { experienceEntries } from "@/data/experience";
import { ArrowRight } from "lucide-react";

// Icons from react-icons
import { FaLaptopCode, FaGithub } from "react-icons/fa";
import { SiThreedotjs, SiRoblox, SiDotnet } from "react-icons/si";

function getExpIcon(company: string) {
    const lower = company.toLowerCase();
    const iconClass = "w-5 h-5";
    
    if (lower.includes("aurosoft")) {
        return <SiDotnet className={`${iconClass} text-purple-600 dark:text-purple-400`} />;
    }
    if (lower.includes("copilot") || lower.includes("github")) {
        return <FaGithub className={`${iconClass} text-slate-800 dark:text-slate-200`} />;
    }
    if (lower.includes("autónomo") || lower.includes("videojuegos")) {
        return <SiThreedotjs className={`${iconClass} text-indigo-500 dark:text-indigo-400`} />;
    }
    if (lower.includes("roblox")) {
        return <SiRoblox className={`${iconClass} text-red-500`} />;
    }
    return <FaLaptopCode className={`${iconClass} text-sky-500`} />;
}

export function HomeExperience() {
    // Show top 3 recent experiences on home page
    const featuredExperience = experienceEntries.slice(0, 3);

    return (
        <section id="experiencia" className="scroll-section relative py-12 overflow-visible">
            <Container>
                {/* Section Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
                            Experiencia y enfoque profesional
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                            No me limito a construir pantallas: analizo requerimientos, datos,
                            arquitectura, errores productivos y flujos reales de operación.
                        </p>
                    </div>
                    <GlossyButton href="/about" variant="secondary" size="sm" className="hidden sm:inline-flex">
                        Ver todo <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </GlossyButton>
                </div>

                {/* Timeline vertical layout */}
                <div className="relative pl-8 border-l border-white/20 dark:border-white/5 ml-4 space-y-8">
                    {featuredExperience.map((entry, idx) => (
                        <div
                            key={idx}
                            className="relative"
                        >
                            {/* Node point marker */}
                            <div className="crystal-cell absolute -left-[53px] top-1.5 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 hover:scale-110 transition-transform">
                                {getExpIcon(entry.company)}
                            </div>

                            {/* Card panel */}
                            <GlassPanel className="p-6 hover:shadow-glass-lg transition-all duration-300" intensity="medium">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/5">
                                        {entry.period}
                                    </span>
                                    <span className="text-xs font-semibold text-muted-foreground">
                                        {entry.company}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold font-heading text-foreground">
                                    {entry.role}
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {entry.description}
                                </p>
                                
                                {entry.skills && entry.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10 dark:border-white/5">
                                        {entry.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </GlassPanel>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <GlossyButton href="/about" variant="secondary" size="sm" className="w-full">
                        Ver toda la trayectoria <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </GlossyButton>
                </div>
            </Container>
        </section>
    );
}
