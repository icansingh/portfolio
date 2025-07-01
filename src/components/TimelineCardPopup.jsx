// src/components/TimelineCardPopup.jsx
import { X, ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export const TimelineCardPopup = ({ experience, isOpen, onClose }) => {
  if (!experience) return null;

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

        {/* Experience content */}
        <div className="p-6 md:p-8">
          {/* Header with centered duration badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1"></div> {/* Empty space on left */}
            <span className="text-lg font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {experience.duration}
            </span>
            <div className="flex-1 flex justify-end"> {/* Container for link on right */}
              {experience.link && experience.link !== "#" && (
                <a 
                  href={experience.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Visit Company</span>
                </a>
              )}
            </div>
          </div>

          {/* Title and company info */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{experience.title}</h2>
          
          <div className="flex items-center justify-center gap-4 mb-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Briefcase size={16} />
              <span className="text-sm">{experience.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Key responsibilities/achievements */}
          {experience.achievements && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Key Achievements</h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {experience.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
