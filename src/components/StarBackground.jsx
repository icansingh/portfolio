import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [supernovae, setSupernovae] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Supernova logic
    useEffect(() => {
        let timeout;
        const triggerSupernova = () => {
            // Random position, size, and opacity
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 40 + 40; // 40px to 80px
            const opacity = Math.random() * 0.4 + 0.3; // 0.3 to 0.7
            const id = Date.now() + Math.random();
            setSupernovae(sn => [...sn, { id, x, y, size, opacity }]);
            // Next supernova in 20–40s
            timeout = setTimeout(triggerSupernova, Math.random() * 20000 + 20000);
        };
        triggerSupernova();
        return () => clearTimeout(timeout);
    }, []);

    // Remove supernova after animation
    const handleSupernovaEnd = (id) => {
        setSupernovae(sn => sn.filter(s => s.id !== id));
    };

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        setStars(newStars)
        }   
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMeteors = []
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 75,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        setMeteors(newMeteors)
        }   
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%", 
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%", 
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}

        {supernovae.map((sn) => (
            <div
                key={sn.id}
                className="supernova"
                style={{
                    width: sn.size + "px",
                    height: sn.size + "px",
                    left: sn.x + "%",
                    top: sn.y + "%",
                    opacity: sn.opacity,
                    zIndex: 10,
                }}
                onAnimationEnd={() => handleSupernovaEnd(sn.id)}
            />
        ))}
    </div>;
}