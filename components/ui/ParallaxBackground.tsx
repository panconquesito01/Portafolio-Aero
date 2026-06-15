import Image from "next/image";

const bubbles = [
    "bubble-1 left-[8%] h-12 w-12",
    "bubble-2 left-[18%] h-7 w-7",
    "bubble-3 left-[31%] h-16 w-16",
    "bubble-4 left-[47%] h-9 w-9",
    "bubble-5 left-[61%] h-14 w-14",
    "bubble-6 left-[74%] h-8 w-8",
    "bubble-7 left-[84%] h-20 w-20",
    "bubble-8 left-[93%] h-10 w-10",
];

export function ParallaxBackground() {
    return (
        <div className="fixed inset-0 -z-50 h-screen w-full overflow-hidden pointer-events-none aero-stage">
            <Image
                src="/background.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="aero-sky-wash" />
            <div className="aero-sun-glow" />
            <div className="aero-water-plane" />
            <div className="aero-water-lines" />
            <div className="aero-bubble-field" aria-hidden="true">
                {bubbles.map((className, index) => (
                    <span key={index} className={`aero-bubble ambient-bubble ${className}`} />
                ))}
            </div>
        </div>
    );
}
