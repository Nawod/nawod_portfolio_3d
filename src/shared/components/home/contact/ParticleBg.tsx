/**
 * @class ParticleBg
 * @description purpose of this component is to render the particle background
 * @author Nawod Madhuvantha
 */

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";

interface ParticlesComponentProps {
    id: string;
}

const ParticleBg: React.FC<ParticlesComponentProps> = ({ id }) => {
    const [init, setInit] = useState(false);

    // Initialize particles engine (run only once)
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            // Load only the required bundle (slim in this case)
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Options for particles
    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "black",
                },
            },
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#5bac3e",
                },
                links: {
                    color: "#246d1b",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <Particles
            id={id}
            className={"particle-wrapper"}
            canvasClassName={"particle-canvas"}
            init={init}
            options={options}
        />
    );
};

export default ParticleBg;
