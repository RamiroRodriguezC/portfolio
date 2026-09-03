import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import MeCard from "../bento/MeCard";
import StatusCard from "../bento/StatusCard";
import SocialCards from "../bento/SocialCards";
import CvCard from "../bento/CvCard";
import SkillsCard from "../bento/SkillsCard";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold leading-none">
            <Trans
              i18nKey="about.sectionTitle"
              components={{ 1: <span className="text-shimmer" /> }}
            />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            {t("about.sectionSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4">
          <div className="md:col-span-2 md:row-span-2 min-h-[340px]">
            <MeCard />
          </div>
          <div className="md:col-span-4">
            <StatusCard />
          </div>
          <div className="md:col-span-4">
            <SkillsCard />
          </div>
          <div className="md:col-span-3 min-h-[120px]">
            <SocialCards />
          </div>
          <div className="md:col-span-3 min-h-[210px]">
            <CvCard />
          </div>
        </div>
      </div>
    </section>
  );
}
