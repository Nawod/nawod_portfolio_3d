"use client";
/**
 * @class PackageSlider
 * @description purpose of this component is to render the packages
 * @author Nawod Madhuvantha
 */
import React from "react";
import { CustomPackages } from "@/shared/constants/packages";

const PackageSlider = () => {
    /**
     * openWhatsApp with selected package
     */
    const openWhatsApp = (name: string) => {
        const whatsappUrl = `https://wa.me/94763991948?text=Hi Nawod, I'm interested in your ${name} package. Can you please provide more details?`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="h-full w-full pb-40 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CustomPackages.map((item) => (
                    <div
                        key={item.id}
                        className="project-item relative"
                    >
                        <div className="relative card-wrapper box-border py-6 px-4 rounded-3xl block-3d">
                            <div className="text-xl anton text-center metallic-text">
                                {item.title}
                            </div>
                            <div className="my-4 leading-4 text-lg">
                                {item.description}
                            </div>
                            <ul className="space-y-4">
                                {item.features.map((feature, index) => (
                                    <li
                                        className="text-lg relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:bg-themeLight before:rounded-sm"
                                        key={index}
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-2xl font-bold my-4 text-center text-shine">
                                Price Starting {item.price.toLocaleString("en")}{" "}
                                LKR
                            </div>
                            <div
                                className="block w-full cursor-pointer roboto text-center font-semibold p-2 rounded-lg uppercase bg-theme-metallic text-shine"
                                onClick={() => openWhatsApp(item.title)}
                            >
                                Get a quote
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackageSlider;
