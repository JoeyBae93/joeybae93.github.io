import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center justify-center">
            <h2 id="aboutMe" className="text-6xl font-bold mt-36 bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                ABOUT ME
            </h2>
            
            <div className="h-auto w-3/4 flex flex-row mt-12 items-center gap-8">
                {/* Profile Image Column */}
                <div className="w-[45%] flex justify-center">
                    <Image
                        src="image/profile_pic_v04.png"
                        width={400}
                        height={400}
                        className="w-full object-contain mask-[linear-gradient(to_bottom,black_70%,transparent_80%)]"
                        alt="Profile Image"
                        priority
                    />
                </div>
                
                {/* Text Content Column */}
                <div className="w-[55%] flex flex-col justify-center max-w-2xl">
                    <p className="text-xl leading-relaxed text-zinc-300 font-light">
                        I am a {' '}
                        <span className="font-bold italic bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                            Software Developer and Engineer
                        </span> {' '}
                        with a B.S. in Computer Science and a professional background in {' '}
                        <span className="font-bold italic bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                            graphic design and animation
                        </span>.
                    </p>

                    <p className="text-xl leading-relaxed text-zinc-300 font-light mt-6">
                        Driven by a passion for {' '}
                        <span className="font-bold italic bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                            front-end dev, data engineering, AI, and motion graphics
                        </span>, {' '}
                        I combine technical power with visual precision. I am a {' '}
                        <span className="font-bold italic bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">
                            self-starter and collaborative team player
                        </span> {' '}
                        dedicated to building great products that turn complex data into seamless, high-performance digital experiences.
                    </p>
                </div>
            </div>
        </section>
    );
}