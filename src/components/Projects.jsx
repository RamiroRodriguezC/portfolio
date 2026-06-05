import { useTranslation } from "react-i18next";
import Section from "./Section.jsx";
import { ProjectCard } from "./Card.jsx";

export default function Projects() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true });

  return (
    <Section id="projects" subtitle={t("projects.subtitle")} title={t("projects.title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto mt-8">
        {items.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
