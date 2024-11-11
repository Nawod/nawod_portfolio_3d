"use client";
/**
 * @class Contact
 * @description purpose of this component is to render the contact page
 * @author Nawod Madhuvantha
 */

import React from "react";
import { styles } from "@/app/styles/styles";
import ContactForm from "./ContactForm";
import ParticleBg from "./ParticleBg";

const Contact = () => {
    return (
        <div className="relative">
            <section
                className={`${styles.padding} pb-10 pt-8 contact-section w-full mx-auto container h-screen relative z-10`}
                id="contact"
            >
                <div className="contact-title z-10 relative">
                    <div
                        className="section-title"
                        style={
                            {
                                "--title-text": '"Contact me"',
                            } as React.CSSProperties
                        }
                    >
                        Contact me
                    </div>
                </div>
                <p className="contact-subtitle pl-2 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70% text-center sm:text-left">
                    Get in touch
                </p>
                <div className="flex flex-col md:flex-row gap-8 relative">
                    <div className="flex-1">
                        <ContactForm />
                    </div>
                    <div className="flex-1">image</div>
                </div>
                <div className="w-full text-center">Nawod Madhuvantha</div>
            </section>

            <ParticleBg id="particle" />
        </div>
    );
};

export default Contact;
