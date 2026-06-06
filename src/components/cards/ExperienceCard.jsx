import { motion } from "framer-motion";

export default function ExperienceCard({ experience, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 border-l border-border"
    >
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary" />
      <span className="text-xs text-muted-foreground">{experience.period}</span>
      <h3 className="text-lg font-semibold mt-1">{experience.role}</h3>
      <p className="text-sm text-primary font-medium">{experience.company}</p>
      <p className="text-sm text-muted-foreground mt-2">{experience.description}</p>
    </motion.div>
  );
}
