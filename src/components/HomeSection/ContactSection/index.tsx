"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionScreen from "~/components/SectionScreen";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaSpinner,
} from "react-icons/fa";
import AnimatedLabelInput from "~/components/AnimatedLabelInput";
import classnameJoiner from "~/utils/classname-joiner";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+63) 926-8379-144",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "gerometahud55@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Cagayan de Oro City, Philippines 9000",
    },
];

const ContactSection = () => {
    const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef?.current) {
            try {
                setIsSubmitting(true);
                await emailjs.sendForm(
                    `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
                    `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                    formRef?.current,
                    {
                        publicKey: `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`,
                    }
                );
                setIsSubmitting(false);

                formRef.current.reset();
            } catch (err) {}
        }
    };

    return (
        <SectionScreen customClassName="min-h-screen mt-10 mb-20">
            <div
                id="contact"
                className="px-4 flex flex-col-reverse md:flex-row gap-10"
            >
                <div className="w-full p-4 rounded-lg shadow-md bg-neutral-200 dark:bg-neutral-900">
                    <h1 className="text-3xl font-bold text-center md:text-left dark:text-primary-400 text-primary-500">
                        Lets Work Together
                    </h1>
                    <form className="w-full" ref={formRef} onSubmit={sendEmail}>
                        <AnimatedLabelInput label="Name" name="name" />
                        <AnimatedLabelInput
                            label="Email"
                            name="email"
                            type="email"
                        />
                        <div>
                            <label
                                htmlFor="message"
                                className={classnameJoiner("duration-500", {
                                    "text-[#544cff] dark:text-[#8082ff]":
                                        isTextAreaFocused,
                                })}
                            >
                                Message
                            </label>
                            <textarea
                                onFocus={() => setIsTextAreaFocused(true)}
                                onBlur={() => setIsTextAreaFocused(false)}
                                name="message"
                                className="border border-gray-900 dark:border-gray-100 bg-transparent p-4 rounded-md w-full h-56 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={classnameJoiner(
                                "mt-4 text-white duration-100 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                                {
                                    "opacity-25": isSubmitting,
                                }
                            )}
                        >
                            Send Message{" "}
                            {isSubmitting && (
                                <FaSpinner className="animate-spin" />
                            )}
                        </button>
                    </form>
                </div>
                <div className="w-full flex items-center">
                    <ul className="flex flex-col gap-10">
                        {info.map(({ title, icon, description }) => (
                            <li key={title} className="flex items-center gap-6">
                                <div className="w-14 h-14 md:w-16 lg:w-16 bg-neutral-200 dark:bg-neutral-900 text-primary-500 rounded-md flex items-center justify-center">
                                    <div className="text-3xl">{icon}</div>
                                </div>
                                <div>
                                    <p>{title}</p>
                                    <p>{description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionScreen>
    );
};

export default ContactSection;
