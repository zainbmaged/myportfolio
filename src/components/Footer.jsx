import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import contact from "../data/contact";

function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Zainb Zahran. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#hero"
            className="flex items-center gap-1 text-sm hover:text-[var(--primary)] transition-colors duration-300"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
