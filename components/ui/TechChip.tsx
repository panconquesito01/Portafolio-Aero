"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface TechChipProps {
    name: string;
    icon?: React.ReactNode;
    className?: string;
}

export function TechChip({ name, icon, className }: TechChipProps) {
    return (
        <motion.span
            whileHover={{ scale: 1.05 }}
            className={cn("glass-chip cursor-default select-none", className)}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{name}</span>
        </motion.span>
    );
}
