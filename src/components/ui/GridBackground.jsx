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
            {/* <div
                className={cn("absolute inset-0 -z-10", "[background-size:40px_40px]")}
                style={{
                    backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px),
                                    linear-gradient(to bottom, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)`,
                    WebkitMaskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                    maskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                }}
            /> */}

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
            <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[200px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[180px] -z-10"></div>

            {/* Content */}
            <div className="h-full w-full z-20">{children}</div>
        </div>
    );
}
