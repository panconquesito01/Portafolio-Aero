export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    visualType: "enterprise" | "open-source" | "sandbox" | "game" | "roblox" | "blog";
    image: string;
    impact: string;
    features: string[];
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: "aurosoft-erp",
        title: "ERP Aurosoft",
        description:
            "Sistema empresarial para operación administrativa, comercial y contable. Participación en módulos reales de negocio, mantenimiento evolutivo, reportes y soporte técnico sobre flujos productivos.",
        stack: ["C#", ".NET", "ASP.NET MVC", "SQL Server", "Entity Framework"],
        visualType: "enterprise",
        image: "/projects/erp.png",
        impact:
            "Centraliza procesos críticos y reduce fricción operativa entre áreas comerciales, inventario y administración.",
        features: [
            "Módulos de inventario, facturación, cartera y contabilidad.",
            "Corrección de errores productivos con análisis de causa raíz.",
            "Consultas SQL y validaciones de reglas de negocio.",
            "Integración con reportes y documentos empresariales.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "enterprise-modules",
        title: "Módulos Empresariales",
        description:
            "Diseño y evolución de pantallas, servicios y flujos internos para operaciones de negocio: terceros, productos, movimientos, comprobantes y procesos administrativos.",
        stack: ["C#", ".NET", "Telerik", "JavaScript", "SQL Server"],
        visualType: "enterprise",
        image: "/projects/analytics.png",
        impact:
            "Convierte requerimientos operativos en módulos claros, mantenibles y alineados con usuarios reales.",
        features: [
            "Análisis de requerimientos con impacto sobre datos existentes.",
            "Formularios empresariales con validaciones y estados claros.",
            "Mantenimiento sobre componentes heredados sin romper compatibilidad.",
            "Entrega incremental con control de versiones.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "sql-automation",
        title: "Automatizaciones SQL",
        description:
            "Consultas, vistas, procedimientos y procesos de apoyo para depurar datos, automatizar cálculos y preparar información confiable para operación y reportes.",
        stack: ["SQL Server", "T-SQL", "Stored Procedures", "Jobs SQL"],
        visualType: "enterprise",
        image: "/projects/api.png",
        impact:
            "Disminuye trabajo manual, mejora consistencia de información y acelera cierres o revisiones operativas.",
        features: [
            "Consultas para auditoría de movimientos y saldos.",
            "Procedimientos parametrizables para procesos recurrentes.",
            "Optimización de filtros, joins y consultas costosas.",
            "Preparación de datasets para reportes financieros.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "financial-reports",
        title: "Reportes Financieros y Facturación",
        description:
            "Generación de reportes, documentos y salidas empresariales para facturación, contabilidad, cartera e inventarios, con foco en legibilidad y precisión de datos.",
        stack: ["FastReport", "Telerik", "NPOI", "SQL Server", ".NET"],
        visualType: "enterprise",
        image: "/projects/client.png",
        impact:
            "Entrega información confiable para decisiones, auditoría y comunicación con clientes o áreas internas.",
        features: [
            "Diseño de reportes con agrupaciones, totales y filtros.",
            "Exportación y manipulación de documentos con NPOI.",
            "Cruce de información entre tablas operativas y contables.",
            "Validación visual y técnica de resultados.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "portfolio-web",
        title: "Portafolio Web Profesional",
        description:
            "Sitio personal en Next.js con estética aero/tech, secciones profesionales, catálogo personal interactivo, animaciones fluidas y estructura preparada para crecer.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        visualType: "open-source",
        image: "/projects/client.png",
        impact:
            "Comunica perfil técnico, criterio de producto y dominio frontend con una experiencia visual diferenciada.",
        features: [
            "Home resumido con navegación a secciones y páginas completas.",
            "Catálogo personal con vistas fluidas y modal detallado.",
            "Glass UI optimizado para contraste en modo claro y oscuro.",
            "Componentes tipados y datos desacoplados.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
    {
        id: "web-experiments",
        title: "Experimentos Web Interactivos",
        description:
            "Prototipos y experiencias visuales para practicar motion, composición, performance de UI, efectos de profundidad y microinteracciones en navegador.",
        stack: ["TypeScript", "React", "Three.js", "HTML5", "CSS3"],
        visualType: "blog",
        image: "/projects/analytics.png",
        impact:
            "Permite explorar ideas visuales y técnicas que luego se aplican con más criterio en productos reales.",
        features: [
            "Animaciones de scroll y transiciones con intención.",
            "Layouts responsivos para contenido visual.",
            "Pruebas de rendimiento y composición CSS.",
            "Componentes reutilizables cuando reducen complejidad.",
        ],
        githubUrl: "https://github.com/panconquesito01",
    },
];
