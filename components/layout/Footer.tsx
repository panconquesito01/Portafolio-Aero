import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="relative py-8 border-t border-white/10 dark:border-white/5">
            {/* Subtle aero continuation */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-aero-water/5 dark:to-aero-water/5" />

            <Container>
                <p className="text-center text-xs text-muted-foreground/60">
                    © {new Date().getFullYear()} David Rivera. Todos los derechos
                    reservados.
                </p>
            </Container>
        </footer>
    );
}
