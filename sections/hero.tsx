import Button from "@/components/ui/button";
import BackgroundEffect from "@/components/backgroundEffect";
import AutoTextRoll from "@/components/ui/autoTextRoll";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center relative">

            <div className="h-[calc(100vh-100px)] w-11/12 md:w-3/4 flex flex-col justify-center items-center z-10 relative">
                <div className="flex flex-row mb-4 items-center border border-white/10 bg-gray-900/80 px-4 py-2 rounded-full backdrop-blur-xs">
                    <p className="text-md font-bold text-[#F2F2F2]">
                        👋🏻 Hello! I'm Joey Bae, and I am...
                    </p>
                </div>
                <AutoTextRoll />
            </div>

            {/* Combined Background & Border Glow Container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[calc(100vh-100px)] w-[95%] md:w-5/6 rounded-b-[3rem] overflow-hidden pointer-events-none z-0">
                {/* Background Nebula & Stars */}
                <BackgroundEffect />

                {/* Bottom Border Glow Overlay */}
                <svg className="absolute inset-0 w-full h-full z-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="borderGlow" cx="50%" cy="100%" r="90%">
                            <stop offset="0%" stopColor="#A1FFCE" stopOpacity="1" />
                            <stop offset="40%" stopColor="#059669" stopOpacity="0.8" />
                            <stop offset="80%" stopColor="#022c22" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    <rect
                        x="1.5"
                        y="1.5"
                        width="calc(100% - 3px)"
                        height="calc(100% - 3px)"
                        style={{
                            rx: '3rem',
                            ry: '3rem',
                        }}
                        fill="none"
                        stroke="url(#borderGlow)"
                        strokeWidth="3"
                    />
                </svg>
            </div>
        </section>
    );
}