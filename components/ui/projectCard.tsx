"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

export interface ProjectData {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-[#0A0F0D] transition-all duration-500 hover:border-[#A1FFCE]/50 hover:shadow-[0_0_30px_rgba(161,255,206,0.1)]">
                {/* Project Image */}
                {project.image.includes("placeholder") ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050807] p-6 text-center select-none">
                        <div className="absolute inset-0 opacity-45" 
                             style={{ backgroundImage: "radial-gradient(circle at center, rgba(161,255,206,0.1) 0%, transparent 70%)" }} />
                        <svg className="w-12 h-12 mb-3 text-[#A1FFCE]/20 group-hover:text-[#A1FFCE]/40 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                        </svg>
                        <span className="text-xs uppercase tracking-widest text-[#A1FFCE]/40 font-bold group-hover:text-[#A1FFCE]/60 transition-colors">
                            Preview Coming Soon
                        </span>
                    </div>
                ) : (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}

                {/* Gradient Overlay (Makes text readable) */}
                <div className="absolute inset-0 bg-linear-to-t from-[#060A08] via-[#060A08]/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                {/* Card Content (Bottom Aligned) */}
                <div className="absolute bottom-0 left-0 flex w-full flex-col p-6 transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-[#A1FFCE] transition-colors line-clamp-2 h-16 flex items-end">
                        {project.title}
                    </h3>
          
                    {/* Tech Stack Preview */}
                    <div className="flex items-center gap-2 mt-1 h-6 w-full overflow-hidden text-sm text-neutral-400 font-medium">
                        <span className="truncate group-hover:text-white transition-colors duration-500">
                            {project.techStack.slice(0, 3).join(" • ")}
                        </span>
                        {project.techStack.length > 3 && (
                            <span className="shrink-0 rounded-full bg-neutral-900 border border-neutral-800/80 px-2 py-0.5 text-[10px] font-semibold group-hover:text-white transition-colors">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* ============================== */}
            {/* THE MODAL (The Pop-up Window)  */}
            {/* ============================== */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
                    {/* Blurred Backdrop (Clicks outside close the modal) */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content Box */}
                    <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0A0F0D] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
                        {/* Close Button (X icon) */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-gray-400 hover:text-white hover:bg-black transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Modal Image Header */}
                        <div className="relative h-64 w-full sm:h-80 select-none">
                            {project.image.includes("placeholder") ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050807] p-6 text-center select-none">
                                    <div className="absolute inset-0 opacity-45" 
                                         style={{ backgroundImage: "radial-gradient(circle at center, rgba(161,255,206,0.12) 0%, transparent 75%)" }} />
                                    <svg className="w-14 h-14 mb-3 text-[#A1FFCE]/25" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-widest text-[#A1FFCE]/45 font-bold">
                                        Preview Coming Soon
                                    </span>
                                </div>
                            ) : (
                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0F0D] to-transparent" />
                        </div>

                        {/* Modal Text Body */}
                        <div className="px-8 pb-8 pt-4">
                            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              
                            {/* Full Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="rounded-2xl bg-[#141F1A] border border-emerald-950/50 px-3 py-1 text-sm font-medium text-[#A1FFCE]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        <Button>View Source Code</Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        <Button className="opacity-70 hover:opacity-100">Live Demo</Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}