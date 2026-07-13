import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "../assets/zainb.jpg";
import Button from "./ui/Button.jsx";
import Section from "./ui/Section.jsx";
import NeuralField from "./ui/NeuralField.jsx";
import contact from "../data/contact.js";
const ROLES = [
  "Full-Stack AI Engineer",
  "AI & Datascience Researcher",
  "Building AI products end-to-end",
];

function useCyclingText(words, interval = 2600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return words[i];
}

function Hero() {
  const role = useCyclingText(ROLES);

  return (
    <Section id="hero" className="bg-[var(--background)] pt-28 pb-24 md:pt-32">
      {/* signature: quiet neural network drifting behind the hero */}
      <NeuralField
        className="absolute inset-0 w-full h-full opacity-70"
        color="23,31,41"
      />
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[var(--primary)]/20 animate-blob animate-float blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-lg text-[var(--primary-dark)] font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Hi, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text)] mt-2 font-display">
            Zainb <span className="text-gradient">Zahran</span>
          </h1>

          <div className="h-9 mt-4">
            <motion.h2
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-[var(--text)]"
            >
              {role}
            </motion.h2>
          </div>

          <p className="text-lg text-gray-600 mt-6 leading-8 max-w-xl">
            I help businesses transform ideas into production-ready AI applications
            by managing the entire development lifecycle—from intuitive frontend
            experiences and secure backend systems to AI integration, databases,
            APIs, and deployment.
          </p>

          <p className="text-gray-500 mt-4">
            I'm also a Teaching Assistant and currently pursuing my Master's in AI &
            Data Science at Queen's University.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={contact.cv} variant="outline">
              Download CV
            </Button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[var(--primary)]/30 blur-2xl scale-110 animate-float" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] shadow-2xl flex items-center justify-center p-2 animate-float">
              <img
                src={profile}
                alt="Zainb Zahran"
                className="w-full h-full rounded-full object-cover border-4 border-white/70"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="relative z-10 mt-16 flex flex-col items-center gap-2 mx-auto w-fit text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={18} />
      </motion.a>
    </Section>
  );
}
export default Hero;
