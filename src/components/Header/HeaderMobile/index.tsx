"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";
import { BsColumnsGap } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { links } from "~/constants/site-urls";
import ThemeSwitch from "../../ThemeSwitch";
import { scrollToSection } from "~/utils/scroll-to-element";

const HeaderMobile = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    const ref = useRef(null);

    useOnClickOutside(ref, () => setIsShowMenu(false));

    return (
        <div>
            <AnimatePresence>
                {isShowMenu && (
                    <motion.div
                        ref={ref}
                        className="fixed bottom-0 w-full z-20 dark:bg-neutral-800 bg-neutral-100"
                        style={{
                            boxShadow: "0 -10px 15px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <nav className="grid grid-cols-3 gap-3 px-4 pt-4">
                            {links.map(({ name, path, icon }) => (
                                // <Link
                                //     key={name}
                                //     href={path}
                                //     className="flex flex-col justify-center items-center"
                                // >
                                //     <span
                                //         className="text-2xl"
                                //         aria-hidden="true"
                                //     >
                                //         {icon}
                                //     </span>
                                //     {name}
                                // </Link>
                                <button
                                    key={name}
                                    onClick={() => scrollToSection(path)}
                                    type="button"
                                    className="flex flex-col justify-center items-center"
                                >
                                    <span
                                        className="text-2xl"
                                        aria-hidden="true"
                                    >
                                        {icon}
                                    </span>
                                    {name}
                                </button>
                            ))}
                        </nav>
                        <div className="pt-5 flex justify-between px-5 pb-4">
                            <div className="flex justify-center items-center text-2xl">
                                <ThemeSwitch />
                            </div>
                            <button onClick={() => setIsShowMenu(false)}>
                                <IoMdClose className="text-4xl" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className="flex justify-between md:hidden fixed bottom-0 w-full py-4 px-6 dark:bg-neutral-800 bg-neutral-100 z-10"
                style={{
                    boxShadow: "0 -10px 15px -5px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Gerome
                        <span className="dark:text-primary-400 text-primary-500">
                            .
                        </span>
                    </h1>
                </Link>

                <button onClick={() => setIsShowMenu(true)}>
                    <BsColumnsGap className="text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default HeaderMobile;
