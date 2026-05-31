"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

export default function Contact() {
    console.log("My Key is:", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Replace this with your actual Web3Forms access key
    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                (event.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
            // Clear the success message after 5 seconds
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <section className="w-full py-36 flex justify-center">
            <div className="w-5/6 max-w-6xl gap-16 lg:gap-24">
                <h2 id="contact" className="text-4xl font-bold text-white mb-6 tracking-tight">
                    Let's <span className="bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">Keep in Touch</span>
                </h2>
                <div className="flex flex-row gap-10"> 
                    <div className="w-[40%]">
                        <p className="text-neutral-400 leading-relaxed text-lg mb-8">
                            I am currently seeking full-time software engineering opportunities where I can bridge the gap between intelligent, data-driven systems and seamless user experiences. Whether you are a recruiter hiring for a hybrid tech role, a team looking to collaborate, or just want to talk code, my inbox is always open. Let's build something great together!
                        </p>
                    </div>
                    <form onSubmit={onSubmit} className="w-[60%] flex flex-col gap-6">
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="name"
                                className="w-full bg-[#141F1A] border border-neutral-800 text-white placeholder-neutral-500 rounded-lg px-5 py-4 focus:outline-none focus:border-[#A1FFCE]/50 focus:ring-1 focus:ring-[#A1FFCE]/50 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="e-mail address"
                                className="w-full bg-[#141F1A] border border-neutral-800 text-white placeholder-neutral-500 rounded-lg px-5 py-4 focus:outline-none focus:border-[#A1FFCE]/50 focus:ring-1 focus:ring-[#A1FFCE]/50 transition-all"
                            />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="subject"
                                className="w-full bg-[#141F1A] border border-neutral-800 text-white placeholder-neutral-500 rounded-lg px-5 py-4 focus:outline-none focus:border-[#A1FFCE]/50 focus:ring-1 focus:ring-[#A1FFCE]/50 transition-all"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <textarea
                                name="message"
                                required
                                rows={6}
                                placeholder="message"
                                className="w-full bg-[#141F1A] border border-neutral-800 text-white placeholder-neutral-500 rounded-lg px-5 py-4 resize-none focus:outline-none focus:border-[#A1FFCE]/50 focus:ring-1 focus:ring-[#A1FFCE]/50 transition-all"
                            ></textarea>
                        </div>

                        {/* Submit Button & Status Message */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                            <span className="text-sm text-[#A1FFCE]">
                                {result}
                            </span>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="shrink-0 whitespace-nowrap w-full sm:w-auto px-8 py-4 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                )}
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}