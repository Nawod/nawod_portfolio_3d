"use client";
/**
 * @class RobotScene
 * @description Purpose of this scene to render robot model
 * @author Nawod Madhuvantha
*/
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import RobotModel from "../../models/heroRobotModel/HeroRobotModel";

const Loader = () => {
    const { progress } = useProgress();
    return <Html center>{progress.toFixed(1)}% Loaded</Html>;
};

const RobotScene = () => {
    return (
        <div className="h-full w-full fixed">
            <Canvas
                className="h-full w-full container sm:right-[-25%] lg:right-[-15%] right-0"
                gl={{ antialias: true }}
                dpr={[1, 1.5]}
                shadows
                frameloop="always"
                camera={{ position: [0, 0, 5], fov: 25 }}
            >
                <directionalLight position={[-5, -5, 5]} intensity={4} />
                <Suspense fallback={<Loader />}>
                    <RobotModel />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default RobotScene;
