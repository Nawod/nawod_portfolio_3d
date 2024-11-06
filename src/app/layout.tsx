import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/shared/components/navBar/NavBar";
import dynamic from "next/dynamic";
import { anton, iceland, nabla, oswald, roboto, rubik } from "./styles/fonts";

const ViewCanvas = dynamic(()=> import('@/shared/components/canvas/ViewCanvas'),{ssr:false})

export const metadata: Metadata = {
  title: "Nawod Madhuvantha",
  description: "Software engineer skilled in Angular, Next, React, and TypeScript. Combining art, design, and tech expertise to deliver innovative, user-focused solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${anton.variable} ${oswald.variable} ${rubik.variable} ${iceland.variable} ${nabla.variable} antialiased`}
      >
        <NavBar />
        {children}
        <ViewCanvas />
      </body>
    </html>
  );
}
