import { cn } from "@/lib/utils";
import { BrainCircuit, Code, GraduationCap} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <img 
                            src="/me.png" 
                            alt="Profile" 
                            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold">AI Developer & Computing Science Student</h3>

                    <p className="text-muted-foreground">
                        I'm a Computing Science student at the University of Alberta,
                        currently working as an AI Developer while conducting
                        research in computer vision and natural language processing.
                        My passion lies in developing innovative AI solutions that
                        solve real-world problems. 
                    </p>

                    <p className="text-muted-foreground">
                        Whether it's training deep
                        learning models, building full-stack applications, or
                        contributing to cutting-edge research, I love the challenge
                        of turning complex ideas into working solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                        <a href="#contact" className="cosmic-button"> Get in Touch </a>

                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            className={cn(
                                "px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300"
                            )}>
                            View Resume
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">      
                                <GraduationCap className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Education</h4>
                                <p className="text-muted-foreground">
                                    ayyyyy i can actually code. vow,
                                    boooomaiendlaenklaneflknaeklf
                                    aejfknalefknalekfnlkaef
                                    aekfnalekflakefnlkenflkaneflknaelkfnalekfn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI & Machine Learning</h4>
                                <p className="text-muted-foreground">
                                    I prolly have to change this to something
                                    like AI related, training models, etc. you know stuff
                                    like that. bioaejdfoajeif
                                    aedikaerae
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Engineering</h4>
                                <p className="text-muted-foreground">
                                    ayyyyy its done, now once again, need to change this to 
                                    work experience or something like that. Talk about something
                                    like that. booooom yeah.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}