"use client";

import { Button, Nav, Pagination, WhatsAppButton } from "@/components/global";
import { Footer } from "@/components/section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Blog() {
    const [currCategory, setCurrCategory] = useState("all");
    const optionCategories = [
        { label: "All", value: "all" },
        { label: "Events", value: "events" },
        { label: "Insights", value: "insights" },
        { label: "News", value: "news" },
    ];
    const router = useRouter();

    const items = [
        {
            Id: 1,
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 2,
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 3,
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 4,
            title: "The Power of Communication",
            description: "Understand the impact of effective communication in our lives.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 5,
            title: "The Pursuit of Knowledge",
            description: "Join the quest for understanding and enlightenment.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 6,
            title: "The Joy of Creation",
            description: "Experience the thrill of bringing ideas to life.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        },
        {
            Id: 7,
            title: "The Spirit of Adventure",
            description: "Embark on exciting journeys and thrilling discoveries.",
            header: (
                <div className="w-full h-50 md:h-full bg-white/20 backdrop-blur-lg rounded-md"></div>
            ),
            // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <main>
            <section className="h-[65vh] md:h-[55vh] w-full flex justify-center items-center">
                <Image
                    src="/Wave-line.png"
                    alt="background-wave"
                    fill
                    className="object-cover -z-10 opacity-20"
                    priority
                />

                <div className="container flex flex-col items-center">
                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                        Blog
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center text-gray-900 dark:text-gray-100">
                        Discover Stories That Shape Technology
                    </h1>
                    <p className="font-semibold text-center mb-14">
                        Stay informed with the latest technology news, insightful perspectives, and
                        events shaping the future of innovation.
                    </p>
                    <div className="relative w-full lg:w-[50vw] flex gap-3">
                        <Input
                            id="search"
                            placeholder="What are you looking for?"
                            type="text"
                            isSearch={true}
                        />
                        <Button className="min-w-max px-4 rounded-lg bg-primary hover:bg-primary/80 text-white shadow-lg transition">
                            Find now
                        </Button>
                    </div>
                </div>
            </section>
            <section className="min-h-max bg-background">
                <div className="container py-24 flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
                        Categories
                    </h2>
                    <div className="option-categories flex gap-3">
                        {optionCategories.map((option, i) => {
                            const isActive = currCategory === option.value;
                            return (
                                <div
                                    key={i}
                                    className={`cursor-pointer border w-full py-2 px-4 text-center rounded-md shadow-sm transition-colors duration-300
                                        ${
                                            isActive
                                                ? "text-black dark:text-white"
                                                : "text-gray-800 dark:text-gray-500 hover:text-black dark:hover:text-white"
                                        }`}
                                    onClick={() => setCurrCategory(option.value)}
                                >
                                    {option.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="mb-24">
                <BentoGrid className={"container bg-background mb-12"}>
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={`cursor-pointer ${
                                i === 3 || i === 6 ? "md:col-span-2" : ""
                            }`}
                            onClick={() => router.push(`/blog/${item.Id}`)}
                        />
                    ))}
                </BentoGrid>
                <Pagination totalRows={items.length} />
            </section>
            <Footer />
        </main>
    );
}
