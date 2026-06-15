"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ContactForm } from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";

export function HomeContact() {
    return (
        <section id="contacto" className="relative py-12 overflow-visible">
            <Container>
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
                        Contacto
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                        ¿Tienes una idea o proyecto en mente? Hablemos y hagámoslo realidad.
                    </p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <GlassPanel className="p-6 md:p-8" intensity="medium">
                            <h3 className="text-lg font-bold font-heading text-foreground mb-4">
                                Información de Contacto
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                                Puedes escribirme directamente a través del formulario o utilizar cualquiera de los siguientes canales oficiales. Responderé lo antes posible.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <Mail className="w-5 h-5 text-blue-500" />,
                                        label: "Correo Electrónico",
                                        text: "davidrivera0712@gmail.com",
                                        href: "mailto:davidrivera0712@gmail.com",
                                    },
                                    {
                                        icon: <MapPin className="w-5 h-5 text-emerald-500" />,
                                        label: "Ubicación",
                                        text: "Colombia / Remoto",
                                    },
                                    {
                                        icon: <Github className="w-5 h-5 text-slate-800 dark:text-slate-200" />,
                                        label: "GitHub",
                                        text: "github.com/panconquesito01",
                                        href: "https://github.com/panconquesito01",
                                    },
                                    {
                                        icon: <Linkedin className="w-5 h-5 text-blue-600" />,
                                        label: "LinkedIn",
                                        text: "linkedin.com/in/davidrivera",
                                        href: "https://linkedin.com",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/5 shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:scale-[1.01] transition-transform duration-200">
                                        <div className="w-10 h-10 rounded-lg bg-white/30 dark:bg-slate-900/50 flex items-center justify-center border border-white/20 shadow-sm shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                                {item.label}
                                            </div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-bold text-foreground hover:text-primary transition-colors truncate block"
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <span className="text-xs font-bold text-foreground truncate block">
                                                    {item.text}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassPanel>
                    </motion.div>

                    {/* Right Column — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassPanel className="p-6 md:p-8" intensity="medium">
                            <h3 className="text-lg font-bold font-heading text-foreground mb-4">
                                Enviar un Mensaje
                            </h3>
                            <ContactForm />
                        </GlassPanel>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
