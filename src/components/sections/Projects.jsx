import { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../layout/Section.jsx";
import ProjectCard from "../cards/ProjectCard.jsx";
import Modal from "../modals/Modal.jsx";
import ProjectModal from "../modals/ProjectModal.jsx";
import projectsData from "../../data/projects.json";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" subtitle={t("projects.subtitle")} title={t("projects.title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.id || i}
            project={project}
            index={i}
            onOpenMore={setSelectedProject}
          />
        ))}
      </div>

      <Modal open={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </Section>
  );
}
