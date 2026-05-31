import ExperienceCard, { ExperienceData } from "@/components/ui/experienceCard";

const myExperiences: ExperienceData[] = [
    {
        company: "Liberty University",
        role: "Research Assistant",
        type: "Part-time",
        logo: "/image/lu_logo.jpg",
        location: "Lynchburg, VA, USA",
        startDate: "March 2024",
        endDate: "May 2026",
        description: "Provided research support, specializing in the customization and rigorous validation of machine learning models for academic projects. Managed and prepared extensive datasets (approx. 10k entries), strategically improved model performance through intensive code review, and executed over 100 validation trials to ensure accuracy. Contributed to the dissemination of research by presenting findings at key conferences (e.g., Probabilistic Mechanics & Reliability Conference).",
        techStack: ["Python", "PyTorch", "MATLAB", "Pandas", "NumPy", "Fully Connected Neural Network", "Long Short-term Memory", "Data Analysis", "Machine Learning"]
    },
    {
        company: "Trans World Radio",
        role: "Digital Ministry Innovation Team Intern",
        type: "Full-time",
        logo: "/image/twr_logo.jpeg",
        location: "Cary, NC, USA",
        startDate: "May 2025",
        endDate: "August 2025",
        description: "Engineered and deployed an advanced suite of AI automation workflows using n8n, Hunch, and custom JavaScript scripting to streamline media production. This included developing systems for podcast and video generation, creating an AI-driven script evaluation tool, and building FFmpeg/JavaScript media processing solutions to programmatically compile complete video content. Managed and debugged critical API integrations (Google, Microsoft Azure, ElevenLabs) and researched cutting-edge AI tools (RunwayML, HeyGen) for content optimization.",
        techStack: ["n8n", "Hunch", "JavaScript", "REST API", "Ffmpeg", "Docker", "AI Automation", "API Integration", "Script Development"]
    }
]

export default function Experiences() {
    return (
        <div className="w-full flex flex-col items-center pt-36">
            <div className="w-3/4">
                <h2 id="experiences" className="text-4xl font-bold mb-12">Work <span className="bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">Experience</span></h2>
                <div className="flex flex-col gap-12">
                    {/* Map through the array and render a card for each experience */}
                    {myExperiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}