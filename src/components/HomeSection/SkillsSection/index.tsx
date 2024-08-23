import Image from "next/image";
import React from "react";
import SectionScreen from "~/components/SectionScreen";
import graphqlLogo from "~/assets/graphql.png";
import { featuredTechData } from "~/constants/techs";
import classnameJoiner from "~/utils/classname-joiner";

const SkillsSection = () => {
    return (
        <SectionScreen customClassName="min-h-screen mt-10 mb-10 md:mb-0">
            <div id="skills" className="px-4">
                <h1 className="text-3xl font-bold text-center md:text-left dark:text-primary-400 text-primary-500">
                    Skills
                </h1>
                <div className="mt-6 flex flex-col">
                    <h2 className="text-xl font-bold">My primary tech stack</h2>
                    <div className="mt-4 flex flex-col gap-4">
                        {featuredTechData.map(
                            ({
                                title,
                                description,
                                imgSrc,
                                skillPercentage,
                                progressColor,
                            }) => (
                                <div
                                    key={title}
                                    className="border-2 shadow-md p-2 rounded-lg flex gap-3 w-full bg-neutral-200 dark:bg-neutral-900"
                                >
                                    <div className="relative w-fit">
                                        <Image
                                            src={imgSrc}
                                            height={100}
                                            className={classnameJoiner(
                                                "hover:rotate-180 duration-700",
                                                {
                                                    "dark:invert":
                                                        title === "NextJS",
                                                }
                                            )}
                                            width={100}
                                            alt={title}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between w-full">
                                        <h3 className="font-bold">{title}</h3>
                                        <p>{description}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className="h-3 rounded-full text-center text-white"
                                                style={{
                                                    width: `${skillPercentage}%`,
                                                    backgroundColor:
                                                        progressColor,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </SectionScreen>
    );
};

export default SkillsSection;
