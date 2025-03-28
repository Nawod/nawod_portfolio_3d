/**
 * @class Packages
 * @description purpose of this component is to render the Packages
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import React from "react";
import PackageSlider from "./PackageSlider";

const Packages = () => {
    return (
        <section
            className={`${styles.padding} pt-8 pb-20 package-section w-full mx-auto container relative bg-background z-50 overflow-x-hidden`}
            id="packages"
        >
            <div className="package-title z-10 relative">
                <div
                    className="section-title"
                    style={
                        { "--title-text": '"Packages"' } as React.CSSProperties
                    }
                >
                    Packages
                </div>
            </div>
            <p className="package-subtitle pl-2 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70% text-center sm:text-left">
                Choose the perfect package to make your dream website
            </p>
            <div>
                <PackageSlider />
            </div>
        </section>
    );
};

export default Packages;
