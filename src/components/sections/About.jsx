import { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../layout/Section.jsx";
import Modal from "../modals/Modal.jsx";
import AboutMeModal from "../modals/AboutMeModal.jsx";
import TechStackModal from "../modals/TechStackModal.jsx";
import MeCard from "../cards/about/MeCard.jsx";
import StatusCard from "../cards/about/StatusCard.jsx";
import StackCard from "../cards/about/StackCard.jsx";
import CvCard from "../cards/about/CvCard.jsx";
import CurrentProjectCard from "../cards/about/CurrentProjectCard.jsx";

export default function About() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(null);

  const skills = t("skills", { returnObjects: true });
  const visibleSkills = skills.slice(0, 4);
  const hiddenCount = skills.length - visibleSkills.length;

  return (
    <Section id="about" subtitle={t("about.subtitle")} title={t("about.title")}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <MeCard onOpen={() => setModal("me")} buttonText={t("about.clickMe")} />

        <div className="md:col-span-6 grid grid-cols-1 gap-6">
          <StatusCard title={t("about.status.title")} subtitle={t("about.status.available")} />

          <StackCard
            title={t("about.techStack.title")}
            skills={visibleSkills}
            hiddenCount={hiddenCount}
            onOpen={() => setModal("tech")}
          />
        </div>

        <CvCard title={t("about.cvTitle")} description={t("about.cvDescription")} actionLabel={t("about.cv")} />

        <CurrentProjectCard
          title={t("about.currentProject.title")}
          projectName={t("about.currentProject.name")}
          description={t("about.currentProject.description")}
        />
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
