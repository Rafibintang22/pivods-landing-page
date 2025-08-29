"use client";
import { Button } from "@/components/button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Spotlight } from "@/components/ui/Spotlight";
import ScrollDownIcon from "../ui/ScrollDownIcon";

export default function Hero() {
    return (
        <section id="Hero" className="relative min-h-screen text-center">
            <Spotlight />
            <GridBackground>
                <div className="relative flex flex-col items-center justify-center w-full top-48 md:top-64">
                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                        🚀 Empowering Innovation
                    </span>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                        We Help <span className="text-primary">Thrive</span>{" "}
                        <br className="hidden md:block" />
                        Through Digital Transformation
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8 text-center">
                        Ready to thrive in digital transformation? Let’s turn your vision into
                        impactful digital experiences.
                    </p>

                    <Button
                        onClick={() => {
                            document.getElementById("FreeConsultation")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/80 text-white shadow-lg transition"
                    >
                        Contact Us
                    </Button>
                </div>

                <div></div>

                <ScrollDownIcon />
            </GridBackground>
        </section>
    );
}
