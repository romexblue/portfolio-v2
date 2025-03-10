import porfolioImg from "~/assets/Portfolio.png";
import xuLibImg from "~/assets/XU-Lib.png";
import lsuImg from "~/assets/LSU.png";
import gMovieHub from "~/assets/G-Movie-Hub.png"

export const projectsData = [
    {
        title: "My Portfolio Website",
        imgSrc: porfolioImg,
        description:
            "An ongoing and possibly never ending project that showcases my journey in web development.",
        techStack: ["NextJS", "TailwindCSS", "Vercel"],
        gotoUrl: "/",
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
    {
        title: "G Movie Hub",
        imgSrc: gMovieHub,
        description:
            "Explore and watch movies and TV shows with detailed information, ratings, and more, powered by TMDB",
        techStack: ["NextJS", "TailwindCSS", "Vercel" ,"TMDB"],
        gotoUrl: "https://g-movie-hub.vercel.app/",
        githubUrl: "https://github.com/romexblue/gmt-movie-hub",
    },
];
