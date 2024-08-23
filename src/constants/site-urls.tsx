import { FaHome } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";

export const links = [
    { name: "home", path: "home", icon: <FaHome /> },
    { name: "about", path: "about", icon: <IoPersonSharp /> },
    { name: "works", path: "works", icon: <MdWork /> },
    { name: "skills", path: "skills", icon: <FaListAlt /> },
    { name: "contact", path: "contact", icon: <MdEmail /> },
];
