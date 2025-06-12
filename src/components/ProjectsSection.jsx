
const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "A soccer analysis tool that uses machine learning to track a game in real time",
        image: "/projects/project1.png",
        tags: ["Python", "OpenCV", "YOLO"],
        demoURL: "link",
        githubURL: "https://github.com/ikjyot-singh/soccer-analysis-tool"
    },
    {
        id: 2,
        title: "Mind Pilot",
        description: "Human-Computer Interface using EEG Signals",
        image: "/projects/project2.png",
        tags: ["Python", "Active Reinforcement Learning", "OpenCV"],
        demoURL: "link",
        githubURL: "https://github.com/ikjyot-singh/mind-pilot"
    },
    {
        id: 3,
        title: "Fly Chicken Fly!",
        description: "A platformer game built in Unity",
        image: "/projects/project3.png",
        tags: ["Unity", "C#", "Audio Design"],
        demoURL: "link",
        githubURL: "https://github.com/ikjyot-singh/fly-chicken-fly"
    }
]



export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4"> Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Wooooo here is some stuff I have worked on recently. Each project aekdjaledjalklekd
                kaejdlakedlkaedj has a buynch of shit yayyyy.
            </p>

            
        </div>

    </section>)
}