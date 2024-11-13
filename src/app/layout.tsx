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
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollToTopOnRefresh from "@/shared/models/ScrollToTop";

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
        "Creative software engineer specializing in Next.js, React, Angular, and TypeScript. Delivering innovative, user-focused web solutions with 3D visuals, parallax effects, and responsive design for memorable digital experiences.",
    openGraph: {
        title: "Nawod Madhuwantha",
        description:
            "Creative software engineer specializing in Next.js, React, Angular, and TypeScript. Delivering innovative, user-focused web solutions with 3D visuals, parallax effects, and responsive design for memorable digital experiences.",
        type: "website",
        locale: "en_US",
        url: "https://www.nawodmadhuwantha.com/",
        siteName: "Nawod Madhuwantha",
        images: [
            {
                url: "https://www.nawodmadhuwantha.com/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Creative Web Developer | Angular, React, Next.js, TypeScript | 3D Web Design, Parallax Effects, Responsive Solutions",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://www.nawodmadhuwantha.com/",
        name: "Nawod Madhuwantha",
        description:
            "Creative software engineer specializing in Next.js, React, Angular, and TypeScript. Delivering innovative, user-focused web solutions with 3D visuals, parallax effects, and responsive design for memorable digital experiences.",
        image: "https://www.nawodmadhuwantha.com/opengraph-image.jpg",
        publisher: {
            "@type": "Organization",
            name: "Nawod Madhuwantha",
            logo: {
                "@type": "ImageObject",
                url: "https://www.nawodmadhuwantha.com/logo.png",
            },
        },
        mainEntityOfPage: "https://www.nawodmadhuwantha.com/",
        sameAs: [
            "https://www.linkedin.com/in/nawodmadhuwantha",
            "https://github.com/Nawod",
            "https://www.behance.net/madhuvantha",
            "https://www.fiverr.com/nawod25",
        ],
    };
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
                <Script
                    id="json-ld-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </head>
            <body
                className={`${roboto.variable} ${anton.variable} ${oswald.variable} ${rubik.variable} ${iceland.variable} ${nabla.variable} ${iceberge.variable} antialiased`}
            >
                <ScrollToTopOnRefresh />
                <Providers>
                    <PreLoader />
                    <NavBar />
                    {children}
                    <ViewCanvas />
                    <SpeedInsights />
                </Providers>
            </body>
        </html>
    );
}
