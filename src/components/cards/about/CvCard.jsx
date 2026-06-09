import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import DownloadButton from "../../shared/buttons/DownloadButton.jsx";
import TiltedFrame from "../../shared/TiltedFrame.jsx";

export default function CvCard({ title, description, onOpen, resumeURL }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[225px] md:min-h-[350px]"
    >
      <div>
        <TiltedFrame onClick={onOpen}>
          <img
            src="assets/cv.jpg"
            alt="Vista de cabecera de CV"
            className="w-full h-full object-cover object-top"
          />
        </TiltedFrame>

        <p className="text-sm font-semibold mb-1">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {resumeURL && (
        <DownloadButton btnText={t("about.cv")} href={resumeURL} download="cv-rodriguezcastro-ramiro.pdf" />
      )}

    </motion.div>
  );
}
