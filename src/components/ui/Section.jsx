import { motion } from "framer-motion";

function Section({ id, className = "", containerClassName = " ", children }) {
  return (
    <motion.section
      id={id}
      className={`relative py-24 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-8 ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
export default Section;
