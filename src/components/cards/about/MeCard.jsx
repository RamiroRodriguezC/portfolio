import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MePhoto from "../../shared/MePhoto.jsx";

export default function MeCard({ onOpen }) {
  const { t } = useTranslation();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onOpen}
      className="md:col-span-6 bg-card border border-border rounded-2xl px-6 pb-6 pt-6 text-left hover:border-primary/40 transition-colors flex flex-col items-center justify-center gap-5 min-h-[350px] md:min-h-[500px]"
    >
      <MePhoto />

      <div className="flex flex-col items-center gap-1 px-4">
        <p className="text-base font-semibold text-foreground">
          {t("about.meName")}
        </p>
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          {t("about.meHint")}
        </p>
      </div>
    </motion.button>
  );
}
