import chatbotImg from "../assets/queenme.png"; // (leave your existing imports as-is)
import {
  Code2,
  Server,
  BrainCircuit,
  Sparkles,
  Cloud,
  GitBranch,
  Wrench,
  Terminal,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5"],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: ["Django", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: BrainCircuit,
    technologies: ["Numpy and Pandas", "Torch", "TensorFlow", "Scikit-learn", "Matplotlib and Seaborn"],
  },
  {
    title: "AI & Data Science",
    icon: Sparkles,
    technologies: [" (NLP)","Fine Tuning"," RAG based chatbot", "Reinforcement Learning", "Large Language Models (LLMs)", "Data Analysis "],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    technologies: ["AWS", "Docker", "(CI/CD) Pipelines", "Cloud Deployment", "IAC / Terraform","Spark / Py spark"],
  },
  {
    title: "Version Control & Collaboration",
    icon: GitBranch,
    technologies: ["Git", "GitHub", "GitHub projects", "Agile Methodologies", "Team Collaboration"],
  },
  {
    title: "Additional Skills",
    icon: Wrench,
    technologies: ["Problem Solving", "Critical Thinking", "Communication", "Leadership"],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    technologies: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "Java"],
  },
];

export default skills;