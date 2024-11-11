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
import ContactRobotModel from "../../models/contactRobotModel/ContactRobotModel";
import HologramModel from "../../models/hologramModel/HologramModel";
import { View } from "@react-three/drei";

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
                <div className="flex flex-col sm:flex-row gap-8 relative">
                    <div className="flex-1">
                        <ContactForm />
                    </div>
                    <div className="flex-1 relative hidden sm:block ">
                        <div className="absolute w-full h-full">
                            <View className="contact-scene h-full w-full block">
                                <ContactRobotModel />
                                <directionalLight
                                    position={[-5, -5, 5]}
                                    intensity={4}
                                />
                                <pointLight
                                    intensity={30}
                                    color="#5bac3e"
                                    decay={0.6}
                                />
                            </View>
                        </div>
                        <div className="hidden md:block relative w-full h-full">
                            <View className="contact-scene h-full w-full block">
                                <HologramModel />
                                <directionalLight
                                    intensity={100}
                                    color="#85dd52"
                                    position={[10, 30, 10]}
                                />
                                <directionalLight
                                    position={[-5, -5, 5]}
                                    intensity={4}
                                />
                            </View>
                        </div>
                    </div>
                </div>
            </section>

            <ParticleBg id="particle" />
        </div>
    );
};

export default Contact;
