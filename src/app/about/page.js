"use client";
import Nav from "@/components/Nav";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Nav />
            <main>
                <section className="min-h-[30vh]"></section>
                <section className="relative w-full h-[150px] bg-white">
                    <Image
                        src="/wave-bottom.png"
                        alt="wave-img"
                        fill
                        className="object-cover"
                        priority
                    />
                </section>
                <section className="bg-white h-screen"></section>
            </main>
            <WhatsAppButton />
        </>
    );
}
