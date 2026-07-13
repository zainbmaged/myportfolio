import { motion } from "framer-motion";

// grid vs flex - grid is used to create a two d layout for the story and highlights
// sections while flex is used to create a flexible 1d layout for the navbar and hero
function SectionTitle({ title, subtitle, align = "left", eyebrow }) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      className={`mb-14 flex flex-col ${alignment[align]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-dark)]">
          <span className="h-px w-6 bg-[var(--primary)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] font-display">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-[var(--text-secondary)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
export default SectionTitle;
