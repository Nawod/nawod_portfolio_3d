import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/shared/components/navBar/NavBar";
import dynamic from "next/dynamic";
import {
    anton,
    iceberge,
    iceland,
    nabla,
    oswald,
    roboto,
    rubik,
} from "./styles/fonts";
import PreLoader from "@/shared/components/loaders/PreLoader";
import { Providers } from "./store/provider";

const ViewCanvas = dynamic(
    () => import("@/shared/components/canvas/ViewCanvas"),
    { ssr: false }
);

export const metadata: Metadata = {
    title: "Nawod Madhuvantha",
    description:
        "Software engineer skilled in Angular, Next, React, and TypeScript. Combining art, design, and tech expertise to deliver innovative, user-focused solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${anton.variable} ${oswald.variable} ${rubik.variable} ${iceland.variable} ${nabla.variable} ${iceberge.variable} antialiased`}
            >
                <Providers>
                    <PreLoader />
                    <NavBar />
                    {children}
                    <ViewCanvas />
                </Providers>
            </body>
        </html>
    );
}
