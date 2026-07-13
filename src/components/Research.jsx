
import Card from "./ui/Card.jsx";
import Tag from "./ui/Tag.jsx";
import Section from "./ui/Section.jsx";
import SectionTitle from "./ui/SectionTitle.jsx";
import research from "../data/research.js";
import Button from "./ui/Button.jsx";

function Research (){

    return(

         <Section id="research" className="bg-[var(--background)] py-24">
            
            <SectionTitle
            title = "My Research"
            subtitle = "On Going research papers"
            />
       

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    
        {research.map((category) => (
            <Card
                key={category.title}
                className="h-full"
            >
                <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--text)]">
               <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 text-[var(--primary-dark)] pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 90 Q 60 80, 100 60 T 200 40 T 300 25 T 400 5" stroke="currentColor" strokeWidth="4" fill="none"/>
</svg>
<svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 text-[var(--primary)] pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 90 Q 60 80, 100 60 T 200 40 T 300 25 T 400 5" stroke="currentColor" strokeWidth="3" fill="none"/>
</svg>
                    {category.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-6">
                    {category.topics.map((tech) => (
                        <Tag key={tech}>
                            {tech}
                        </Tag>
                    ))}
                </div>
            </Card>
        ))}
        </div>
         </Section>



    );
};

export default Research;