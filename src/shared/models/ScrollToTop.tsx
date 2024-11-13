"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ScrollToTopOnRefresh = () => {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        // Only execute on client side
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            // Delay for further actions
            const scrollTimeout = setTimeout(() => {
                document.getElementById("top")?.scrollIntoView();
            }, 100);

            // Clear timeout on unmount to avoid memory leaks
            return () => clearTimeout(scrollTimeout);
        }
    }, []); // Empty dependency array to ensure it runs on every page refresh

    return null;
};

export default ScrollToTopOnRefresh;
