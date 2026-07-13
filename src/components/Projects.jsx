import Card from "./ui/Card.jsx";
import Tag from "./ui/Tag.jsx";
import Section from "./ui/Section.jsx";
import SectionTitle from "./ui/SectionTitle.jsx";
import projects from "../data/projects.js";
import Button from "./ui/Button.jsx";

function Projects(){

    return(
        <Section id="projects" className="bg-[var(--surface)] py-24">

            
            <SectionTitle
            title = "My Projects"
            subtitle = "A showcase of my work and contributions."
            />
           
<div className="flex flex-col gap-10">


            {projects.map((project) => (
                
                <Card key={project.title}>
                    
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center justify-between p-8">

                    {/* Left Side */}
                     <div>
                        <h3 className="text-2xl font-bold text-[var(--text)]">
                        {project.title}
                        </h3>

                        <p className="mt-4 text-[var(--text-secondary)]">
                        {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                        {project.technologies.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                        ))}
                        </div>

                        <div className="flex gap-4 mt-6">
                       

                        <Button href={project.demo} variant="primary">
                            Live Demo
                        </Button>
                        </div>
                    </div>

                    
                   
                        {/* Right Side */}
                    <div className="flex justify-center">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-[var(--white)] transition-transform duration-300 group-hover:-translate-y-1"
                        >
                            {/* browser chrome title bar */}
                            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-black/5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            </div>

                            {/* the actual screenshot */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </a>
                    </div>

                </div>
                </Card>
                ))}
                    
</div>
             
        </Section>

    );
}
export default Projects;