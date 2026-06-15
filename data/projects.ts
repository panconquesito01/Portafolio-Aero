export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    visualType: "enterprise" | "open-source" | "sandbox" | "game" | "roblox" | "blog";
    image: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: "aurosoft-erp",
        title: "Aurosoft ERP (Sistema Corporativo)",
        description:
            "Sistema ERP multi-inquilino de gran escala para empresas colombianas. Desarrollado con ASP.NET Core 10, Entity Framework Core 10 (SQL Server), integraciones REST API con Conexus (facturación electrónica de la DIAN), WhatsApp Graph API y generación de reportes FastReport.",
        stack: ["C#", "ASP.NET Core 10", "SQL Server", "PWA"],
        visualType: "enterprise",
        image: "/projects/erp.png",
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "awesome-copilot",
        title: "Awesome GitHub Copilot",
        description:
            "Colaboración y desarrollo de un repositorio de código abierto con una colección de agentes personalizados, instrucciones de formato, MCP servers, flujos de trabajo de automatización de CI/CD e integraciones avanzadas para la comunidad de desarrollo en GitHub Copilot.",
        stack: ["Node.js", "AI Tooling", "GitHub Actions"],
        visualType: "open-source",
        image: "/projects/analytics.png",
        githubUrl: "https://github.com/panconquesito01/awesome-copilot",
    },
    {
        id: "voxelcraft",
        title: "VoxelCraft (Motor Voxel 3D)",
        description:
            "Juego sandbox voxel 3D en navegador construido desde cero. Generación procedural determinista por semilla, biomas dinámicos, ciclo día/noche, IA de mobs con comportamientos dinámicos y un motor de chunks optimizado en GPU con guardado por diferencias en localStorage.",
        stack: ["TypeScript", "Three.js", "Vite"],
        visualType: "sandbox",
        image: "/projects/api.png",
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "retro-birthday-slots",
        title: "Retro Birthday Slots (Cumple-Poke)",
        description:
            "Videojuego web estilo RPG retro handheld de tragamonedas de cumpleaños. Incluye máquina de estados de juego con persistencia de sesión local, generación de perfiles estacionales y un sintetizador de audio nativo mediante Web Audio API.",
        stack: ["Next.js", "React", "TypeScript", "Web Audio API"],
        visualType: "game",
        image: "/projects/client.png",
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "lavagame-roblox",
        title: "LavaGame (Roblox & Rojo)",
        description:
            "Proyecto de Roblox Studio integrado mediante el framework Rojo y Luau. Implementa lógica de optimización de materiales en tiempo real y sistemas de iluminación dinámica en Roblox sin modificar recursos base del servidor.",
        stack: ["Rojo", "Luau", "Roblox Studio"],
        visualType: "roblox",
        image: "/projects/api.png",
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "santa-marta-blog",
        title: "Santa Marta Travel Blog",
        description:
            "Blog de viajes interactivo del Caribe colombiano. Diseñado con HTML5 semántico, layouts Bento Grid responsivos, modales y animaciones fluidas al hacer scroll con optimización de carga y accesibilidad.",
        stack: ["HTML5", "CSS3", "JavaScript"],
        visualType: "blog",
        image: "/projects/client.png",
        githubUrl: "https://github.com/panconquesito01",
    },
];
