import { useState } from "react";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { ProjectCardPopup } from "./ProjectCardPopup";

const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "A soccer analysis tool that uses machine learning to track a game in real time",
        longDescription: "A comprehensive soccer analysis tool that uses machine learning and computer vision to track games in real-time. The system provides detailed player movement analysis, ball tracking, and tactical insights for coaches and analysts. Built with Python, OpenCV, and YOLO object detection, this project demonstrates advanced computer vision techniques applied to sports analytics.",
        image: "/Projects/project1.jpg",
        tags: ["Python", "OpenCV", "YOLO"],
        demoURL: "link",
        githubURL: "https://github.com/icansingh/Soccer-Analysis-System"
    },
    {
        id: 2,
        title: "Mind Pilot",
        description: "Human-Computer Interface using EEG Signals",
        longDescription: "An innovative Human-Computer Interface that uses EEG signals to control applications. This project combines neuroscience and technology to create a new way of interacting with computers through brain signals. The system processes real-time EEG data using active reinforcement learning algorithms to interpret user intentions and translate them into computer commands. This breakthrough technology opens up new possibilities for accessibility and human-computer interaction.",
        image: "/Projects/project2.jpg",
        tags: ["Python", "Active Reinforcement Learning", "OpenCV"],
        demoURL: "link",
        githubURL: "https://github.com/Arber-Shala/mind-pilot"
    },
    {
        id: 3,
        title: "Fly Chicken Fly!",
        description: "A platformer game built in Unity",
        longDescription: "A charming platformer game built in Unity featuring a chicken protagonist. The game includes custom audio design, smooth animations, and engaging gameplay mechanics that provide hours of entertainment. Players navigate through various levels, collect items, and overcome obstacles while enjoying the whimsical art style and responsive controls. The project showcases game development skills including C# programming, Unity engine mastery, and audio design principles.",
        image: "/Projects/project3.jpg",
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
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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