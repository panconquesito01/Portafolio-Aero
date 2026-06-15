"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock3, Disc, Film, ListMusic, Sparkles, Star, Tv, Users, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { cn } from "@/lib/utils";
import {
    personalCatalogs,
    type AlbumItem,
    type PersonalCatalogType,
    type PersonalItem,
    type ScreenItem,
} from "@/data/personalCatalog";

const catalogIcons: Record<PersonalCatalogType, React.ElementType> = {
    music: Disc,
    movie: Film,
    series: Tv,
};

function isAlbum(item: PersonalItem): item is AlbumItem {
    return item.type === "music";
}

function isScreenItem(item: PersonalItem): item is ScreenItem {
    return item.type === "movie" || item.type === "series";
}

function PersonalItemModal({
    item,
    onClose,
}: {
    item: PersonalItem;
    onClose: () => void;
}) {
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.button
                type="button"
                aria-label="Cerrar detalle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            <motion.article
                role="dialog"
                aria-modal="true"
                aria-labelledby={`personal-modal-${item.id}`}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 18 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="crystal-modal relative z-10 grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl text-foreground shadow-2xl md:grid-cols-[280px_1fr]"
            >
                <div className="crystal-media relative min-h-[260px] overflow-hidden border-0 md:min-h-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-100/80">
                            {isAlbum(item) ? "Álbum" : item.type === "movie" ? "Película" : "Serie"}
                        </p>
                        <h3 className="mt-2 font-heading text-2xl font-extrabold leading-tight">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-white/80">{item.subtitle}</p>
                    </div>
                </div>

                <div className="flex max-h-[88vh] flex-col overflow-hidden">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200/70 p-5 dark:border-white/10 md:p-6">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-200">
                                Ficha básica
                            </p>
                            <h2 id={`personal-modal-${item.id}`} className="mt-1 font-heading text-2xl font-extrabold">
                                {item.title}
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Cerrar detalle"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto p-5 md:p-6">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.summary}
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="crystal-cell rounded-xl p-3">
                                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                    <Calendar className="h-3.5 w-3.5" />
                                    Año
                                </div>
                                <p className="mt-1 text-sm font-bold">{item.year}</p>
                            </div>

                            {isAlbum(item) ? (
                                <div className="crystal-cell rounded-xl p-3">
                                    <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                        <Clock3 className="h-3.5 w-3.5" />
                                        Duración
                                    </div>
                                    <p className="mt-1 text-sm font-bold">{item.albumLength}</p>
                                </div>
                            ) : (
                                <div className="crystal-cell rounded-xl p-3">
                                    <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                        <Star className="h-3.5 w-3.5" />
                                        IMDb
                                    </div>
                                    <p className="mt-1 text-sm font-bold">{item.imdbRating}</p>
                                </div>
                            )}
                        </div>

                        {isAlbum(item) && (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="crystal-cell rounded-xl p-3">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                            Artista
                                        </p>
                                        <p className="mt-1 text-sm font-bold">{item.artist}</p>
                                    </div>
                                    <div className="crystal-cell rounded-xl p-3">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                            Producción
                                        </p>
                                        <p className="mt-1 text-sm font-bold">{item.producer}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                                        <ListMusic className="h-4 w-4" />
                                        Canciones
                                    </h4>
                                    <ol className="crystal-cell mt-3 divide-y divide-slate-200/60 overflow-hidden rounded-2xl text-sm dark:divide-white/10">
                                        {item.tracks.map((track, index) => (
                                            <li key={`${track.title}-${index}`} className="grid grid-cols-[42px_1fr_auto] items-center gap-3 px-4 py-2.5">
                                                <span className="text-xs font-extrabold text-muted-foreground">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <span className="font-semibold">{track.title}</span>
                                                <span className="font-mono text-xs text-muted-foreground">{track.duration}</span>
                                            </li>
                                        ))}
                                    </ol>
                                    {item.note && (
                                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                                            {item.note}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {isScreenItem(item) && (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="crystal-cell rounded-xl p-3">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                            Dirección / creación
                                        </p>
                                        <p className="mt-1 text-sm font-bold">{item.director}</p>
                                    </div>
                                    <div className="crystal-cell rounded-xl p-3">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                                            Producción
                                        </p>
                                        <p className="mt-1 text-sm font-bold">{item.producer}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                                        <Users className="h-4 w-4" />
                                        Reparto principal
                                    </h4>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.cast.map((actor) => (
                                            <span
                                                key={actor}
                                                className="rounded-full border border-sky-500/15 bg-sky-500/10 px-3 py-1 text-xs font-bold text-sky-800 dark:text-sky-200"
                                            >
                                                {actor}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </motion.article>
        </div>
    );
}

export function HomePersonal() {
    const [activeCatalog, setActiveCatalog] = React.useState<PersonalCatalogType>("music");
    const [selectedItem, setSelectedItem] = React.useState<PersonalItem | null>(null);
    const currentCatalog = personalCatalogs.find((catalog) => catalog.id === activeCatalog) ?? personalCatalogs[0];
    const ActiveIcon = catalogIcons[currentCatalog.id];

    return (
        <section id="personal" className="relative py-12 overflow-visible">
            <Container>
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-1 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Catálogo personal</span>
                        </div>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
                            Referencias que también construyen criterio
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            Un espacio separado del portafolio profesional, con vistas fluidas para música, cine y series.
                        </p>
                    </div>

                    <div className="crystal-cell flex w-full gap-2 overflow-x-auto rounded-2xl p-1.5 md:w-auto">
                        {personalCatalogs.map((catalog) => {
                            const CatalogIcon = catalogIcons[catalog.id];
                            const isActive = activeCatalog === catalog.id;

                            return (
                                <button
                                    key={catalog.id}
                                    type="button"
                                    onClick={() => setActiveCatalog(catalog.id)}
                                    className={cn(
                                        "relative flex min-w-fit items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition-colors",
                                        isActive ? "text-white" : "text-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activePersonalCatalog"
                                            className="absolute inset-0 rounded-xl border border-sky-400/30 bg-gradient-to-b from-sky-500 to-blue-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_7px_16px_rgba(2,132,199,0.24)]"
                                            transition={{ type: "spring", stiffness: 360, damping: 30 }}
                                        />
                                    )}
                                    <CatalogIcon className="relative h-3.5 w-3.5" />
                                    <span className="relative">{catalog.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <GlassPanel className="mb-6 p-5 md:p-6" intensity="medium">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-200">
                                {currentCatalog.eyebrow}
                            </p>
                            <h3 className="mt-1 flex items-center gap-2 font-heading text-2xl font-extrabold">
                                <ActiveIcon className="h-5 w-5 text-sky-600 dark:text-cyan-200" />
                                {currentCatalog.name}
                            </h3>
                        </div>
                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            {currentCatalog.description}
                        </p>
                    </div>
                </GlassPanel>

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentCatalog.id}
                        initial={{ opacity: 0.88, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className={cn(
                            "grid gap-4 sm:gap-5",
                            currentCatalog.id === "music"
                                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                        )}
                    >
                        {currentCatalog.items.map((item, index) => (
                            <motion.button
                                type="button"
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.28, delay: index * 0.025 }}
                                whileHover={{ y: -6 }}
                                className="group text-left"
                            >
                                <GlassPanel className="flex h-full flex-col overflow-hidden rounded-2xl p-2.5 transition-all duration-300 hover:shadow-glass-lg" intensity="medium">
                                    <div
                                        className={cn(
                                            "crystal-media relative mb-3 w-full overflow-hidden rounded-xl shadow-sm",
                                            item.type === "music" ? "aspect-square" : "aspect-[2/3]"
                                        )}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            priority={currentCatalog.id === "music" && index < 6}
                                            loading={currentCatalog.id === "music" && index < 6 ? undefined : "lazy"}
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-white/10 to-white/25 dark:from-slate-950/45 dark:via-cyan-100/5 dark:to-cyan-100/15" />
                                        <div className="absolute left-2 top-2 rounded-full border border-white/25 bg-slate-950/45 px-2 py-0.5 text-[9px] font-extrabold text-white shadow-sm">
                                            {item.year}
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between px-1 pb-1">
                                        <div>
                                            <h4 className="line-clamp-1 text-xs font-extrabold leading-tight text-foreground transition-colors group-hover:text-primary">
                                                {item.title}
                                            </h4>
                                            <p className="mt-0.5 truncate text-[10px] font-semibold text-muted-foreground">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        <span className="mt-3 text-[10px] font-extrabold text-foreground/60 transition-colors group-hover:text-primary">
                                            Abrir detalle
                                        </span>
                                    </div>
                                </GlassPanel>
                            </motion.button>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Container>

            <AnimatePresence>
                {selectedItem && (
                    <PersonalItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}
