import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import stackData from "../../data/stack.json";

export default function SkillsCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-3xl p-6 h-full flex flex-col breathe"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-xl font-bold">
          {t("about.techStack.title")}
        </h3>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          {stackData.length} techs
        </span>
      </div>

      <div className="flex flex-wrap gap-2 overflow-y-auto pr-1 max-h-[200px] scroll-subtle">
        {stackData.map((s) => (
          <span
            key={s.name}
            className="inline-flex items-center gap-2 text-sm font-medium px-3.5 py-2 rounded-full glass border border-primary/15 hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <img src={s.icon} alt={s.name} className="w-4 h-4 shrink-0" />
            {s.name}
            <span className="text-xs font-mono text-primary/70">
              {s.category}
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
