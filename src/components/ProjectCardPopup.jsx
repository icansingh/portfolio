import { X, ExternalLink, GithubIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "./ImageCarousel";

// Tech stack icons mapping
const techIcons = {
  "Python": "🐍",
  "OpenCV": "📷", 
  "YOLO": "🤖",
  "Unity": "🎮",
  "C#": "💎",
  "Audio Design": "🎵",
  "Active Reinforcement Learning": "🧠",
  "React": "⚛️",
  "JavaScript": "📜",
  "TypeScript": "",
  "Node.js": "",
  "MongoDB": "🍃",
  "PostgreSQL": "",
  "Docker": "",
  "AWS": "☁️",
  "Firebase": "🔥",
  "Tailwind": "🎨",
  "Vite": "⚡"
};

export const ProjectCardPopup = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <div className={cn(
      "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4",
      "transition-all duration-500",
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      {/* Popup content */}
      <div className={cn(
        "bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
        "transform transition-all duration-500",
        isOpen ? "scale-100" : "scale-95"
      )}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-foreground/80 hover:text-primary transition-colors duration-300 z-10 bg-card/80 backdrop-blur-sm rounded-full"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Project image */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl">
          <ImageCarousel 
            images={project.images} 
            autoPlay={true}
            interval={5000}
            showControls={true}
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Project content */}
        <div className="p-6 md:p-8">
          {/* Title and description */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{project.title}</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full">
                  <span className="text-lg">{techIcons[tag] || "🔧"}</span>
                  <span className="text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.demoURL === "link" ? "#" : project.demoURL}
              target={project.demoURL === "link" ? "_self" : "_blank"}
              rel={project.demoURL === "link" ? "" : "noopener noreferrer"}
              className={cn(
                "cosmic-button flex items-center justify-center gap-2",
                project.demoURL === "link" && "opacity-50 cursor-not-allowed"
              )}
              onClick={project.demoURL === "link" ? (e) => e.preventDefault() : undefined}
              title={project.demoURL === "link" ? "Demo coming soon!" : "View live demo"}
            >
              <Play size={16} />
              {project.demoURL === "link" ? "Demo Coming Soon" : "Live Demo"}
            </a>
            
            {project.githubURL && (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center justify-center gap-2 bg-card border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <GithubIcon size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
