import { motion } from "framer-motion";
import stackData from "../../../data/stack.json";

const COLORS = [
  "from-cyan-500 to-blue-500",
  "from-yellow-400 to-orange-500",
  "from-sky-400 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-red-500 to-pink-500",
  "from-violet-500 to-purple-500",
  "from-blue-500 to-indigo-500",
];

export default function StackCard({ title, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`bg-card border border-border rounded-2xl p-5 ${className}`}
    >
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {stackData.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex items-center gap-2 w-full p-3 rounded-lg bg-gradient-to-br ${COLORS[index % COLORS.length]} text-white shadow-sm hover:shadow-lg`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 h-5 shrink-0"
            />
            <span className="text-sm font-medium truncate">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
