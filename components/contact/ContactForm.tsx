"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "submitting") return;

        setStatus("submitting");

        // Simulación de envío premium con delay de 2 segundos
        timeoutRef.current = setTimeout(() => {
            try {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } catch (err) {
                setStatus("error");
            }
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-full relative">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6 border border-emerald-500/20">
                            <CheckCircle2 size={36} className="animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2">¡Mensaje Recibido!</h3>
                        <p className="text-muted-foreground text-sm max-w-sm">
                            Muchas gracias por contactarme. He recibido tu mensaje de forma segura y te responderé lo antes posible.
                        </p>
                        <Button 
                            onClick={() => setStatus("idle")} 
                            variant="outline" 
                            type="button"
                            className="mt-8 hover:bg-muted/50"
                        >
                            Enviar otro mensaje
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form 
                        key="contact-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Nombre Completo
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="crystal-field flex h-11 w-full rounded-xl px-4 py-3 text-sm transition-all placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="crystal-field flex h-11 w-full rounded-xl px-4 py-3 text-sm transition-all placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Mensaje o Idea
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === "submitting"}
                                className="crystal-field flex min-h-[140px] w-full rounded-xl px-4 py-3 text-sm transition-all placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                placeholder="¿De qué trata tu proyecto?"
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-sm text-rose-500 bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                                <AlertCircle size={18} />
                                <span>Hubo un error al enviar el formulario. Inténtalo de nuevo.</span>
                            </div>
                        )}

                        <Button 
                            type="submit" 
                            className="w-full h-11 rounded-xl glow-effect hover:scale-[1.01] transition-all"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando tu mensaje...
                                </>
                            ) : (
                                <>
                                    Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
