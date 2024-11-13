"use client";
import { useEffect } from "react";

const ScrollToTopOnRefresh = () => {
    useEffect(() => {
        // Only execute on client side
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);

            // Delay for further actions
            const scrollTimeout = setTimeout(() => {
                document.getElementById("top")?.scrollIntoView();
                document.body.classList.add("no-scroll");
            }, 100);

            // Clear timeout on unmount to avoid memory leaks
            return () => clearTimeout(scrollTimeout);
        }
    }, []); // Empty dependency array to ensure it runs on every page refresh

    return null;
};

export default ScrollToTopOnRefresh;
