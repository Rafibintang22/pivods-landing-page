"use client";
import { cn } from "@/lib/utils";
import { Nav, WhatsAppButton } from "@/components/global";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Nav />
            <main>
                <section className="min-h-[35vh] lg:min-h-[50vh] w-full flex justify-center items-center">
                    <Image
                        src="/Wave-line.png"
                        alt="background-wave"
                        fill
                        className="object-cover -z-10 opacity-20"
                        priority
                    />
                    {/* <div
                        className={cn(
                            "absolute inset-0 -z-20",
                            "[background-size:40px_40px] opacity-50"
                        )}
                        style={{
                            backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px),
                          linear-gradient(to bottom, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)`,
                        }}
                    /> */}

                    <div className="flex flex-col items-center px-3">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            About
                        </h1>
                        <p className="font-semibold text-center">
                            Let’s deepen our introduction — would you like to start?
                        </p>
                    </div>
                </section>
                <section className="bg-zinc-900 h-screen"></section>
            </main>
            <WhatsAppButton />
        </>
    );
}
