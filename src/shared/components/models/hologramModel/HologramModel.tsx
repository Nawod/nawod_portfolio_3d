"use client";
/**
 * @class HologramModel
 * @description Purpose of this model is to render and animate hologram in contact section
 * @ author Nawod Madhuvantha
 */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/technology_aperture_out.glb");

const HologramModel = () => {
    const holoGroup = useRef<Group>(null);
    const { animations, scene } = useGLTF(
        "/models/technology_aperture_out.glb"
    );
    const { actions } = useAnimations(animations, scene);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const playActionRef = useRef<THREE.AnimationAction | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && actions && ScrollTrigger) {
            const playAction = actions["Take 001"] as THREE.AnimationAction;
            if (playAction) {
                console.log("action");
                playAction.clampWhenFinished = true;
                playAction.time = 1.67;
                playAction.setLoop(THREE.LoopOnce, Infinity);
                playAction.play();
                playAction.timeScale = 0.4;

                playActionRef.current = playAction;
            }
        }

        return () => {
            scrollTriggerRef.current?.kill();
        };
    }, [actions]);

    useFrame(() => {
        const playAction = playActionRef.current;
        if (playAction && !playAction.paused) {
            if (playAction.time >= 3.3) {
                playAction.time = 1.67;
            }
        }
    });

    return (
        <group
            ref={holoGroup}
            scale={[0.07, 0.07, 0.07]}
            rotation={[0.4, 0, 0]}
        >
            <primitive
                object={scene}
                position={[0, -9, 0]}
            />
        </group>
    );
};

export default HologramModel;
