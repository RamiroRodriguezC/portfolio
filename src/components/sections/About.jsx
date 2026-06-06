import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Section from "../layout/Section.jsx";
import Modal from "../modals/Modal.jsx";
import AboutMeModal from "../modals/AboutMeModal.jsx";
import TechStackModal from "../modals/TechStackModal.jsx";

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

export default function About() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(null);

  const skills = t("skills", { returnObjects: true });
  const visibleSkills = skills.slice(0, 4);
  const hiddenCount = skills.length - visibleSkills.length;

  return (
    <Section id="about" subtitle={t("about.subtitle")} title={t("about.title")}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* — ME — grande izquierda — 6 cols */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onClick={() => setModal("me")}
          className="md:col-span-6 bg-card border border-border rounded-2xl p-6 text-left hover:border-primary/40 transition-colors flex flex-col items-center justify-center gap-4 min-h-[350px] md:min-h-[500px]"
        >
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">{t("about.clickMe")}</p>
        </motion.button>

        {/* — CONTENEDOR DERECHO — apilado, 6 cols con sub-grid */}
        <div className="md:col-span-6 grid grid-cols-1 gap-6">
          {/* — STATUS — chica horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <div>
              <p className="text-sm font-medium">{t("about.status.title")}</p>
              <p className="text-xs text-muted-foreground">{t("about.status.available")}</p>
            </div>
          </motion.div>

          {/* — TECH STACK — mediana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="text-sm font-semibold mb-3">{t("about.techStack.title")}</h3>
            <div className="flex flex-wrap gap-2">
              {visibleSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-br ${COLORS[i % COLORS.length]} text-white`}
                >
                  <span className="w-4 h-4 rounded bg-white/20 flex items-center justify-center text-[10px] font-bold">
                    {skill.charAt(0)}
                  </span>
                  {skill}
                </span>
              ))}
              {hiddenCount > 0 && (
                <button
                  onClick={() => setModal("tech")}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground hover:bg-muted-foreground/20 transition-colors"
                >
                  +{hiddenCount}
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* — CV — vertical, 4 cols, acoplada a la altura de su compañera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold mb-1">{t("about.cvTitle")}</p>
            <p className="text-xs text-muted-foreground">{t("about.cvDescription")}</p>
          </div>
          <button className="w-full px-4 py-2.5 text-xs font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            {t("about.cv")}
          </button>
        </motion.div>

        {/* — CURRENT PROJECT — grande derecha — 8 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="md:col-span-8 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
        >
          <h3 className="text-sm font-semibold mb-2">{t("about.currentProject.title")}</h3>
          <p className="text-sm text-muted-foreground mb-2">{t("about.currentProject.name")}</p>
          <p className="text-xs text-muted-foreground">{t("about.currentProject.description")}</p>
        </motion.div>
      </div>

      <Modal open={modal === "me"} onClose={() => setModal(null)}>
        <AboutMeModal />
      </Modal>

      <Modal open={modal === "tech"} onClose={() => setModal(null)}>
        <TechStackModal />
      </Modal>
    </Section>
  );
}
