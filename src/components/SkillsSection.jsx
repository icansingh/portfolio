import { useState } from "react"
import { cn } from "@/lib/utils"
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import FirebaseOriginal from 'devicons-react/icons/FirebaseOriginal';
import DynamodbOriginal from 'devicons-react/icons/DynamodbOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';

import Html5Original from 'devicons-react/icons/Html5Original';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';

import COriginal from 'devicons-react/icons/COriginal';
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import JavaOriginal from 'devicons-react/icons/JavaOriginal';
import JunitOriginal from 'devicons-react/icons/JunitOriginal';

import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import DockerPlain from 'devicons-react/icons/DockerPlain';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import AmazonwebservicesPlainWordmark from 'devicons-react/icons/AmazonwebservicesPlainWordmark';

import NumpyOriginal from 'devicons-react/icons/NumpyOriginal';
import PandasOriginal from 'devicons-react/icons/PandasOriginal';
import MatplotlibOriginal from 'devicons-react/icons/MatplotlibOriginal';
import OpencvOriginal from 'devicons-react/icons/OpencvOriginal';
import VercelOriginal from 'devicons-react/icons/VercelOriginal';
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal';

import PytorchOriginal from 'devicons-react/icons/PytorchOriginal';
import TensorflowOriginal from 'devicons-react/icons/TensorflowOriginal';
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal';
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal';
import TrelloOriginal from 'devicons-react/icons/TrelloOriginal';
import Css3Original from 'devicons-react/icons/Css3Original';
import { BsGearFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { Network, Brain, Star, BarChart3, MessageSquare, TrendingUp, Target, Zap, Database, Server, Users, Calendar, CheckSquare, ClipboardList, Github } from "lucide-react";




// Icon mapping for skills
const skillIcons = {
    "Python": PythonOriginal,
    "Java": JavaOriginal,
    "JavaScript": JavascriptOriginal,
    "C": COriginal,
    "C#": CsharpOriginal,
    "HTML/CSS": Html5Original,
    "React.js": ReactOriginal,
    "GitHub": Github,
    "Docker": DockerPlain,
    "AWS Lambda": AmazonwebservicesPlainWordmark,
    "AWS DynamoDB": DynamodbOriginal,
    "MongoDB": MongodbOriginal,
    "SQL": Database,
    "Firestore": FirebaseOriginal,
    "NumPy": NumpyOriginal,
    "Pandas": PandasOriginal,
    "Matplotlib": MatplotlibOriginal,
    "OpenCV": OpencvOriginal,
    "PyTorch": PytorchOriginal,
    "TensorFlow": TensorflowOriginal,
    "Vercel": VercelOriginal,
    "Vite": VitejsOriginal,
    "REST APIs": BsGearFill,
    "RAG Pipelines": Network,
    "JUnit": JunitOriginal,
    "Recommendation Systems": TrendingUp,
    "Computer Vision": OpencvOriginal,
    "Natural Language Processing": GiBrain,
    "SCRUM": Users,
    "Tailwind CSS": TailwindcssOriginal
}


const skills = [
    // Databases
    {name: "SQL", level: 14, category: "databases"},
    {name: "Firestore", level: 2, category: "databases"},
    {name: "AWS DynamoDB", level: 45, category: "databases"},
    {name: "MongoDB", level: 45, category: "databases"},

    // Frontend
    {name: "HTML/CSS", level: 14, category: "frontend"},
    {name: "JavaScript", level: 44, category: "frontend"},
    {name: "React.js", level: 67, category: "frontend"},
    {name: "Tailwind CSS", level: 64, category: "frontend"},

    // Backend
    {name: "Python", level: 95, category: "backend"},
    {name: "Java", level: 13, category: "backend"},
    {name: "C", level: 13, category: "backend"},
    {name: "C#", level: 13, category: "backend"},
    {name: "REST APIs", level: 95, category: "backend"},
    {name: "RAG Pipelines", level: 95, category: "backend"},
    {name: "JUnit", level: 95, category: "backend"},
    

    // Tools
    {name: "GitHub", level: 12, category: "tools"},
    {name: "Docker", level: 16, category: "tools"},
    {name: "AWS Lambda", level: 24, category: "tools"},
    {name: "NumPy", level: 45, category: "tools"},
    {name: "Pandas", level: 45, category: "tools"},
    {name: "Matplotlib", level: 45, category: "tools"},
    {name: "OpenCV", level: 45, category: "tools"},
    {name: "Vercel", level: 45, category: "tools"},
    {name: "Vite", level: 45, category: "tools"},
    {name: "SCRUM", level: 57, category: "tools"},

    // AI
    {name: "PyTorch", level: 74, category: "AI"},
    {name: "TensorFlow", level: 74, category: "AI"},
    {name: "Recommendation Systems", level: 100, category: "AI"},
    {name: "Computer Vision", level: 64, category: "AI"},
    {name: "Natural Language Processing", level: 50, category: "AI"},
]

const categories = ["all", "backend", "AI", "databases", "tools", "frontend"]
export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("backend")

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
                {filteredSkills.map((skill, key) => {
                    const IconComponent = skillIcons[skill.name]
                    return (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-center">
                                {IconComponent && (
                                    <div className="mb-3 flex justify-center">
                                        <IconComponent size={40} />
                                    </div>
                                )}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </section>)
}