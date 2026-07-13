
import Card from "./ui/Card.jsx";
import Tag from "./ui/Tag.jsx";
import Section from "./ui/Section.jsx";
import SectionTitle from "./ui/SectionTitle.jsx";
import skills from "../data/skills";

function Skills(){

    return(


<Section id="skills">
    <SectionTitle
        title="Skills"
        subtitle="My technical expertise and capabilities."
    />

<svg className="absolute top-8 left-0 w-40 h-40 text-[var(--primary)]/25 pointer-events-none" viewBox="0 0 160 160" fill="none" aria-hidden="true">
  <path d="M0 40 H60 V0" stroke="currentColor" strokeWidth="2"/>
  <circle cx="60" cy="40" r="4" fill="currentColor"/>
  <path d="M0 90 H30 V160" stroke="currentColor" strokeWidth="2"/>
  <circle cx="30" cy="90" r="4" fill="currentColor"/>
</svg>
<svg className="absolute top-8 right-0 scale-x-[-1] w-40 h-40 text-[var(--primary)]/25 pointer-events-none" viewBox="0 0 160 160" fill="none" aria-hidden="true">
  <path d="M0 40 H60 V0" stroke="currentColor" strokeWidth="2"/>
  <circle cx="60" cy="40" r="4" fill="currentColor"/>
  <path d="M0 90 H30 V160" stroke="currentColor" strokeWidth="2"/>
  <circle cx="30" cy="90" r="4" fill="currentColor"/>
</svg>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
  {skills.map((category) => (
    <div key={category.title} className="flip-card h-56">
      <div className="flip-inner relative w-full h-full">

        {/* FRONT */}
      <div className="flip-face absolute inset-0 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/60 shadow-md flex flex-col items-center justify-center gap-3 text-center p-6">
        <category.icon size={40} className="text-[var(--primary)]" strokeWidth={1.75} />
        <h3 className="text-xl font-bold text-[var(--text)] font-display">
          {category.title}
        </h3>
      </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0 rounded-2xl bg-[var(--surface)] border border-white/60 shadow-md p-6 flex flex-wrap content-center gap-3 justify-center">
          {category.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>
</Section>

    );
}
export default Skills;