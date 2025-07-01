import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { TimelineCardPopup } from "./TimelineCardPopup";

// Enhanced timeline data with more details
const timelineData = [
    {
        id: 1,
        year: "2024",
        title: "Software Engineer",
        company: "Tech Company",
        location: "Edmonton, AB",
        duration: "Jan 2024 - Present",
        description: "Leading development of AI-powered applications and machine learning models. Collaborating with cross-functional teams to deliver scalable solutions that impact millions of users.",
        achievements: [
            "Developed and deployed 3 new AI models improving accuracy by 25%",
            "Led a team of 4 developers in building a real-time data processing pipeline",
            "Reduced system latency by 40% through optimization techniques"
        ],
        skills: ["Python", "React", "AWS", "Machine Learning", "Docker", "Kubernetes"],
        link: "#"
    },
    {
        id: 2,
        year: "2023",
        title: "Research Assistant",
        company: "University of Alberta",
        location: "Edmonton, AB",
        duration: "May 2023 - Dec 2023",
        description: "Conducted cutting-edge research in computer vision and deep learning. Published papers on object detection and image processing techniques that advance the field.",
        achievements: [
            "Published 2 papers in top-tier computer vision conferences",
            "Developed a novel object detection algorithm with 15% better performance",
            "Mentored 3 undergraduate students in research projects"
        ],
        skills: ["Computer Vision", "Deep Learning", "OpenCV", "PyTorch", "TensorFlow"],
        link: "#"
    },
    {
        id: 3,
        year: "2022",
        title: "Software Developer Intern",
        company: "Startup Inc.",
        location: "Remote",
        duration: "Jun 2022 - Aug 2022",
        description: "Built full-stack web applications and contributed to product development. Worked with modern JavaScript frameworks and databases to create user-friendly solutions.",
        achievements: [
            "Built 2 full-stack applications from concept to deployment",
            "Improved application performance by 30% through code optimization",
            "Implemented CI/CD pipeline reducing deployment time by 50%"
        ],
        skills: ["JavaScript", "Node.js", "MongoDB", "Git", "Express.js"],
        link: "#"
    },
    {
        id: 4,
        year: "2021",
        title: "Computer Science Student",
        company: "University of Alberta",
        location: "Edmonton, AB",
        duration: "Sep 2021 - Apr 2024",
        description: "Started my journey in computer science, focusing on algorithms, data structures, and software engineering principles. Developed strong foundation in programming and problem-solving.",
        achievements: [
            "Maintained 3.8+ GPA throughout the program",
            "Completed 15+ programming projects across various domains",
            "Participated in 3 hackathons winning 2 awards"
        ],
        skills: ["Java", "C++", "Data Structures", "Algorithms", "Python"],
        link: "#"
    }
];

