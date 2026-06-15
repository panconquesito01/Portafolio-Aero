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
        role: "Desarrollador Full Stack ERP / .NET",
        company: "Aurosoft",
        description:
            "Desarrollo y mantenimiento de módulos ERP para operaciones reales de negocio: inventarios, facturación, cartera, contabilidad, nómina y reportabilidad. Trabajo sobre .NET, SQL Server y componentes empresariales, cuidando estabilidad, trazabilidad, rendimiento y compatibilidad con procesos existentes.",
        skills: ["C#", ".NET", "ASP.NET MVC", "SQL Server", "Entity Framework", "FastReport", "Telerik"],
    },
    {
        period: "2024 – Presente",
        role: "Automatización SQL y Reportes Empresariales",
        company: "Aurosoft / Sistemas Corporativos",
        description:
            "Construcción de consultas, procedimientos almacenados, vistas y flujos de extracción para reportes financieros, facturación, auditoría e inventario. Diagnóstico de datos inconsistentes, validación de reglas de negocio y optimización de consultas para reducir tiempos de respuesta.",
        skills: ["T-SQL", "Stored Procedures", "SQL Jobs", "NPOI", "FastReport", "Query Tuning"],
    },
    {
        period: "2023 – Presente",
        role: "Frontend Web y Experiencia de Producto",
        company: "Proyectos Propios / Freelance",
        description:
            "Diseño e implementación de interfaces modernas con Next.js, React, TypeScript y Tailwind, priorizando jerarquía visual, responsive real, accesibilidad y animaciones sutiles. Enfoque en pantallas que explican valor de negocio sin sacrificar rendimiento.",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI Architecture"],
    },
    {
        period: "2022 – 2024",
        role: "Arquitectura, Debugging y Mantenimiento",
        company: "Sistemas Legacy y Evolutivos",
        description:
            "Análisis de errores en módulos grandes, lectura de código existente, identificación de causas raíz y entrega de cambios controlados sin romper flujos productivos. Trabajo con control de versiones, revisión de impactos y documentación técnica puntual.",
        skills: ["Debugging", "Git", "Azure DevOps", "Code Review", "Refactoring", "Soporte Productivo"],
    },
    {
        period: "2020 – 2021",
        role: "Desarrollador de Interfaces y Prototipos",
        company: "Laboratorio Personal",
        description:
            "Creación de prototipos visuales, experiencias interactivas y sitios responsive para practicar composición, diseño de sistemas visuales, performance de UI y patrones de navegación fluidos.",
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Motion UI"],
    },
];
