import Image from "next/image";

export interface ExperienceData {
    company: string;
    role: string;
    type: string;
    startDate: string;
    endDate?: string;
    logo: string;
    location?: string;
    link?: string;
    description: string;
    techStack: string[];
}

export default function ExperienceCard({ experience }: { experience: ExperienceData }) {
    return (
        <div className="w-full flex flex-col sm:flex-row gap-6">
            
            {/* 1. THE LOGO BOX: Strict dimensions, relative positioning, and shrink-0 */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl border border-neutral-800 bg-[#0A0F0D] overflow-hidden">
                <Image 
                    src={experience.logo} 
                    alt={experience.company} 
                    fill
                    className="object-contain p-2 sm:p-3" 
                />
            </div>

            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <div className="flex flex-row flex-wrap gap-2 text-sm">
                        <p className="text-neutral-400">{experience.company}</p>
                        <p className="text-neutral-600">•</p>
                        <p className="text-neutral-400">{experience.type}</p>
                        <p className="text-neutral-600 hidden sm:block">•</p>
                        <div className="text-neutral-400 w-full sm:w-auto mt-1 sm:mt-0">
                            {experience.startDate} ~ {experience.endDate || "Present"}
                        </div>
                    </div>
                </div>
                
                <p className="text-neutral-300 leading-relaxed">
                    {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                    {experience.techStack.map((tech, index) => (
                        <span key={index} className="rounded-md bg-[#141F1A] border border-emerald-950/50 px-2.5 py-1 text-xs font-medium text-[#A1FFCE]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}