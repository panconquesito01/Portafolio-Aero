export interface SkillCategory {
    category: string;
    description: string;
    items: SkillItem[];
}

export interface SkillItem {
    name: string;
    shortName?: string;
}

export const stackCategories: SkillCategory[] = [
    {
        category: "Frontend",
        description:
            "Interfaces rápidas, responsive y mantenibles con App Router, tipado fuerte y animación controlada.",
        items: [
            { name: "Next.js" },
            { name: "React" },
            { name: "TypeScript", shortName: "TS" },
            { name: "Three.js" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
        ],
    },
    {
        category: "Backend",
        description:
            "Servicios empresariales, lógica de negocio, APIs REST y mantenimiento de módulos transaccionales.",
        items: [
            { name: "C#" },
            { name: ".NET" },
            { name: "ASP.NET MVC" },
            { name: "Entity Framework" },
            { name: "REST APIs" },
            { name: "Dapper" },
        ],
    },
    {
        category: "Base de Datos",
        description:
            "Modelado, consultas, procedimientos, optimización y automatizaciones sobre SQL Server.",
        items: [
            { name: "SQL Server" },
            { name: "T-SQL" },
            { name: "Stored Procedures" },
            { name: "Views" },
            { name: "Query Tuning" },
            { name: "Jobs SQL" },
        ],
    },
    {
        category: "ERP y Reportes",
        description:
            "Módulos empresariales, facturación, reportabilidad y documentos operativos para negocio real.",
        items: [
            { name: "FastReport" },
            { name: "Telerik" },
            { name: "NPOI" },
            { name: "Facturación" },
            { name: "Inventarios" },
            { name: "Contabilidad" },
        ],
    },
    {
        category: "Arquitectura y Entrega",
        description:
            "Diseño modular, control de cambios, revisión de errores y despliegues con trazabilidad.",
        items: [
            { name: "Arquitectura Modular" },
            { name: "Debugging" },
            { name: "CI/CD" },
            { name: "Git Flow" },
            { name: "Azure DevOps" },
            { name: "GitHub Actions" },
        ],
    },
    {
        category: "Herramientas",
        description:
            "Entorno diario para desarrollo, diagnóstico, versionamiento y colaboración técnica.",
        items: [
            { name: "Git" },
            { name: "Azure DevOps" },
            { name: "Visual Studio" },
            { name: "VS Code" },
            { name: "Postman" },
            { name: "IIS" },
        ],
    },
];

/** Flat list for hero tech bar */
export const heroTechStack: string[] = [
    "Next.js",
    ".NET",
    "SQL Server",
    "ERP",
];

/** Backward-compatible alias for DevTerminal.tsx */
export interface SkillGroup {
    category: string;
    description: string;
    items: string[];
}

export const skillGroups: SkillGroup[] = stackCategories.map((cat) => ({
    category: cat.category,
    description: cat.description,
    items: cat.items.map((i) => i.name),
}));
