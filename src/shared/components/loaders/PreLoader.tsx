"use client";
/**
 * @class PreLoader
 * @description Displays actual progress of page content loading loading
 * @author Nawod Madhuvantha
 */

import React, { useEffect, useState } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import { useProgress } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { loaderAction } from "@/app/store/loaderSlice";

gsap.registerPlugin(CSSPlugin);

const PreLoader = () => {
    const { progress: modelProgress } = useProgress();
    const [fontLoaded, setFontLoaded] = useState(false);
    const [overallProgress, setOverallProgress] = useState<number>(0);
    const dispatch = useDispatch();

    // Track imported font loading
    useEffect(() => {
        // Scroll to the top immediately
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
            document.body.classList.add("no-scroll");
        }
        document.fonts.ready.then(() => setFontLoaded(true));
    }, []);

    // Combine progress of models, elements, and fonts
    useEffect(() => {
        const fontProgress = fontLoaded ? 100 : 0;
        const combinedProgress = (modelProgress + fontProgress) / 2;
        setOverallProgress(combinedProgress);

        if (combinedProgress >= 100) {
            if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
                document.body.classList.add("no-scroll");
            }
            reveal();
        }
    }, [modelProgress, fontLoaded]);

    const reveal = () => {
        const t1 = gsap.timeline({
            onComplete: () => {
                dispatch(loaderAction.changeLoadingState());
            },
        });

        t1.to(".hide", { delay: 0.3, opacity: 0, duration: 0.3 })
            .to(".hide", { display: "none", duration: 0.3 })
            .to(".top-box", {
                height: "0%",
                ease: Expo.easeInOut,
                duration: 0.7,
                delay: 0.5,
            })
            .to(
                ".bottom-box",
                {
                    height: "0%",
                    ease: Expo.easeInOut,
                    duration: 0.7,
                },
                "<"
            )
            .to(".loader-wrapper", { opacity: 0, zIndex: 0, duration: 0.3 })
            .to(".loader-wrapper", { display: "none" });
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center absolute top-0 z-[90] bg-background loader-wrapper">
            <div className="absolute z-0 top-box w-full h-[50%] left-0 top-0 bg-theme">
                <span
                    className="absolute z-0 w-full h-full left-0 top-0 bg-background transition-all ease-out duration-[0.4s]"
                    style={{ width: `${100 - overallProgress}%` }}
                ></span>
            </div>
            <div
                className="absolute z-0 bottom-box w-0 h-[50%] left-0 bottom-0 bg-theme transition-all ease-out duration-[0.4s]"
                style={{ width: overallProgress + "%" }}
            ></div>
            <div
                id="count"
                className="hide absolute glow-effect text-[8rem] text-white font-medium"
            >
                {Math.floor(overallProgress)}%
            </div>
        </div>
    );
};

export default PreLoader;
