"use client";
/**
 * @class HeroRobotModel
 * @description Purpose of this model is to render and animate robot character in hero section
 * @author Nawod Madhuvantha
 */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { Group } from "three";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/legendary_robot.glb");

const HeroRobotModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/models/legendary_robot.glb");
  const { actions } = useAnimations(animations, scene);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isDesktop = useMediaQuery("(min-width: 640px)", true);

  useEffect(() => {
    if (typeof window !== "undefined" && actions && ScrollTrigger) {
      const defaultScale = isDesktop ? 0.6 : 0.37;
      // Set Idle Animation by Default
      if (actions["Root|idle"]) {
        actions["Root|idle"].play();
      }
      // Set up ScrollTrigger
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers : true,
        onUpdate: (self) => {
          const progress = self.progress;
          const jumpStart = 0;
          const jumpEnd = 0.15;
          const landingStart = 0.83;
          const landingEnd = 0.93;

          console.log("progress ", progress);
          // Play Idle Animation at the Top
          if (progress === 0 && actions["Root|idle"]) {
            actions["Root|jump_up_root_motion"]?.stop();
            actions["Root|idle"].reset().play();
          }
          // Jump Up Animation
          else if (progress > jumpStart && progress <= jumpEnd) {
            const jumpUpProgress = THREE.MathUtils.mapLinear(
              progress,
              jumpStart,
              jumpEnd,
              0,
              1
            );

            if (actions["Root|jump_up_root_motion"]) {
              actions["Root|idle"]?.stop();
              actions["Root|jump_mid_air"]?.stop();
              actions["Root|jump_up_root_motion"].reset().play().paused = true;
              actions["Root|jump_up_root_motion"].timeScale = 0;
              actions["Root|jump_up_root_motion"].time = jumpUpProgress;
            }
            // Change scale during Jump Up
            if (group.current) {
              const scale =
                defaultScale +
                (defaultScale + 0.2 - defaultScale) * (progress / 0.2);
              group.current.scale.set(scale, scale, scale);

              if (!isDesktop) {
                const position = 0.25 * (progress / 0.2);
                group.current.position.set(position, 0, 0);
              }
            }
          }
          // Mid-Air Animation
          else if (progress > jumpEnd && progress < landingStart) {
            if (
              actions["Root|jump_mid_air"] &&
              !actions["Root|jump_mid_air"].isRunning()
            ) {
              actions["Root|jump_up_root_motion"]?.stop();
              actions["Root|jump_landing"]?.stop();
              actions["Root|jump_mid_air"].reset().play();
            }
            if (group.current && !isDesktop) {
              const scale = defaultScale + 0.2;
              group.current.scale.set(scale, scale, scale);
              group.current.position.set(0.25, 0, 0);
            }
          }
          // Landing Animation
          else if (progress >= landingStart && progress < landingEnd) {
            const landProgress = THREE.MathUtils.mapLinear(
              progress,
              landingStart,
              landingEnd,
              0.13,
              0.8
            );
            if (actions["Root|jump_landing"]) {
              actions["Root|jump_mid_air"]?.stop();
              actions["Root|idle"]?.stop();
              actions["Root|jump_landing"].reset().play().paused = true;
              actions["Root|jump_landing"].timeScale = 0;
              actions["Root|jump_landing"].time = landProgress;
            }
            // Reduce scale during landing
            if (group.current) {
              const scale =
                defaultScale + 0.2 - (0.2 * (progress - landingStart)) / 0.1;
              group.current.scale.set(scale, scale, scale);
              if (!isDesktop) {
                const position =
                  0.25 - (0.25 * (progress - landingStart)) / 0.1;
                group.current.position.set(position, 0, 0);
              }
            }
          }
          // Transition back to Idle after Landing
          else if (progress === 1 && actions["Root|idle"]) {
            actions["Root|jump_landing"]?.stop(); // Transition to idle after landing
            actions["Root|idle"].reset().play();
          }
        },
      });
    }

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, [actions, isDesktop]);

  return (
    <group
      ref={group}
      scale={isDesktop ? [0.6, 0.6, 0.6] : [0.37, 0.37, 0.37]}
    >
      <primitive
        object={scene}
        position={isDesktop ? [0, -1, 0] : [0, -0.5, 0]}
      />
    </group>
  );
};

export default HeroRobotModel;
