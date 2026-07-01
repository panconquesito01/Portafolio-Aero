"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlossyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}

export function GlossyButton({
    variant = "primary",
    size = "md",
    href,
    target,
    rel,
    children,
    className,
    onClick,
    disabled,
    type,
    ...props
}: GlossyButtonProps) {
    const sizeMap = {
        sm: "h-9 px-4 text-xs rounded-lg gap-1.5",
        md: "h-11 px-6 text-sm rounded-xl gap-2",
        lg: "h-12 px-8 text-base rounded-xl gap-2.5",
    };

    const variantMap = {
        primary: "glossy-btn",
        secondary: "glossy-btn-secondary",
    };

    const classes = cn(
        variantMap[variant], 
        sizeMap[size], 
        disabled && "opacity-50 pointer-events-none",
        className
    );

    if (href) {
        return (
            <a 
                href={disabled ? undefined : href}
                className={classes} 
                target={target} 
                rel={rel} 
                onClick={onClick as any}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button 
            className={classes} 
            onClick={onClick} 
            disabled={disabled}
            type={type ?? "button"}
            {...props}
        >
            {children}
        </button>
    );
}

