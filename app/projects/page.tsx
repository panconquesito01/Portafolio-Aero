"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";

// Icons from multiple sets under react-icons
import { 
    SiReact, 
    SiTypescript, 
    SiNextdotjs, 
    SiThreedotjs, 
    SiTailwindcss, 
    SiDotnet, 
    SiVite, 
    SiRoblox, 
    SiHtml5, 
    SiJavascript, 
    SiGithubactions 
} from "react-icons/si";
import { FaNodeJs, FaVolumeUp, FaLink, FaDatabase } from "react-icons/fa";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

function TechBadgeIcon({ name }: { name: string }) {
    const iconClass = "w-3 h-3 mr-1";
    const lower = name.toLowerCase();
    
    if (lower.includes("c#")) return <TbBrandCSharp className={`${iconClass} text-purple-600`} />;
    if (lower.includes("asp.net") || lower.includes(".net")) return <SiDotnet className={`${iconClass} text-purple-500`} />;
    if (lower.includes("sql server")) return <DiMsqlServer className={`${iconClass} text-red-500`} />;
    if (lower.includes("node")) return <FaNodeJs className={`${iconClass} text-emerald-500`} />;
    if (lower.includes("github actions")) return <SiGithubactions className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("typescript")) return <SiTypescript className={`${iconClass} text-blue-600`} />;
    if (lower.includes("three")) return <SiThreedotjs className={`${iconClass} text-indigo-500`} />;
    if (lower.includes("vite")) return <SiVite className={`${iconClass} text-amber-500`} />;
    if (lower.includes("next")) return <SiNextdotjs className={`${iconClass} text-foreground`} />;
    if (lower.includes("react")) return <SiReact className={`${iconClass} text-sky-500`} />;
    if (lower.includes("roblox") || lower.includes("luau") || lower.includes("rojo")) return <SiRoblox className={`${iconClass} text-red-500`} />;
    if (lower.includes("html5")) return <SiHtml5 className={`${iconClass} text-orange-500`} />;
    if (lower.includes("css3") || lower.includes("tailwind")) return <SiTailwindcss className={`${iconClass} text-sky-400`} />;
    if (lower.includes("javascript") || lower.includes("js")) return <SiJavascript className={`${iconClass} text-yellow-500`} />;
    if (lower.includes("web audio")) return <FaVolumeUp className={`${iconClass} text-pink-500`} />;
    if (lower.includes("database") || lower.includes("dapper")) return <FaDatabase className={`${iconClass} text-blue-500`} />;
    
    return <FaLink className={iconClass} />;
}

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = React.useState<any>(null);

    return (
        <div className="min-h-screen pt-28 pb-16">
            <Container>
                <div className="mb-12">
                    <GlossyButton href="/#proyectos" variant="secondary" size="sm">
                        <ArrowLeft className="w-4 h-4 mr-1.5" />
                        Volver al Inicio
                    </GlossyButton>
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold font-heading md:text-5xl">
                        Todos los Proyectos
                    </h1>
                    <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
                        Una colección de aplicaciones web, servicios de API y
                        sistemas empresariales construidos con altos estándares de calidad y rendimiento.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <GlassPanel 
                                onClick={() => setSelectedProject(project)}
                                className="overflow-hidden h-full flex flex-col hover:shadow-glass-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                                intensity="medium"
                            >
                                <div className="h-48 w-full relative overflow-hidden border-b border-white/20 dark:border-white/5 bg-slate-100 dark:bg-slate-900 shrink-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-t-3xl" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold font-heading text-foreground line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-4">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 dark:border-white/5 mb-4">
                                            {project.stack.map((s) => (
                                                <span
                                                    key={s}
                                                    className="inline-flex items-center text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/5 cursor-default"
                                                >
                                                    <TechBadgeIcon name={s} />
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        {project.githubUrl && (
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-foreground/70 hover:text-primary transition-colors">
                                                <Github className="w-3.5 h-3.5" />
                                                Ver detalles del proyecto
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>

            {/* Project Modal details */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                        />

                        {/* Modal card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass-panel glass-intensity-strong border border-white/40 dark:border-slate-800/80 shadow-2xl z-10 max-h-[85vh] flex flex-col bg-white/95 dark:bg-slate-950/95 text-foreground"
                        >
                            {/* Header image background */}
                            <div className="h-48 w-full relative shrink-0">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-950/30 text-white flex items-center justify-center hover:bg-slate-950/50 transition-colors border border-white/10"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Scrollable details */}
                            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading">
                                        {selectedProject.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {selectedProject.stack.map((s: string) => (
                                            <span
                                                key={s}
                                                className="inline-flex items-center text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/5"
                                            >
                                                <TechBadgeIcon name={s} />
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        Resumen del Proyecto
                                    </h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
                                        {selectedProject.description}
                                    </p>
                                    
                                    {/* Detailed features */}
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground pt-2">
                                        Características y Módulos
                                    </h4>
                                    <ul className="text-xs text-foreground/75 space-y-2.5 leading-relaxed list-disc list-inside">
                                        {selectedProject.id === "aurosoft-erp" && (
                                            <>
                                                <li><strong>Módulo de Inventarios:</strong> Control de existencias, traspasos de almacén y facturación de compra/venta.</li>
                                                <li><strong>Módulo Contable:</strong> Plan de cuentas estructurado, asientos contables y balance de sumas y saldos en tiempo real.</li>
                                                <li><strong>Facturación DIAN:</strong> Integración de firma electrónica y envío de XMLs a través de Conexus.</li>
                                                <li><strong>Mensajería Automatizada:</strong> Notificaciones a clientes vía WhatsApp Cloud API webhook.</li>
                                                <li><strong>Reportabilidad Avanzada:</strong> Generación de PDFs detallados de auditoría mediante FastReport.</li>
                                            </>
                                        )}
                                        {selectedProject.id === "awesome-copilot" && (
                                            <>
                                                <li><strong>Copilot Custom Agents:</strong> Flujos de conversación y codificación asistida con formateo automatizado.</li>
                                                <li><strong>Integración MCP:</strong> Servidores Model Context Protocol para interactuar con bases de datos y APIs externas.</li>
                                                <li><strong>Automatización CI/CD:</strong> Acciones de Github para validar y desplegar modelos de instrucciones.</li>
                                            </>
                                        )}
                                        {selectedProject.id === "voxelcraft" && (
                                            <>
                                                <li><strong>Chunk Optimizer:</strong> Face culling y generación procedural determinista basada en ruido Perlin.</li>
                                                <li><strong>Simulación de Entorno:</strong> Ciclo completo día/noche e IA básica de criaturas/mobs.</li>
                                                <li><strong>Persistencia de Datos:</strong> Guardado de mundos editados de manera incremental en localStorage.</li>
                                            </>
                                        )}
                                        {selectedProject.id === "retro-birthday-slots" && (
                                            <>
                                                <li><strong>Sintetizador Web Audio:</strong> Efectos sonoros chiptune de 8 bits generados nativamente por osciladores de navegador.</li>
                                                <li><strong>Máquina de Estados:</strong> Manejo de tiradas, tiradas de bonificación y persistencia local del saldo de juego.</li>
                                            </>
                                        )}
                                        {selectedProject.id === "lavagame-roblox" && (
                                            <>
                                                <li><strong>Integración Rojo:</strong> Trabajo en carpetas estructuradas locales y sincronización a Roblox en tiempo real.</li>
                                                <li><strong>Dynamic Lighting:</strong> Comportamientos de iluminación en Luau que ajustan materiales en base al estado del servidor.</li>
                                            </>
                                        )}
                                        {selectedProject.id === "santa-marta-blog" && (
                                            <>
                                                <li><strong>Layout Bento Grid:</strong> Visualización ordenada y fluida de galerías y posts de viajes responsivos.</li>
                                                <li><strong>Scroll Animations:</strong> Transición fluida de imágenes y efectos de desenfoque al desplazarse.</li>
                                            </>
                                        )}
                                    </ul>
                                </div>

                                {selectedProject.id === "aurosoft-erp" && (
                                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs leading-relaxed">
                                        <strong>Nota de Licenciamiento Corporativo:</strong> Aurosoft ERP es un software de escala corporativa. Si deseas adquirir este sistema o requieres licenciamiento y soporte para tu empresa en Colombia, ponte en contacto con la empresa <strong>Aurotech de Colombia</strong>.
                                    </div>
                                )}

                                <div className="flex gap-4 pt-4 border-t border-white/10 dark:border-white/5 justify-end">
                                    <GlossyButton onClick={() => setSelectedProject(null)} variant="secondary" size="sm">
                                        Cerrar
                                    </GlossyButton>
                                    {selectedProject.githubUrl && (
                                        <GlossyButton href={selectedProject.githubUrl} target="_blank" rel="noreferrer" size="sm">
                                            <Github className="w-4 h-4 mr-1.5" />
                                            Ver en GitHub
                                        </GlossyButton>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
