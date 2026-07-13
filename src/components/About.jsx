import Section from "./ui/Section.jsx";
import SectionTitle from "./ui/SectionTitle.jsx";
import Card from "./ui/Card.jsx";
import Button from "./ui/Button.jsx";
import { Cpu, Layers, Users, GraduationCap } from "lucide-react";

//grid vs flex - grid is used to create a two d layout for the story and highlights sections while flex is used to create a flexible in 1 d either column or row layout for the navbar and hero sections

function About(){
    return(
        <Section id ="about" className="bg-[var(--surface)] py-24">
            <div className="absolute inset-0 bg-blueprint pointer-events-none" aria-hidden="true" />
            <SectionTitle title="About Me" subtitle="Get to know me, my journey, and what drives me" />
        

        <div className="grid md:grid-cols-2 gap-12">
            <Card>
                <Cpu size={32} className="text-[var(--primary)] mb-3" />
                <SectionTitle title="AI Engineer" subtitle=" AI has fascinated me since my undergraduate years because it combines mathematics, programming, and creativity to solve real-world problems. My experience spans machine learning, deep learning, reinforcement learning, and LLM-powered applications. I enjoy building complete AI pipelines—from data preprocessing and model training to deployment in production." />
                <Button href="#projects" variant="primary">
                  See my Projects
                </Button>
            </Card>

            <Card>
                <Layers size={32} className="text-[var(--primary)] mb-3" />
                <SectionTitle title="Full Stack Developer" subtitle=" What is the value of an amazing AI system without shipping it to customers?Building an intelligent model is only part of the journey. I enjoy turning AI solutions into complete products by developing responsive frontends, secure backend APIs, databases, and cloud-ready deployments. All this to build applications that users can actually use not just prototypes"/>
                <Button href="#projects" variant="primary">
                  Watch my live Demos
                </Button>
            </Card>

            <Card>
                <Users size={32} className="text-[var(--primary)] mb-3" />
                <SectionTitle title="Undergrad Teaching" subtitle=" Working as a Teaching Assistant has strengthened both my technical knowledge and my communication skills. I enjoy simplifying complex AI concepts, mentoring students on their projects, and helping them gain confidence in solving real engineering problems." />
                <Button href="#research" variant="primary">
                  Experience as a TA
                </Button>
            </Card>

            <Card>
                <GraduationCap size={32} className="text-[var(--primary)] mb-3" />
                <SectionTitle title="Research & Masters" subtitle=" Pursuing a Master's in AI & Data Science at Queen's University has been a long-term goal. After years of preparation and continuous learning, I was awarded the Digillians Scholarship. The program has allowed me to deepen my expertise while contributing to research in modern AI." />
                <Button href="#research" variant="primary">
                  Education & Research
                </Button>
            </Card>

        </div>
        
        </Section>

    );
}
export default About;