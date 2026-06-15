"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Code, Server, Layers, User, Mail } from "lucide-react";

/* ─── Mini Dashboard Mockup (CSS-only) ─── */
function DashboardMockup() {
    return (
        <div
            className="crystal-cell animate-aero-panel-float relative w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-2xl"
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
                <div className="w-[100px] border-r border-white/30 dark:border-cyan-100/10 p-3 flex flex-col gap-2 bg-white/10 dark:bg-slate-950/10">
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
                                className="crystal-cell rounded-lg p-2"
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
                        <div className="crystal-cell flex-1 rounded-lg p-2 flex flex-col justify-between">
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
                        <div className="crystal-cell w-[85px] rounded-lg p-2 flex flex-col justify-between">
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
        </div>
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
        <div
            className="animate-aero-panel-float-delayed absolute -bottom-6 -left-6 w-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 z-20"
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
        </div>
    );
}

/* ─── Hero Section ─── */
export function HeroSection() {
    const itemVariants = {
        hidden: { opacity: 1, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 18 },
        },
    };

    return (
        <section
            id="inicio"
            className="relative min-h-[88vh] flex items-center pt-28 pb-10 overflow-visible"
        >
            <Container className="relative z-10 overflow-visible">
                {/* Main Glass Panel wrapping the entire Hero area */}
                <div className="glass-panel glass-panel-highlight rounded-2xl p-6 sm:p-8 lg:p-11 shadow-2xl relative w-full overflow-visible border border-white/70 dark:border-cyan-100/10 mt-4">
                    {/* Visual Glare diagonal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/25 dark:via-cyan-100/5 dark:to-cyan-100/10 pointer-events-none rounded-2xl -z-10" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center overflow-visible">
                        {/* Left — Text */}
                        <motion.div
                            initial={false}
                            animate="visible"
                            className="flex flex-col"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="crystal-cell mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-sky-800 dark:text-cyan-100"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                                Full Stack / ERP / SQL Server
                            </motion.div>
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.04]"
                            >
                                <span className="text-foreground">David Steven Rivera Alfonso</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-600 dark:from-cyan-200 dark:via-sky-300 dark:to-emerald-200">
                                    Ingeniero de Sistemas / Full Stack Developer
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="mt-6 max-w-2xl text-base sm:text-lg text-foreground/80 dark:text-foreground/75 leading-relaxed"
                            >
                                Construyo software empresarial, módulos ERP, interfaces web y
                                automatizaciones con foco en claridad técnica, datos confiables y
                                resultados que se sostienen en producción.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="mt-6 grid max-w-2xl grid-cols-1 gap-3 text-xs font-semibold text-foreground/75 sm:grid-cols-3 dark:text-foreground/70"
                            >
                                {["Backend .NET y SQL Server", "Frontend Next.js y React", "Reportes y procesos ERP"].map((item) => (
                                    <div
                                        key={item}
                                        className="crystal-cell rounded-xl px-3 py-2"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#proyectos"
                                    className="inline-flex items-center justify-center font-bold px-6 h-12 text-sm rounded-xl bg-gradient-to-b from-sky-500 to-blue-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_24px_rgba(2,132,199,0.3)] hover:translate-y-[-1px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_30px_rgba(2,132,199,0.38)] transition-all duration-200 gap-2 border border-blue-400/40"
                                >
                                    <User className="w-4 h-4" />
                                    Ver Proyectos
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center font-bold px-6 h-12 text-sm rounded-xl bg-white/50 hover:bg-white/70 dark:bg-white/10 dark:hover:bg-white/15 text-foreground border border-white/60 dark:border-cyan-100/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_18px_rgba(0,0,0,0.08)] hover:translate-y-[-1px] transition-all duration-200 gap-2"
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
                                        className="crystal-cell inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold hover:scale-105 transition-all duration-200 cursor-default"
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
                                <span className="aero-bubble absolute -right-12 -top-16 z-20 h-24 w-24 animate-float-gentle" />
                                <span className="aero-bubble absolute -bottom-14 right-24 z-20 h-14 w-14 animate-float-delayed" />
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
