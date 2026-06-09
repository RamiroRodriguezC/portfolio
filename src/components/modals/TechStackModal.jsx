import { motion } from "framer-motion";
import StackData from "../../data/stack.json";
import { useTranslation } from "react-i18next";

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

export default function TechStackModal() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-lg font-bold mb-4">{t("about.techStack.title")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {StackData.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} text-white shadow-md hover:shadow-xl`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 rounded-lg bg-white/20 p-1.5 object-contain"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
