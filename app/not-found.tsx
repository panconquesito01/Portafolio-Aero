"use client";

import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
            <Container className="max-w-md">
                <GlassPanel className="p-8 text-center" intensity="strong">
                    <h1 className="text-6xl font-extrabold font-heading text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
                        404
                    </h1>
                    <h2 className="text-xl font-bold font-heading text-foreground mb-3">
                        Página No Encontrada
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                    <GlossyButton href="/" variant="primary" size="md" className="w-full">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al Inicio
                    </GlossyButton>
                </GlassPanel>
            </Container>
        </div>
    );
}
