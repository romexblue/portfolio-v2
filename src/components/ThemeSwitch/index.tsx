import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeSwitch = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setIsMounted(true), []);

    if (!isMounted) {
        return <BsFillSunFill className="cursor-wait" />;
    }

    const isDarkTheme = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
            aria-pressed={isDarkTheme}
            aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
            className="flex items-center justify-center"
        >
            {isDarkTheme ? (
                <BsFillSunFill />
            ) : (
                <BsFillMoonStarsFill />
            )}
        </button>
    );
};

export default ThemeSwitch;
