import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      const sections = ["hero", ...LINKS.map((l) => l.href.slice(1))];
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
     className={`sticky top-4 z-50 mx-4 md:mx-auto md:max-w-5xl rounded-2xl transition-all duration-300 border border-white/40 shadow-lg
  ${scrolled ? "bg-[var(--surface)]/95 py-2" : "bg-[var(--surface)]/80 py-3"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
       

        <ul className="hidden md:flex gap-8 text-[var(--text)]">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  active === link.href.slice(1)
                    ? "text-[var(--primary)]"
                    : "hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
              </a>
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--primary)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[var(--text)]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden glass mx-4 mt-3 rounded-2xl flex flex-col text-[var(--text)]"
          >
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-black/5 last:border-none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="h-0.5 w-full bg-transparent">
        <div
          className="h-0.5 bg-[var(--primary)] transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
export default Navbar;
