"use client"; // Ensure client-side rendering

import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three'; // Import THREE constants
import { Group } from 'three';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/models/legendary_robot.glb');

const RobotModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF('/models/legendary_robot.glb');
  const { actions } = useAnimations(animations, scene);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null); // Store ScrollTrigger instance

  useEffect(() => {
    // Ensure that this code only runs on the client
    if (typeof window !== 'undefined' && actions && ScrollTrigger) {
      if (actions["Root|idle"]) {
        actions["Root|idle"].play(); // Default idle animation
        console.log("trig idle")
      }

      // Set up ScrollTrigger animations
      scrollTriggerRef.current = ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Smooth scrubbing based on scroll
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress > 0.1 && progress < 0.3 && actions["Root|jump_up_root_motion"]) {
            console.log("trig jump")
            actions["Root|idle"]?.stop();
            actions["Root|jump_up_root_motion"]
              .reset()
              .setLoop(THREE.LoopOnce, 1)
              .play();
          } else if (progress >= 0.3 && progress < 0.7 && actions["Root|jump_mid_air"]) {
            console.log("trig fall")
            actions["Root|jump_up_root_motion"]?.stop();
            actions["Root|jump_mid_air"]
              .reset()
              .setLoop(THREE.LoopRepeat, 1)
              .play();
          } else if (progress === 1 && actions["Root|jump_landing"]) {
            console.log("trig land")
            actions["Root|jump_mid_air"]?.stop();
            actions["Root|jump_landing"]
              .reset()
              .setLoop(THREE.LoopOnce, 1)
              .play();
          }
        }
      });
    }

    // Clean up ScrollTrigger on unmount
    return () => {
      scrollTriggerRef.current?.kill(); // Kill ScrollTrigger instance
    };
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} position={[0, -0.7, 0]} scale={0.7} />
    </group>
  );
};

export default RobotModel;
