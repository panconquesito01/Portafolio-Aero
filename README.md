# Portafolio Profesional

Este es un portafolio web profesional diseñado con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Comenzando

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### Instalación

1.  Clona el repositorio (si aplica) o navega a la carpeta del proyecto.
2.  Instala las dependencias:

```bash
npm install
# o
pnpm install
# o
yarn install
```

### Desarrollo Local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías

-   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Iconos:** [Lucide React](https://lucide.dev/)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Temas:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark Mode)

## 📂 Estructura del Proyecto

-   `/app`: Rutas y páginas (App Router).
-   `/components`: Componentes reutilizables.
    -   `/ui`: Componentes base (Botones, Contenedores).
    -   `/layout`: Navbar, Footer.
    -   `/home`, `/projects`, `/contact`: Componentes específicos de sección.
-   `/lib`: Utilidades y funciones auxiliares.
-   `/data`: Datos estáticos (proyectos, skills).

## 🌍 Despliegue

La forma más fácil de desplegar este proyecto es usando [Vercel](https://vercel.com/):

1.  Sube tu código a un repositorio de GitHub/GitLab/Bitbucket.
2.  Importa el proyecto en Vercel.
3.  Vercel detectará automáticamente que es un proyecto Next.js.
4.  Haz clic en **Deploy**.

## 🎨 Personalización

1.  **Datos Personales:** Edita los textos en `app/page.tsx`, `app/about/page.tsx`, y `components/home/HeroSection.tsx`.
2.  **Proyectos:** Actualiza el archivo `data/projects.ts` con tus proyectos reales.
3.  **Colores:** Modifica las variables CSS en `app/globals.css` o la configuración en `tailwind.config.ts`.

---

Creado con ❤️ para desarrolladores exigentes.
