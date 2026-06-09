import { motion } from "framer-motion";

export default function MoreCard({ onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full bg-card border border-border rounded-2xl flex flex-col items-center justify-center py-4 hover:border-primary/40 transition-colors cursor-pointer min-h-[160px]"
    >
      <span className="w-28 h-28 flex items-center justify-center text-6xl font-bold text-muted-foreground">+</span>
      <span className="text-xl font-semibold text-muted-foreground mt-1">More</span>
    </motion.button>
  );
}
