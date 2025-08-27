"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { GlowingEffect } from "./glowing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace } from "@fortawesome/free-solid-svg-icons";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);

    // Scroll relatif ke container section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // scroll 0-1 relatif section
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const breakpoints = content.map((_, index) => index / cardLength);

        const closestIndex = breakpoints.reduce((acc, bp, idx) => {
            return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? idx : acc;
        }, 0);

        setActiveCard(closestIndex);
    });

    return (
        <motion.div ref={containerRef} className="relative flex justify-between gap-5 mt-12">
            <div className="max-w-2xl flex-1">
                {content.map((item, index) => (
                    <div key={index} className={`${index !== content.length - 1 ? "mb-52" : ""}`}>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                            className="text-xl font-bold text-slate-100"
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                            className="text-kg mt-3 max-w-sm text-slate-300"
                        >
                            {item.description}
                        </motion.p>
                    </div>
                ))}
            </div>

            <div className="sticky top-0 left-0">
                <div className="absolute inset-0 bg-primary/50 blur-[200px] -z-10"></div>
                <div
                    className={`mt-[48px] sticky top-52 hidden h-100 w-80 rounded-xl lg:block overflow-hidden list-none ${contentClassName}`}
                >
                    <div className="relative h-full rounded-xl border p-1 md:rounded-3xl md:p-2">
                        <GlowingEffect
                            blur={0}
                            borderWidth={3}
                            spread={80}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="bg-white/10 backdrop-blur-[2px] border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                <div className="w-fit rounded-lg border border-gray-600 p-2">
                                    <FontAwesomeIcon icon={faPeace} />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                        {content[activeCard].content ?? null}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
