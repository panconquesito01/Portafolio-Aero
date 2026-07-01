import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, type, ...props }, ref) => {
        const variants = {
            primary: "glossy-btn",
            secondary: "glossy-btn-secondary",
            outline: "glossy-btn-secondary bg-transparent",
            ghost: "border border-transparent bg-transparent text-foreground/75 hover:bg-white/25 hover:text-foreground dark:hover:bg-white/10",
        };

        const sizes = {
            sm: "h-9 px-3 text-xs rounded-md",
            md: "h-10 px-4 py-2 rounded-md",
            lg: "h-11 px-8 text-lg rounded-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        );

        if (asChild && React.isValidElement(props.children)) {
            const child = props.children as React.ReactElement<any>;
            return React.cloneElement(child, {
                className: cn(classes, child.props.className),
                ref: (child as any).ref || ref,
                ...props,
                children: child.props.children
            });
        }

        return (
            <button
                ref={ref}
                type={type ?? "button"}
                className={classes}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
