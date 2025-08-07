import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { TimelineCardPopup } from "./TimelineCardPopup";

// Enhanced timeline data with more details
const timelineData = [
    {
        id: 1,
        year: "2025",
        title: "AI Developer",
        company: "So Shall We Inc.",
        location: "Remote - Australia",
        duration: "Dec 2024 - Present",
        description: "Built real-time AI tools for Shopify-based commerce.",
        achievements: [
            "Designed and deployed a recommendation engine for ~250 products using TF-IDF and cosine similarity.",
            "Developed a RAG pipeline using AWS Lambda, DynamoDB, and the Shopify API.",
            "Automated monthly product data updates to adapt to evolving user preferences."
        ],
        skills: ["Python", "AWS (Lambda, DynamoDB)", "Shopify API", "Docker", "TF-IDF", "Cosine Similarity", "RAG Pipelines"],
        link: "#"
    },
    {
        id: 2,
        year: "2024",
        title: "Software Developer",
        company: "University of Alberta",
        location: "Edmonton, AB",
        duration: "May 2024 - Present",
        description: "NLP research on semantic processing in Alzheimer's patients.",
        achievements: [
            "Led preprocessing of ~8,000 datapoints across 242 .cha files using Python and Pandas.",
            "Applied cosine similarity to measure semantic distance in verbal fluency responses.",
            "Investigated semantic granularity and embedding models to extract lexical features."
        ],
        skills: ["Python", "Pandas", "Natural Language Processing (NLP)", "Cosine Similarity", "Data Preprocessing"],
        link: "#"
    },
    {
        id: 3,
        year: "2024",
        title: "Computer Vision Research Assistant",
        company: "University of Alberta",
        location: "Edmonton, AB",
        duration: "May 2024 - Dec 2024",
        description: "MRI-based classification of learning impairments using deep learning.",
        achievements: [
            "Built a CNN with Multi-Instance Learning in TensorFlow for patient classification.",
            "Processed over 8,000 3D MRI scans, automating parsing and cropping.",
            "Used SHAP, Grad-CAM, LIME, and Saliency Maps for model explainability.",
            "Regularized model using data augmentation, L2, k-fold, and LOO cross-validation."
        ],
        skills: ["TensorFlow", "Python", "Convolutional Neural Networks (CNN)", "Multi-Instance Learning", "SHAP", "Grad-CAM", "LIME", "Data Augmentation"],
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
                    A timeline of my professional and academic experience. 
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
                                        "w-5/12 p-6 transition-all duration-500 relative z-20",
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
                                            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                <Briefcase size={14} />
                                                <span>{item.company}</span>
                                                <span>•</span>
                                                <MapPin size={14} />
                                                <span>{item.location}</span>
                                            </div> */}
                                            
                                            {/* Duration */}
                                            {/* <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                                <Calendar size={12} />
                                                <span>{item.duration}</span>
                                            </div> */}
                                            
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
                                        {/* <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                            <Briefcase size={12} />
                                            <span>{item.company}</span>
                                            <span>•</span>
                                            <MapPin size={12} />
                                            <span>{item.location}</span>
                                        </div> */}
                                        
                                        {/* Duration */}
                                        {/* <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                            <Calendar size={10} />
                                            <span>{item.duration}</span>
                                        </div> */}
                                        
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
