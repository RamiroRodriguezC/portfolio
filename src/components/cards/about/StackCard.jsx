import { motion } from "framer-motion";
import stackData from "../../../data/stack.json";

const COLORS = [
  "from-cyan-500 to-blue-500",
  "from-yellow-400 to-orange-500",
  "from-sky-400 to-cyan-500",
  "from-purple-500 to-pink-500",
];

export default function StackCard({ title, onOpen, className = "" }) {
  const visibleSkills = stackData.slice(0, 4);
  const hiddenCount = stackData.length - visibleSkills.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`bg-card border border-border rounded-2xl p-5 ${className}`}
    >
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill, index) => (
          <span
            key={skill.name}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-br ${COLORS[index % COLORS.length]} text-white`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-4 h-4"
            />
            {skill.name}
          </span>
        ))}
        {hiddenCount > 0 && (
          <button
            onClick={onOpen}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground hover:bg-muted-foreground/20 transition-colors"
          >
            +{hiddenCount}
          </button>
        )}
      </div>
    </motion.div>
  );
}
