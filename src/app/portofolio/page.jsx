"use client";
import { Footer } from "@/components/section";
import Image from "next/image";
import { layoutStyles } from "../style";
import { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import portofolioData from "@/mockupdata.js/portofolioData";
import { Pagination } from "@/components/global";

export default function Portofolio() {
    const [currCategory, setCurrCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const category = [
        { label: "All", value: "all" },
        { label: "Company Profile", value: "company-profile" },
        { label: "Information System", value: "information-system" },
        { label: "Mobile Application", value: "mobile-app" },
        { label: "IoT Development", value: "iot-dev" },
    ];

    // Filter data by category
    const filteredData = portofolioData.filter((item) => {
        const matchCategory = currCategory === "all" ? true : item.category.value === currCategory;

        return matchCategory;
    });

    // Pagination setup
    const rowsPerPage = 6;
    const totalRows = filteredData.length;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    return (
        <main>
            <section className="h-[35vh] lg:h-[50vh] w-full flex justify-center items-center">
                <Image
                    src="/Wave-line.png"
                    alt="background-wave"
                    fill
                    className="object-cover -z-10 opacity-20"
                    priority
                />

                <div className={`${layoutStyles.container} flex flex-col items-center`}>
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100">
                        Portofolio
                    </h1>
                    <p className="font-semibold text-center">
                        We are grateful for the opportunity to share the best of what we have
                        created.
                    </p>
                </div>
            </section>

            <section className="bg-background pt-24">
                <div className={`${layoutStyles.container} head-category`}>
                    <div className="category flex w-full justify-center flex-col md:flex-row md:flex-wrap">
                        {category.map((item, i) => {
                            const isActive = currCategory === item.value;
                            return (
                                <div
                                    key={i}
                                    className={`cursor-pointer mx-3 text-sm font-medium border-b md:border-none pt-3 transition duration-300 ${
                                        isActive
                                            ? "text-black dark:text-white"
                                            : "text-gray-800 dark:text-gray-500 hover:text-black dark:hover:text-white border-gray-700 hover:border-white"
                                    }`}
                                    onClick={() => setCurrCategory(item.value)}
                                >
                                    {item.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="our-portofolio" className="bg-background mb-24">
                <BentoGrid
                    className={`${layoutStyles.container} md:grid-cols-2 bg-background pt-24 md:auto-rows-[34rem]`}
                >
                    {paginatedData.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={
                                <div className="relative w-full h-72 md:h-[32rem] rounded-md overflow-hidden">
                                    <Image
                                        src={item.header.src}
                                        alt={item.header.alt}
                                        fill
                                        className="object-cover opacity-60 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2"
                                        priority
                                    />
                                </div>
                            }
                            icon={
                                <>
                                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                                        {item.category.label}
                                    </span>
                                    <div className="my-5"></div>
                                </>
                            }
                            button={true}
                            className={`cursor-pointer`}
                            onClick={() => router.push(`/blog/${item.Id}`)}
                        />
                    ))}
                </BentoGrid>
                <Pagination
                    totalRows={totalRows}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        document
                            .getElementById("our-portofolio")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            </section>
            <Footer />
        </main>
    );
}
