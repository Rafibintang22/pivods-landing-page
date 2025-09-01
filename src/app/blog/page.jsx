"use client";

import { Button, Pagination } from "@/components/global";
import { Footer } from "@/components/section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { blogData } from "@/mockupdata.js";
import { layoutStyles } from "../style";
import { FolderX } from "lucide-react";

export default function Blog() {
    const [currCategory, setCurrCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(""); // query aktif (dipakai filter)
    const [searchInput, setSearchInput] = useState(""); // query sementara (input aja)

    const optionCategories = [
        { label: "All", value: "all" },
        { label: "Events", value: "events" },
        { label: "Insights", value: "insights" },
        { label: "News", value: "news" },
    ];

    const router = useRouter();

    // Filter data by category & search
    const filteredData = blogData.filter((item) => {
        const matchCategory = currCategory === "all" ? true : item.category === currCategory;
        const matchSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Pagination setup
    const rowsPerPage = 7;
    const totalRows = filteredData.length;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    return (
        <main>
            {/* Hero */}
            <section className="h-[65vh] md:h-[55vh] w-full flex justify-center items-center">
                <Image
                    src="/Wave-line.png"
                    alt="background-wave"
                    fill
                    className="object-cover -z-10 opacity-20"
                    priority
                />

                <div className={`${layoutStyles.container} flex flex-col items-center`}>
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
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button
                            className="min-w-max px-4 rounded-lg bg-primary hover:bg-primary/80 text-white shadow-lg transition"
                            onClick={() => {
                                setSearchQuery(searchInput); // commit pencarian
                                setCurrentPage(1); // reset pagination
                            }}
                        >
                            Find now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="min-h-max bg-background">
                <div className={`${layoutStyles.container} py-24 flex flex-col items-center`}>
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
                                    onClick={() => {
                                        setCurrCategory(option.value);
                                        setCurrentPage(1); // reset ke page 1 pas ganti kategori
                                    }}
                                >
                                    {option.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="mb-24">
                {paginatedData.length > 0 ? (
                    <BentoGrid className={`${layoutStyles.container} bg-background mb-12`}>
                        {paginatedData.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={
                                    <div className="relative w-full h-50 md:h-full rounded-md">
                                        <Image
                                            src={item.header.src}
                                            alt={item.header.alt}
                                            fill
                                            className="object-cover opacity-60 hover:opacity-100 transition duration-300"
                                            priority
                                        />
                                    </div>
                                }
                                className={`cursor-pointer ${
                                    i === 3 || i === 6 ? "md:col-span-2" : ""
                                }`}
                                onClick={() => router.push(`/blog/${item.Id}`)}
                            />
                        ))}
                    </BentoGrid>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <FolderX />
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            No results found
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                            Try adjusting your search or filters to find what you are looking for.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                <Pagination
                    totalRows={totalRows}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </section>
            <Footer />
        </main>
    );
}
