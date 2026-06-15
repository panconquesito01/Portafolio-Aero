import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundAudioControl } from "@/components/ui/BackgroundAudioControl";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "David Steven Rivera Alfonso — Full Stack Developer",
    description:
        "Portafolio profesional de David Steven Rivera Alfonso: desarrollo Full Stack, ERP, .NET, SQL Server, Next.js, automatización y sistemas empresariales.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Parallax background image */}
                    <ParallaxBackground />
                    <Navbar />
                    <BackgroundAudioControl />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
