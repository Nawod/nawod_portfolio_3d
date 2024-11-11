"use client";
/**
 * @class ContactRobotModel
 * @description Purpose of this model is to render and animate robot character in contact section
 * @author Nawod Madhuvantha
 */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/contact_robot.glb");

const ContactRobotModel = () => {
    const contactGroup = useRef<Group>(null);
    const { animations, scene } = useGLTF("/models/contact_robot.glb");
    const { actions } = useAnimations(animations, scene);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && actions && ScrollTrigger) {
            if (actions["Root|idle"]) {
                actions["Root|idle"].play();
            }
        }

        return () => {
            scrollTriggerRef.current?.kill();
        };
    }, [actions]);

    return (
        <group
            ref={contactGroup}
            scale={[0.9, 0.9, 0.9]}
        >
            <primitive
                object={scene}
                position={[0, -0.8, 0]}
            />
        </group>
    );
};

export default ContactRobotModel;
