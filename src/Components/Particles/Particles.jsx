import Particles from "react-tsparticles";
import "./Particles.css"


export default function Particle (){
    return (
            <Particles
            id="tsparticles"
            options={{
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
                },
                modes: {
                bubble: {
                    distance: 50,
                    duration: 2,
                    opacity: 0.8,
                    size: 10,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 50,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                value: "#ffffff",
                },
                links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
                },
                collisions: {
                enable: true,
                },
                move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
                },
                number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 80,
                },
                opacity: {
                value: 0.5,
                anim: {
                    enable: true
                }
                },
                shape: {
                type: "circle",
                },
                size: {
                random: true,
                value: 5,
                },
            },
            detectRetina: true,
            }}
        />
    )
}
