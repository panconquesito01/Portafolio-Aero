import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    intensity?: "light" | "medium" | "strong";
    highlight?: boolean;
}

export function GlassPanel({
    children,
    className,
    intensity = "medium",
    highlight = true,
    ...props
}: GlassPanelProps) {
    const intensityMap = {
        light: "glass-intensity-light",
        medium: "glass-intensity-medium",
        strong: "glass-intensity-strong",
    };

    return (
        <div
            className={cn(
                "glass-panel",
                intensityMap[intensity],
                highlight && "glass-panel-highlight",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
