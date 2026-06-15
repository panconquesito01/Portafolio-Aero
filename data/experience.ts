export interface ExperienceEntry {
    period: string;
    role: string;
    company: string;
    description: string;
    skills?: string[];
}

export const experienceEntries: ExperienceEntry[] = [
    {
        period: "2024 – Presente",
        role: "Desarrollador Full Stack ERP",
        company: "Aurosoft",
        description:
            "Migración y desarrollo de un sistema ERP multi-inquilino a gran escala para empresas colombianas. Implementación de módulos de inventarios, contabilidad, nómina y facturación electrónica DIAN a través de Conexus. Integración de webhooks con WhatsApp Graph API y generación de reportes con FastReport bajo una arquitectura robusta.",
        skills: ["C#", "ASP.NET Core 10", "SQL Server", "Dapper", "SignalR", "Conexus DIAN", "FastReport"],
    },
    {
        period: "2024 – Presente",
        role: "Desarrollador & Colaborador Open Source",
        company: "Awesome GitHub Copilot",
        description:
            "Diseño y desarrollo de herramientas avanzadas para la comunidad de desarrollo en GitHub Copilot. Creación de agentes personalizados, instrucciones avanzadas, servidores MCP (Model Context Protocol) y flujos CI/CD para integraciones de IA.",
        skills: ["Node.js", "AI Tooling", "GitHub Actions", "MCP", "JSON Schemas"],
    },
    {
        period: "2022 – 2024",
        role: "Desarrollador de Videojuegos & Motores Web",
        company: "Desarrollo Autónomo",
        description:
            "Desarrollo de VoxelCraft, un motor voxel 3D para navegadores con renderizado procedural determinista y ciclo día/noche. Programación de tragamonedas estilo RPG de cumpleaños (Retro Birthday Slots) con sintetizador de sonido en tiempo real usando Web Audio API.",
        skills: ["TypeScript", "Three.js", "Vite", "Web Audio API", "HTML5 Canvas"],
    },
    {
        period: "2021 – 2022",
        role: "Programador de Gameplay & Scripting",
        company: "Roblox Studio (Rojo & Luau)",
        description:
            "Automatización e implementación de mecánicas de juego multijugador, comportamientos de iluminación dinámica y ajuste de materiales en tiempo real utilizando Luau. Empaquetamiento e integración de código local con Roblox Studio a través de Rojo.",
        skills: ["Luau", "Rojo", "Roblox Studio", "Aftman"],
    },
    {
        period: "2020 – 2021",
        role: "Desarrollador Frontend",
        company: "Creación de Sitios Web e Interfaces",
        description:
            "Maquetación y diseño UI de blogs interactivos y portales responsivos (Santa Marta Travel Blog). Creación de diseños estructurados bajo el estándar Bento Grid, paneles con efecto de cristal (glassmorphic panels) y animaciones fluidas al hacer scroll.",
        skills: ["HTML5", "CSS3", "JavaScript", "Bento Grid", "Scroll Animations"],
    },
];
