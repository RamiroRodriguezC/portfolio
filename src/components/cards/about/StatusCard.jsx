import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const STATUS_STYLES = {
  Open: {
    dot: "bg-green-500",
    ring: "bg-green-400",
    animate: "animate-ping",
  },
  WorkingButOpen: {
    dot: "bg-amber-500",
    ring: "bg-amber-400",
    animate: "animate-pulse",
  },
  Working: {
    dot: "bg-slate-500",
    ring: "bg-slate-400",
    animate: "",
  },
};

export default function StatusCard({ title, status }) {
  const { t } = useTranslation();
  const style = STATUS_STYLES[status];

  if (!style) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3"
    >
      <span className="relative flex h-3 w-3">
        {style.animate && (
          <span className={`${style.animate} absolute inline-flex h-full w-full rounded-full ${style.ring} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${style.dot}`} />
      </span>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{t(`about.status.${status}`)}</p>
      </div>
    </motion.div>
  );
}
