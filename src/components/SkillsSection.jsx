import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    // Frontend
    {name: "HTML/CSS", level: 14, category: "frontend"},
    {name: "JavaScript", level: 44, category: "frontend"},
    {name: "React", level: 67, category: "frontend"},
    {name: "Next.js", level: 32, category: "frontend"},
    {name: "Tailwind CSS", level: 64, category: "frontend"},
    {name: "TypeScript", level: 34, category: "frontend"},

    // Backend
    {name: "Node.js", level: 13, category: "backend"},
    {name: "MongoDB", level: 2, category: "backend"},
    {name: "Python", level: 95, category: "backend"},

    // Tools
    {name: "GitHub", level: 12, category: "tools"},
    {name: "Docker", level: 16, category: "tools"},
    {name: "AWS", level: 24, category: "tools"},
    {name: "Lambda", level: 45, category: "tools"},
    {name: "Cloudflare", level: 57, category: "tools"},

    // AI
    {name: "Machine Learning", level: 74, category: "AI"},
    {name: "Deep Learning", level: 100, category: "AI"},
    {name: "Computer Vision", level: 64, category: "AI"},
    {name: "Natural Language Processing", level: 50, category: "AI"},
]

const categories = ["all", "frontend", "backend", "tools", "AI"]
export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
    <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skils </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 transition-colors rounded-full duration-300 capitalize",
                        activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                            style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}% </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>)
}