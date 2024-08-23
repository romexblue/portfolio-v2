"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "~/constants/site-urls";
import ThemeSwitch from "~/components/ThemeSwitch";
import classnameJoiner from "~/utils/classname-joiner";
import { scrollToSection } from "~/utils/scroll-to-element";

const HeaderDesktop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={classnameJoiner(
                `hidden md:block fixed top-0 p-6 w-screen bg-neutral-100 dark:bg-neutral-800 z-50`,
                {
                    "shadow-lg duration-300 transition-shadow": isScrolled,
                }
            )}
        >
            <div className="max-w-screen-xl flex justify-between gap-3 mx-auto">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Gerome
                        <span className="dark:text-primary-400 text-primary-500">
                            .
                        </span>
                    </h1>
                </Link>
                <div className="flex items-center gap-8">
                    <div className="flex items-center text-2xl">
                        <ThemeSwitch />
                    </div>
                    <nav className="flex gap-6 md:gap-8">
                        {links.map(({ name, path }) => (
                            // <Link key={name} href={path}>
                            //     {name}
                            // </Link>
                            <button
                                key={name}
                                onClick={() => scrollToSection(path)}
                                type="button"
                            >
                                {name}
                            </button>
                        ))}
                    </nav>
                    <button
                        type="button"
                        onClick={() => scrollToSection("contact")}
                        className="text-white duration-100 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;
