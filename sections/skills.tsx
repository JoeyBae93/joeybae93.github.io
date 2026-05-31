import Image from "next/image";

const skills = [
    { src: "/image/python_logo.png", alt: "Python Logo" },
    { src: "/image/c++_logo.png", alt: "C++ Logo" },
    { src: "/image/js_logo.jpg", alt: "JS Logo" },
    { src: "/image/nextjs_logo.png", alt: "NextJS Logo", whiteLogo: true },
    { src: "/image/reactjs_logo.png", alt: "React Logo" },
    { src: "/image/typescript_logo.png", alt: "TypeScript Logo" },
    { src: "/image/tailwindcss_logo.png", alt: "TailwindCSS Logo" },
    { src: "/image/php_logo.png", alt: "PHP Logo" },
    { src: "/image/r_logo.png", alt: "R Logo" },
    { src: "/image/mysql_logo.png", alt: "MySQL Logo" },
    { src: "/image/pytorch_logo.png", alt: "Pytorch Logo" },
    { src: "/image/pyspark_logo.png", alt: "Pyspark Logo", whiteLogo: true },
    { src: "/image/tableau_logo.png", alt: "Tableau Logo" },
    { src: "/image/databricks_logo.png", alt: "Databricks Logo", whiteLogo: true },
    { src: "/image/docker_logo.png", alt: "Docker Logo" },
    { src: "/image/github_logo.png", alt: "Git Logo", whiteLogo: true },
];

export default function Skills() {
    return (
        <main className="w-full flex flex-col items-center pt-36">
            <div className="w-3/4">
                <h2 id="skills" className="text-4xl font-bold mb-12">I am <span className="bg-linear-to-r from-[#A1FFCE] to-[#FAFFD1] bg-clip-text text-transparent">Skilled</span> With...</h2>
            </div>
            <div className="w-3/4 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 place-items-center">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image 
                            src={skill.src} 
                            width={80} 
                            height={80} 
                            alt={skill.alt}
                            sizes="(max-width: 768px) 25vw, 15vw"
                            className={`object-contain transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer ${
                                skill.whiteLogo ? "brightness-0 invert" : ""
                            }`}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}