import { useEffect, useState } from "react";

export const ParticleBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        generateParticles();

        const handleResize = () => {
            generateParticles();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateParticles = () => {
        const numberOfParticles = Math.floor(window.innerWidth * window.innerHeight / 40000);
        const newParticles = [];

        for (let i = 0; i < numberOfParticles; i++) {
            const animationType = Math.random();
            let animationClass = "animate-float";
            
            if (animationType > 0.7) {
                animationClass = "animate-float-slow";
            } else if (animationType > 0.4) {
                animationClass = "animate-float-fast";
            }

            newParticles.push({
                id: i,
                size: Math.random() * 6 + 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.2,
                animationDuration: Math.random() * 20 + 10,
                animationDelay: Math.random() * 5,
                type: Math.random() > 0.5 ? "circle" : "square",
                animationClass
            });
        }

        setParticles(newParticles);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className={`particle absolute ${
                        particle.type === "circle" ? "rounded-full" : "rounded-sm"
                    } ${particle.animationClass}`}
                    style={{
                        width: particle.size + "px",
                        height: particle.size + "px",
                        left: particle.x + "%",
                        top: particle.y + "%",
                        opacity: particle.opacity,
                        animationDuration: particle.animationDuration + "s",
                        animationDelay: particle.animationDelay + "s",
                    }}
                />
            ))}
        </div>
    );
}; 