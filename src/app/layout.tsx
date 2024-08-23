import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProviderContext } from "~/contexts/ThemeProviderContext";
import Header from "~/components/Header";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
    title: "Gerome Tahud - Full Stack Developer",
    description:
        "Portfolio of Gerome Tahud, a Full Stack Developer specializing in React, Node.js, Next.js, and GraphQL.",
    keywords: "Full Stack Developer, React, Node.js, Next.js, Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={jetbrainsMono.variable}>
                <ThemeProviderContext>
                    <Header />
                    {children}
                </ThemeProviderContext>
            </body>
        </html>
    );
}
