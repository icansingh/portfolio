import { useState } from "react";
import { ArrowRight, ExternalLink, GithubIcon, Link, Play } from "lucide-react";
import { ProjectCardPopup } from "./ProjectCardPopup";
import { ImageCarousel } from "./ImageCarousel";

const projects = [
    {
        id: 1,
        title: "Marvel Movie Bot",
        description: "A Marvel chatbot using RAG and LLaMA that answers questions and roleplays as Jarvis, Hulk, Captain America, or Black Panther.",
        longDescription: "This Marvel-themed chatbot uses a Retrieval-Augmented Generation (RAG) pipeline connected to a vector store containing scripts from 19 Marvel movies (sourced from Kaggle). Powered by a local LLaMA model via Ollama, it can answer detailed, contextual questions about the Marvel Cinematic Universe. It also features a character mode, allowing users to receive responses styled after Jarvis, Captain America, Hulk, or Black Panther. The backend was developed using Python and FastAPI, exposed via ngrok, with a React frontend deployed on Vercel.",
        images: [
            "/Projects/marvel_movie_bot/image_1.png",
            "/Projects/marvel_movie_bot/image_2.png"
        ],
        tags: ["Python", "OpenCV", "YOLO"],
        linkURL: "https://marvel-movie-bot.vercel.app",
        demoURL: "N/A",
        githubURL: "https://github.com/icansingh/Soccer-Analysis-System"
    },
    {
        id: 2,
        title: "Soccer Analysis System",
        description: "A soccer analysis tool that uses YOLO and OpenCV to track players and calculate live stats like speed and possession.",
        longDescription: "This soccer analysis system uses YOLO for real-time object detection and OpenCV for visual tracking and annotation. It identifies all players on the field, marks them with circular overlays, highlights the player in possession with a pointer, and tracks the ball itself. The system also computes dynamic match statistics, including player positions, speeds, and possession metrics.",
        images: [
            "/Projects/soccer_analysis_system/image_1.png"
        ],
        tags: ["Python", "OpenCV", "YOLO"],
        linkURL: "N/A",
        demoURL: "link",
        githubURL: "https://github.com/icansingh/Soccer-Analysis-System"
    },
    {
        id: 3,
        title: "Mind Pilot",
        description: "A neurotech hackathon project that maps facial movements and EEG signals to mouse controls.",
        longDescription: "Mind Pilot is a human-computer interface developed for Nathacks, a neurotech-focused hackathon. The system combines real-time reinforcement learning with facial and EEG signal processing to allow users to control a computer using only their nose and eyebrow movements. Using the Hecatron library, we trained an agent to recognize EEG patterns (such as an eyebrow raise) as a mouse click. The model trains in minutes, enabling users to customize which EEG signals correspond to specific actions. OpenCV was used to track the nose as a mouse pointer.",
        images: [
            "/Projects/mind_pilot/image_1.png",
            "/Projects/mind_pilot/image_2.png",
            "/Projects/mind_pilot/image_3.jpg"
        ],
        tags: ["Python", "Active Reinforcement Learning", "OpenCV"],
        linkURL: "N/A",
        demoURL: "https://devpost.com/software/eye-pilot",
        githubURL: "https://github.com/Arber-Shala/mind-pilot"
    },
    {
        id: 4,
        title: "Fly Chicken Fly!",
        description: "A Unity-based platformer game with award-winning audio design and collaborative gameplay development.",
        longDescription: "This platformer game was developed as part of a course project and deployed on Itch.io. Built in Unity using C#, it was a collaborative team effort where I led the audio design and implementation. I created, edited, and integrated all in-game sound effects and background music using Audacity and Logic Pro. I also contributed to the development of core gameplay mechanics. Our game received an award for Best Audio Design, standing out among all games in the course.",
        images: [
            "/Projects/fly_chicken_fly/image_1.png",
            "/Projects/fly_chicken_fly/image_2.png",
            "/Projects/fly_chicken_fly/image_3.png"
        ],
        tags: ["Unity", "C#", "Audio Design"],
        linkURL: "https://saveqaq.itch.io/gold-release",
        demoURL: "N/A",
        githubURL: "https://github.com/Project250-SkyForm/Fly-Chicken-Fly"
    },
    {
        id: 5,
        title: "Event Management App",
        description: "An event management app with check-ins, custom event creation, and real-time notifications",
        longDescription: "QrazyQRsRUs is a full-featured event management application that allows users to discover, attend, and create events. The platform supports check-ins, event browsing, and user-specific event management. Built collaboratively in a team setting using the SCRUM framework, I contributed to designing and implementing the real-time notification system using Firestore’s notification features. I also wrote unit tests and helped validate the overall system functionality through end-to-end testing. The project was presented successfully and received an excellent grade.",
        images: [
            "/Projects/event_management_app/image_1.png",
            "/Projects/event_management_app/image_2.png"
        ],
        tags: ["Unity", "C#", "Audio Design"],
        linkURL: "N/A",
        demoURL: "link",
        githubURL: "https://github.com/Project250-SkyForm/Fly-Chicken-Fly"
    },
    {
        id: 6,
        title: "Portfolio",
        description: "A personal portfolio website built with React and Tailwind, featuring a timeline, contact form, and fun animations.",
        longDescription: "This is my personal portfolio website, originally inspired by a YouTube tutorial from PedroTech but significantly enhanced with a custom UI and added features. I introduced a professional timeline section to showcase my experience, a functioning contact form integrated with EmailJS for real-time message handling, and a unique visual flair with interactive supernovae explosion effects. The project is built with React and styled using Tailwind CSS, with a focus on responsiveness and smooth user experience.",
        images: [
            "/Projects/portfolio/image_1.png",
        ],
        tags: ["React", "Tailwind CSS", "EmailJS", "Vercel"],
        linkURL: "#home",
        demoURL: "N/A",
        githubURL: "https://github.com/icansingh/portfolio"
    },
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
                                    interval={5000}
                                    showControls={false}
                                    className="h-full"
                                    transitionDuration={3000} 
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
                                        {project.linkURL && project.linkURL !== "N/A" && (
                                            <a 
                                                href={project.linkURL} 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target={project.linkURL.startsWith("#") ? "_self" : "_blank"}
                                                onClick={(e) => e.stopPropagation()}
                                                title="View Project"
                                            >
                                                <Link size={20}/>
                                            </a>
                                        )}
                                        {project.demoURL && project.demoURL !== "N/A" && (
                                            <a 
                                                href={project.demoURL === "link" ? "#" : project.demoURL} 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target={project.demoURL === "link" ? "_self" : "_blank"}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (project.demoURL === "link") {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                title={project.demoURL === "link" ? "Demo coming soon!" : "Live Demo"}
                                            >
                                                <Play size={20}/>
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubURL} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                            title="View Code"
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