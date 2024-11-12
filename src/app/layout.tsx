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
import Script from "next/script";

const ViewCanvas = dynamic(
    () => import("@/shared/components/canvas/ViewCanvas"),
    { ssr: false }
);

export const metadata: Metadata = {
    metadataBase: new URL("https://www.nawodmadhuwantha.com/"),
    title: {
        default: "Nawod Madhuwantha",
        template: "%s | Nawod Madhuwantha",
    },
    description:
        "Software engineer skilled in Angular, Next.js, React, and TypeScript. Combining technical expertise and design to deliver innovative, user-focused web solutions.",
    openGraph: {
        title: "Nawod Madhuwantha",
        description:
            "Software engineer skilled in Angular, Next.js, React, and TypeScript. Combining technical expertise and design to deliver innovative, user-focused web solutions.",
        type: "website",
        locale: "en_US",
        url: "https://www.nawodmadhuwantha.com/",
        siteName: "NawodMadhuvantha",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="gtm"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P5GBJ2TJ');`,
                    }}
                ></Script>
            </head>
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
