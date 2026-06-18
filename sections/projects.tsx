import ProjectCard, { ProjectData } from "@/components/ui/projectCard";

// Your portfolio data (You can eventually move this to a separate data.ts file!)
const myProjects: ProjectData[] = [
  {
    title: "Interactive Developer Portfolio",
    description: "A premium personal portfolio website showcasing software engineering projects and technical skills, featuring custom-designed interactive components, fluid layout animations, and clean dark-mode aesthetics.",
    image: "image/project1-placeholder.png",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Web3Forms", "GitHub Actions"],
    githubUrl: "https://github.com/JoeyBae93/joeybae93.github.io",
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

          {/* Fallback "More Projects Coming Soon" Card */}
          <div className="group relative aspect-square w-full rounded-2xl border border-dashed border-neutral-800 bg-transparent flex flex-col items-center justify-center p-6 text-center select-none transition-all duration-500 hover:border-[#A1FFCE]/30 hover:bg-[#0A0F0D]/40">
            {/* Ambient background glow on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
              style={{ backgroundImage: "radial-gradient(circle at center, rgba(161,255,206,0.03) 0%, transparent 70%)" }} 
            />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Plus Icon */}
              <div className="w-12 h-12 rounded-full border border-dashed border-neutral-700 flex items-center justify-center text-neutral-600 mb-4 group-hover:border-[#A1FFCE]/40 group-hover:text-[#A1FFCE]/70 group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors duration-500 mb-2">
                More Projects Coming
              </h3>
              <p className="text-sm text-neutral-600 group-hover:text-neutral-500 transition-colors duration-500 max-w-[200px]">
                Active development in progress. Stay tuned for updates!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}