import ProjectCard, { ProjectData } from "@/components/ui/projectCard";

// Your portfolio data (You can eventually move this to a separate data.ts file!)
const myProjects: ProjectData[] = [
  {
    title: "Interactive Developer Portfolio",
    description: "A premium personal portfolio website showcasing software engineering projects and technical skills, featuring custom-designed interactive components, fluid layout animations, and clean dark-mode aesthetics.",
    image: "image/project1-placeholder.png",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Web3Forms", "GitHub Actions"],
    githubUrl: "https://github.com/JoeyBae93/11_PersonalWebsite",
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
    <div id="projects" className="w-full pt-36 flex flex-col items-center">
      <h2 className="text-6xl font-bold mb-16 bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
        PROJECTS
      </h2>
        
      <div className="w-3/4 max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Map through the array and render a card for each project */}
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>

      </div>
    </div>
  );
}