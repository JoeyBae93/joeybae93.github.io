import ProjectCard, { ProjectData } from "@/components/ui/projectCard";

// Your portfolio data (You can eventually move this to a separate data.ts file!)
const myProjects: ProjectData[] = [
  {
    title: "AI Dungeon Master Assistant",
    description: "An AI-driven tool for tabletop RPGs that dynamically generates campaign scenarios, NPC dialogue, and encounter scaling using advanced NLP models.",
    image: "image/project1-placeholder.png", // Make sure to add a real image path!
    techStack: ["Python", "Next.js", "PyTorch", "Tailwind CSS"],
    githubUrl: "https://github.com/joeybae/repo",
  },
  {
    title: "Automated Content Pipeline",
    description: "A fully automated workflow utilizing n8n and Hunch APIs to generate, process, and distribute creative media assets without human intervention.",
    image: "image/project2-placeholder.png",
    techStack: ["n8n", "Docker", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/joeybae/repo",
  },
  {
    title: "Predictive Market Model",
    description: "Built during my Research Assistant role, utilizing Long Short-Term Memory (LSTM) models and Prophet to analyze and predict dataset trends.",
    image: "image/project3-placeholder.png",
    techStack: ["Python", "LSTM", "Data Science", "SQL"],
  }
];

export default function Projects() {
  return (
    <section className="w-full pt-36 flex flex-col items-center">
      <div className="w-3/4 max-w-7xl">
        
        {/* Section Header */}
        <h2 id="projects" className="text-4xl font-bold mb-12 text-white">
          Selected <span className="bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">Projects</span>
        </h2>

        {/* The Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Map through the array and render a card for each project */}
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>

      </div>
    </section>
  );
}