export const TimelineSection = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const animationFrameRef = useRef(null);

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedExperience(null);
    };

    // Cross-browser scroll progress effect
    useEffect(() => {
        const updateProgress = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowCenter = windowHeight / 2;
            
            // Progress based on section center crossing screen center
            const sectionHeight = rect.height;
            const sectionCenter = rect.top + sectionHeight / 2;
            
            // When section center is at top of screen, progress = 0
            // When section center is at bottom of screen, progress = 1
            const progress = Math.max(0, Math.min(1, (windowHeight - sectionCenter) / windowHeight));
            
            setScrollProgress(progress);
        };

        const handleScroll = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame(updateProgress);
        };

        // Add scroll listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        
        // Initial call
        updateProgress();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <section id="timeline" ref={sectionRef} className="py-12 md:py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Journey</span>
                </h2>
                
                <p className="text-center text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto px-4">
                    A timeline of my professional experience and academic achievements. 
                    Click on any experience to learn more about my role, achievements, and the technologies I worked with.
                </p>

                {/* Desktop Timeline (md and up) */}
                <div className="hidden md:block relative max-w-4xl mx-auto">
                    {/* Progress Bar Background */}
                    <div 
                        className="absolute top-0 bottom-0 w-1 bg-muted"
                        style={{
                            left: '50%',
                            marginLeft: '-0.5px'
                        }}
                    ></div>
                    
                    {/* Progress Bar Fill */}
                    <div 
                        className="absolute top-0 w-1 bg-gradient-to-b from-primary to-primary/50"
                        style={{ 
                            left: '50%',
                            marginLeft: '-0.5px',
                            height: `${scrollProgress * 100}%`,
                            transition: 'height 0.05s linear'
                        }}
                    ></div>
                    
                    {/* Timeline Items */}
                    <div className="relative">
                        {timelineData.map((item, index) => {
                            const itemCenter = (index + 0.5) / timelineData.length;
                            const isActive = scrollProgress >= itemCenter;
                            
                            return (
                                <div 
                                    key={item.id}
                                    className={cn(
                                        "relative flex items-center",
                                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    )}
                                    style={{
                                        marginTop: index > 0 ? '-9rem' : '0'
                                    }}
                                >
                                    {/* Timeline Dot */}
                                    <div 
                                        className={cn(
                                            "absolute w-6 h-6 rounded-full border-4 border-background shadow-lg z-10 transition-all duration-500",
                                            isActive 
                                                ? "bg-primary scale-110 shadow-primary/50" 
                                                : "bg-muted"
                                        )}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            marginLeft: '-11px',
                                            marginTop: '-12px',
                                        }}
                                    >
                                        {/* Inner dot for extra effect */}
                                        {isActive && (
                                            <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                                        )}
                                    </div>
                                    
                                    {/* Content Card */}
                                    <div className={cn(
                                        "w-5/12 p-6 transition-all duration-500",
                                        index % 2 === 0 ? "pr-8" : "pl-8"
                                    )}>
                                        <div 
                                            className={cn(
                                                "gradient-border p-6 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:scale-[1.02] hover:shadow-lg group",
                                                isActive && "border-primary/30"
                                            )}
                                            style={{
                                                opacity: isActive ? 1 : 0.3,
                                                transform: isActive ? 'scale(1)' : 'scale(0.95)'
                                            }}
                                            onClick={() => handleExperienceClick(item)}
                                        >
                                            {/* Year Badge */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className={cn(
                                                    "text-sm font-medium px-3 py-1 rounded-full transition-all duration-300",
                                                    isActive 
                                                        ? "text-primary bg-primary/10" 
                                                        : "text-muted-foreground bg-muted"
                                                )}>
                                                    {item.year}
                                                </span>
                                                {item.link && item.link !== "#" && (
                                                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                                )}
                                            </div>
                                            
                                            {/* Title and Company */}
                                            <h3 className={cn(
                                                "font-semibold text-lg mb-2 group-hover:text-primary transition-colors",
                                                isActive ? "text-foreground" : "text-muted-foreground"
                                            )}>
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                <Briefcase size={14} />
                                                <span>{item.company}</span>
                                                <span>•</span>
                                                <MapPin size={14} />
                                                <span>{item.location}</span>
                                            </div>
                                            
                                            {/* Duration */}
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                                <Calendar size={12} />
                                                <span>{item.duration}</span>
                                            </div>
                                            
                                            {/* Description Preview */}
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {item.description}
                                            </p>
                                            
                                            {/* Skills Preview */}
                                            <div className="flex flex-wrap gap-1">
                                                {item.skills.slice(0, 4).map((skill, skillIndex) => (
                                                    <span 
                                                        key={skillIndex}
                                                        className={cn(
                                                            "text-xs px-2 py-1 rounded-full transition-all duration-300",
                                                            isActive 
                                                                ? "bg-primary/10 text-primary" 
                                                                : "bg-muted text-muted-foreground"
                                                        )}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {item.skills.length > 4 && (
                                                    <span className="text-xs text-muted-foreground px-2 py-1">
                                                        +{item.skills.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                            
                                            {/* Click indicator */}
                                            <div className="mt-4 text-xs text-primary/70 text-center">
                                                Click to learn more →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Timeline (below md) */}
                <div className="md:hidden relative max-w-2xl mx-auto">
                    {/* Mobile Progress Bar Background */}
                    <div 
                        className="absolute top-0 bottom-0 w-1 bg-muted"
                        style={{
                            left: '1rem',
                        }}
                    ></div>
                    
                    {/* Mobile Progress Bar Fill */}
                    <div 
                        className="absolute top-0 w-1 bg-gradient-to-b from-primary to-primary/50"
                        style={{ 
                            left: '1rem',
                            height: `${scrollProgress * 100}%`,
                            transition: 'height 0.05s linear'
                        }}
                    ></div>
                    
                    {/* Mobile Timeline Items */}
                    <div className="relative pl-12">
                        {timelineData.map((item, index) => {
                            const itemCenter = (index + 0.5) / timelineData.length;
                            const isActive = scrollProgress >= itemCenter;
                            
                            return (
                                <div 
                                    key={item.id}
                                    className="relative mb-8 last:mb-0"
                                >
                                    {/* Mobile Timeline Dot */}
                                    <div 
                                        className={cn(
                                            "absolute w-5 h-5 rounded-full border-3 border-background shadow-lg z-10 transition-all duration-500",
                                            isActive 
                                                ? "bg-primary scale-110 shadow-primary/50" 
                                                : "bg-muted"
                                        )}
                                        style={{
                                            left: '-2.5rem',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    >
                                        {/* Inner dot for extra effect */}
                                        {isActive && (
                                            <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Content Card */}
                                    <div 
                                        className={cn(
                                            "gradient-border p-4 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:scale-[1.02] hover:shadow-lg group",
                                            isActive && "border-primary/30"
                                        )}
                                        style={{
                                            opacity: isActive ? 1 : 0.3,
                                            transform: isActive ? 'scale(1)' : 'scale(0.95)'
                                        }}
                                        onClick={() => handleExperienceClick(item)}
                                    >
                                        {/* Year Badge */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={cn(
                                                "text-xs font-medium px-2 py-1 rounded-full transition-all duration-300",
                                                isActive 
                                                    ? "text-primary bg-primary/10" 
                                                    : "text-muted-foreground bg-muted"
                                            )}>
                                                {item.year}
                                            </span>
                                            {item.link && item.link !== "#" && (
                                                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                            )}
                                        </div>
                                        
                                        {/* Title and Company */}
                                        <h3 className={cn(
                                            "font-semibold text-base mb-2 group-hover:text-primary transition-colors",
                                            isActive ? "text-foreground" : "text-muted-foreground"
                                        )}>
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                            <Briefcase size={12} />
                                            <span>{item.company}</span>
                                            <span>•</span>
                                            <MapPin size={12} />
                                            <span>{item.location}</span>
                                        </div>
                                        
                                        {/* Duration */}
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                            <Calendar size={10} />
                                            <span>{item.duration}</span>
                                        </div>
                                        
                                        {/* Description Preview */}
                                        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                                            {item.description}
                                        </p>
                                        
                                        {/* Skills Preview */}
                                        <div className="flex flex-wrap gap-1">
                                            {item.skills.slice(0, 3).map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex}
                                                    className={cn(
                                                        "text-xs px-1.5 py-0.5 rounded-full transition-all duration-300",
                                                        isActive 
                                                            ? "bg-primary/10 text-primary" 
                                                            : "bg-muted text-muted-foreground"
                                                    )}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {item.skills.length > 3 && (
                                                <span className="text-xs text-muted-foreground px-1.5 py-0.5">
                                                    +{item.skills.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* Click indicator */}
                                        <div className="mt-3 text-xs text-primary/70 text-center">
                                            Tap to learn more →
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Timeline Popup */}
            <TimelineCardPopup 
                experience={selectedExperience}
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
            />
        </section>
    );
};
