"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const AUDIO_SRC = "/audio/dire-dire-docks.mp3";
const DEFAULT_VOLUME = 0.22;

function getStoredVolume() {
    if (typeof window === "undefined") return DEFAULT_VOLUME;

    const storedVolume = Number(window.localStorage.getItem("background-audio-volume"));
    return Number.isFinite(storedVolume) && storedVolume >= 0 && storedVolume <= 1
        ? storedVolume
        : DEFAULT_VOLUME;
}

export function BackgroundAudioControl() {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    const volumeRef = React.useRef(DEFAULT_VOLUME);
    const mutedRef = React.useRef(false);
    const [volume, setVolume] = React.useState(DEFAULT_VOLUME);
    const [isMuted, setIsMuted] = React.useState(false);
    const [needsGesture, setNeedsGesture] = React.useState(false);

    const startPlayback = React.useCallback(async (options?: { muted?: boolean; volume?: number }) => {
        const audio = audioRef.current;
        if (!audio) return false;

        const nextVolume = options?.volume ?? volumeRef.current;
        const nextMuted = options?.muted ?? mutedRef.current;

        audio.loop = true;
        audio.volume = nextVolume;
        audio.muted = nextMuted || nextVolume === 0;

        try {
            await audio.play();
            setNeedsGesture(false);
            return true;
        } catch {
            setNeedsGesture(true);
            return false;
        }
    }, []);

    React.useEffect(() => {
        const nextVolume = getStoredVolume();
        const storedMuted = window.localStorage.getItem("background-audio-muted") === "true";
        const audio = audioRef.current;

        volumeRef.current = nextVolume;
        mutedRef.current = storedMuted;
        setVolume(nextVolume);
        setIsMuted(storedMuted);

        if (audio) {
            audio.volume = nextVolume;
            audio.muted = storedMuted || nextVolume === 0;
        }

        if (!storedMuted && nextVolume > 0) {
            void startPlayback({ muted: false, volume: nextVolume });
        }
    }, [startPlayback]);

    React.useEffect(() => {
        const handleControlTarget = (event: Event) => {
            const target = event.target;
            return target instanceof Element && target.closest("[data-audio-control]");
        };

        let removeListeners = () => {};

        const handleFirstInteraction = (event: Event) => {
            const audio = audioRef.current;
            if (!audio || !audio.paused || mutedRef.current || volumeRef.current <= 0) return;
            if (handleControlTarget(event)) return;

            void startPlayback({ muted: false, volume: volumeRef.current }).then((started) => {
                if (started) removeListeners();
            });
        };

        removeListeners = () => {
            window.removeEventListener("pointerdown", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
        };

        window.addEventListener("pointerdown", handleFirstInteraction, { passive: true });
        window.addEventListener("keydown", handleFirstInteraction);
        window.addEventListener("touchstart", handleFirstInteraction, { passive: true });

        return removeListeners;
    }, [startPlayback]);

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        volumeRef.current = volume;
        mutedRef.current = isMuted;
        audio.volume = volume;
        audio.muted = isMuted || volume === 0;
        window.localStorage.setItem("background-audio-volume", String(volume));
        window.localStorage.setItem("background-audio-muted", String(isMuted));
    }, [isMuted, volume]);

    const handleToggleMute = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused || needsGesture) {
            const nextVolume = volume > 0 ? volume : DEFAULT_VOLUME;

            volumeRef.current = nextVolume;
            mutedRef.current = false;
            setVolume(nextVolume);
            setIsMuted(false);

            audio.muted = false;
            audio.volume = nextVolume;
            await startPlayback({ muted: false, volume: nextVolume });
            return;
        }

        mutedRef.current = !isMuted;
        setIsMuted((current) => !current);
    };

    const handleVolumeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextVolume = Number(event.target.value);
        const nextMuted = nextVolume === 0;

        volumeRef.current = nextVolume;
        mutedRef.current = nextMuted;
        setVolume(nextVolume);
        setIsMuted(nextMuted);

        const audio = audioRef.current;
        if (audio && audio.paused && nextVolume > 0) {
            audio.muted = false;
            audio.volume = nextVolume;
            await startPlayback({ muted: false, volume: nextVolume });
        }
    };

    const isSilent = isMuted || volume === 0;

    return (
        <div
            data-audio-control
            className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/55 bg-white/24 p-1.5 shadow-[0_18px_45px_rgba(0,100,150,0.22)] backdrop-blur-md backdrop-saturate-125 transition-all duration-300 hover:bg-white/32 focus-within:bg-white/32 dark:border-cyan-100/15 dark:bg-slate-950/24 dark:shadow-[0_18px_50px_rgba(0,0,0,0.34)] group"
        >
            <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

            <button
                type="button"
                onClick={handleToggleMute}
                className={cn(
                    "crystal-audio-button relative flex h-11 w-11 items-center justify-center rounded-full text-sky-900 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 dark:text-cyan-50",
                    needsGesture && "text-amber-800 dark:text-amber-200"
                )}
                aria-label={isSilent ? "Activar musica de fondo" : "Silenciar musica de fondo"}
                title={isSilent ? "Activar musica de fondo" : "Silenciar musica de fondo"}
            >
                {isSilent ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                <span
                    className={cn(
                        "absolute right-1.5 top-1.5 h-2 w-2 rounded-full border border-white/70",
                        needsGesture
                            ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                            : isSilent
                              ? "bg-slate-400"
                              : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]"
                    )}
                />
            </button>

            <div className="grid w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:w-32 group-hover:opacity-100 group-focus-within:w-32 group-focus-within:opacity-100">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="aero-volume-slider w-28"
                    aria-label="Volumen de musica de fondo"
                />
            </div>
        </div>
    );
}
