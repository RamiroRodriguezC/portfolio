import { motion } from "framer-motion";

export default function TiltedFrame({ children, onClick, className = "" }) {
  const isClickable = typeof onClick === "function";

  return (
    <div
      onClick={onClick}
      className={`w-full aspect-video overflow-hidden rounded-xl bg-[#18181b] border border-white/5 relative flex justify-center cursor-${isClickable ? "pointer" : "default"} group ${className}`}
    >
      <motion.div
        style={{
          transform: "rotateX(12deg) rotateZ(4deg) translateY(16px)",
          transformOrigin: "top",
        }}
        whileHover={{
          transform: "rotateX(12deg) rotateZ(4deg) translateY(0px)",
        }}
        whileTap={isClickable ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="w-[85%] h-[200%] mt-4 overflow-hidden rounded-t-lg border border-white/10 shadow-2xl transition-colors duration-300 group-hover:border-white/20"
      >
        {children}
      </motion.div>
    </div>
  );
}
