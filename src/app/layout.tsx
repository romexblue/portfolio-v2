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
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={jetbrainsMono.variable}>
                <ThemeProviderContext>
                    <Header />
                    {children}
                </ThemeProviderContext>
            </body>
        </html>
    );
}
