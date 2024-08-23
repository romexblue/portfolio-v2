import React from "react";

type Props = {
    children: React.ReactNode;
    handleClick: () => void;
};

const GradientButton = ({ children, handleClick }: Props) => {
    return (
        <button
            onClick={handleClick}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-100 dark:bg-neutral-800 rounded-md group-hover:bg-opacity-0 flex gap-2 items-center">
                {children}
            </span>
        </button>
    );
};

export default GradientButton;
