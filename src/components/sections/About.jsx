import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePortfolioData } from "../../context/PortfolioDataContext.jsx";
import Section from "../layout/Section.jsx";
import Modal from "../modals/Modal.jsx";
import AboutMeModal from "../modals/AboutMeModal.jsx";
import TechStackModal from "../modals/TechStackModal.jsx";
import CvModal from "../modals/CvModal.jsx";
import SocialLinksModal from "../modals/SocialLinksModal.jsx";
import MeCard from "../cards/about/MeCard.jsx";
import StatusCard from "../cards/about/StatusCard.jsx";
import SocialMediaCard from "../cards/about/SocialMediaCard.jsx";
import StackCard from "../cards/about/StackCard.jsx";
import CvCard from "../cards/about/CvCard.jsx";
import DownloadButton from "../shared/buttons/DownloadButton.jsx";

export default function About() {
  const { t } = useTranslation();
  const { data } = usePortfolioData();
  const [modal, setModal] = useState(null);

  const employmentStatus = data?.employmentStatus;
  const resumeURL = data?.resumeURL;

  return (
    <Section id="about" subtitle={t("about.subtitle")} title={t("about.title")}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <MeCard onOpen={() => setModal("me")} buttonText={t("about.clickMe")} />

        <div className="md:col-span-6 grid grid-cols-1 gap-6">
          {employmentStatus && (
            <StatusCard status={employmentStatus} />
          )}

          <SocialMediaCard onOpenMore={() => setModal("social")} />
        </div>

        <CvCard 
          title={t("about.cvTitle")} 
          description={t("about.cvDescription")} 
          onOpen={() => setModal("cv")}
          resumeURL={resumeURL}
         />

        <StackCard
          title={t("about.techStack.title")}
          className="md:col-span-8"
        />
      </div>

      <Modal open={modal === "me"} onClose={() => setModal(null)}>
        <AboutMeModal />
      </Modal>

      <Modal open={modal === "cv"} onClose={() => setModal(null)} is3D={true} 
        actionButton={
          resumeURL ? (
            <DownloadButton btnText={t("about.cv")} href={resumeURL} download="cv-rodriguezcastro-ramiro.pdf" />
          ) : null
        }>
        <CvModal />
      </Modal>

      <Modal open={modal === "tech"} onClose={() => setModal(null)}>
        <TechStackModal />
      </Modal>

      <Modal open={modal === "social"} onClose={() => setModal(null)}>
        <SocialLinksModal />
      </Modal>
    </Section>
  );
}
