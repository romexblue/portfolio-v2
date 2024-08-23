import React from "react";
import Image from "next/image";
import SectionScreen from "~/components/SectionScreen";
import profileImg from "~/assets/profile-img.jpg";

const AboutSection = () => {
    return (
        <SectionScreen customClassName="min-h-screen mt-10 mb-10 md:mb-0">
            <div id="about" className="px-4">
                <div>
                    <h1 className="text-3xl font-bold text-center md:text-left dark:text-primary-400 text-primary-500">
                        About Me
                    </h1>
                    <div className="mt-6 flex flex-col md:flex-row gap-10">
                        <div className="w-full flex flex-col items-center md:items-start">
                            <div className="relative overflow-hidden rounded-lg shadow-lg flex items-center justify-center w-a bg-gradient-to-br from-purple-600 to-blue-500 h-[15.875rem] w-[15.875rem]">
                                <Image
                                    height={250}
                                    width={250}
                                    src={profileImg}
                                    className="object-cover rounded-lg"
                                    alt="Gerome's Picture"
                                />
                            </div>
                            <p className="mt-6 text-center md:text-justify">
                                +63 926-8379-144
                            </p>
                            <p className="text-center md:text-justify">
                                gerometahud55@gmail.com
                            </p>
                            <p className="text-center md:text-justify">
                                Xavier University - Ateneo de Cagayan
                            </p>
                            <p className="text-center md:text-justify break-normal">
                                Bachelor of Science in Information Technology
                                <i> (Cum Laude)</i>
                            </p>
                        </div>
                        <div className="w-full space-y-4">
                            <p className="text-center md:text-justifytext-center md:text-justify">
                                Hi, I&apos;m Gerome, a passionate Full Stack
                                Developer with almost 2 years of experience in
                                building dynamic, responsive web applications. I
                                specialize in <strong>JavaScript</strong>{" "}
                                frameworks like <strong>React</strong> and{" "}
                                <strong>Node</strong>. What excites me most
                                about development is the continuous learning and
                                problem-solving aspect. I believe in writing
                                code that not only works but is also easy to
                                read and maintain.
                            </p>
                            <p className="text-center md:text-justify">
                                When I&apos;m not coding, I enjoy exploring the
                                latest tech trends and playing video games.
                                Currently, I&apos;m diving deeper into
                                react-native and expanding my knowledge of
                                cross-platform development. I&apos;m always
                                looking for new challenges and opportunities to
                                grow as a developer.
                            </p>
                            <p className="text-center md:text-justify">
                                Let&apos;s connect if you&apos;re looking for
                                someone who&apos;s as passionate about
                                technology as they are about delivering quality
                                results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionScreen>
    );
};

export default AboutSection;
