import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Fraudster and Program "Writer"</h3>

                    <p className="text-muted-foreground">
                        Boom chakcahdkajendkaf choiisefoijsef fiwoooow
                        o leifjalekfkjfak have 10 years aekfalef
                        aedioajedliajedliajedlikaeldk  iajdoaied testtt
                        tstaefkaed
                    </p>

                    <p className="text-muted-foreground">
                        I know this and this and this technologes. Really 
                        enjoy machine learnign stuff. chickiiediaejdla
                        diajdlaejd kidjlaejd kj adlkajd aj dksj  laks ddlaksdj
                        aledj alkdj alkdj lkajed oiaejd ladj alkd laedk lak;
                        daopek d;oaek d;lakd; aldkpa ed9iape foja;kfk;sr
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                        <a href="#contact" className="cosmic-button"> Get in Touch </a>

                        <a 
                            href="#home" 
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
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
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
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
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
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
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