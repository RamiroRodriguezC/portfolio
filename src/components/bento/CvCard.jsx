import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../../context/PortfolioDataContext.jsx";
import DownloadButton from "../shared/buttons/DownloadButton.jsx";
import Modal from "../modals/Modal.jsx";
import CvModal from "../modals/CvModal.jsx";

export default function CvCard() {
  const { t } = useTranslation();
  const { data } = usePortfolioData();
  const [open, setOpen] = useState(false);

  const resumeURL = data?.resumeURL;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group relative w-full rounded-3xl overflow-hidden glass breathe min-h-[210px] max-h-[700px] flex flex-col"
      >
        <div
          className="absolute -top-6 -right-6 h-28 w-28 rounded-full blur-3xl opacity-35 pointer-events-none"
          style={{ background: "var(--color-basesita-purple)" }}
        />
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        <div className="relative p-5 flex flex-col flex-1">
          <div
            className="relative h-44 mb-3 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-basesita-purple) 22%, transparent), color-mix(in srgb, var(--color-basesita-light-purple) 6%, transparent))",
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div
                className="absolute -top-8 -right-8 h-32 w-32 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: "var(--color-basesita-purple)" }}
              />
              <div
                className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: "var(--color-basesita-light-purple)" }}
              />
            </div>

            <div
              className="absolute inset-0 cursor-pointer"
              style={{ clipPath: "inset(-24px 0 0 0)" }}
              onClick={() => setOpen(true)}
            >
              <div className="absolute inset-x-4 top-0 h-[calc(100%+28px)] transition-transform duration-500 ease-out translate-y-2 group-hover:-translate-y-5">
                <div className="h-full w-full rounded-2xl overflow-hidden ring-1 ring-primary/25 shadow-xl rotate-[8deg] origin-top-left">
                  <img
                    src="assets/cv.jpg"
                    alt="Currículum"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="font-heading text-lg font-bold leading-tight">
            {t("about.cvTitle")}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-snug">
            {t("about.cvDescription")}
          </p>

          <div className="mt-auto pt-4">
            {resumeURL && (
              <DownloadButton
                btnText={t("about.cv")}
                href={resumeURL}
                download="cv-rodriguezcastro-ramiro.pdf"
              />
            )}
          </div>
        </div>
      </motion.div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        is3D={true}
        actionButton={
          resumeURL ? (
            <DownloadButton
              btnText={t("about.cv")}
              href={resumeURL}
              download="cv-rodriguezcastro-ramiro.pdf"
            />
          ) : null
        }
      >
        <CvModal />
      </Modal>
    </>
  );
}
