import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MePhoto from "../shared/MePhoto.jsx";
import Modal from "../modals/Modal.jsx";
import AboutMeModal from "../modals/AboutMeModal.jsx";

export default function MeCard() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={() => setOpen(true)}
        className="group relative w-full h-full rounded-3xl overflow-hidden glass breathe min-h-[340px] flex flex-col items-center justify-center"
      >
        <div
          className="absolute -top-8 -right-8 h-32 w-32 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: "var(--color-basesita-purple)" }}
        />
        <div
          className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
          }}
        />

        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[22px] blur-xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-basesita-purple), var(--color-basesita-light-purple))",
              }}
            />
            <div className="absolute -inset-1 rounded-[18px] border border-primary/20 pointer-events-none" />
            <div className="relative rounded-[14px] p-1.5 bg-gradient-to-br from-primary/20 via-border to-secondary/15 shadow-lg">
              <MePhoto className="w-36 h-36 md:w-44 md:h-44 rounded-[10px] border-0" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 px-4">
            <p className="font-heading text-2xl font-bold text-foreground">
              {t("about.meName")}
            </p>
            <p className="text-xs text-muted-foreground text-center leading-snug max-w-[26ch]">
              {t("about.meHint")}
            </p>
          </div>
        </div>
      </motion.button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <AboutMeModal />
      </Modal>
    </>
  );
}
