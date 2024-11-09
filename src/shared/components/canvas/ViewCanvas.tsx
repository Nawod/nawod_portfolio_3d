"use client";
/**
 * @class ViewCanvas
 * @description Purpose of this canvas to render 3D models in web page
 * @author Nawod Madhuvantha
*/
import { Canvas } from "@react-three/fiber";
// import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Preload, View } from "@react-three/drei";
import InstantCanvasLoader from "../loaders/InstantCanvasLoader";

// const Loader = () => {
//     const { progress } = useProgress();
//     return <Html center>{progress.toFixed(1)}% Loaded</Html>;
// };
const Loader = dynamic(
    () => import("@react-three/drei").then((mod) => mod.Loader),
    { ssr: false },
  );

const ViewCanvas = () => {
    return (
            <Canvas
                style={{
                position: "fixed",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 30,
                width : '100%',
                height : '100%'
                }}
                shadows
                dpr={[1, 1.5]}
                gl={{ antialias: true }}
                camera={{ position: [0, 0, 5], fov: 25 }}
            >
                <Suspense fallback={<InstantCanvasLoader />}>
                    <View.Port />
                </Suspense>
                <Preload all />
                <Loader />
            </Canvas>
    );
};

export default ViewCanvas;