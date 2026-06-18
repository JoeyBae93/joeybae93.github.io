import Hero from "@/sections/hero";
import AboutMe from "@/sections/aboutMe";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Experiences from "@/sections/experiences";
import Contact from "@/sections/contact";

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Experiences />
            <Contact />
        </div>
    );
}
