"use client";
/**
 * @class NavBar
 * @description purpose of this component is to render the website navigation menu
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import { Navigation } from "@/shared/constants/navigation";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { scrollToSection } from "@/shared/models/ScrollToView";

const NavBar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // Trigger when 60% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                } else if (window.scrollY >= 0.4 * window.innerHeight) {
                    setActive("about");
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    /**
     * navigation click action
     * @param id
     */
    const onClickAction = (id: string) => {
        if ((id === "projects" && active !== "projects") || id !== "projects") {
            scrollToSection(id);
        }
        setActive(id);
    };

    return (
        <div
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[60]`}
        >
            <div className="w-full flex justify-between items-center container mx-auto">
                <div
                    className="relative w-9 h-9 cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <Image
                        src="/logo.png"
                        alt="nawod logo"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="list-none hidden sm:flex flex-row gap-10">
                    {Navigation.links.map((nav) => (
                        <div
                            key={nav.id}
                            className={`${
                                active === nav.id
                                    ? "text-themeLight"
                                    : "text-white"
                            } hover:text-theme text-base font-medium cursor-pointer transition-all duration-500`}
                            onClick={() => onClickAction(nav.id)}
                        >
                            {nav.title}
                        </div>
                    ))}
                </div>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <IoIosClose /> : <TiThMenu />}
                    </div>
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glass-block`}
                    >
                        <div className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {Navigation.links.map((nav) => (
                                <div
                                    key={nav.id}
                                    onClick={() => {
                                        onClickAction(nav.id);
                                        setToggle(!toggle);
                                    }}
                                    className={`${
                                        active === nav.id
                                            ? "text-themeLight"
                                            : "text-white"
                                    } hover:text-theme text-base font-medium cursor-pointer transition-all duration-500`}
                                >
                                    {nav.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
