import { useRef } from "react";
import { motion } from "framer-motion";

function Card({ children, className = "", tilt = true }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  }
  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`
        rounded-2xl
        bg-white/90
        backdrop-blur-sm
        shadow-md
        p-6
        border border-white/60
        transition-shadow
        duration-300
        hover:shadow-2xl
        hover:shadow-[var(--ring)]
        text-[var(--text)]
        will-change-transform
        ${className}
      `}
      style={{ transition: "transform 0.25s ease-out, box-shadow 0.3s" }}
    >
      {children}
    </motion.div>
  );
}
export default Card;
