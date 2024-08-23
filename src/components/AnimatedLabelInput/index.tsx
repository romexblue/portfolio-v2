import React, { useState } from "react";
import styles from "./AnimatedLabelInput.module.css";
import classnameJoiner from "~/utils/classname-joiner";

interface AnimatedLabelInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const AnimatedLabelInput = ({
    label,
    type = "text",
    ...inputProps
}: AnimatedLabelInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`${styles.formControl} peer`}>
            <input
                type={type}
                required
                className="text-lg pt-4 bg-transparent block w-full border-b border-gray-800 focus:border-[#544cff] dark:border-b-2 dark:border-neutral-100 dark:focus:border-[#8082ff] focus:outline-none"
                {...inputProps}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <label>
                {label.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        className={classnameJoiner("", {
                            "text-[#544cff] dark:text-[#8082ff]": isFocused,
                        })}
                    >
                        {char}
                    </span>
                ))}
            </label>
        </div>
    );
};

export default AnimatedLabelInput;
