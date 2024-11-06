"use client";
/**
 * @class HeroRobotModel
 * @description Purpose of this model is to render and animate robot character in hero section
 * @author Nawod Madhuvantha
*/
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Group } from 'three';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/models/legendary_robot.glb');

const HeroRobotModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF('/models/legendary_robot.glb');
  const { actions } = useAnimations(animations, scene);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && actions && ScrollTrigger) {
      // Set Idle Animation by Default
      if (actions["Root|idle"]) {
        actions["Root|idle"].play();
      }

      // Set up ScrollTrigger
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger : ".hero",
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Smooth scrubbing based on scroll
        markers : true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Play Idle Animation at the Top
          if (progress === 0 && actions["Root|idle"]) {
            actions["Root|jump_up_root_motion"]?.stop();
            actions["Root|idle"]
              .reset()
              .play();
          }
          // Jump Up Animation from 0 to 0.2 scroll progress
          else if (progress > 0 && progress <= 0.2) {
            const jumpUpProgress = THREE.MathUtils.mapLinear(progress, 0, 0.2, 0, 1); // Map scroll to 0-0.9s of the jump_up animation

            if (actions["Root|jump_up_root_motion"]) {
              actions["Root|idle"]?.stop();
              actions["Root|jump_mid_air"]?.stop();
              actions["Root|jump_up_root_motion"]
                .reset()
                .play()
                .paused = true;
              actions["Root|jump_up_root_motion"].timeScale = 0;
              actions["Root|jump_up_root_motion"].time = jumpUpProgress;
            }
            // Change scale during Jump Up
            if (group.current) {
              const scale = 0.6 + (0.8 - 0.6) * (progress / 0.2);
              group.current.scale.set(scale, scale, scale);
            }
            
          }
          // Mid-Air Animation between 0.2 and 0.9 scroll progress
          else if (progress > 0.2 && progress < 0.9) {
            if (actions["Root|jump_mid_air"] && !actions["Root|jump_mid_air"].isRunning()) {
              actions["Root|jump_up_root_motion"]?.stop();
              actions["Root|jump_landing"]?.stop();
              actions["Root|jump_mid_air"].reset().play()
            }
          }
          // Landing Animation at the end (scroll progress = 1)
          else if (progress >= 0.9 && progress < 1) {
            const landProgress = THREE.MathUtils.mapLinear(progress, 0.9, 1, 0.13, 0.8);
            if (actions["Root|jump_landing"]) {
              actions["Root|jump_mid_air"]?.stop();
              actions["Root|idle"]?.stop();
              actions["Root|jump_landing"]
                .reset()
                .play()
                .paused = true;
              actions["Root|jump_landing"].timeScale = 0;
              actions["Root|jump_landing"].time = landProgress;
            }
            // Reduce scale during landing
            if (group.current) {
              const scale = 0.8 - (0.2 * (progress - 0.9) / 0.1);
              group.current.scale.set(scale, scale, scale);
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
  }, [actions]);

  return (
    <group ref={group} scale={[0.6,0.6,0.6]}>
      <primitive object={scene} position={[0, -1, 0]} />
    </group>
  );
};

export default HeroRobotModel;
