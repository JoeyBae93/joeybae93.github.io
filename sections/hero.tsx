import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="h-[calc(100vh-100px)] w-3/4 flex flex-row">
                <div className="w-[55%] flex flex-col justify-center">
                    <h1 className="text-5xl font-bold pb-8">
                        Hello 👋🏻, I'm {' '}
                        <span className="bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                            Joey Bae
                        </span>
                    </h1>
                    <p className="text-xl">
                        I am a Software Developer with strong passion for Front-End development, Data Science, and AI engineering, all backed by a professional foundation in Graphic Design.
                    </p>
                    <div className="pt-8 flex gap-4">
                        <a href="./public/JoeyBae_SWEngineer_2026.pdf" download>
                            <Button>Download Resume</Button>
                        </a>
                        <Link href="#contact">
                            <Button>Get in Touch</Button>
                        </Link>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center">
                    <Image
                        src="/image/profile_pic_v04.png"
                        width={400}
                        height={400}
                        className="w-full object-contain mask-[linear-gradient(to_bottom,black_70%,transparent_80%)]"
                        alt="Profile Image"
                        priority
                    />
                </div>
            </div>
        </main>
    );
}