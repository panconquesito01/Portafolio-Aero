"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { stackCategories } from "@/data/skills";
import { motion } from "framer-motion";
import { Code, Database, Server, Settings, Cpu, Palette, Wrench } from "lucide-react";

// Icon sub-libraries from react-icons
import { 
    SiReact, 
    SiTypescript, 
    SiNextdotjs, 
    SiThreedotjs, 
    SiTailwindcss, 
    SiDotnet, 
    SiRedis, 
    SiPrisma, 
    SiGithubactions, 
    SiVercel,
    SiExpress,
    SiPostman,
    SiGit,
    SiRoblox
} from "react-icons/si";
import { FaNodeJs, FaDocker, FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbGitFork, TbServerCog, TbBrandCSharp, TbApi } from "react-icons/tb";
import { DiMsqlServer, DiRedis, DiVisualstudio } from "react-icons/di";
import { VscCode } from "react-icons/vsc";

function TechShowcaseIcon({ name }: { name: string }) {
    const iconClass = "w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3";
    const lower = name.toLowerCase();

    if (lower.includes("react")) return <SiReact className={`${iconClass} text-sky-500`} />;
    if (lower.includes("typescript")) return <SiTypescript className={`${iconClass} text-blue-600`} />;
    if (lower.includes("next")) return <SiNextdotjs className={`${iconClass} text-foreground`} />;
    if (lower.includes("three")) return <SiThreedotjs className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("tailwind")) return <SiTailwindcss className={`${iconClass} text-sky-400`} />;
    
    if (lower.includes("c#")) return <TbBrandCSharp className={`${iconClass} text-purple-600`} />;
    if (lower.includes("asp.net") || lower.includes(".net")) return <SiDotnet className={`${iconClass} text-purple-500`} />;
    if (lower.includes("node")) return <FaNodeJs className={`${iconClass} text-emerald-500`} />;
    if (lower.includes("rest api")) return <TbApi className={`${iconClass} text-teal-500`} />;
    if (lower.includes("express")) return <SiExpress className={`${iconClass} text-neutral-500`} />;
    
    if (lower.includes("sql server")) return <DiMsqlServer className={`${iconClass} text-red-500`} />;
    if (lower.includes("postgres")) return <BiLogoPostgresql className={`${iconClass} text-blue-600`} />;
    if (lower.includes("redis")) return <DiRedis className={`${iconClass} text-red-500`} />;
    if (lower.includes("entity framework")) return <SiDotnet className={`${iconClass} text-indigo-400`} />;
    if (lower.includes("prisma")) return <SiPrisma className={`${iconClass} text-slate-800 dark:text-slate-200`} />;
    
    if (lower.includes("aero") || lower.includes("bento") || lower.includes("glass")) return <Palette className={`${iconClass} text-pink-500`} />;
    
    if (lower.includes("modular") || lower.includes("arquitectura")) return <Cpu className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("rojo") || lower.includes("luau")) return <TbServerCog className={`${iconClass} text-amber-500`} />;
    if (lower.includes("actions")) return <SiGithubactions className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("docker")) return <FaDocker className={`${iconClass} text-sky-500`} />;
    if (lower.includes("ci/cd")) return <TbGitFork className={`${iconClass} text-amber-500`} />;
    
    if (lower.includes("git")) return <SiGit className={`${iconClass} text-orange-600`} />;
    if (lower.includes("visual studio code") || lower.includes("vs code")) return <VscCode className={`${iconClass} text-sky-500`} />;
    if (lower.includes("visual studio")) return <DiVisualstudio className={`${iconClass} text-purple-600`} />;

    if (lower.includes("roblox")) return <SiRoblox className={`${iconClass} text-red-500`} />;
    if (lower.includes("postman")) return <SiPostman className={`${iconClass} text-orange-500`} />;

    return <Code className={iconClass} />;
}

export function SkillsSection() {
    // Icons matching categories
    const categoryIcons: Record<string, React.ReactNode> = {
        Frontend: <Code className="w-5 h-5 text-sky-500" />,
        Backend: <Server className="w-5 h-5 text-emerald-500" />,
        "Bases de Datos y ORMs": <Database className="w-5 h-5 text-red-500" />,
        "Diseño y UI/UX": <Palette className="w-5 h-5 text-pink-500" />,
        "Arquitectura y DevOps": <Cpu className="w-5 h-5 text-indigo-500" />,
        "Programas y Herramientas": <Wrench className="w-5 h-5 text-amber-500" />,
    };

    return (
        <section id="tecnologias" className="relative py-12 overflow-visible">
            <Container>
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
                        Tecnologías & Habilidades
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                        Mi caja de herramientas tecnológicas. Construyo soluciones estables utilizando software de vanguardia.
                    </p>
                </div>

                {/* Grid of Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {stackCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <GlassPanel className="p-6 h-full flex flex-col justify-between hover:shadow-glass-lg transition-all duration-300" intensity="medium">
                                <div>
                                    {/* Category Title */}
                                    <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/20 dark:border-white/5">
                                        {categoryIcons[cat.category] || <Cpu className="w-5 h-5 text-primary" />}
                                        <h3 className="text-sm font-bold font-heading text-foreground uppercase tracking-wider">
                                            {cat.category}
                                        </h3>
                                    </div>

                                    {/* Grid of items in Category */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {cat.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group flex flex-col items-center gap-2 p-2 rounded-xl bg-white/20 dark:bg-white/5 border border-white/10 dark:border-white/5 hover:bg-white/30 dark:hover:bg-white/10 hover:border-blue-500/20 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition-all duration-200 cursor-default"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-white/40 dark:bg-slate-900/60 border border-white/35 dark:border-white/10 flex items-center justify-center shadow-sm">
                                                    <TechShowcaseIcon name={item.name} />
                                                </div>
                                                <span className="text-[10px] font-extrabold text-foreground text-center leading-tight truncate w-full">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
