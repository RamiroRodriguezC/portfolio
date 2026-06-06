import { motion } from "framer-motion";

export default function SkillCard({ name, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-full hover:border-primary/40 transition-colors"
    >
      {name}
    </motion.span>
  );
}
