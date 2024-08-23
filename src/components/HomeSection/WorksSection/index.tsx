import React from "react";
import SectionScreen from "~/components/SectionScreen";
import ProjectCard from "./ProjectCard";
import { projectsData } from "~/constants/projects";

const WorksSection = () => {
    return (
        <SectionScreen customClassName="min-h-screen mt-10 mb-10 md:mb-0">
            <div id="works" className="px-4">
                <div>
                    <h1 className="text-3xl font-bold text-center md:text-left dark:text-primary-400 text-primary-500">
                        Works
                    </h1>
                    <p className="text-center md:text-left">
                        Some of my side projects outside the 9-5 job.
                    </p>
                </div>
                <div className="mt-6 w-full flex justify-center md:justify-normal flex-wrap gap-10">
                    {projectsData?.map((data) => (
                        <ProjectCard {...data} key={data?.title} />
                    ))}
                </div>
            </div>
        </SectionScreen>
    );
};

export default WorksSection;
