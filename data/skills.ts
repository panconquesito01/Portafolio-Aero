export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface SkillItem {
    name: string;
    shortName?: string;
}

export const stackCategories: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            { name: "React" },
            { name: "TypeScript", shortName: "TS" },
            { name: "Next.js" },
            { name: "Three.js" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "C#" },
            { name: "ASP.NET Core" },
            { name: "Node.js" },
            { name: "REST APIs" },
            { name: "Express" },
        ],
    },
    {
        category: "Bases de Datos y ORMs",
        items: [
            { name: "SQL Server" },
            { name: "PostgreSQL" },
            { name: "Redis" },
            { name: "Entity Framework" },
            { name: "Prisma" },
        ],
    },
    {
        category: "Diseño y UI/UX",
        items: [
            { name: "Estilos Aero" },
            { name: "Bento Grid Layouts" },
            { name: "Glassmorphism" },
        ],
    },
    {
        category: "Arquitectura y DevOps",
        items: [
            { name: "Arquitectura Modular" },
            { name: "Rojo & Luau" },
            { name: "GitHub Actions" },
            { name: "Docker" },
            { name: "CI/CD" },
        ],
    },
    {
        category: "Programas y Herramientas",
        items: [
            { name: "Git" },
            { name: "Visual Studio" },
            { name: "VS Code" },
            { name: "Roblox Studio" },
            { name: "Postman" },
        ],
    },
];

/** Flat list for hero tech bar */
export const heroTechStack: string[] = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
];

/** Backward-compatible alias for DevTerminal.tsx */
export interface SkillGroup {
    category: string;
    description: string;
    items: string[];
}

export const skillGroups: SkillGroup[] = stackCategories.map((cat) => ({
    category: cat.category,
    description: "",
    items: cat.items.map((i) => i.name),
}));

