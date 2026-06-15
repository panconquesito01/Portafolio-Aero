"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Server, Layers, User, Mail } from "lucide-react";

/* ─── Mini Dashboard Mockup (CSS-only) ─── */
function DashboardMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotateY: -3 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative w-[420px] h-[280px] rounded-2xl bg-white/80 dark:bg-slate-900/80 overflow-hidden shadow-2xl border border-white/45 dark:border-slate-800/80 backdrop-blur-md"
        >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/50 dark:border-slate-800/85">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-bold text-foreground/60 ml-2">
                        Panel de Control
                    </span>
                </div>
            </div>

            <div className="flex h-[calc(100%-36px)]">
                {/* Sidebar */}
                <div className="w-[100px] border-r border-slate-200/50 dark:border-slate-800/85 p-3 flex flex-col gap-2 bg-slate-50/35 dark:bg-slate-950/20">
                    {["Inicio", "Analítica", "Usuarios", "Pedidos", "Productos", "Reportes", "Ajustes"].map(
                        (item, i) => (
                            <div
                                key={item}
                                className={`text-[8px] font-semibold px-2 py-1.5 rounded-md truncate ${
                                    i === 0
                                        ? "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                                        : "text-muted-foreground/60"
                                }`}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-2 mb-2">
                        {[
                            { label: "Ingresos Totales", value: "$1.24M", change: "+12.5%" },
                            { label: "Pedidos", value: "8,431", change: "+8.2%" },
                            { label: "Clientes", value: "2,163", change: "+15.6%" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-slate-50/75 dark:bg-slate-800/60 rounded-lg p-2 border border-slate-200/50 dark:border-slate-700/50"
                            >
                                <div className="text-[7px] text-muted-foreground/50 truncate">
                                    {stat.label}
                                </div>
                                <div className="text-[11px] font-extrabold text-foreground/80 mt-0.5">
                                    {stat.value}
                                </div>
                                <div className="text-[7px] font-bold text-emerald-500 mt-0.5">
                                    {stat.change}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chart area */}
                    <div className="flex gap-2 items-stretch flex-1">
                        <div className="flex-1 bg-slate-50/75 dark:bg-slate-800/60 rounded-lg p-2 border border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between">
                            <div className="text-[7px] font-semibold text-foreground/50">
                                Resumen de Ingresos
                            </div>
                            {/* SVG chart lines */}
                            <svg
                                viewBox="0 0 160 50"
                                className="w-full h-12 mt-1"
                                fill="none"
                            >
                                <path
                                    d="M0 40 L20 35 L40 28 L60 30 L80 18 L100 22 L120 12 L140 15 L160 8"
                                    stroke="#0ea5e9"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.8"
                                />
                                <path
                                    d="M0 40 L20 35 L40 28 L60 30 L80 18 L100 22 L120 12 L140 15 L160 8 L160 50 L0 50 Z"
                                    fill="url(#chartGrad)"
                                    opacity="0.15"
                                />
                                <defs>
                                    <linearGradient
                                        id="chartGrad"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#0ea5e9"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="transparent"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Side Donut Chart */}
                        <div className="w-[85px] bg-slate-50/75 dark:bg-slate-800/60 rounded-lg p-2 border border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between">
                            <div className="text-[7px] font-semibold text-foreground/50">
                                Productos Top
                            </div>
                            <div className="relative flex items-center justify-center my-1.5 h-10 w-10 mx-auto">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(0,120,255,0.1)" strokeWidth="4" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="50 100" strokeDashoffset="0" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-50" />
                                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-80" />
                                </svg>
                                <div className="absolute text-[5px] font-bold text-foreground/70">100%</div>
                            </div>
                            <div className="grid grid-cols-2 gap-[1px] text-[4.5px] text-muted-foreground mt-0.5">
                                <span className="flex items-center gap-0.5 truncate"><span className="w-0.5 h-0.5 rounded-full bg-[#0ea5e9] shrink-0" />Prod A</span>
                                <span className="flex items-center gap-0.5 truncate"><span className="w-0.5 h-0.5 rounded-full bg-[#10b981] shrink-0" />Prod B</span>
                                <span className="flex items-center gap-0.5 truncate"><span className="w-0.5 h-0.5 rounded-full bg-[#8b5cf6] shrink-0" />Prod C</span>
                                <span className="flex items-center gap-0.5 truncate"><span className="w-0.5 h-0.5 rounded-full bg-slate-400 shrink-0" />Otros</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Code Snippet Mockup ─── */
const codeHTML = `<div style="display:flex">
<div style="color:#4b5563;padding-right:12px;user-select:none;text-align:right;width:24px;flex-shrink:0">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9</div>
<div><span style="color:#c084fc">const</span> <span style="color:#93c5fd">obtenerPedidos</span> <span style="color:#9ca3af">=</span> <span style="color:#c084fc">async</span> <span style="color:#9ca3af">(</span><span style="color:#fdba74">req</span><span style="color:#9ca3af">,</span> <span style="color:#fdba74">res</span><span style="color:#9ca3af">) =&gt; {</span>
<br>&nbsp;&nbsp;<span style="color:#c084fc">try</span> <span style="color:#9ca3af">{</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c084fc">const</span> <span style="color:#93c5fd">pedidos</span> <span style="color:#9ca3af">=</span> <span style="color:#c084fc">await</span> <span style="color:#93c5fd">db</span><span style="color:#9ca3af">.</span><span style="color:#fde047">findMany</span><span style="color:#9ca3af">({</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#93c5fd">where</span><span style="color:#9ca3af">: {</span> <span style="color:#93c5fd">idUsuario</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">req</span><span style="color:#9ca3af">.</span><span style="color:#93c5fd">user</span><span style="color:#9ca3af">.</span><span style="color:#93c5fd">id</span> <span style="color:#9ca3af">},</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#93c5fd">include</span><span style="color:#9ca3af">: {</span> <span style="color:#93c5fd">detalles</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">true</span> <span style="color:#9ca3af">}</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9ca3af">});</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#93c5fd">res</span><span style="color:#9ca3af">.</span><span style="color:#fde047">json</span><span style="color:#9ca3af">({</span> <span style="color:#93c5fd">exito</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">true</span><span style="color:#9ca3af">,</span> <span style="color:#93c5fd">datos</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">pedidos</span> <span style="color:#9ca3af">});</span>
<br>&nbsp;&nbsp;<span style="color:#9ca3af">}</span> <span style="color:#c084fc">catch</span> <span style="color:#9ca3af">(</span><span style="color:#fdba74">error</span><span style="color:#9ca3af">) {</span>
<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#93c5fd">res</span><span style="color:#9ca3af">.</span><span style="color:#fde047">status</span><span style="color:#9ca3af">(</span><span style="color:#fdba74">500</span><span style="color:#9ca3af">).</span><span style="color:#fde047">json</span><span style="color:#9ca3af">({</span> <span style="color:#93c5fd">exito</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">false</span><span style="color:#9ca3af">,</span> <span style="color:#93c5fd">error</span><span style="color:#9ca3af">:</span> <span style="color:#fdba74">error</span><span style="color:#9ca3af">.</span><span style="color:#93c5fd">message</span> <span style="color:#9ca3af">});</span></div>
</div>`;

function CodeSnippetMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-6 -left-6 w-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 z-20"
        >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-3.5 py-2 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(239,68,68,0.4)]" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 shadow-[0_0_4px_rgba(245,158,11,0.4)]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_4px_rgba(16,185,129,0.4)]" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 ml-2">
                    GET /api/v1/pedidos
                </span>
            </div>

            {/* Code content */}
            <div
                className="bg-slate-950/95 backdrop-blur-md p-3.5 font-mono text-[10px] leading-relaxed text-slate-300 border-t border-slate-900"
                dangerouslySetInnerHTML={{ __html: codeHTML }}
            />
        </motion.div>
    );
}

function GlassBubbles() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, -180]);
    const y2 = useTransform(scrollY, [0, 800], [0, -90]);
    const y3 = useTransform(scrollY, [0, 800], [0, -130]);

    return (
        <>
            {/* Top-Right Bubble */}
            <motion.div
                style={{ y: y1 }}
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="aero-bubble absolute -top-16 -right-16 w-28 h-28 z-20 hidden lg:block"
            />
            {/* Bottom-Right Bubble */}
            <motion.div
                style={{ y: y2 }}
                animate={{ x: [4, -4, 4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="aero-bubble absolute -bottom-16 right-28 w-16 h-16 z-20 hidden lg:block"
            />
            {/* Left Mid Bubble */}
            <motion.div
                style={{ y: y3 }}
                animate={{ x: [3, -3, 3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="aero-bubble absolute top-1/4 -left-20 w-24 h-24 z-20 hidden lg:block"
            />
        </>
    );
}

/* ─── Hero Section ─── */
export function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 18 },
        },
    };

    return (
        <section
            id="inicio"
            className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-visible"
        >
            <Container className="relative z-10 overflow-visible">
                {/* Main Glass Panel wrapping the entire Hero area */}
                <div className="glass-panel glass-panel-highlight rounded-3xl p-8 lg:p-12 shadow-2xl relative w-full overflow-visible border border-white/40 dark:border-white/10 mt-4">
                    {/* Visual Glare diagonal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none rounded-3xl -z-10" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center overflow-visible">
                        {/* Left — Text */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.05]"
                            >
                                <span className="text-foreground">David Rivera</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400 dark:from-sky-400 dark:to-blue-500">
                                    Desarrollador Full Stack
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="mt-6 max-w-lg text-base sm:text-lg text-foreground/75 dark:text-foreground/60 leading-relaxed"
                            >
                                Construyo aplicaciones web y sistemas de extremo a extremo
                                <br className="hidden sm:block" /> que son altamente confiables, escalables y orientados a una gran experiencia de usuario.
                                <br className="hidden sm:block" />
                                Código limpio. Arquitectura sólida. Resultados reales.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#panels"
                                    className="inline-flex items-center justify-center font-bold px-6 h-12 text-sm rounded-full bg-gradient-to-b from-sky-400 to-blue-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_12px_rgba(2,132,199,0.35)] hover:scale-[1.02] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_6px_16px_rgba(2,132,199,0.45)] transition-all duration-200 gap-2 border border-blue-500/20"
                                >
                                    <User className="w-4 h-4" />
                                    Ver Proyectos
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center font-bold px-6 h-12 text-sm rounded-full bg-white/20 hover:bg-white/30 dark:bg-white/5 dark:hover:bg-white/10 text-foreground border border-white/40 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-all duration-200 gap-2"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contactar
                                </a>
                            </motion.div>

                            {/* Tech bar */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 flex flex-wrap items-center gap-4 text-foreground/75"
                            >
                                {[
                                    { icon: <Code className="w-3.5 h-3.5 text-sky-500" />, label: "React" },
                                    { icon: <span className="text-[9px] font-bold bg-[#3178c6] text-white rounded px-0.5 leading-none py-0.5">TS</span>, label: "TypeScript" },
                                    { icon: <Layers className="w-3.5 h-3.5 text-indigo-500" />, label: "Three.js" },
                                    { icon: <Server className="w-3.5 h-3.5 text-violet-500" />, label: "C# / .NET" },
                                ].map((tech) => (
                                    <div
                                        key={tech.label}
                                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold bg-white/25 dark:bg-white/5 border border-white/30 dark:border-white/10 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:scale-105 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200 cursor-default"
                                    >
                                        {tech.icon}
                                        <span>{tech.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right — Visual mockups */}
                        <div className="relative hidden lg:block overflow-visible">
                            <div className="relative ml-8 overflow-visible">
                                <GlassBubbles />
                                <DashboardMockup />
                                <CodeSnippetMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
