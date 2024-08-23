import React from "react";
import classnameJoiner from "~/utils/classname-joiner";

type Props = {
    children: React.ReactNode;
    customClassName?: string;
};

const SectionScreen = ({ children, customClassName }: Props) => {
    return (
        <section
            className={classnameJoiner(
                "flex justify-center items-center w-full",
                customClassName
            )}
        >
            <div className="w-full max-w-screen-xl">{children}</div>
        </section>
    );
};

export default SectionScreen;
