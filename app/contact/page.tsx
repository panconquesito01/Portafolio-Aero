"use client";

import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowLeft, Send } from "lucide-react";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: <Mail size={20} className="text-primary" />,
            label: "Correo",
            value: "davidrivera0712@gmail.com",
            href: "mailto:davidrivera0712@gmail.com",
        },
        {
            icon: <MapPin size={20} className="text-aero-green" />,
            label: "Ubicación",
            value: "Colombia / Remoto",
        },
    ];

    const socials = [
        {
            icon: <Github size={18} />,
            href: "https://github.com/panconquesito01",
            label: "GitHub",
        },
        {
            icon: <Linkedin size={18} />,
            href: "https://www.linkedin.com/in/david-steven-rivera-alfonso-0b55b52b3/",
            label: "LinkedIn",
        },
    ];

    return (
        <div className="min-h-screen pt-28 pb-16">
            <Container>
                <div className="mb-12">
                    <GlossyButton href="/" variant="secondary" size="sm">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al Inicio
                    </GlossyButton>
                </div>

                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
                    {/* Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5"
                    >
                        <h1 className="text-4xl font-extrabold font-heading md:text-5xl mb-6">
                            Contacto
                        </h1>
                        <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                            ¿Necesitas construir, mejorar o mantener una solución web,
                            ERP o automatización empresarial? Hablemos con contexto técnico.
                        </p>

                        <div className="space-y-3 mb-8">
                            {contactMethods.map((method, i) => (
                                <GlassPanel
                                    key={i}
                                    className="p-4 flex items-center gap-4 hover:shadow-glass-lg transition-shadow"
                                    intensity="medium"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                                            {method.label}
                                        </div>
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-semibold text-foreground">
                                                {method.value}
                                            </span>
                                        )}
                                    </div>
                                </GlassPanel>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="crystal-cell flex h-10 w-10 items-center justify-center rounded-xl text-foreground/60 hover:text-primary transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <GlassPanel
                            className="p-8 md:p-10"
                            intensity="strong"
                        >
                            <h2 className="text-xl font-bold font-heading mb-6">
                                Enviar un Mensaje
                            </h2>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="crystal-field w-full rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="crystal-field w-full rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                            placeholder="tu@correo.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        className="crystal-field w-full rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                                        placeholder="¿De qué trata el proyecto?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                                        Mensaje
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="crystal-field w-full rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                                        placeholder="Cuéntame más sobre tu proyecto o idea..."
                                    />
                                </div>
                                <GlossyButton type="submit" size="lg" className="w-full">
                                    <Send className="w-4 h-4" />
                                    Enviar Mensaje
                                </GlossyButton>
                            </form>
                        </GlassPanel>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
