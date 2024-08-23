"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import GradientLink from "~/components/GradientLink";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import GradientButton from "~/components/GradientButton";
import { scrollToSection } from "~/utils/scroll-to-element";

type Props = {
    title: string;
    imgSrc: string | StaticImport;
    description: string;
    techStack: string[];
    gotoUrl?: string | null;
    githubUrl?: string | null;
};

const ProjectCard = ({
    title,
    imgSrc,
    description,
    techStack,
    gotoUrl,
    githubUrl,
}: Props) => {
    return (
        <div className="p-2 w-fit border rounded-lg max-w-80 bg-neutral-200 dark:bg-neutral-900 shadow-md">
            <div className="">
                <div className="relative h-60 w-full overflow-hidden rounded-md">
                    <Image
                        fill
                        src={imgSrc}
                        alt={title}
                        className="w-full h-full hover:scale-110 hover:rotate-12 duration-300"
                    />
                </div>
                <div className="mt-4 px-2">
                    <h2 className="text-lg font-bold text-center">{title}</h2>
                    <p className="text-sm mt-2">{description}</p>
                    <div className="mt-2">
                        <span className="dark:text-primary-400 text-primary-500">
                            {techStack?.join(", ")}
                        </span>
                    </div>
                    <hr className="my-3 border-gray-900 dark:border-gray-200" />
                    <div className="flex gap-2">
                        {gotoUrl && (
                            <GradientLink targetUrl={gotoUrl}>
                                <MdArrowOutward />
                            </GradientLink>
                        )}

                        {githubUrl && (
                            <GradientLink targetUrl={githubUrl}>
                                <FaGithub />
                            </GradientLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
