import { useState } from "react";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { ProjectCardPopup } from "./ProjectCardPopup";
import { ImageCarousel } from "./ImageCarousel";

const projects = [
    {
        id: 1,
        title: "Marvel Movie Bot",
        description: "A Marvel chatbot using RAG and LLaMA that answers questions and roleplays as Jarvis, Hulk, Captain America, or Black Panther.",
        longDescription: "This Marvel-themed chatbot uses a Retrieval-Augmented Generation (RAG) pipeline connected to a vector store containing scripts from 19 Marvel movies (sourced from Kaggle). Powered by a local LLaMA model via Ollama, it can answer detailed, contextual questions about the Marvel Cinematic Universe. It also features a character mode, allowing users to receive responses styled after Jarvis, Captain America, Hulk, or Black Panther. The backend was developed using Python and FastAPI, exposed via ngrok, with a React frontend deployed on Vercel.",
        images: [
            "/Projects/soccer_analysis_system.png"
        ],
        tags: ["Python", "OpenCV", "YOLO"],
        demoURL: "link",
        githubURL: "https://github.com/icansingh/Soccer-Analysis-System"
    },
    {
        id: 2,
        title: "Soccer Analysis System",
        description: "A soccer analysis tool that uses machine learning to track a game in real time",
        longDescription: "A comprehensive soccer analysis tool that uses machine learning and computer vision to track games in real-time. The system provides detailed player movement analysis, ball tracking, and tactical insights for coaches and analysts. Built with Python, OpenCV, and YOLO object detection, this project demonstrates advanced computer vision techniques applied to sports analytics.",
        images: [
            "/Projects/soccer_analysis_system.png"
        ],
        tags: ["Python", "OpenCV", "YOLO"],
        demoURL: "link",
        githubURL: "https://github.com/icansingh/Soccer-Analysis-System"
    },
    {
        id: 3,
        title: "Mind Pilot",
        description: "Human-Computer Interface using EEG Signals",
        longDescription: "An innovative Human-Computer Interface that uses EEG signals to control applications. This project combines neuroscience and technology to create a new way of interacting with computers through brain signals. The system processes real-time EEG data using active reinforcement learning algorithms to interpret user intentions and translate them into computer commands. This breakthrough technology opens up new possibilities for accessibility and human-computer interaction.",
        images: [
            "/Projects/project2.jpg",
            "/Projects/project1.jpg",
            "/Projects/project3.jpg"
        ],
        tags: ["Python", "Active Reinforcement Learning", "OpenCV"],
        demoURL: "https://devpost.com/software/eye-pilot",
        githubURL: "https://github.com/Arber-Shala/mind-pilot"
    },
    {
        id: 4,
        title: "Fly Chicken Fly!",
        description: "A platformer game built in Unity",
        longDescription: "A charming platformer game built in Unity featuring a chicken protagonist. The game includes custom audio design, smooth animations, and engaging gameplay mechanics that provide hours of entertainment. Players navigate through various levels, collect items, and overcome obstacles while enjoying the whimsical art style and responsive controls. The project showcases game development skills including C# programming, Unity engine mastery, and audio design principles.",
        images: [
            "/Projects/fly_chicken_fly.png",
            "/Projects/project3.jpg",
            "/Projects/project1.jpg"
        ],
        tags: ["Unity", "C#", "Audio Design"],
        demoURL: "link",
        githubURL: "https://github.com/Project250-SkyForm/Fly-Chicken-Fly"
    },
    {
        id: 4,
        title: "Event Management App",
        description: "An event management app with check-ins, custom event creation, and real-time notifications, built in a team using SCRUM.",
        longDescription: "QrazyQRsRUs is a full-featured event management application that allows users to discover, attend, and create events. The platform supports check-ins, event browsing, and user-specific event management. Built collaboratively in a team setting using the SCRUM framework, I contributed to designing and implementing the real-time notification system using Firestore’s notification features. I also wrote unit tests and helped validate the overall system functionality through end-to-end testing. The project was presented successfully and received an excellent grade.",
        images: [
            "/Projects/fly_chicken_fly.png",
            "/Projects/project3.jpg",
            "/Projects/project1.jpg"
        ],
        tags: ["Unity", "C#", "Audio Design"],
        demoURL: "link",
        githubURL: "https://github.com/Project250-SkyForm/Fly-Chicken-Fly"
    }
];

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Click on any card to learn more about the technology, 
                    challenges, and solutions behind each project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="h-48 overflow-hidden">
                                <ImageCarousel 
                                    images={project.images} 
                                    autoPlay={true}
                                    interval={4000}
                                    showControls={false}
                                    className="h-full"
                                    onClick={() => handleProjectClick(project)}
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex justify-center">
                                    <div className="flex space-x-3">
                                        {project.demoURL && project.demoURL !== "link" && (
                                            <a 
                                                href={project.demoURL} 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubURL} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <GithubIcon size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/icansingh"
                    >
                        My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>

            {/* Project Popup */}
            <ProjectCardPopup 
                project={selectedProject}
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
            />
        </section>
    );
};