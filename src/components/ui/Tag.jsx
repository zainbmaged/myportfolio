function Tag({ children, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
    ghost:
      "bg-[var(--primary)]/10 text-[var(--primary-dark)] hover:bg-[var(--primary)]/20 border border-[var(--primary)]/20",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        transition-all duration-300 hover:-translate-y-0.5
        ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
export default Tag;
