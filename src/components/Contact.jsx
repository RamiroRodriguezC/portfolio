import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Section from "./Section.jsx";

export default function Contact() {
  const { t } = useTranslation();

  const copyEmail = () => {
    navigator.clipboard.writeText("rami.dev@example.com");
  };

  return (
    <Section id="contact" subtitle={t("contact.subtitle")} title={t("contact.title")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-muted-foreground mb-8">{t("contact.description")}</p>
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          {t("contact.cta")}
        </button>
      </motion.div>
    </Section>
  );
}
