

import chatbotImg from "../assets/queenme.png";
import learnyfyImg from "../assets/LearnFY.png";
import courseconnectImg from "../assets/CourseConnect.png";
import mentorhubImg from "../assets/mentorhub.png";

const projects = [
{
    title: " AI-Powered Chatbot",
    description: "An AI-powered chatbot using Cohere's API, enabling natural language understanding and accurate answering of universitly related questions, by using RAG (Retrieval-Augmented Generation) techniques to provide relevant and context-aware responses.",
    technologies: ["Cohere","RAG","Chroma DB", "Python", "Flask","React","Typescript", "HTML", "TailwindCSS"],
    github:"https://github.com/zainbmaged/QueenMe",
    demo: "https://youtu.be/GNWS7k-Q_IE",
    image: chatbotImg
},{

    title: " LearnyFy",
    description: "An educational AI-powered web platform designed to assist users in identifying study roadmaps using cohere LLM , finding study material and receiving courses, books and youtube videorecommendations based on their interests. The platform also provide an interactive community.",
    technologies: ["Cohere", "Python", "Django","React", "HTML","MongoDB"],
    github: "https://github.com/yourusername/learnyfy",
    demo: "https://youtu.be/2Cd0G4yKLdk",
    image: learnyfyImg
},{
     title: "Course Connect",
    description: "AI powered website to recommend online courses, using traditional Ml techinques like randomforest classfier reaching an accuray of 95% providing users with personalized course recommendations",
    technologies: ["Scikit-learn", "Python", "Django", "HTML","CSS", "Bootstrap","javascript"],
    
    demo: "https://www.youtube.com/watch?v=7AgINNSgSl4",
    image: courseconnectImg
},{

    title:"Mentorhub",
    description: "A Multi -role web application that connects students with mentors for guidance and support. Students can browse mentor profiles, schedule sessions, each mentor and student has profile and rating and review system to ensure quality mentorship. The platform also provides an admin dashboard that allows administrators to manage users and content. No demo  due to NDA",
    technologies: ["Python", "Django", "HTML","TailwindCSS", "React","TypeScript","PostgreSQL","github workflows"],
 
    image: mentorhubImg
}

];
export default projects;