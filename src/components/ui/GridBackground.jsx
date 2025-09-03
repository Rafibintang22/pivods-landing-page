"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export function GridBackground({ children, className, ...props }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMouse({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="absolute h-screen w-full" onMouseMove={handleMouseMove} {...props}>
            {/* Grid dengan warna mengikuti cursor */}
            <div
                className={cn("absolute inset-0 -z-10", "[background-size:40px_40px]")}
                style={{
                    backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px),
                                    linear-gradient(to bottom, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)`,
                    WebkitMaskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                    maskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                }}
            />

            {/* Layer asli grid abu-abu supaya ada base */}
            {/* <div
                className={cn(
                    "absolute inset-0 -z-20",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            /> */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] dark:bg-black"></div>

            {/* Background Glow */}
            {/* Blur atas */}
            <div
                className="
                absolute top-25 md:top-0
                left-1/2 -translate-x-1/2   /* center di mobile */
                w-[70vw] max-w-[800px] aspect-square 
                rounded-full bg-primary/30 
                blur-[20vw] sm:blur-[150px] 
                -z-10
                sm:left-0 sm:translate-x-0  /* reset di layar >= sm */
            "
            ></div>

            {/* Blur bawah */}
            <div
                className="
                absolute bottom-60 md:bottom-0 
                left-1/2 -translate-x-1/2   /* center di mobile */
                w-[70vw] max-w-[600px] aspect-square 
                rounded-full bg-primary/20 
                blur-[15vw] sm:blur-[120px] 
                -z-10
                sm:right-0 sm:left-auto sm:translate-x-0  /* reset di layar >= sm */
            "
            ></div>

            {/* Content */}
            <div className="h-full w-full z-20">{children}</div>
        </div>
    );
}
