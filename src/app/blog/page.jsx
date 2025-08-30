"use client";

import { Nav, WhatsAppButton } from "@/components/global";
import { Footer } from "@/components/section";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <Nav />
            <main>
                <section className="h-[35vh] lg:h-[50vh] w-full flex justify-center items-center">
                    <Image
                        src="/Wave-line.png"
                        alt="background-wave"
                        fill
                        className="object-cover -z-10 opacity-20"
                        priority
                    />

                    <div className="container flex flex-col items-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            Blog
                        </h1>
                        <p className="font-semibold text-center"></p>
                    </div>
                </section>

                <Footer />
            </main>
            <WhatsAppButton />
        </>
    );
}
