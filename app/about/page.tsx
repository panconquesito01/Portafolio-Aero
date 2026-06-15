"use client";

import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { motion } from "framer-motion";
import { FaArrowLeft, FaServer, FaGlobe, FaDatabase, FaLaptopCode, FaGithub } from "react-icons/fa";
import { SiThreedotjs, SiRoblox, SiDotnet } from "react-icons/si";
import { experienceEntries } from "@/data/experience";

export default function AboutPage() {
    // Helper to get matching icon for each role
    const getExperienceIcon = (company: string) => {
        const lower = company.toLowerCase();
        if (lower.includes("aurosoft")) {
            return <SiDotnet className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
        }
        if (lower.includes("copilot") || lower.includes("github")) {
            return <FaGithub className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
        }
        if (lower.includes("autónomo") || lower.includes("videojuegos")) {
            return <SiThreedotjs className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
        }
        if (lower.includes("roblox")) {
            return <SiRoblox className="w-5 h-5 text-red-500" />;
        }
        return <FaLaptopCode className="w-5 h-5 text-sky-500" />;
    };

    return (
        <div className="min-h-screen pt-28 pb-16">
            <Container>
                <div className="mb-12">
                    <GlossyButton href="/" variant="secondary" size="sm">
                        <FaArrowLeft className="w-3 h-3 mr-1.5" />
                        Volver al Inicio
                    </GlossyButton>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Bio Section */}
                    <GlassPanel className="p-8 md:p-12 max-w-4xl" intensity="strong">
                        <h1 className="text-4xl font-extrabold font-heading md:text-5xl mb-6">
                            Sobre Mí
                        </h1>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                            Soy un Desarrollador Full Stack con amplia experiencia en la 
                            creación de sistemas empresariales, soluciones ERP, 
                            aplicaciones web modernas y APIs de alto rendimiento. 
                            Combino una arquitectura backend sólida y segura con interfaces de 
                            usuario limpias, intuitivas, dinámicas y eficientes.
                        </p>

                        <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                            <FaServer className="text-primary w-5 h-5" />
                            Áreas de Especialización
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <FaServer className="w-6 h-6 text-primary" />,
                                    title: "Desarrollo Backend",
                                    desc: "Construcción de APIs robustas, arquitectura de microservicios y lógica de negocio a nivel empresarial con alta concurrencia.",
                                },
                                {
                                    icon: <FaGlobe className="w-6 h-6 text-primary" />,
                                    title: "Interfaces Modernas",
                                    desc: "Diseño de experiencias web responsivas, fluidas y de alto rendimiento usando React, Next.js y CSS avanzado.",
                                },
                                {
                                    icon: <FaDatabase className="w-6 h-6 text-primary" />,
                                    title: "Sistemas Corporativos",
                                    desc: "Experiencia real en la integración de módulos ERP, gestión de inventarios, facturación y reportabilidad en tiempo real.",
                                },
                             ].map((item) => (
                                <GlassPanel
                                    key={item.title}
                                    className="p-5 hover:scale-[1.02] transition-transform duration-250"
                                    intensity="light"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/5 border border-white/25 dark:border-white/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="mt-4 font-bold font-heading text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </GlassPanel>
                            ))}
                        </div>
                    </GlassPanel>

                    {/* Timeline Experience Section */}
                    <GlassPanel className="p-8 md:p-12 max-w-4xl" intensity="strong">
                        <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-2">
                            <FaLaptopCode className="text-primary w-6 h-6" />
                            Experiencia Profesional Real
                        </h2>

                        <div className="relative pl-8 border-l border-white/25 dark:border-white/10 ml-4 space-y-10">
                            {experienceEntries.map((entry, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className="relative"
                                >
                                    {/* Timeline Node Point */}
                                    <div className="absolute -left-[53px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-white/45 dark:border-white/10 flex items-center justify-center shadow-md z-10 hover:scale-110 transition-transform">
                                        {getExperienceIcon(entry.company)}
                                    </div>

                                    {/* Experience Details Card */}
                                    <GlassPanel className="p-6 hover:shadow-glass-lg transition-all duration-300" intensity="light">
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
                                </motion.div>
                            ))}
                        </div>
                    </GlassPanel>
                </motion.div>
            </Container>
        </div>
    );
}
