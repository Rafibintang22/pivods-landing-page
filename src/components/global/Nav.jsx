"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from ".";
import { layoutStyles } from "@/app/style";

function Nav({ className }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLang, setActiveLang] = useState("EN");
    const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menu = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portofolio", href: "/portofolio" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 z-50 flex justify-between items-center ${
                layoutStyles.container
            } py-6 transition-colors duration-300
            ${
                isScrolled
                    ? "bg-white text-gray-900 dark:bg-black/50 dark:text-gray-100 dark:backdrop-blur-md shadow"
                    : "bg-transparent text-gray-900 dark:text-gray-100"
            } ${className}`}
        >
            <Link href="/" passHref>
                <Image
                    className="cursor-pointer"
                    src="/Secondary_Logo.png"
                    alt="Pivods Logo"
                    width={100}
                    height={30}
                    priority
                />
            </Link>

            <div className="hidden md:flex space-x-8 uppercase">
                {menu.map((item, i) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                        <Link key={i} href={item.href} className="relative group cursor-pointer">
                            <div
                                className={`transition-colors duration-300 font-medium ${
                                    isActive
                                        ? "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"
                                        : "text-gray-800 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white"
                                }`}
                            >
                                {item.name}
                            </div>
                            <span
                                className="
                            absolute left-0 -bottom-1 h-[1px] w-full
                            bg-black dark:bg-white
                            scale-x-0 group-hover:scale-x-100
                            origin-right group-hover:origin-left
                            transition-transform duration-300
                            "
                            />
                        </Link>
                    );
                })}
            </div>

            {/* Dark/Light + Language */}
            <div className="flex items-center space-x-3">
                <a
                    href="https://wa.me/6281382189198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                        "hidden md:block px-3 py-3 text-xs font-medium bg-primary/20 rounded-xl hover:bg-primary/80 text-primary hover:text-white shadow-lg transition flex items-center gap-2"
                    }
                >
                    Free Consultation Here
                </a>

                {/* <Button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="w-[2rem] h-[2rem] flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <FontAwesomeIcon
                        icon={faSun}
                        className="absolute h-full w-full rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
                    />
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="absolute h-full w-full rotate-90 scale-0 dark:-rotate-0 dark:scale-100"
                    />
                </Button> */}

                {/* Lang Switch */}
                {/* <div className="hidden md:flex items-center space-x-2">
                    <Button
                        onClick={() => setActiveLang("EN")}
                        className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full text-xs transition-colors
                        ${
                            activeLang === "EN"
                                ? "border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                : "opacity-70 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        EN
                    </Button>

                    <div className="w-px h-5 bg-gray-400 dark:bg-gray-600" />

                    <Button
                        onClick={() => setActiveLang("ID")}
                        className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full text-xs transition-colors
                        ${
                            activeLang === "ID"
                                ? "border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                : "opacity-70 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        ID
                    </Button>
                </div> */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-sm focus:outline-none"
                >
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-black/90 backdrop-blur-md flex flex-col items-center py-6 space-y-6 md:hidden">
                    {menu.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="uppercase text-gray-900 dark:text-gray-100 text-sm"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Lang Switch (Mobile) */}
                    <div className="flex items-center space-x-2">
                        <a
                            href="https://wa.me/6281382189198"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                                "px-6 py-3 text-xs font-medium bg-primary/20 rounded-xl hover:bg-primary/80 text-primary hover:text-white shadow-lg transition flex items-center gap-2"
                            }
                        >
                            Free Consultation Here
                        </a>
                        {/* <Button
                            onClick={() => setActiveLang("EN")}
                            className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full text-xs transition-colors
                            ${
                                activeLang === "EN"
                                    ? "border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    : "opacity-70 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            EN
                        </Button>

                        <div className="w-px h-5 bg-gray-400 dark:bg-gray-600" />

                        <Button
                            onClick={() => setActiveLang("ID")}
                            className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full text-xs transition-colors
                            ${
                                activeLang === "ID"
                                    ? "border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    : "opacity-70 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            ID
                        </Button> */}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;
