import { cn } from "@/lib/utils";
import { useState } from "react";
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

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedExperience(null);
    };

    return (
        <section id="timeline" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Journey</span>
                </h2>
                
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    A timeline of my professional experience and academic achievements. 
                    Click on any experience to learn more about my role, achievements, and the technologies I worked with.
                </p>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                    
                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <div 
                                key={item.id}
                                className={cn(
                                    "relative flex items-center",
                                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                )}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                                
                                {/* Content Card */}
                                <div className={cn(
                                    "w-5/12 p-6",
                                    index % 2 === 0 ? "pr-8" : "pl-8"
                                )}>
                                    <div 
                                        className="gradient-border p-6 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:scale-[1.02] hover:shadow-lg group"
                                        onClick={() => handleExperienceClick(item)}
                                    >
                                        {/* Year Badge */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                            {item.link && item.link !== "#" && (
                                                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                            )}
                                        </div>
                                        
                                        {/* Title and Company */}
                                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
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
                                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
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
                        ))}
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
