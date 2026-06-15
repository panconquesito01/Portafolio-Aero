"use client";

import * as React from "react";
import { Project } from "@/data/projects";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
            whileHover={{ y: -4 }}
        >
            <GlassPanel className="p-6 h-full hover:shadow-glass-lg transition-shadow">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-heading">
                            {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex gap-1.5 mt-3">
                            {project.stack.map((s) => (
                                <span key={s} className="glass-chip text-[10px]">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassPanel>
        </motion.div>
    );
}
