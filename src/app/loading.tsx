"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            const scrollTimeout = setTimeout(() => {
                document.getElementById("top")?.scrollIntoView();
            }, 100);

            return () => clearTimeout(scrollTimeout);
        }
    }, []);

    return null;
}
