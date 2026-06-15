"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Database, Github, Layers3, Server, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { projects, type Project } from "@/data/projects";

function TechBadgeIcon({ name }: { name: string }) {
    const lower = name.toLowerCase();
    const iconClass = "w-3 h-3 mr-1";

    if (lower.includes("sql") || lower.includes("entity") || lower.includes("t-sql")) {
        return <Database className={`${iconClass} text-red-500`} />;
    }

    if (lower.includes(".net") || lower.includes("c#") || lower.includes("asp.net")) {
        return <Server className={`${iconClass} text-purple-500`} />;
    }

    if (lower.includes("next") || lower.includes("react") || lower.includes("typescript")) {
        return <Code2 className={`${iconClass} text-sky-500`} />;
    }

    return <Layers3 className={`${iconClass} text-emerald-500`} />;
}

function ProjectDetailsModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.button
                type="button"
                aria-label="Cerrar ficha de proyecto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/55 backdrop-blur-md"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 18 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="crystal-modal relative z-10 flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl text-foreground shadow-2xl"
            >
                <div className="crystal-media relative h-52 w-full shrink-0 overflow-hidden border-0">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/15 to-transparent dark:from-slate-950 dark:via-slate-950/25" />
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar ficha de proyecto"
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-slate-950/55 text-white transition-colors hover:bg-slate-950/75"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto p-6 md:p-8">
                    <div>
                        <h3 className="font-heading text-2xl font-extrabold">{project.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-full border border-sky-500/15 bg-sky-500/10 px-2.5 py-1 text-[10px] font-extrabold text-sky-800 dark:text-sky-200"
                            >
                                <TechBadgeIcon name={tech} />
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="crystal-cell rounded-2xl p-4 text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
                        <strong>Impacto:</strong> {project.impact}
                    </div>

                    <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                            Características
                        </h4>
                        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/75">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap justify-end gap-3 border-t border-white/30 pt-5 dark:border-white/10">
                        <GlossyButton onClick={onClose} variant="secondary" size="sm">
                            Cerrar
                        </GlossyButton>
                        {project.githubUrl && (
                            <GlossyButton href={project.githubUrl} target="_blank" rel="noreferrer" size="sm">
                                <Github className="mr-1.5 h-4 w-4" />
                                Ver referencia
                            </GlossyButton>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function FeaturedProjects() {
    const featuredList = projects.slice(0, 3);
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

    return (
        <section id="proyectos" className="relative py-12 overflow-visible">
            <Container>
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
                            Proyectos destacados
                        </h2>
                        <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                            Soluciones empresariales, automatización de datos y producto web con impacto práctico.
                        </p>
                    </div>
                    <GlossyButton href="/projects" variant="secondary" size="sm" className="hidden sm:inline-flex">
                        Ver todos <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </GlossyButton>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {featuredList.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                        >
                            <GlassPanel
                                onClick={() => setSelectedProject(project)}
                                className="group flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
                                intensity="medium"
                            >
                                <div className="crystal-media relative h-44 w-full shrink-0 overflow-hidden rounded-t-2xl border-x-0 border-t-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority={idx === 0}
                                        loading={idx === 0 ? undefined : "lazy"}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-white/10 to-white/25 dark:from-slate-950/45 dark:via-cyan-100/5 dark:to-cyan-100/10" />
                                </div>

                                <div className="flex flex-1 flex-col justify-between p-6">
                                    <div>
                                        <h3 className="line-clamp-1 font-heading text-base font-extrabold text-foreground">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                                            {project.impact}
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <div className="mb-4 flex flex-wrap gap-1.5 border-t border-white/20 pt-3 dark:border-white/10">
                                            {project.stack.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center rounded-full border border-sky-500/15 bg-sky-500/10 px-2 py-0.5 text-[9px] font-extrabold text-sky-800 dark:text-sky-200"
                                                >
                                                    <TechBadgeIcon name={tech} />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-foreground/75 transition-colors group-hover:text-primary">
                                            <Github className="h-3.5 w-3.5" />
                                            Abrir ficha técnica
                                        </span>
                                    </div>
                                </div>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <GlossyButton href="/projects" variant="secondary" size="sm" className="w-full">
                        Ver todos los proyectos <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </GlossyButton>
                </div>
            </Container>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailsModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
