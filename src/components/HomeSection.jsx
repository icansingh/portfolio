import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { ParticleBackground } from "./ParticleBackground"
import { useState, useEffect } from "react"

export const HomeSection = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return <section 
            id="home" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                {/* Particle Background */}
                <ParticleBackground />
                
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ikjyot</span>
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                <span className="opacity-0 animate-fade-in-delay-2"> Singh </span>
                            </h1>
                        </div>

                        <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            {startTyping ? (
                                <TypeAnimation
                                    sequence={[
                                        "Passionate about AI, Machine Learning, and building innovative solutions that make a difference.",
                                        2000,
                                        "Always eager to learn new technologies and take on challenging projects.",
                                        2000,
                                    ]}
                                    wrapper="p"
                                    speed={50}
                                    repeat={Infinity}
                                    className="min-h-[1.5em]"
                                />
                            ) : (
                                <p className="min-h-[1.5em]">&nbsp;</p>
                            )}
                        </div>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <div className="flex justify-center space-x-6">
                                <a 
                                    href="https://github.com/icansingh" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/ikjyot-singh/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a 
                                    href="mailto:ikjyot@ualberta.ca"
                                    className="social-icon"
                                    aria-label="Email"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>

            </section>
}
