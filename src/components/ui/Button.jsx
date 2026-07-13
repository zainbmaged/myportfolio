import { useRef } from "react";
import { motion } from "framer-motion";

// props like variant are parameters passed to the component; children is the
// special prop representing whatever's nested between the opening/closing tags
function Button({ children, href, variant = "primary", onClick, type }) {
  const ref = useRef(null);

  const baseStyle =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium overflow-hidden transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]";

  const variants = {
    primary:
      "text-white bg-[var(--primary)] shadow-lg shadow-[var(--ring)] hover:bg-[var(--primary-hover)]",
    outline:
      "border-2 border-[var(--primary)] text-[var(--primary)] hover:text-white",
  };

  // subtle magnetic pull toward the cursor
  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
  }
  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyle} ${variants[variant]}`}
      style={{ transition: "transform 0.15s ease-out, background-color 0.3s, color 0.3s" }}
    >
      {variant === "outline" && (
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        download={href.endsWith(".pdf") ? true : undefined}
        target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className="group inline-block">
      {content}
    </button>
  );
}

export default Button;