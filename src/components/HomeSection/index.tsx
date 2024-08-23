import React from "react";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const index = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WorksSection />
            <SkillsSection />
            <ContactSection />
        </>
    );
};

export default index;
