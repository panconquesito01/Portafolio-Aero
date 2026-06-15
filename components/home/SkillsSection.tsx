"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { stackCategories } from "@/data/skills";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Server, Wrench } from "lucide-react";

// Icon sub-libraries from react-icons
import { 
    SiReact, 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiDotnet, 
    SiGithubactions, 
    SiPostman,
    SiGit,
} from "react-icons/si";
import { TbGitFork, TbBrandCSharp, TbApi } from "react-icons/tb";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscCode } from "react-icons/vsc";

function TechShowcaseIcon({ name }: { name: string }) {
    const iconClass = "w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3";
    const lower = name.toLowerCase();

    if (lower.includes("react")) return <SiReact className={`${iconClass} text-sky-500`} />;
    if (lower.includes("typescript")) return <SiTypescript className={`${iconClass} text-blue-600`} />;
    if (lower.includes("next")) return <SiNextdotjs className={`${iconClass} text-foreground`} />;
    if (lower.includes("tailwind")) return <SiTailwindcss className={`${iconClass} text-sky-400`} />;
    if (lower.includes("framer")) return <Cpu className={`${iconClass} text-emerald-500`} />;
    
    if (lower.includes("c#")) return <TbBrandCSharp className={`${iconClass} text-purple-600`} />;
    if (lower.includes("asp.net") || lower.includes(".net")) return <SiDotnet className={`${iconClass} text-purple-500`} />;
    if (lower.includes("rest api")) return <TbApi className={`${iconClass} text-teal-500`} />;
    
    if (lower.includes("sql server")) return <DiMsqlServer className={`${iconClass} text-red-500`} />;
    if (lower.includes("t-sql") || lower.includes("stored") || lower.includes("views") || lower.includes("query") || lower.includes("jobs")) return <Database className={`${iconClass} text-red-500`} />;
    if (lower.includes("entity framework")) return <SiDotnet className={`${iconClass} text-indigo-400`} />;
    if (lower.includes("dapper")) return <Database className={`${iconClass} text-sky-600`} />;
    if (lower.includes("fastreport") || lower.includes("telerik") || lower.includes("npoi")) return <Code className={`${iconClass} text-cyan-600`} />;
    if (lower.includes("facturación") || lower.includes("inventarios") || lower.includes("contabilidad")) return <Database className={`${iconClass} text-emerald-600`} />;
    
    if (lower.includes("modular") || lower.includes("arquitectura")) return <Cpu className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("debugging")) return <Server className={`${iconClass} text-rose-500`} />;
    if (lower.includes("actions")) return <SiGithubactions className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("ci/cd")) return <TbGitFork className={`${iconClass} text-amber-500`} />;
    if (lower.includes("azure")) return <Server className={`${iconClass} text-sky-600`} />;
    
    if (lower.includes("git")) return <SiGit className={`${iconClass} text-orange-600`} />;
    if (lower.includes("visual studio code") || lower.includes("vs code")) return <VscCode className={`${iconClass} text-sky-500`} />;
    if (lower.includes("visual studio")) return <DiVisualstudio className={`${iconClass} text-purple-600`} />;

    if (lower.includes("postman")) return <SiPostman className={`${iconClass} text-orange-500`} />;
    if (lower.includes("iis")) return <Server className={`${iconClass} text-blue-600`} />;

    return <Code className={iconClass} />;
}

export function SkillsSection() {
    // Icons matching categories
    const categoryIcons: Record<string, React.ReactNode> = {
        Frontend: <Code className="w-5 h-5 text-sky-500" />,
        Backend: <Server className="w-5 h-5 text-emerald-500" />,
        "Base de Datos": <Database className="w-5 h-5 text-red-500" />,
        "ERP y Reportes": <Database className="w-5 h-5 text-cyan-600" />,
        "Arquitectura y Entrega": <Cpu className="w-5 h-5 text-indigo-500" />,
        Herramientas: <Wrench className="w-5 h-5 text-amber-500" />,
    };

    return (
        <section id="tecnologias" className="relative py-12 overflow-visible">
            <Container>
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
                        Stack técnico definido
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                        Tecnologías agrupadas por responsabilidad: interfaz, backend,
                        datos, ERP, entrega y herramientas de trabajo diario.
                    </p>
                </div>

                {/* Grid of Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {stackCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <GlassPanel className="p-6 h-full flex flex-col justify-between hover:shadow-glass-lg transition-all duration-300" intensity="medium">
                                <div>
                                    {/* Category Title */}
                                    <div className="mb-5 border-b border-white/30 pb-4 dark:border-white/10">
                                        <div className="flex items-center gap-2">
                                            {categoryIcons[cat.category] || <Cpu className="w-5 h-5 text-primary" />}
                                            <h3 className="text-sm font-bold font-heading text-foreground uppercase tracking-wider">
                                                {cat.category}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {cat.description}
                                        </p>
                                    </div>

                                    {/* Grid of items in Category */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {cat.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="crystal-cell group flex flex-col items-center gap-2 p-2 rounded-xl transition-all duration-200 cursor-default hover:-translate-y-1"
                                            >
                                                <div className="crystal-cell w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
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
