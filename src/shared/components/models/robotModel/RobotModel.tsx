/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Group } from 'three';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/models/legendary_robot.glb');

const RobotModel = () => {
  const group = useRef<Group>(null);
    const { animations, scene} = useGLTF('/models/legendary_robot.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions["Root|idle"]) {
      console.log("trig idle",actions);
      actions["Root|idle"].play();
    }

    if (actions["Root|idle"]) {
      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: self => {
          const progress = self.progress;
          if (progress > 0.1 && progress < 0.3 && actions["Root|jump_up_root_motion"]) {
            console.log("trig jump");
            actions["Root|idle"]?.stop();
            actions["Root|jump_up_root_motion"].play();
          } else if (progress >= 0.3 && progress < 0.7 && actions["Root|jump_mid_air"]) {
            console.log("trig fall");
            actions["Root|jump_up_root_motion"]?.stop();
            actions["Root|jump_mid_air"].play();
          } else if (progress >= 0.7 && actions["Root|jump_landing"]) {
            console.log("trig land");
            actions["Root|jump_mid_air"]?.stop();
            actions["Root|jump_landing"].play();
          }
        }
      });
    }
  }, [actions])  

  return (
      <group ref={group}>
        <primitive
            object={scene}
            position={[0,-0.7,0]}
            scale={0.7}
        />
        </group>
  );
};

export default RobotModel;
