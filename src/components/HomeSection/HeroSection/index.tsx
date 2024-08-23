import React from "react";
import SectionScreen from "~/components/SectionScreen";
import styles from "./HeroSection.module.css";
import { LuDownload } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import GradientLink from "~/components/GradientLink";
import ScrollHintButton from "./ScrollHintButton";

const HeroSection = () => {
    return (
        <SectionScreen customClassName="h-dvh mt-10">
            <div
                id="home"
                className="flex flex-col md:flex-row-reverse items-center justify-between md:pt-8 gap-4 px-4 md:px-24"
            >
                <div className="w-full md:w-2/5">
                    <div className={styles.homeImg} />
                </div>
                <div className="w-full md:w-3/5 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl">
                        Hello I'm <br />
                        <span className="dark:text-primary-400 text-primary-500">
                            Gerome Tahud
                        </span>
                    </h1>
                    <p className="text-opacity-80 mt-4">
                        I&apos;m a Full Stack Developer from the Philippines,
                        delivering innovative solutions and exceptional results.
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-fit min-w-fit">
                            <GradientLink
                                targetUrl={"/Resume_Gerome_Full_Stack_Dev.pdf"}
                                isDownload
                            >
                                <span className="px-2 flex gap-2">
                                    My Resume <LuDownload className="text-xl" />
                                </span>
                            </GradientLink>
                        </div>
                        <div className="w-full md:w-fit space-x-4 flex justify-center">
                            <GradientLink targetUrl="https://www.linkedin.com/in/gerome-mico-tahud-335763279/">
                                <FaLinkedinIn className="text-xl" />
                            </GradientLink>
                            <GradientLink targetUrl="https://www.facebook.com/gerome.tahud">
                                <FaFacebookF className="text-xl" />
                            </GradientLink>
                            <GradientLink targetUrl="https://github.com/romexblue">
                                <FaGithub className="text-xl" />
                            </GradientLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 md:px-24 hidden md:flex gap-3">
                <ScrollHintButton />
                <label className="pt-2">scroll down</label>
            </div>
        </SectionScreen>
    );
};

export default HeroSection;
