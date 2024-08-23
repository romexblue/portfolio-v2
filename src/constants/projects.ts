import porfolioImg from "~/assets/Portfolio.png";
import xuLibImg from "~/assets/XU-Lib.png";
import lsuImg from "~/assets/LSU.png";

export const projectsData = [
    {
        title: "My Portfolio Website",
        imgSrc: porfolioImg,
        description:
            "An ongoing and possibly never ending project that showcases my journey in web development.",
        techStack: ["NextJS", "TailwindCSS", "Vercel"],
        gotoUrl: "home",
        githubUrl: "https://github.com/romexblue/portfolio-v2",
    },
    {
        title: "XU Lib Xentry",
        imgSrc: xuLibImg,
        description:
            "A entry/exit and reservation system for Xavier University Library.",
        techStack: ["React", "Express", "Node", "MySQL"],
        gotoUrl: "https://youtu.be/sKAFoCLSBAk",
        githubUrl: "https://github.com/romexblue/library-app",
    },
    {
        title: "Form Request and Archiving",
        imgSrc: lsuImg,
        description:
            "Digitalization of form submissions and management system. Also includes documents archiving",
        techStack: ["NextJS", "TailwindCSS", "AWS S3", "AWS MYSQL", "Netlify"],
        gotoUrl: "https://lsu-web.netlify.app/admin/login",
        githubUrl: null,
    },
];
