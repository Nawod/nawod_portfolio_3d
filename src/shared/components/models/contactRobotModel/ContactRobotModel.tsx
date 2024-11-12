"use client";
/**
 * @class ContactRobotModel
 * @description Purpose of this model is to render and animate robot character in contact section
 * @author Nawod Madhuvantha
 */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/models/contact_robot.glb");

const ContactRobotModel = () => {
    const contactGroup = useRef<Group>(null);
    const { animations, scene } = useGLTF("/models/contact_robot.glb");
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (typeof window !== "undefined" && actions) {
            if (actions["Root|idle"]) {
                actions["Root|idle"].play();
            }
        }
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
