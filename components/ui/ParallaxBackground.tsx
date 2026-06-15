"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxBackground() {
    const { scrollY } = useScroll();
    
    // Shift background position slower than scroll rate (subtle parallax depth)
    const y = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <div className="fixed inset-0 -z-50 h-[130vh] w-full overflow-hidden pointer-events-none">
            <motion.div style={{ y }} className="relative h-[130vh] w-full">
                <Image
                    src="/background.png"
                    alt="Fondo Portafolio"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center dark:brightness-[0.45] dark:contrast-[1.1] transition-all duration-300"
                />
            </motion.div>
        </div>
    );
}
