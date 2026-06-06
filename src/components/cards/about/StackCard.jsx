import { motion } from "framer-motion";

const COLORS = [
  "from-cyan-500 to-blue-500",
  "from-yellow-400 to-orange-500",
  "from-sky-400 to-cyan-500",
  "from-purple-500 to-pink-500",
];

export default function StackCard({ title, skills, onOpen, hiddenCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-5"
    >
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-br ${COLORS[index % COLORS.length]} text-white`}
          >
            <span className="w-4 h-4 rounded bg-white/20 flex items-center justify-center text-[10px] font-bold">
              {skill.charAt(0)}
            </span>
            {skill}
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
