"use client";
/**
 * @class NotFound
 * @description purpose of this component is to render the 404 page
 * @author Nawod Madhuvantha
 */
import NeonButton from "@/shared/components/buttons/NeonButton";
import ContactRobotModel from "@/shared/components/models/contactRobotModel/ContactRobotModel";
import { View } from "@react-three/drei";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-background">
            <div className="block relative w-full h-[30vh]">
                <View className="h-full w-full block">
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
            <p className="text-xl">Could not find requested resources !</p>
            <div className="text-[10rem] text-theme iceberge font-semibold text-center">
                404
            </div>
            <Link href={`/`}>
                <NeonButton title="Back to Home" />
            </Link>
        </div>
    );
};

export default NotFound;
